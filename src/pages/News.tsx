export default function News() {
  return (
    <>
      <h1 className="page-title">Recognition &amp; Milestones</h1>
      <figure className="news-hero-img">
        <img src="/images/News/News.png" alt="News and updates" width={800} />
      </figure>

      <h2>Current Research Appointment</h2>
      <ul className="news-list">
        <li>
          <span className="news-date">2025 - Present</span>
          <strong>Postdoctoral Researcher</strong>, University of Maryland. Leading research on AI-driven irrigation systems, digital twin development for precision agriculture, and nutrient management in the Chesapeake Bay watershed.
        </li>
        <li>
          <span className="news-date">2024 - 2025</span>
          <strong>Postdoctoral Researcher</strong>, Purdue University. Led statewide soil organic carbon mapping initiative and developed grant proposals on physics-informed AI for agricultural systems.
        </li>
      </ul>

      <h2>Research Awards &amp; Recognition</h2>
      <ul className="news-list">
        <li><strong>Two Presentation Excellence Awards</strong>, ASABE Annual International Meeting (2023) - recognized for research innovation in UAV-based imaging and machine learning for plant phenotyping.</li>
        <li><strong>Second Place</strong>, ASABE Graduate Student Research Competition (2023) - field-scale hydrologic and crop simulation modeling.</li>
        <li><strong>Co-Principal Investigator</strong>, $31,000 research grant on climate variability and hydrological systems (Madda Walabu University, 2017-2018).</li>
      </ul>

      <figure style={{ margin: '2rem 0', textAlign: 'center' }}>
        <img src="/images/News/Banners19.png" alt="Research achievements" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
      </figure>

      <h2>Recent Research Output (2024-2026)</h2>
      <ul className="news-list">
        <li><strong>23 peer-reviewed publications</strong> (h-index: 14, i10-index: 15) in leading journals including <em>Computers and Electronics in Agriculture</em>, <em>Agricultural Water Management</em>, <em>Remote Sensing Applications</em>, and <em>European Journal of Agronomy</em>.</li>
        <li><strong>2026</strong>: Three first-author papers on interpretable ML for soil carbon prediction, generative AI for crop stress assessment, and soil moisture-ET dynamics modeling.</li>
        <li><strong>2025</strong>: Published AgriSenAI software platform (<em>SoftwareX</em>) - open-source tool for automated UAV image processing, enabling reproducible precision agriculture research.</li>
        <li><strong>High-impact work</strong> on rootzone soil moisture prediction, evapotranspiration estimation, and high-throughput phenotyping cited by international research community.</li>
      </ul>

      <h2>Broader Impact &amp; Engagement</h2>
      <ul className="news-list">
        <li><strong>Public Education Platform</strong>: 190+ educational videos reaching 12,650+ subscribers and 2.4M+ views globally, democratizing access to remote sensing and geospatial analytics training.</li>
        <li><strong>Technical Certifications</strong>: FAA Remote Pilot (Part 107), positioning lab for immediate UAV research operations.</li>
        <li><strong>Invited Presentations</strong>: AI in Agriculture Conference, Greater Everglades Ecosystem Restoration Science Conference, multiple ASABE national and regional meetings.</li>
      </ul>

      <figure style={{ margin: '2rem 0', textAlign: 'center' }}>
        <img src="/images/News/Banners22.png" alt="Outreach and community engagement" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
      </figure>
    </>
  )
}
