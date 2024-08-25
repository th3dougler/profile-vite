import './App.css';

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="about">
          <div>
            <h1>Doug Jones</h1>
            <p>Software Developer specializing in web development</p>
          </div>
        </section>
        <section id="projects">
          <h2>Projects</h2>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>
            {'Email: '}
            <a href="mailto:th3dougler@gmail.com">th3dougler@gmail.com</a>
          </p>
          <p>
            {'LinkedIn: '}
            <a
              href="https://www.linkedin.com/in/doug-jones2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/doug-jones2
            </a>
          </p>
          <p>
            {'GitHub: '}
            <a
              href="https://github.com/th3dougler"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/th3dougler
            </a>
          </p>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getUTCFullYear()} Doug Jones</p>
      </footer>
    </>
  );
}

export default App;
