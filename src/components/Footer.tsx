export default function Footer() {
  return (
    <footer className="site-footer bleed beat-tight">
      <span className="wordmark">Pê na Estrada</span>
      <p>Viagens e expedições em grupo. Eu embarco com vocês.</p>
      <div className="footer-links">
        <a href="https://instagram.com/pedrosantt_oficial" target="_blank" rel="noopener noreferrer">
          @pedrosantt_oficial
        </a>
        <a href="https://instagram.com/naestrada.trips" target="_blank" rel="noopener noreferrer">
          @naestrada.trips
        </a>
      </div>
      <p className="footer-fine">© {new Date().getFullYear()} Pê na Estrada</p>
    </footer>
  );
}
