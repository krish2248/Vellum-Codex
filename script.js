// ====== Vellum Codex - Main Script ======

// Storage helpers
function getStorageData(key, defaultValue) {
  try {
    var stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  } catch (e) {
    return defaultValue;
  }
}

function setStorageData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Get unique genres from books
function getUniqueGenres() {
  var genres = {};
  books.forEach(function(book) {
    genres[book.genre] = true;
  });
  return Object.keys(genres).sort();
}

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
  // Hide loader after animation
  var loader = document.getElementById('loader');
  if (loader) {
    setTimeout(function() {
      loader.classList.add('hidden');
    }, 3500);
  }
  
  // Initialize genre tabs
  initGenreTabs();
  
  // Render books
  renderBooks();
  
  // Render stats
  renderStats();
});

// Initialize genre filter tabs
function initGenreTabs() {
  var tabsContainer = document.getElementById('genreTabs');
  if (!tabsContainer) return;
  
  var genres = getUniqueGenres();
  var html = '<button class="genre-tab active" onclick="filterBooks(\'\')">All</button>';
  
  genres.forEach(function(genre) {
    html += '<button class="genre-tab" onclick="filterBooks(\'' + genre + '\')">' + genre + '</button>';
  });
  
  tabsContainer.innerHTML = html;
}

// Filter books by genre
window.filterBooks = function(genre) {
  // Update tab active state
  var tabs = document.querySelectorAll('.genre-tab');
  tabs.forEach(function(tab) {
    tab.classList.remove('active');
    if (tab.textContent === (genre || 'All')) {
      tab.classList.add('active');
    }
  });
  
  // Filter books
  if (!genre) {
    renderBooks(books);
  } else {
    var filtered = books.filter(function(b) { return b.genre === genre; });
    renderBooks(filtered);
  }
};

// Render books to grid
function renderBooks(bookList) {
  var grid = document.getElementById('bookGrid');
  if (!grid) return;
  
  bookList = bookList || books;
  grid.innerHTML = '';
  
  var readBooks = getStorageData('readBooks', {});
  
  bookList.forEach(function(book) {
    var card = document.createElement('div');
    card.className = 'book-card';
    card.onclick = function() {
      window.location.href = 'book.html?book=' + encodeURIComponent(book.title);
    };
    
    card.innerHTML = '<img src="' + book.image + '" alt="' + book.title + '"/><h3>' + book.title + '</h3><p class="author">' + book.author + '</p><span class="genre-tag">' + book.genre + '</span>';
    grid.appendChild(card);
  });
}

// Render stats dashboard
function renderStats() {
  var statsContainer = document.getElementById('statsContainer');
  if (!statsContainer) return;
  
  var readBooks = getStorageData('readBooks', {});
  var favorites = getStorageData('favorites', []);
  var currentReads = getStorageData('currentReads', []);
  
  var readCount = 0;
  books.forEach(function(book) {
    if (readBooks[book.title]) readCount++;
  });
  
  var totalBooks = books.length;
  var progress = Math.round((readCount / totalBooks) * 100);
  
  statsContainer.innerHTML = '<div class="stats"><div class="stat-item"><span class="stat-number">' + totalBooks + '</span><span class="stat-label">Total</span></div><div class="stat-item"><span class="stat-number">' + readCount + '</span><span class="stat-label">Read</span></div><div class="stat-item"><span class="stat-number">' + favorites.length + '</span><span class="stat-label">Favorites</span></div><div class="stat-item"><span class="stat-number">' + progress + '%</span><span class="stat-label">Progress</span></div></div>';
}

// Theme toggle
var toggleBtn = document.getElementById('toggleTheme');
if (toggleBtn) {
  toggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
  });
}

// Search
var searchBar = document.getElementById('searchBar');
if (searchBar) {
  searchBar.addEventListener('input', function(e) {
    var query = e.target.value.toLowerCase();
    var filtered = books.filter(function(book) {
      return book.title.toLowerCase().indexOf(query) !== -1 || book.author.toLowerCase().indexOf(query) !== -1;
    });
    renderBooks(filtered);
  });
}

// Sort
var sortBy = document.getElementById('sortBy');
if (sortBy) {
  sortBy.addEventListener('change', function(e) {
    var criteria = e.target.value;
    var sorted = books.slice();
    
    if (criteria === 'read') {
      sorted = sorted.filter(function(b) { return b.read; });
    } else if (criteria === 'unread') {
      sorted = sorted.filter(function(b) { return !b.read; });
    } else if (criteria === 'author') {
      sorted.sort(function(a, b) { return a.author.localeCompare(b.author); });
    }
    
    renderBooks(sorted);
  });
}

// Toggle read status
window.toggleRead = function(title) {
  var readBooks = getStorageData('readBooks', {});
  readBooks[title] = !readBooks[title];
  setStorageData('readBooks', readBooks);
  renderBooks();
  renderStats();
};

// Toggle favorite
window.toggleFavorite = function(title) {
  var favorites = getStorageData('favorites', []);
  var index = favorites.indexOf(title);
  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(title);
  }
  setStorageData('favorites', favorites);
  renderBooks();
  renderStats();
};

// Toggle current reading
window.toggleCurrent = function(title) {
  var currentReads = getStorageData('currentReads', []);
  var index = currentReads.indexOf(title);
  if (index > -1) {
    currentReads.splice(index, 1);
  } else {
    currentReads.push(title);
  }
  setStorageData('currentReads', currentReads);
  renderBooks();
};

// Recommendation search
window.searchRecommendations = function() {
  var input = document.getElementById('recSearchInput');
  if (!input) return;
  
  var query = input.value.toLowerCase();
  if (query.length < 2) return;
  
  var resultsContainer = document.getElementById('recResults');
  if (!resultsContainer) return;
  
  var matching = books.find(function(b) { return b.title.toLowerCase().indexOf(query) !== -1; });
  
  if (matching) {
    var similar = books.filter(function(b) {
      return b.title !== matching.title && (b.author === matching.author || b.genre === matching.genre);
    }).slice(0, 6);
    
    resultsContainer.innerHTML = '<div class="rec-section"><h4>You might also like:</h4><div class="rec-books">' + 
      similar.map(function(b) { return '<div class="rec-book"><img src="' + b.image + '"/><p>' + b.title + '</p><p>' + b.author + '</p></div>'; }).join('') + 
      '</div><a href="https://www.goodreads.com/search?q=' + encodeURIComponent(matching.title + ' ' + matching.author) + '" target="_blank" class="rec-goodreads">Find on Goodreads</a></div>';
  } else {
    resultsContainer.innerHTML = '<p>Book not found</p>';
  }
};