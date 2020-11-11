function helloWorld() {
  const app = document.getElementById('app');
  const container = document.createElement('div');
  const title = document.createElement('h1');
  const icon = document.createElement('i');

  container.classList.add(
    'container-fluid',
    'app',
    'd-flex',
    'flex-column',
    'align-items-center',
    'justify-content-center'
  );
  icon.classList.add('fab', 'fa-js-square', 'app-icon');
  title.classList.add('app-title');
  title.textContent = 'Hello World!';

  container.appendChild(icon);
  container.appendChild(title);
  app.appendChild(container);
}

export default helloWorld;
