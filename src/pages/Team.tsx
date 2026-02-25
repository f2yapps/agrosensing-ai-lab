import { Link } from 'react-router-dom'

const COLLABORATORS = [
  { name: 'Haimanote K. Bayabil', role: 'University of Florida · Agricultural and Biological Engineering', avatar: 'Haimanote+Bayabil' },
  { name: 'Yiannis Ampatzidis', role: 'University of Florida · UAV imaging, precision ag, AgriSenAI', avatar: 'Yiannis+Ampatzidis' },
  { name: 'Bruce Schaffer', role: 'University of Florida TREC', avatar: 'Bruce+Schaffer' },
  { name: 'Gerrit Hoogenboom', role: 'DSSAT Foundation · crop modeling', avatar: 'Gerrit+Hoogenboom' },
  { name: 'Niguss Hailegnaw', role: 'Soil hydrology, irrigation, ML modeling', avatar: 'Niguss+Hailegnaw' },
  { name: 'Muluken Berihun', role: 'Soil hydrology, irrigation, ML modeling', avatar: 'Muluken+Berihun' },
  { name: 'Getachew Awoke', role: 'Soil hydrology, irrigation, ML modeling', avatar: 'Getachew+Awoke' },
  { name: 'Boaz Tullu (Tulu)', role: 'RGB-thermal translation, IrrigSense, AgriSenAI', avatar: 'Boaz+Tullu' },
]

export default function Team() {
  return (
    <>
      <h1 className="page-title">Research Group &amp; Network</h1>
      <p>Building an interdisciplinary team to advance AI-enabled agricultural and hydrological systems research.</p>

      <h2>Principal Investigator</h2>
      <div className="section-block">
        <div className="pi-card">
          <div className="pi-card__photo">
            <img className="team-photo" src="/images/team/headshotfitsum.png" alt="Fitsum Teshome" />
          </div>
          <div className="pi-card__content">
            <div className="pi-card__name">Fitsum Teshome, Ph.D.</div>
            <div className="pi-card__role">Director · AgroSensing &amp; Intelligent Systems Lab</div>
            <div className="pi-card__affil">Agricultural &amp; Biological Engineering</div>
            <div className="pi-card__links" style={{ display: 'flex', gap: '1rem', marginTop: '0.75rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'flex-start' }}>
              <a href="http://tiny.cc/2cf4001" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', color: 'inherit' }} title="Google Scholar">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/></svg>
                <span>Google Scholar</span>
              </a>
              <a href="http://tiny.cc/4cf4001" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', color: 'inherit' }} title="ResearchGate">
                <img src="/images/News/researchgate.png" alt="ResearchGate" width="20" height="20" style={{ objectFit: 'contain' }} />
                <span>ResearchGate</span>
              </a>
              <a href="http://tiny.cc/dcf4001" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', color: 'inherit' }} title="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF0000"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                <span>YouTube</span>
              </a>
              <a href="https://github.com/f2yapps" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', color: 'inherit' }} title="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                <span>GitHub</span>
              </a>
              <a href="http://tiny.cc/9cf4001" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', color: 'inherit' }} title="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#0077B5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <figure style={{ margin: '2rem 0', textAlign: 'center' }}>
        <img src="/images/News/Banners18.png" alt="Collaborative research" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
      </figure>

      <h2>Collaborative Research Network</h2>
      <p>Established collaborative relationships with leading researchers in precision agriculture, crop modeling, and soil-water systems across multiple R1 institutions. This network provides a strong foundation for multi-institutional grant proposals and graduate student co-advising opportunities.</p>
      <div className="team-grid">
        {COLLABORATORS.map((c) => (
          <div key={c.name} className="team-card">
            <img className="team-photo" src={`https://ui-avatars.com/api/?name=${c.avatar}&size=240&background=0e7490&color=fff`} alt={c.name} />
            <div className="name">{c.name}</div>
            <div className="role">{c.role}</div>
          </div>
        ))}
      </div>
      <p style={{ marginTop: '1.5rem' }}>Extended network includes collaborators at University of Florida TREC, Purdue GEMS Lab, USDA-ARS, international institutions, and industry partners in agricultural technology (see <Link to="/publication">Publications</Link>).</p>

      <h2>Prospective Graduate Students</h2>
      <p><strong>The lab will recruit MS and PhD students interested in:</strong> AI and machine learning for agricultural systems, UAV-based remote sensing and high-throughput phenotyping, IoT sensor networks and digital agriculture, hydrological modeling and soil-water dynamics, precision irrigation and water quality, or climate adaptation in agroecosystems. Ideal candidates have backgrounds in agricultural/biological engineering, environmental engineering, computer science, agronomy, or related fields, with strong quantitative skills and interest in field-based research.</p>
      <p>Contact: <a href="mailto:fitsalem@gmail.com">fitsalem@gmail.com</a></p>
    </>
  )
}
