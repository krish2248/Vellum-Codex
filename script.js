// Get unique genres
function getUniqueGenres() {
  var genres = {};
  window.books.forEach(function(b) { genres[b.genre] = true; });
  return Object.keys(genres).sort();
}

// Genre filter
window.filterByGenre = function(genre) {
  var g = document.getElementById('bookGrid');
  var filtered = genre ? window.books.filter(function(b) { return b.genre === genre; }) : window.books;
  g.innerHTML = '';
  filtered.forEach(function(b) {
    var d = document.createElement('div');
    d.className = 'book-card';
    d.onclick = function() { window.location.href = 'book.html?book=' + encodeURIComponent(b.title); };
    d.innerHTML = '<img src="' + b.image + '"><h3>' + b.title + '</h3><p class="author">' + b.author + '</p><span class="genre-tag">' + b.genre + '</span>';
    g.appendChild(d);
  });
  
  // Update tabs
  document.querySelectorAll('.genre-tab').forEach(function(t) {
    t.classList.remove('active');
    if (t.textContent === (genre || 'All')) t.classList.add('active');
  });
};

// Search
document.getElementById('searchBar').addEventListener('input', function(e) {
  var q = e.target.value.toLowerCase();
  var f = window.books.filter(function(b) { 
    return b.title.toLowerCase().indexOf(q) !== -1 || b.author.toLowerCase().indexOf(q) !== -1; 
  });
  filterByGenre('');
  var g = document.getElementById('bookGrid');
  g.innerHTML = '';
  f.forEach(function(b) {
    var d = document.createElement('div');
    d.className = 'book-card';
    d.onclick = function() { window.location.href = 'book.html?book=' + encodeURIComponent(b.title); };
    d.innerHTML = '<img src="' + b.image + '"><h3>' + b.title + '</h3><p class="author">' + b.author + '</p><span class="genre-tag">' + b.genre + '</span>';
    g.appendChild(d);
  });
});

// Sort
document.getElementById('sortBy').addEventListener('change', function(e) {
  var s = e.target.value;
  var arr = window.books.slice();
  if (s === 'author') arr.sort(function(a, b) { return a.author.localeCompare(b.author); });
  else if (s === 'read') arr = arr.filter(function(b) { return b.read; });
  else if (s === 'unread') arr = arr.filter(function(b) { return !b.read; });
  filterByGenre('');
});

// Theme toggle
document.getElementById('toggleTheme').addEventListener('click', function() {
  document.body.classList.toggle('light-mode');
});

// Init tabs
function initTabs() {
  var t = document.getElementById('genreTabs');
  if (!t) return;
  var genres = getUniqueGenres();
  t.innerHTML = '<button class="genre-tab active" onclick="filterByGenre(\'\')">All</button>';
  genres.forEach(function(g) {
    t.innerHTML += '<button class="genre-tab" onclick="filterByGenre(\'' + g + '\')">' + g + '</button>';
  });
}
initTabs();