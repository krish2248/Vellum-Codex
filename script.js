// Toggle theme
const toggleBtn = document.getElementById('toggleTheme');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(query) ||
    book.author.toLowerCase().includes(query)
  );
  renderBooks(filteredBooks);
});

const sortBy = document.getElementById('sortBy');
sortBy.addEventListener('change', (e) => {
  const criteria = e.target.value;

  let sortedBooks = [...books]; // Create a copy of the books array
  if (criteria === 'read') {
    sortedBooks = sortedBooks.filter(book => book.read);
  } else if (criteria === 'unread') {
    sortedBooks = sortedBooks.filter(book => !book.read);
  } else if (criteria === 'author') {
    sortedBooks.sort((a, b) => a.author.localeCompare(b.author));
  }

  renderBooks(sortedBooks);
});

// Render books
function renderBooks(filteredBooks = books) {
  const grid = document.getElementById('bookGrid');
  grid.innerHTML = '';

  filteredBooks.forEach(book => {
    const card = document.createElement('div');
    card.classList.add('book-card');
    card.innerHTML = `
      <img src="${book.image}" alt="${book.title}" />
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Status:</strong> ${book.read ? 'Read' : 'Unread'}</p>
      <p><strong>Description:</strong> ${book.description}</p>
    `;
    grid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => renderBooks());
