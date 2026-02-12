import { NavLink, Outlet, useLocation } from 'react-router-dom'

const TICKER_TEXT = "We can't manage what we don't measure. By integrating AI, IoT, Digital Twins, and HPC with geospatial data, we turn measurement into intelligent, actionable insight!"

export default function Layout() {
  return (
    <>
      <nav className="site-nav">
        <div className="site-nav-inner">
          <div className="site-name">
            <NavLink to="/">AgroSensing &amp; AI Lab</NavLink>
          </div>
          <ul className="nav-links">
            <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
            <li><NavLink to="/project" className={({ isActive }) => isActive ? 'active' : ''}>Project</NavLink></li>
            <li><NavLink to="/publication" className={({ isActive }) => isActive ? 'active' : ''}>Publication</NavLink></li>
            <li><NavLink to="/teaching" className={({ isActive }) => isActive ? 'active' : ''}>Teaching</NavLink></li>
            <li><NavLink to="/team" className={({ isActive }) => isActive ? 'active' : ''}>Team</NavLink></li>
            <li><NavLink to="/news" className={({ isActive }) => isActive ? 'active' : ''}>News</NavLink></li>
          </ul>
        </div>
      </nav>

      <Banner />

      <div className="banner-ticker" aria-live="polite">
        <div className="banner-ticker-inner">
          <span>{TICKER_TEXT}</span>
          <span>{TICKER_TEXT}</span>
        </div>
      </div>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <div className="footer-grid">
            <div className="footer-branding">
              <div className="footer-name">AgroSensing &amp; AI Lab</div>
              <p className="footer-org">University of Maryland College Park</p>
              <p className="footer-org">Central Maryland Research and Education Center</p>
              <p className="footer-address">395 Greenmead Drive<br />College Park, MD 20740</p>
              <p className="footer-phone"><a href="tel:+17864915076">+1 786-491-5076</a></p>
            </div>
            <div className="footer-quicklinks">
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="footer-links">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/project">Project</NavLink></li>
                <li><NavLink to="/publication">Publication</NavLink></li>
                <li><NavLink to="/teaching">Teaching</NavLink></li>
                <li><NavLink to="/team">Team</NavLink></li>
                <li><NavLink to="/news">News</NavLink></li>
              </ul>
            </div>
            <div className="footer-contact">
              <h3 className="footer-heading">Contact</h3>
              <p><a href="mailto:fitsalem@gmail.com">fitsalem@gmail.com</a></p>
              <p>(O): <a href="tel:+17864915076">+1 786-491-5076</a></p>
            </div>
          </div>
          <div className="footer-copy">© 2026 AgroSensing &amp; AI Lab. All rights reserved.</div>
        </div>
      </footer>
    </>
  )
}

function Banner() {
  const { pathname } = useLocation()
  const isHome = pathname === '/' || pathname === ''
  return (
    <header
      className={isHome ? 'hero' : 'page-banner page-banner--default'}
      aria-hidden="true"
    >
      <div
        className="banner-slide"
        style={{ backgroundImage: "url('/images/banners/combinebannner.png')" }}
      />
    </header>
  )
}
