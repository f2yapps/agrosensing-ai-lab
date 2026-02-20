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
      <h1 className="page-title">Team &amp; Collaborators</h1>
      <p>Research collaborations and key colleagues from current and past positions.</p>

      <h2>Principal Investigator</h2>
      <div className="section-block">
        <div className="pi-card">
          <div className="pi-card__photo">
            <img className="team-photo" src="/images/team/headshotfitsum.png" alt="Fitsum Teshome" />
          </div>
          <div className="pi-card__content">
            <div className="pi-card__name">Fitsum Teshome, Ph.D.</div>
            <div className="pi-card__role">Post-Doctoral Research Associate · AgroSensing &amp; AI Lab</div>
            <div className="pi-card__affil">Central Maryland Research &amp; Education Center · University of Maryland</div>
            <div className="pi-card__links" style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
              <a href="http://tiny.cc/2cf4001" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 24C5.372 24 0 18.627 0 12S5.372 0 12 0s12 5.373 12 12-5.372 12-12 12zm-.14-9.283h2.023l.157-2.023h-2.18V11.31c0-.66.097-1.027.76-1.027h1.42V8.31c-.243-.032-.974-.097-1.852-.097-1.833 0-3.09 1.12-3.09 3.172v1.408h-2.023v2.023h2.023v5.872c.406.063.82.097 1.243.097.422 0 .836-.034 1.243-.097v-5.872z"/></svg>
                Google Scholar
              </a>
              <a href="http://tiny.cc/4cf4001" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.586 0c.818 0 1.591.353 2.122.97l2.122 2.122c.617.531.97 1.304.97 2.122v14.172c0 1.657-1.343 3-3 3H2.414c-1.657 0-3-1.343-3-3V3.414c0-1.657 1.343-3 3-3h17.172zM6 8c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm6 0c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm6 0c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z"/></svg>
                ResearchGate
              </a>
              <a href="http://tiny.cc/dcf4001" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                YouTube
              </a>
              <a href="https://github.com/f2yapps" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>
              <a href="http://tiny.cc/9cf4001" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
              <a href="https://www.f2yapps.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm1-17h-2v2h2V5zm-2 3v9h2v-9h-2z"/></svg>
                Website
              </a>
            </div>
          </div>
        </div>
      </div>

      <figure style={{ margin: '2rem 0', textAlign: 'center' }}>
        <img src="/images/News/Banners18.png" alt="Collaborative research" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
      </figure>

      <h2>Collaborators &amp; Co-Authors</h2>
      <p>Dr. Teshome has collaborated extensively with researchers at the University of Florida (Tropical Research and Education Center), Purdue University (GEMS Lab), and University of Maryland.</p>
      <div className="team-grid">
        {COLLABORATORS.map((c) => (
          <div key={c.name} className="team-card">
            <img className="team-photo" src={`https://ui-avatars.com/api/?name=${c.avatar}&size=240&background=0e7490&color=fff`} alt={c.name} />
            <div className="name">{c.name}</div>
            <div className="role">{c.role}</div>
          </div>
        ))}
      </div>
      <p style={{ marginTop: '1.5rem' }}>Additional co-authors from Madda Walabu University, Banaras Hindu University, and international institutions (see <Link to="/publication">Publications</Link>).</p>

      <h2>Join the Lab</h2>
      <p>For opportunities in precision agriculture, UAV-based phenotyping, IoT sensing networks and digital twins, high-performance computing (HPC), and ML for soil and water management, please contact <a href="mailto:fitsalem@gmail.com">fitsalem@gmail.com</a>.</p>
    </>
  )
}
