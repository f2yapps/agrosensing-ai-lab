export default function Home() {
  return (
    <>
      <div className="intro-block">
        <h1 className="page-title">Fitsum Teshome, Ph.D.</h1>
        <p className="subtitle">Post-Doctoral Research Associate</p>
        <p className="institution">Central Maryland Research &amp; Education Center<br />College of Agriculture and Natural Resources, University of Maryland</p>
        
        <div className="social-links" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'flex-start', alignItems: 'center', marginTop: '1.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          <a href="http://tiny.cc/2cf4001" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', color: 'inherit' }} title="Google Scholar">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/></svg>
            <span>Google Scholar</span>
          </a>
          <a href="http://tiny.cc/4cf4001" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', color: 'inherit' }} title="ResearchGate">
            <img src="/images/News/researchgate.png" alt="ResearchGate" width="24" height="24" style={{ objectFit: 'contain' }} />
            <span>ResearchGate</span>
          </a>
          <a href="http://tiny.cc/dcf4001" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', color: 'inherit' }} title="YouTube">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#FF0000"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            <span>YouTube</span>
          </a>
          <a href="https://github.com/f2yapps" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', color: 'inherit' }} title="GitHub">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            <span>GitHub</span>
          </a>
          <a href="http://tiny.cc/9cf4001" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', color: 'inherit' }} title="LinkedIn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#0077B5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            <span>LinkedIn</span>
          </a>
        </div>
        
        <div className="contact-block">
          <span>395 Greenmead Drive, College Park, MD 20740</span>
          <span><a href="tel:+17864915076">+1 786-491-5076</a></span>
          <span>E-mail: <a href="mailto:fitsalem@gmail.com">fitsalem@gmail.com</a></span>
        </div>
      </div>

      <h2>About</h2>
      <p>Fitsum Teshome is a Postdoctoral Research Associate at the University of Maryland, where he advances data-driven solutions for sustainable agriculture and water resources management. He earned his Ph.D. in Agricultural and Biological Engineering from the University of Florida.</p>
      
      <p>His research centers on surface and subsurface hydrology, integrating advanced artificial intelligence (AI) algorithms with water stress indices and process-based hydrological models. He develops innovative frameworks that combine remote and proximal sensing, IoT-enabled sensor networks, edge computing, high-performance computing, drone-based imaging, and digital twin technologies to improve water and nutrient management, enhance soil health monitoring, and strengthen agroecosystem resilience under climate variability.</p>
      
      <p>With several years of research and teaching experience in global change science, geospatial analytics, environmental sensing systems, and water resources modeling, Dr. Teshome bridges physics-based understanding with intelligent systems to deliver scalable, precision-driven solutions for climate-smart agriculture.</p>

      <div style={{ display: 'flex', gap: '1.5rem', margin: '2rem 0', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start' }}>
        <figure style={{ flex: '1 1 45%', minWidth: '300px', margin: 0, textAlign: 'center' }}>
          <img src="/images/News/Banners16.png" alt="Research overview" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
        </figure>
        <figure style={{ flex: '1 1 45%', minWidth: '300px', margin: 0, textAlign: 'center' }}>
          <img src="/images/News/ThematicAreas.png" alt="Research thematic areas" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
        </figure>
      </div>

      <h2>Education Background</h2>
      <div className="section-block">
        <div className="two-col">
          <div><strong>Ph.D.</strong> - University of Florida, USA<br /><em>Agricultural and Biological Engineering</em></div>
          <span className="date">2024</span>
        </div>
        <div className="two-col">
          <div><strong>M.Th.</strong> - Banaras Hindu University, India<br /><em>Agricultural Engineering</em></div>
          <span className="date">2016</span>
        </div>
        <div className="two-col">
          <div><strong>B.Sc.</strong> - Haramaya University, Ethiopia<br /><em>Agricultural and Biological Engineering</em></div>
          <span className="date">2011</span>
        </div>
      </div>

      <h2>Professional Experience</h2>
      <div className="section-block">
        <ul>
          <li><strong>Post-Doctoral Research Associate</strong>, University of Maryland, College of Agriculture and Natural Resources, Central Maryland Research &amp; Education Center, Precision and Digital Agriculture Lab, 10/19/2025 - Present.</li>
          <li><strong>Post-Doctoral Research Associate</strong>, Purdue University, College of Agriculture, Department of Agronomy, Geoinformatics, Ecosystem Management &amp; Soil Sustainability (GEMS), 09/16/2024 - 10/15/2025.</li>
          <li><strong>Graduate Research Assistant</strong>, Department of Agricultural and Biological Engineering, Tropical Research and Education Center, University of Florida, 01/01/2021 - 08/16/2024.</li>
          <li><strong>Research Scholar</strong>, Department of Agricultural and Biological Engineering, Tropical Research and Education Center, University of Florida, 11/01/2019 - 12/31/2020.</li>
          <li><strong>Lecturer and Researcher</strong>, Department of Natural Resource Management, Madda Walabu University, Ethiopia, 07/16/2016 - 10/01/2019.</li>
          <li><strong>Assistant Lecturer and Researcher</strong>, Department of Natural Resource Management, Madda Walabu University, Ethiopia, 12/07/2012 - 08/08/2014.</li>
          <li><strong>Instructor I &amp; II</strong>, Agarfa ATVET College, Ministry of Agriculture and Natural Resources, Ethiopia, 08/07/2011 - 12/06/2012.</li>
        </ul>
      </div>

      <h2>Leadership and Professional Service</h2>
      <div className="section-block">
        <ul>
          <li>Organizing Committee Member, 2026 Precision Agriculture Technology Conference</li>
          <li>Elected Council Member, Purdue University Postdoctoral Association (PPDA)</li>
          <li>Served as a member of the Indiana Organic Network (USDA-NIFA-funded statewide organic farming initiative)</li>
          <li>Co-Organizer, Technical Session at ASA, CSSA, SSSA Annual Meeting</li>
          <li>Served as a member of the Tropical Research and Education Center (TREC) Social Committee</li>
        </ul>
      </div>

      <h2>Grant Writing Experience</h2>
      <div className="section-block">
        <ul>
          <li><strong>Co-Investigator</strong>: Spatio-Temporal Analysis of Temperature and Precipitation Distribution and Variability Over Bale Zone, Ethiopia. Madda Walabu University. Grant MWU/RGCS/004-2017. Institute of Technology (2017–2018), $31,000.</li>
          <li>Contributed to USDA NIFA project proposal development while at the University of Florida (UF)</li>
          <li>Participated in grant proposal writing workshops organized by Purdue University Postdoc Office and UF Institute of Food and Agricultural Sciences (IFAS)</li>
        </ul>
      </div>

      <h2>Volunteer Service &amp; Global Outreach</h2>
      <div className="section-block">
        <ul>
          <li>Developed a global mentorship platform connecting students in developing countries with professionals in developed countries, facilitating knowledge transfer, scholarship opportunities, career guidance, and capacity building in agriculture, water resources, AI, engineering, and related fields</li>
        </ul>
      </div>

      <figure style={{ margin: '2rem 0', textAlign: 'center' }}>
        <img src="/images/News/Banners23.png" alt="Global collaboration and impact" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
      </figure>
    </>
  )
}
