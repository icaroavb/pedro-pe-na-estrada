import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="wordmark">
        Pê na Estrada
      </Link>
      <nav>
        <a href="https://instagram.com/pedrosantt_oficial" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </nav>
    </header>
  );
}
