// ====== App Data (localStorage) =====
function getStorageData(key, defaultValue) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  } catch (e) {
    return defaultValue;
  }
}

function setStorageData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// ====== Global helpers for books.js =====
function getUniqueGenres() {
  const genres = new Set(books.map(book => book.genre));
  return Array.from(genres).sort();
}

function getGenre(author) {
  return 'Literary Fiction';
}

// ====== App Initialization ======
document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  
  setTimeout(() => {
    loader.classList.add('hidden');
  }, 3500);
  
  initGenreTabs();
  renderBooks();
  renderStats();
});

function initGenreTabs() {
  const tabsContainer = document.getElementById('genreTabs');
  if (!tabsContainer) return;
  
  const genres = getUniqueGenres();
  const genresWithAll = ['', ...genres];
  
  tabsContainer.innerHTML = genresWithAll.map((genre, index) => `
    <button class="genre-tab ${index === 0 ? 'active' : ''}" 
            onclick="filterByGenre('${genre}')">
      ${genre || 'All'}
    </button>
  `).join('');
}

window.filterByGenre = function(genre) {
  const tabs = document.querySelectorAll('.genre-tab');
  tabs.forEach(tab => {
    tab.classList.remove('active');
    if (tab.textContent === (genre || 'All')) {
      tab.classList.add('active');
    }
  });
  
  if (!genre) {
    renderBooks();
  } else {
    const filtered = books.filter(b => b.genre === genre);
    renderBooks(filtered);
  }
};

window.filterByGenre = filterByGenre;

// ====== Theme Toggle ======
const toggleBtn = document.getElementById('toggleTheme');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

// ====== Search ======
const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(query) ||
    book.author.toLowerCase().includes(query)
  );
  renderBooks(filteredBooks);
});

// ====== Sort ======
const sortBy = document.getElementById('sortBy');
sortBy.addEventListener('change', (e) => {
  const criteria = e.target.value;
  
  let sortedBooks = [...books];
  if (criteria === 'read') {
    sortedBooks = sortedBooks.filter(book => book.read);
  } else if (criteria === 'unread') {
    sortedBooks = sortedBooks.filter(book => !book.read);
  } else if (criteria === 'author') {
    sortedBooks.sort((a, b) => a.author.localeCompare(b.author));
  }
  
  renderBooks(sortedBooks);
});

// ====== Render Books ======
function renderBooks(filteredBooks = books) {
  const grid = document.getElementById('bookGrid');
  grid.innerHTML = '';
  
  const readBooks = getStorageData('readBooks', {});
  const favorites = getStorageData('favorites', []);
  const currentReads = getStorageData('currentReads', []);
  
  filteredBooks.forEach(book => {
    const card = document.createElement('div');
    card.classList.add('book-card');
    
    const isRead = readBooks[book.title] ?? book.read;
    const isFavorite = favorites.includes(book.title);
    const isCurrent = currentReads.includes(book.title);
    
    card.innerHTML = `
      <img src="${book.image}" alt="${book.title}" />
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Genre:</strong> ${book.genre}</p>
      <p><strong>Status:</strong> ${isRead ? 'Read' : 'Unread'}</p>
      <div class="book-card-actions">
        <button class="book-btn book-btn-read ${isRead ? 'read' : ''}" 
                onclick="toggleRead('${book.title}')">
          ${isRead ? 'Read' : 'Mark Read'}
        </button>
        <button class="book-btn book-btn-favorite ${isFavorite ? 'favorited' : ''}" 
                onclick="toggleFavorite('${book.title}')">
          ${isFavorite ? '♥' : '♡'}
        </button>
        <button class="book-btn book-btn-current ${isCurrent ? 'active' : ''}" 
                onclick="toggleCurrent('${book.title}')">
          ${isCurrent ? 'Reading' : 'Read Now'}
        </button>
      </div>
      <p><strong>Description:</strong> ${book.description}</p>
    `;
    grid.appendChild(card);
  });
}

// ====== Toggle Functions ======
window.toggleRead = function(title) {
  const readBooks = getStorageData('readBooks', {});
  readBooks[title] = !readBooks[title];
  setStorageData('readBooks', readBooks);
  renderBooks();
  renderStats();
};

window.toggleFavorite = function(title) {
  let favorites = getStorageData('favorites', []);
  if (favorites.includes(title)) {
    favorites = favorites.filter(t => t !== title);
  } else {
    favorites.push(title);
  }
  setStorageData('favorites', favorites);
  renderBooks();
  renderStats();
};

window.toggleCurrent = function(title) {
  let currentReads = getStorageData('currentReads', []);
  if (currentReads.includes(title)) {
    currentReads = currentReads.filter(t => t !== title);
  } else {
    currentReads.push(title);
  }
  setStorageData('currentReads', currentReads);
  renderBooks();
};

// ====== Stats Dashboard ======
function renderStats() {
  const statsContainer = document.getElementById('statsContainer');
  if (!statsContainer) return;
  
  const readBooks = getStorageData('readBooks', {});
  const favorites = getStorageData('favorites', []);
  const currentReads = getStorageData('currentReads', []);
  
  let readCount = 0;
  books.forEach(book => {
    if (readBooks[book.title] ?? book.read) readCount++;
  });
  
  const totalBooks = books.length;
  const progressPercent = Math.round((readCount / totalBooks) * 100);
  
  statsContainer.innerHTML = `
    <div class="stats">
      <div class="stat-item">
        <span class="stat-number">${totalBooks}</span>
        <span class="stat-label">Total Books</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">${readCount}</span>
        <span class="stat-label">Books Read</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">${favorites.length}</span>
        <span class="stat-label">Favorites</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">${currentReads.length}</span>
        <span class="stat-label">Currently Reading</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">${progressPercent}%</span>
        <span class="stat-label">Progress</span>
      </div>
    </div>
  `;
}

// ====== Recommendation Search ======
function searchRecommendations() {
  const input = document.getElementById('recSearchInput');
  if (!input) return;
  
  const query = input.value.toLowerCase();
  if (query.length < 2) return;
  
  const resultsContainer = document.getElementById('recResults');
  if (!resultsContainer) return;
  
  const matchingBook = books.find(b => b.title.toLowerCase().includes(query));
  
  if (matchingBook) {
    // Find similar books (same author OR same genre)
    const similar = books.filter(b => 
      b.title !== matchingBook.title &&
      (b.author === matchingBook.author || b.genre === matchingBook.genre)
    ).slice(0, 6);
    
    resultsContainer.innerHTML = `
      <div class="rec-section">
        <h4>You might also like:</h4>
        <div class="rec-books">
          ${similar.map(b => `
            <div class="rec-book">
              <img src="${b.image}" alt="${b.title}" />
              <p>${b.title}</p>
              <p class="rec-author">${b.author}</p>
              <p class="rec-genre">${b.genre}</p>
            </div>
          `).join('')}
        </div>
        <a href="https://www.goodreads.com/search?q=${encodeURIComponent(matchingBook.title + ' ' + matchingBook.author)}" 
           target="_blank" class="rec-goodreads">
          Find Similar on Goodreads
        </a>
      </div>
    `;
  } else {
    resultsContainer.innerHTML = '<p>No matching book found. Try a different title.</p>';
  }
}

window.searchRecommendations = searchRecommendations;