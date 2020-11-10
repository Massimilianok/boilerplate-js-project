function helloWorld() {
  const app = document.getElementById('app');
  const title = document.createElement('h1');
  const icon = document.createElement('i');

  icon.classList.add('fas', 'fa-globe');
  title.textContent = 'Hello World!';
  app.appendChild(icon);
  app.appendChild(title);
}

export default helloWorld;
