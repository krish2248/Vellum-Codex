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

// ====== App Initialization =====
document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  
  setTimeout(() => {
    loader.classList.add('hidden');
  }, 2500);
  
  loadBookDetails();
});

// ====== Load Book Details =====
function loadBookDetails() {
  const params = new URLSearchParams(window.location.search);
  const bookTitle = params.get('book');
  
  if (!bookTitle) {
    window.location.href = 'index.html';
    return;
  }
  
  const book = books.find(b => b.title.toLowerCase() === bookTitle.toLowerCase());
  
  if (!book) {
    document.getElementById('bookContent').innerHTML = '<p>Book not found.</p>';
    return;
  }
  
  renderBookPage(book);
}

// ====== Render Book Page =====
function renderBookPage(book) {
  const readBooks = getStorageData('readBooks', {});
  const favorites = getStorageData('favorites', []);
  const currentReads = getStorageData('currentReads', []);
  
  const isRead = readBooks[book.title] ?? book.read;
  const isFavorite = favorites.includes(book.title);
  const isCurrent = currentReads.includes(book.title);
  
  // Find similar books
  const similar = books.filter(b => 
    b.title !== book.title &&
    (b.author === book.author || b.genre === book.genre)
  ).slice(0, 6);
  
  document.getElementById('bookContent').innerHTML = `
    <div class="book-cover-section">
      <img src="${book.image}" alt="${book.title}" class="book-cover-large" />
    </div>
    
    <div class="book-info-section">
      <h1 class="book-title-large">${book.title}</h1>
      <p class="book-author-large">by ${book.author}</p>
      
      <div class="book-meta">
        <span class="book-badge book-badge-genre">${book.genre}</span>
        <span class="book-badge book-badge-status">${isRead ? 'Read' : 'Unread'}</span>
        <span class="book-badge book-badge-rating">⭐ 4.2/5</span>
      </div>
      
      <div class="book-description-section">
        <h3>Synopsis</h3>
        <p class="book-description-text">${book.description}</p>
      </div>
      
      <div class="book-actions-section">
        <button class="book-action-btn btn-read" onclick="toggleRead('${book.title}')">
          ${isRead ? '✓ Marked as Read' : 'Mark as Read'}
        </button>
        <button class="book-action-btn btn-favorite" onclick="toggleFavorite('${book.title}')">
          ${isFavorite ? '♥ Favorited' : '♡ Add to Favorites'}
        </button>
        <button class="book-action-btn btn-current" onclick="toggleCurrent('${book.title}')">
          ${isCurrent ? '📚 Currently Reading' : '📖 Start Reading'}
        </button>
      </div>
      
      <div class="book-links-section">
        <h3>Find & Buy</h3>
        <div class="external-links">
          <a href="https://www.goodreads.com/search?q=${encodeURIComponent(book.title + ' ' + book.author)}" 
             target="_blank" class="external-link link-goodreads">
            📚 Goodreads
          </a>
          <a href="https://www.amazon.com/s?k=${encodeURIComponent(book.title + ' ' + book.author)}" 
             target="_blank" class="external-link link-amazon">
            🛒 Amazon
          </a>
          <a href="https://www.audible.com/search?keywords=${encodeURIComponent(book.title)}" 
             target="_blank" class="external-link link-audible">
            🎧 Audible
          </a>
        </div>
      </div>
      
      ${similar.length > 0 ? `
        <div class="book-similar-section">
          <h3>You Might Also Like</h3>
          <div class="similar-books-grid">
            ${similar.map(b => `
              <div class="similar-book-card" onclick="goToBook('${b.title}')">
                <img src="${b.image}" alt="${b.title}" />
                <h4>${b.title}</h4>
                <p>${b.author}</p>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

// ====== Navigation =====
window.goToBook = function(title) {
  window.location.href = `book.html?book=${encodeURIComponent(title)}`;
};

// ====== Toggle Functions =====
window.toggleRead = function(title) {
  const readBooks = getStorageData('readBooks', {});
  readBooks[title] = !readBooks[title];
  setStorageData('readBooks', readBooks);
  loadBookDetails();
};

window.toggleFavorite = function(title) {
  let favorites = getStorageData('favorites', []);
  if (favorites.includes(title)) {
    favorites = favorites.filter(t => t !== title);
  } else {
    favorites.push(title);
  }
  setStorageData('favorites', favorites);
  loadBookDetails();
};

window.toggleCurrent = function(title) {
  let currentReads = getStorageData('currentReads', []);
  if (currentReads.includes(title)) {
    currentReads = currentReads.filter(t => t !== title);
  } else {
    currentReads.push(title);
  }
  setStorageData('currentReads', currentReads);
  loadBookDetails();
};

// ====== Theme Toggle =====
document.getElementById('toggleTheme').addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});