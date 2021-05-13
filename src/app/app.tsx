import React from 'react';
import './styles/_index.scss';

function App() {
  return (
    <>
      <aside className="aside">
        <div className="modal">Modal 1</div>
        <div className="modal">Modal 2</div>
      </aside>

      <header className="header">Header</header>

      <main>
        <section className="hero">Hero Section</section>

        <section className="blurb">Blurb Section</section>
      </main>

      <footer className="footer">Footer</footer>
    </>
  );
}

export default App;
