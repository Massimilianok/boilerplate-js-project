function helloWorld() {
  const app = document.getElementById('app');
  const title = document.createElement('h1');

  title.textContent = 'Hello World!';
  app.appendChild(title);
}

export default helloWorld;
