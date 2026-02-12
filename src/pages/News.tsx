export default function News() {
  return (
    <>
      <h1 className="page-title">News &amp; Updates</h1>
      <figure className="news-hero-img">
        <img src="/images/News/News.png" alt="News and updates" width={800} />
      </figure>

      <h2>Position &amp; Appointments</h2>
      <ul className="news-list">
        <li>
          <span className="news-date">October 2025 – Present</span>
          <strong>Post-Doctoral Research Associate</strong>, University of Maryland, College of Agriculture and Natural Resources, Central Maryland Research &amp; Education Center, Precision and Digital Agriculture Lab.
        </li>
        <li>
          <span className="news-date">September 2024 – October 2025</span>
          <strong>Post-Doctoral Research Associate</strong>, Purdue University, College of Agriculture, Department of Agronomy, Geoinformatics, Ecosystem Management &amp; Soil Sustainability (GEMS).
        </li>
      </ul>

      <h2>Research Grants &amp; Awards</h2>
      <ul className="news-list">
        <li><strong>Two Presentation Excellence Awards</strong> at ASABE 2023 Annual International Meeting for the oral presentation: &quot;Application of Unmanned Aerial Vehicle (UAV)-Based Imaging and Machine Learning for Plant Phenotyping.&quot;</li>
        <li><strong>Second place</strong>, Graduate Student Presentation Competition, Florida Section ASABE — &quot;Evaluating Field Scale Crop Growth Simulation Models in South Florida.&quot;</li>
        <li><strong>$2500 travel grant</strong>, University of Florida IFAS Graduate School, for Graduate Research Day presentation, Gainesville.</li>
        <li><strong>Co-Investigator</strong>: Spatio-Temporal Analysis of Temperature and Precipitation Distribution and Variability Over Bale Zone, Ethiopia. Madda Walabu University. Grant MWU/RGCS/004-2017. Institute of Technology (2017–2018), $31,000.</li>
      </ul>

      <h2>Professional License</h2>
      <ul className="news-list">
        <li><strong>Remote Pilot — Small Unmanned Aircraft</strong> (FAA Part 107).</li>
      </ul>

      <h2>Recent Publications &amp; Submissions</h2>
      <ul className="news-list">
        <li>2026: Integration of smartphone imagery with topographic parameters for soil organic carbon prediction in the Indo-Gangetic Plains (interpretable ML). <em>Computers and Electronics in Agriculture</em> 241, 111279.</li>
        <li>2026: RGB-to-synthetic-thermal image translation using generative AI for crop water stress assessment. <em>Computers and Electronics in Agriculture</em> 241, 111273.</li>
        <li>2026: Modeling soil moisture and evapotranspiration dynamics from variably irrigated vegetable fields. <em>Modeling Earth Systems and Environment</em> 12(1), 1–18.</li>
        <li>2025: Crop ET from drone imagery and ML (<em>Remote Sensing Applications</em>); AgriSenAI software (<em>SoftwareX</em>); LAI prediction (<em>European Journal of Agronomy</em>); sea-level rise and groundwater (<em>Earth Systems and Environment</em>).</li>
      </ul>

      <h2>Outreach Highlights</h2>
      <ul className="news-list">
        <li><strong>YouTube</strong>: Dr. Fitsum Teshome channel — 190+ videos, 12,650+ subscribers, 2.4+ million views on remote sensing, GIS, and data analytics.</li>
        <li>Guest lectures and training on UAV imaging, high-performance computing (HPC), Veris OM sensor, and ethical use of LLMs in research (Purdue).</li>
      </ul>
    </>
  )
}
