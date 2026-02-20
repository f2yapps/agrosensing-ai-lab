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
            <div className="pi-card__links" style={{ display: 'flex', gap: '1rem', marginTop: '0.75rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'flex-start' }}>
              <a href="http://tiny.cc/2cf4001" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', color: 'inherit' }} title="Google Scholar">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/></svg>
                <span>Google Scholar</span>
              </a>
              <a href="http://tiny.cc/4cf4001" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', color: 'inherit' }} title="ResearchGate">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#00CCBB"><path d="M19.586 0c.818 0 1.591.353 2.122.97l2.122 2.122c.617.531.97 1.304.97 2.122v14.172c0 1.657-1.343 3-3 3H2.414c-1.657 0-3-1.343-3-3V3.414c0-1.657 1.343-3 3-3h17.172zm-9.523 6.124c-.696.992-1.022 2.143-1.022 3.496 0 1.352.326 2.503 1.022 3.495.696.993 1.598 1.488 2.707 1.488 1.11 0 2.011-.495 2.707-1.488.696-.992 1.022-2.143 1.022-3.495 0-1.353-.326-2.504-1.022-3.496-.696-.993-1.598-1.488-2.707-1.488-1.11 0-2.011.495-2.707 1.488zm10.263 4.491c-.247.252-.57.378-.97.378h-2.094v2.094c0 .4-.126.723-.378.97s-.57.378-.97.378-.723-.126-.97-.378-.378-.57-.378-.97v-2.094h-2.094c-.4 0-.723-.126-.97-.378s-.378-.57-.378-.97.126-.723.378-.97.57-.378.97-.378h2.094v-2.094c0-.4.126-.723.378-.97s.57-.378.97-.378.723.126.97.378.378.57.378.97v2.094h2.094c.4 0 .723.126.97.378s.378.57.378.97-.131.718-.378.97z"/></svg>
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
