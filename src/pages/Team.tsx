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
            <div className="pi-card__links">
              <a href="http://tiny.cc/2cf4001" target="_blank" rel="noopener noreferrer">Google Scholar</a>
              <span>·</span>
              <a href="http://tiny.cc/4cf4001" target="_blank" rel="noopener noreferrer">ResearchGate</a>
              <span>·</span>
              <a href="http://tiny.cc/9cf4001" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <span>·</span>
              <a href="https://github.com/f2yapps" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </div>

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
