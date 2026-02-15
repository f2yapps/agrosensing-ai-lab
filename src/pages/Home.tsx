const RESEARCH_HIGHLIGHTS = [
  { img: '/images/Highlights/Highlights4.jpg', alt: 'Graphical abstract', title: 'Rootzone Soil Moisture Dynamics Prediction Using Artificial Intelligence Algorithms', summary: 'Developing and evaluating artificial intelligence models to predict rootzone soil moisture dynamics for improved irrigation scheduling and soil water management. The work supports site-specific irrigation decisions and more efficient use of water in cropping systems.', links: ['https://doi.org/10.1016/j.compag.2024.109414'] },
  { img: '/images/Highlights/Highlights1.jpg', alt: 'Graphical abstract', title: 'Evapotranspiration Prediction Using UAV-Based Imagery and Artificial Intelligence Algorithms', summary: 'Using UAV-based multispectral and thermal imagery with artificial intelligence algorithms to estimate crop evapotranspiration for field-scale water use assessments. These estimates help quantify actual water use and support irrigation planning and water budgeting.', links: ['https://doi.org/10.1016/j.rsase.2025.101661', 'https://doi.org/10.1016/j.scitotenv.2023.169403'] },
  { img: '/images/Highlights/Highlights9.png', alt: 'Graphical abstract', title: 'High-Throughput Plant Phenotyping Using Unmanned Aerial Vehicle (UAV) Imagery and Artificial Intelligence Algorithms', summary: 'Leveraging multispectral and thermal UAV data with AI to extract crop traits, monitor growth, and detect stress at scale for breeding and precision agriculture. The approach enables rapid, non-destructive assessment of large field trials and commercial fields.', links: ['https://doi.org/10.1016/j.compag.2023.108064', 'https://doi.org/10.1016/j.eja.2025.127557'] },
  { img: '/images/Highlights/Highlights5.jpg', alt: 'Graphical abstract', title: 'Canopy Temperature Prediction Using RGB Images and Artificial Intelligence Algorithms', summary: 'Using RGB imagery with machine learning to predict canopy temperature for crop water status and growth monitoring. Low-cost RGB cameras can thus support irrigation and stress detection where thermal sensors are not available.', links: ['https://doi.org/10.1016/j.compag.2025.111273'] },
  { img: '/images/Highlights/Highlights6.jpg', alt: 'AgriSenAI image processing pipeline', title: 'AgriSenAI: Automating UAV Thermal and Multispectral Image Processing for Precision Agriculture', summary: 'An automated pipeline that processes UAV thermal and multispectral imagery from acquisition through analytics, enabling consistent, scalable image handling for precision agriculture. Standardized workflows reduce processing time and support repeatable research and operational use.', links: ['https://doi.org/10.1016/j.softx.2025.102083'] },
  { img: '/images/Highlights/Hightlights13.png', alt: 'AI-enabled precision irrigation decision support', title: 'Artificial Intelligence–Enabled Precision Irrigation Decision Support', summary: 'AI-driven decision-support that uses crop coefficients, soil and crop information, soil moisture, and weather data to recommend when and where to irrigate, helping optimize water use and crop management. The tool integrates these inputs and model outputs to deliver actionable irrigation guidance at field scale.' },
  { img: '/images/Highlights/Hightlights8.jpg', alt: 'Graphical abstract', title: 'Exploring Deficit Irrigation as a Water Conservation Strategy: Insights from Field Experiments and Model Simulation', summary: 'Field experiments and model simulations to evaluate deficit irrigation for water savings while maintaining yield, with insights for sustainable water use in agriculture. Results inform irrigation strategies under water-limited conditions and variable climate.', links: ['https://doi.org/10.1016/j.agwat.2023.108490'] },
  { img: '/images/Highlights/Hightlights7.png', alt: 'Graphical abstract', title: 'Predicting Sea-Level Rise Impacts on Groundwater Quantity and Quality in Complex Hydrogeological Systems', summary: 'Modeling and predicting how sea-level rise affects groundwater levels and salinity in complex coastal hydrogeological systems to support adaptation planning. The work helps identify vulnerable zones and prioritize management and policy responses.', links: ['https://doi.org/10.1007/s41748-025-00583-5'] },
  { img: '/images/Highlights/Highlights10.png', alt: 'Graphical abstract', title: 'Simulating Soil Hydrologic Dynamics Using Crop Growth, Machine Learning, and Hydrological Models', summary: 'Integrating crop growth and hydrological models to simulate soil moisture and water fluxes under variable management and climate. The combined approach improves predictions of soil water availability and supports irrigation and nutrient management decisions.', links: ['https://doi.org/10.1016/j.compag.2024.109186', 'https://doi.org/10.1007/s40808-025-02659-7'] },
  { img: '/images/Highlights/Highlights14.png', alt: 'Graphical abstract', title: 'Integration of Smartphone Imagery with Topographic Parameters for Soil Organic Carbon Prediction in the Indo-Gangetic Plains: An Interpretable Machine Learning Approach', summary: 'Combining smartphone-captured imagery and topographic data with interpretable machine learning to predict soil organic carbon across the Indo-Gangetic Plains for sustainable land management. The method offers a low-cost, scalable option for SOC mapping where conventional sampling is limited.', links: ['https://doi.org/10.1016/j.compag.2025.111279'] },
  { img: '/images/Highlights/highlights17.png', alt: 'Graphical abstract', title: 'Application of Artificial Intelligence Algorithm in Image Processing for Cattle Disease Diagnosis', summary: 'Integrating expert systems with deep learning image processing to identify livestock diseases from symptom images and support rapid, effective diagnosis in resource-limited settings. The system helps bridge diagnostic gaps where veterinary expertise or lab access is limited.', links: ['https://doi.org/10.4236/jilsa.2022.144006'] },
  { img: '/images/Highlights/Highlights9.png', alt: 'Plant stress detection', title: 'Plant Biotic and Abiotic Stress Detection Using AI Classification Models', summary: 'Developing and deploying AI-powered classification models to detect and differentiate plant biotic stresses (diseases, pests, pathogens) and abiotic stresses (drought, nutrient deficiency, heat, salinity) using multispectral and thermal UAV imagery combined with ground-based sensors. The models enable early stress detection, support targeted intervention strategies, and improve crop health management for enhanced productivity and resilience under variable environmental conditions.' },
]

