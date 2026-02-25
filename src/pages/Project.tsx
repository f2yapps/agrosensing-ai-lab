const RESEARCH_HIGHLIGHTS = [
  { img: '/images/Highlights/Highlights4.jpg', alt: 'Graphical abstract', title: 'Rootzone Soil Moisture Dynamics Prediction Using Artificial Intelligence Algorithms', summary: 'Developing and evaluating artificial intelligence models to predict rootzone soil moisture dynamics for improved irrigation scheduling and soil water management. The work supports site-specific irrigation decisions and more efficient use of water in cropping systems.', links: ['https://doi.org/10.1016/j.compag.2024.109414'] },
  { img: '/images/Highlights/Highlights1.jpg', alt: 'Graphical abstract', title: 'Evapotranspiration Prediction Using UAV-Based Imagery and Artificial Intelligence Algorithms', summary: 'Using UAV-based multispectral and thermal imagery with artificial intelligence algorithms to estimate crop evapotranspiration for field-scale water use assessments. These estimates help quantify actual water use and support irrigation planning and water budgeting.', links: ['https://doi.org/10.1016/j.rsase.2025.101661', 'https://doi.org/10.1016/j.scitotenv.2023.169403'] },
  { img: '/images/Highlights/Highlights9.png', alt: 'Graphical abstract', title: 'High-Throughput Plant Phenotyping Using Unmanned Aerial Vehicle (UAV) Imagery and Artificial Intelligence Algorithms', summary: 'Leveraging multispectral UAV data with AI to extract crop traits, monitor growth, and predict yield at scale for breeding and precision agriculture. The approach enables rapid, non-destructive assessment of large field trials and commercial fields.', links: ['https://doi.org/10.1016/j.compag.2023.108064', 'https://doi.org/10.1016/j.eja.2025.127557'] },
  { img: '/images/Highlights/Highlights5.jpg', alt: 'Graphical abstract', title: 'Canopy Temperature Prediction Using RGB Images and Artificial Intelligence Algorithms', summary: 'Using RGB imagery with machine learning to predict canopy temperature for crop water status and growth monitoring. Low-cost RGB cameras can thus support irrigation and stress detection where thermal sensors are not available.', links: ['https://doi.org/10.1016/j.compag.2025.111273'] },
  { img: '/images/Highlights/Highlights6.jpg', alt: 'AgriSenAI image processing pipeline', title: 'AgriSenAI: Automating UAV Thermal and Multispectral Image Processing for Precision Agriculture', summary: 'An automated pipeline that processes UAV thermal and multispectral imagery from acquisition through analytics, enabling consistent, scalable image handling for precision agriculture. Standardized workflows reduce processing time and support repeatable research and operational use.', links: ['https://doi.org/10.1016/j.softx.2025.102083'] },
  { img: '/images/Highlights/Hightlights13.png', alt: 'AI-enabled precision irrigation decision support', title: 'Artificial Intelligence–Enabled Precision Irrigation Decision Support Tool', summary: 'AI-driven decision-support that uses crop coefficients, soil and crop information, soil moisture, and weather data, along with ensemble machine learning modeling, to recommend when and where to irrigate, helping optimize water use and improve productivity. The tool integrates these inputs to deliver actionable irrigation guidance at the field scale.' },
  { img: '/images/Highlights/Hightlights8.jpg', alt: 'Graphical abstract', title: 'Exploring Deficit Irrigation as a Water Conservation Strategy: Insights from Field Experiments and Model Simulation', summary: 'Field experiments and model simulations to evaluate deficit irrigation for water savings while maintaining yield, with insights for sustainable water use in agriculture. Results inform irrigation strategies under water-limited conditions and variable climate.', links: ['https://doi.org/10.1016/j.agwat.2023.108490'] },
  { img: '/images/Highlights/Hightlights7.png', alt: 'Graphical abstract', title: 'Predicting Sea-Level Rise Impacts on Groundwater Quantity and Quality in Complex Hydrogeological Systems', summary: 'Modeling and predicting how sea-level rise affects groundwater levels and salinity in complex coastal hydrogeological systems to support adaptation planning. The work helps identify vulnerable zones and prioritize management and policy responses.', links: ['https://doi.org/10.1007/s41748-025-00583-5'] },
  { img: '/images/Highlights/Highlights10.png', alt: 'Graphical abstract', title: 'Simulating Soil Hydrologic Dynamics Using Crop Growth, Machine Learning, and Hydrological Models', summary: 'Leveraging crop growth, machine learning (ML), and hydrological models to simulate soil moisture and water fluxes under variable management and climate. The combined approach improves predictions of soil water availability and supports irrigation and nutrient management decisions.', links: ['https://doi.org/10.1016/j.compag.2024.109186', 'https://doi.org/10.1007/s40808-025-02659-7'] },
  { img: '/images/Highlights/Highlights14.png', alt: 'Graphical abstract', title: 'Integration of Smartphone Imagery with Topographic Parameters for Soil Organic Carbon Prediction in the Indo-Gangetic Plains: An Interpretable Machine Learning Approach', summary: 'Combining smartphone-captured imagery and topographic data with interpretable machine learning to predict soil organic carbon across the Indo-Gangetic Plains for sustainable land management. The method offers a low-cost, scalable option for SOC mapping where conventional sampling is limited.', links: ['https://doi.org/10.1016/j.compag.2025.111279'] },
  { img: '/images/Highlights/highlights17.png', alt: 'Graphical abstract', title: 'Application of Artificial Intelligence Algorithm in Image Processing for Cattle Disease Diagnosis', summary: 'Integrating expert systems with deep learning image processing to identify livestock diseases from symptom images and support rapid, effective diagnosis in resource-limited settings. The system helps bridge diagnostic gaps where veterinary expertise or lab access is limited.', links: ['https://doi.org/10.4236/jilsa.2022.144006'] },
  { img: '/images/Highlights/abiotic_biotic_stress.png', alt: 'Plant stress detection', title: 'Plant Biotic and Abiotic Stress Detection Using AI Classification Models', summary: 'Developing and deploying AI-powered classification models to detect and differentiate plant biotic stresses (diseases, pests, pathogens) and abiotic stresses (drought, nutrient deficiency, heat, salinity) using multispectral and thermal UAV imagery combined with ground-based sensors. The models enable early stress detection, support targeted intervention strategies, and improve crop health management for enhanced productivity and resilience under variable environmental conditions.' },
]

