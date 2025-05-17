export default function Header() {
    return (
      <header className="header" >
        <img src="/src/assets/react.svg" className ="nav-logo" alt="react logo" />
        <nav>
          <ul className = "nav-list">
              <li className="nav-list-item">Pricing</li>
              <li className="nav-list-item">About</li>
              <li className="nav-list-item">Contact</li>
          </ul>
        </nav>
      </header>
    );
  }