export default function Home() {
  return (
    <>
      <div className="intro-block">
        <p className="hero-tagline">Transforming Agriculture with AI and Geospatial Intelligence</p>
        <h1 className="page-title">Fitsum Teshome, Ph.D.</h1>
        <p className="subtitle">Post-Doctoral Research Associate</p>
        <p className="institution">Central Maryland Research &amp; Education Center<br />College of Agriculture and Natural Resources, University of Maryland</p>
        <div className="contact-block">
          <span>395 Greenmead Drive, College Park, MD 20740</span>
          <span><a href="tel:+17864915076">+1 786-491-5076</a></span>
          <span>E-mail: <a href="mailto:fitsalem@gmail.com">fitsalem@gmail.com</a></span>
        </div>
      </div>

      <h2>About</h2>
      <p>I am a Post-Doctoral Research Associate at the University of Maryland working in precision and digital agriculture. My research integrates artificial intelligence (AI), remote sensing, Internet of Things (IoT) sensor networks and digital twins, environmental sensing networks, and process-based modeling to improve decision-making in plant-based agriculture and natural resource systems. I develop scalable, data-driven frameworks that combine machine learning, geospatial analytics, high-performance computing (HPC), and crop–soil–hydrologic models to optimize water and nutrient management, enhance soil health monitoring, and increase agroecosystem resilience under climate variability.</p>

      <h2>Research Mission</h2>
      <p>I focus on building AI-enabled agricultural and environmental intelligence systems that reduce production inputs, strengthen sustainability, and directly benefit farmers and communities. My research integrates UAV and satellite imagery, IoT-enabled soil and crop sensor networks, weather data, and process-based models with interpretable machine learning, digital twin representations, and high-performance computing (HPC) to support precision water and nutrient management, soil carbon monitoring, and ecosystem resilience. My work leverages advanced AI algorithms for rootzone soil moisture prediction, evapotranspiration estimation, high-throughput plant phenotyping, canopy temperature prediction, and plant biotic and abiotic stress detection. I develop automated image processing pipelines like AgriSenAI and AI-driven precision irrigation decision support systems that translate complex agroecosystem processes into actionable guidance for water conservation, deficit irrigation strategies, groundwater quality assessment, soil hydrologic dynamics simulation, soil organic carbon mapping, and livestock disease diagnosis. These tools support climate adaptation, conservation planning, and sustainable resource management across diverse agricultural and natural resource systems.</p>

      <h2>Main Research Areas</h2>
      <h3>AI-driven precision water and nutrient management</h3>
      <p>I fuse UAV multispectral and thermal imagery, in-field soil moisture sensors, and weather data with machine learning and crop models to predict soil moisture dynamics, evapotranspiration, and crop stress. This work underpins decision-support tools such as AgriSenAI, an automated UAV image processing pipeline for precision irrigation and yield forecasting under variable irrigation regimes.</p>

      <h3>Soil carbon, hydrologic dynamics, and ecosystem resilience</h3>
      <p>I apply AI and geospatial analytics to develop high-resolution soil organic carbon maps and evaluate soil–water–carbon interactions under climate stress. By integrating terrain attributes, multisource remote sensing, and hydrological modeling with uncertainty-aware machine learning, I support carbon-smart agriculture, conservation targeting, and nutrient management—particularly in landscapes such as the Indo-Gangetic Plains and the Chesapeake Bay watershed.</p>

      <h3>AI and image processing for animal health and agricultural systems</h3>
      <p>Beyond crop systems, I have experience applying AI to livestock health. In cattle-focused work in Ethiopia, I contributed to an expert system integrated with deep learning image processing for timely disease diagnosis: cell-phone–captured symptom images were classified by a CNN with 95% accuracy, and a reasoner combined image outputs with location and text inputs to deliver rapid, effective recommendations—addressing critical diagnostic gaps where livestock are central to food security and livelihoods. I am currently developing a mobile application that uses AI to identify cattle diseases through mobile camera images and text inputs, providing accessible diagnostic support for farmers in resource-limited settings.</p>

      <h3>IoT, Digital Twins, and High-Performance Computing (HPC)</h3>
      <p>Across projects, my work increasingly leverages Internet of Things (IoT) sensing networks and digital twins of fields, soil–plant systems, and watersheds, executed on high-performance computing (HPC) platforms. These IoT-driven digital twins enable real-time data assimilation, scenario analysis, and scalable simulation to translate complex agroecosystem processes into timely, actionable guidance for water, nutrient, and climate resilience decisions.</p>

      <h2>Education Background</h2>
      <div className="section-block">
        <div className="two-col">
          <div><strong>Ph.D.</strong> — University of Florida, USA<br /><em>Agricultural and Biological Engineering</em></div>
          <span className="date">2024</span>
        </div>
        <div className="two-col">
          <div><strong>M.Th.</strong> — Banaras Hindu University, India<br /><em>Agricultural Engineering</em></div>
          <span className="date">2016</span>
        </div>
        <div className="two-col">
          <div><strong>B.Sc.</strong> — Haramaya University, Ethiopia<br /><em>Agricultural and Biological Engineering</em></div>
          <span className="date">2011</span>
        </div>
      </div>

      <h2>Professional Experience</h2>
      <div className="section-block">
        <ul>
          <li><strong>Post-Doctoral Research Associate</strong>, University of Maryland, College of Agriculture and Natural Resources, Central Maryland Research &amp; Education Center, Precision and Digital Agriculture Lab, 10/19/2025–Present.</li>
          <li><strong>Post-Doctoral Research Associate</strong>, Purdue University, College of Agriculture, Department of Agronomy, Geoinformatics, Ecosystem Management &amp; Soil Sustainability (GEMS), 09/16/2024–10/15/2025.</li>
          <li><strong>Graduate Research Assistant</strong>, Department of Agricultural and Biological Engineering, Tropical Research and Education Center, University of Florida, 01/01/2021–08/16/2024.</li>
          <li><strong>Research Scholar</strong>, Department of Agricultural and Biological Engineering, Tropical Research and Education Center, University of Florida, 11/01/2019–12/31/2020.</li>
          <li><strong>Lecturer and Researcher</strong>, Department of Natural Resource Management, Madda Walabu University, Ethiopia, 07/16/2016–10/01/2019.</li>
          <li><strong>Assistant Lecturer and Researcher</strong>, Department of Natural Resource Management, Madda Walabu University, Ethiopia, 12/07/2012–08/08/2014.</li>
          <li><strong>Instructor I &amp; II</strong>, Agarfa ATVET College, Ministry of Agriculture and Natural Resources, Ethiopia, 08/07/2011–12/06/2012.</li>
        </ul>
      </div>

      <h2>Research &amp; Social Media</h2>
      <ul className="link-list">
        <li><a href="http://tiny.cc/2cf4001" target="_blank" rel="noopener noreferrer">Google Scholar</a></li>
        <li><a href="http://tiny.cc/4cf4001" target="_blank" rel="noopener noreferrer">ResearchGate</a></li>
        <li><a href="http://tiny.cc/9cf4001" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://github.com/f2yapps" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="http://tiny.cc/dcf4001" target="_blank" rel="noopener noreferrer">YouTube</a></li>
      </ul>

      <h2>Leadership and Professional Service</h2>
      <div className="section-block">
        <ul>
          <li>Elected Council Member, Purdue University Postdoctoral Association (PPDA)</li>
          <li>Organizing Committee Member, 2026 Precision Agriculture Technology Conference</li>
          <li>Served as a member of the Indiana Organic Network (USDA-NIFA-funded statewide organic farming initiative)</li>
          <li>Co-Organizer, Technical Session at ASA, CSSA, SSSA Annual Meeting</li>
          <li>Served as a member of the Tropical Research and Education Center (TREC) Social Committee</li>
        </ul>
      </div>

      <h2>Grant Writing Experience</h2>
      <div className="section-block">
        <ul>
          <li>Contributed to USDA NIFA project proposal development while at the University of Florida (UF)</li>
          <li>Participated in grant proposal writing workshops organized by Purdue University Postdoc Office and UF IFAS</li>
        </ul>
      </div>

      <h2>Volunteer Service &amp; Global Outreach</h2>
      <div className="section-block">
        <ul>
          <li>Developed a global mentorship platform connecting students in developing countries with professionals in developed countries, facilitating knowledge transfer, career guidance, and capacity building in agriculture, engineering, and related fields</li>
        </ul>
      </div>

      <section className="abstract-cards-section">
        <h2>Research Highlights &amp; Graphical Abstracts</h2>
        {RESEARCH_HIGHLIGHTS.map((item, i) => (
          <div key={i} className="abstract-card">
            <div className="abstract-figures">
              <figure className="single-fig"><img src={item.img} alt={item.alt} /></figure>
            </div>
            <div className="abstract-card__content">
              <h3>{item.title}</h3>
              <p className="abstract-summary">{item.summary}</p>
              {item.links && (
                <p>
                  {item.links.map((link, idx) => (
                    <span key={idx}>
                      {idx > 0 && ' | '}
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        {link.replace('https://', '')}
                      </a>
                    </span>
                  ))}
                </p>
              )}
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
