const container = document.getElementById('searchForm');
const input = document.getElementById('searchInput');
const placeholder = document.getElementById('placeholder');

function updatePlaceholderVisibility() {
  if (input.value.trim() === '') {
    placeholder.classList.remove('hidden');
  } else {
    placeholder.classList.add('hidden');
  }
}

input.addEventListener('focus', () => {
  container.classList.add('active');
  container.classList.remove('hovered', 'submitted');
  input.style.color = 'black';
});

input.addEventListener('blur', () => {
  container.classList.remove('active', 'hovered');
  updatePlaceholderVisibility();
  if (input.value.trim()) {
    container.classList.add('submitted');
    input.style.color = '#888';
  } else {
    container.classList.remove('submitted');
    input.style.color = 'black';
  }
});

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    input.blur();
  }
});

input.addEventListener('input', updatePlaceholderVisibility);

container.addEventListener('mouseenter', () => {
  if (!container.classList.contains('active')) {
    container.classList.add('hovered');
  }
});

container.addEventListener('mouseleave', () => {
  if (!container.classList.contains('active')) {
    container.classList.remove('hovered');
  }
});

// Initial state
updatePlaceholderVisibility();
