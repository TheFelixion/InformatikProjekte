const input = document.getElementById('hex-color-input');
const output = document.getElementById('hex-color-output');

input.addEventListener('input', () => {
  let color = input.value.trim();

  if (color && !color.startsWith('#')) {
    color = '#' + color;
  }

  const hexPattern = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
  if (hexPattern.test(color)) {
    output.style.backgroundColor = color;
  } else {
    output.style.backgroundColor = 'transparent';
  }
});