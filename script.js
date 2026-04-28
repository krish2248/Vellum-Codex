// Initialize app when DOM loads
document.addEventListener('DOMContentLoaded', function() {
  // Hide loader after animation
  var loader = document.getElementById('loader');
  if (loader) {
    setTimeout(function() {
      loader.classList.add('hidden');
    }, 3500);
  }
  
  // Get book grid
  var grid = document.getElementById('bookGrid');
  if (!grid) {
    console.log('No bookGrid found');
    return;
  }
  
  console.log('Rendering', books.length, 'books');
  
  // Render books
  books.forEach(function(book) {
    var card = document.createElement('div');
    card.className = 'book-card';
    card.onclick = function() {
      window.location.href = 'book.html?book=' + encodeURIComponent(book.title);
    };
    card.innerHTML = '<img src="' + book.image + '" alt="' + book.title + '"/><h3>' + book.title + '</h3><p class="author">' + book.author + '</p><span class="genre-tag">' + book.genre + '</span>';
    grid.appendChild(card);
  });
});