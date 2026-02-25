export default function Teaching() {
  return (
    <>
      <h1 className="page-title">Teaching &amp; Mentorship</h1>

      <figure style={{ margin: '2rem 0', textAlign: 'center' }}>
        <img src="/images/News/Banners15.png" alt="Teaching and outreach activities" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
      </figure>

      <h2>Teaching Philosophy &amp; Approach</h2>
      <div className="section-block">
        <p>I prepare students to solve complex agricultural and environmental challenges through hands-on training in advanced sensing technologies, computational modeling, and data-driven decision-making. My pedagogical approach integrates theoretical foundations with practical field and laboratory experiences, emphasizing research reproducibility, ethical use of AI tools, and interdisciplinary problem-solving. Students gain proficiency in UAV operations, HPC workflows, sensor deployment, and translating research findings into stakeholder-ready tools.</p>
      </div>

      <h2>Graduate Research Mentorship</h2>
      <div className="section-block">
        <ul>
          <li><strong>MS/PhD Thesis Supervision</strong>: Mentored graduate students on soil organic carbon modeling using machine learning and geospatial analytics, from experimental design through manuscript preparation and defense.</li>
          <li><strong>Technical Training Delivered</strong>: UAV remote sensing and FAA Part 107 certification; soil proximal sensing (Veris OM sensor, FT-IR spectrometry); high-performance computing (Negishi HPC cluster); physics-based crop models (DSSAT, APEX, HYDRUS); Python/R workflows for geospatial ML; ethical integration of AI in scientific research.</li>
          <li><strong>Research Skills Development</strong>: Field experimental design, sensor calibration, image processing pipelines, model-data fusion, manuscript writing, conference presentations, and grant proposal development.</li>
        </ul>
      </div>

      <h2>Undergraduate &amp; Classroom Teaching Experience</h2>
      <div className="section-block">
        <ul>
          <li><strong>Faculty Instructor</strong>, Madda Walabu University (2012-2019). Taught undergraduate courses in water resources engineering, GIS applications, and agricultural systems. Supervised student capstone projects and research theses.</li>
          <li><strong>Courses Prepared to Teach</strong>: Precision Agriculture Technologies; Agricultural Water Management; Hydrologic Modeling; Remote Sensing for Natural Resources; AI Applications in Agriculture; Soil Physics and Hydrology.</li>
        </ul>
      </div>

      <h2>Extension &amp; Stakeholder Engagement</h2>
      <div className="section-block">
        <ul>
          <li>Developed and delivered field demonstrations on IoT sensor networks and UAV-based precision agriculture technologies for irrigation managers, extension agents, and community college students (2020-2022).</li>
          <li>Committed to translating research into extension publications, grower workshops, and decision support tools accessible to agricultural stakeholders.</li>
          <li>Prepared to engage industry partners and commodity groups in technology transfer and applied research collaborations.</li>
        </ul>
      </div>

      <h2>Public Scholarship &amp; Open Science</h2>
      <div className="section-block">
        <p><strong>Digital Education Platform</strong>: Established YouTube channel reaching 12,650+ subscribers with 2.4+ million views, delivering open-access training in remote sensing, GIS, and agricultural data analytics to global audiences. This platform demonstrates commitment to public engagement and democratizing access to geospatial technologies.</p>
        <p><a href="https://rb.gy/7iwk6" target="_blank" rel="noopener noreferrer">YouTube Channel → https://rb.gy/7iwk6</a></p>
        
        <h3 style={{ marginTop: '1.5rem' }}>Featured Tutorial: Remote Sensing Applications</h3>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', marginTop: '1rem' }}>
          <iframe 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            src="https://www.youtube.com/embed/lPY_5HxFB_8?start=822" 
            title="Dr. Fitsum Teshome - Remote Sensing and GIS Tutorial"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <figure style={{ margin: '2rem 0', textAlign: 'center' }}>
        <img src="/images/News/Banner10.png" alt="Educational content and training" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
      </figure>

      <h2>Professional Service</h2>
      <div className="section-block">
        <p><strong>Peer Review Service</strong> (10+ journals): <em>Agricultural Water Management</em>, <em>Computers and Electronics in Agriculture</em>, <em>Agronomy Journal</em>, <em>Scientific Reports</em>, <em>Frontiers in Plant Science</em>, <em>Theoretical and Applied Climatology</em>, <em>Geo-Spatial Information Science</em>, <em>Physics and Chemistry of the Earth</em>, and others.</p>
        <p><strong>Professional Societies</strong>: American Society of Agricultural and Biological Engineers (ASABE), DSSAT Foundation, Indian Association of Hydrologists (Lifetime Member).</p>
      </div>

      <h2>Technical Expertise &amp; Certifications</h2>
      <div className="section-block">
        <ul>
          <li><strong>FAA Remote Pilot Certificate</strong> (Part 107) - Small Unmanned Aircraft Systems</li>
          <li><strong>Process-Based Models</strong>: DSSAT crop simulation, HYDRUS (1D/2D/3D) soil water flow, SWAT watershed modeling, MIKE NAM hydrological modeling, RothC/DayCent carbon dynamics</li>
          <li><strong>HPC &amp; Cloud Computing</strong>: Experience with HiPerGator (UF), Negishi (Purdue), and AWS/Google Cloud platforms</li>
          <li><strong>Advanced Training</strong>: UAV-based phenotyping (RGB, LiDAR, hyperspectral sensors), hydrologic modeling with climate change scenarios, watershed planning and management</li>
        </ul>
      </div>
    </>
  )
}
