import React from 'react';
import './style/index.scss';

function App() {
  return (
    <>
      <aside className="aside">
        <div className="modal">Modal 1</div>
        <div className="modal">Modal 2</div>
      </aside>

      <header className="header">Header</header>

      <main>
        <section className="hero">
          <div className="heading">Welcome!</div>
          <div className="blurb">This is a website about lorem ipsum, lorem ipsum, lorem ipsum.</div>
        </section>
      </main>

      <footer className="footer">Footer</footer>
    </>
  );
}

export default App;