export default function Project() {
  return (
    <>
      <h1 className="page-title">Research Vision &amp; Program</h1>
      <p>My research program addresses a fundamental challenge in sustainable agriculture: how to optimize water and nutrient use while adapting to climate variability. I establish and lead the <strong>AgroSensing &amp; Intelligent Systems Lab</strong>, which integrates physics-based hydrological modeling with artificial intelligence to develop deployable decision support systems for precision agriculture. The lab combines multi-scale sensing (UAV, satellite, IoT), high-performance computing, and digital twin technologies to deliver actionable intelligence for water managers, farmers, and conservation agencies. This work directly supports USDA-NIFA priorities in precision agriculture and water quality, NSF initiatives in cyber-physical systems and AI for environmental monitoring, NASA applications in agricultural remote sensing, and DOE objectives in the water-energy nexus.</p>

      <div style={{ margin: '3rem 0', padding: '0 1rem' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>AI-Based Irrigation Scheduler in Action</h3>
        <p style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#666' }}>Demonstration of our AI-driven precision irrigation decision support tool</p>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '900px', margin: '0 auto' }}>
          <iframe 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '8px' }}
            src="https://www.youtube.com/embed/6GB2gLgE4i4" 
            title="AI-Based Irrigation Scheduler Demonstration"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
        </div>
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

      <h2 className="page-title">Five-Year Research Program</h2>

      <h2 className="cluster-title">Theme 1: Physics-Informed AI for Precision Water Management</h2>
      <p><strong>Funding Target: USDA-NIFA AFRI, NSF CPS</strong> | Establish an integrated research program combining IoT sensor networks, UAV/satellite remote sensing, and HPC-enabled digital twins to optimize irrigation and reduce nutrient losses in tile-drained agricultural systems. Deploy physics-informed neural networks that couple soil water physics with machine learning for real-time irrigation decision support. Field validation across Mid-Atlantic watersheds will quantify water savings and nutrient-load reductions, directly supporting Chesapeake Bay restoration goals. Lab infrastructure will include UAV platforms, IoT sensor networks, edge computing systems, and partnerships with USDA-ARS and regional water authorities.</p>

      <figure className="project-figure">
        <img src="/images/News/diagram1.png" alt="AI-enabled precision agriculture framework" width={600} />
      </figure>

      <figure className="project-figure">
        <img src="/images/News/diagram2.png" alt="Integrated AI Framework – data flow and components overview" width={600} />
      </figure>

      <h2 className="cluster-title">Theme 2: Soil Carbon Monitoring and Climate Adaptation</h2>
      <p><strong>Funding Target: USDA-NRCS CIG, NASA Carbon Monitoring</strong> | Scale high-resolution soil organic carbon (SOC) mapping using integrated UAV-proximal sensor fusion (FT-IR spectrometry, electromagnetic induction) and interpretable machine learning models. Establish validation protocols for USDA-NRCS conservation program outcomes and carbon credit verification. Couple SOC dynamics with climate scenario modeling to evaluate adaptation strategies (deficit irrigation, cover cropping, conservation tillage) under projected warming and precipitation shifts. Lab will maintain long-term field monitoring sites, soil sensing equipment, and computational infrastructure for process-based carbon modeling (RothC, DayCent).</p>

      <figure style={{ margin: '2rem 0', textAlign: 'center' }}>
        <img src="/images/News/Banners17.png" alt="Soil health and carbon dynamics research" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
      </figure>

      <h2 className="cluster-title">Theme 3: AI-Enabled Crop and Animal Health Monitoring</h2>
      <p><strong>Funding Target: USDA-NIFA AFRI (Plant Health), NSF AI Institutes</strong> | Deploy operational AI systems for early detection of biotic and abiotic stresses using multi-platform sensing (UAV multispectral/thermal, ground-based IoT) and modified CNN architectures validated under diverse field conditions. Extend framework to livestock health through smartphone-based disease diagnosis, addressing veterinary service gaps in underserved regions. Integrate high-throughput phenotyping with breeding programs and develop explainable AI models for grower adoption. Lab infrastructure will include controlled-environment facilities, image annotation systems, and partnerships with extension networks for real-world deployment.</p>

      <figure style={{ margin: '2rem 0', textAlign: 'center' }}>
        <img src="/images/News/Banner9.png" alt="Field research and technology" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
      </figure>

      <h2 className="cluster-title">Theme 4: International Collaboration and Broader Impacts</h2>
      <p><strong>Funding Target: NSF PIRE, USAID Feed the Future</strong> | Lead international research collaborations applying AI and sensing technologies to smallholder farming systems in data-scarce environments. Develop low-cost, smartphone-based tools for soil assessment and irrigation guidance deployable in resource-limited settings. Establish global mentorship networks connecting students in developing regions with research opportunities, strengthening diversity in agricultural and environmental sciences. This work positions the lab for NSF international partnerships and USAID development programs aligned with global food security objectives.</p>

      <figure style={{ margin: '2rem 0', textAlign: 'center' }}>
        <img src="/images/News/Bannners20.png" alt="Global capacity building" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
      </figure>

    </>
  )
}
