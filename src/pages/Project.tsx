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
      <h1 className="page-title">Research Mission</h1>
      <p>Building AI-enabled agricultural intelligence systems that integrate UAV and satellite imagery, IoT sensor networks, weather data, and process-based models with machine learning and digital twins to support precision water and nutrient management, soil carbon monitoring, and ecosystem resilience. Developing automated pipelines and decision support tools that translate complex agroecosystem processes into actionable guidance for sustainable resource management.</p>

      <figure style={{ margin: '2rem 0', textAlign: 'center' }}>
        <img src="/images/News/Banner9.png" alt="Field research and technology" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
      </figure>

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

      <h2 className="page-title">Future Research Projects</h2>

      <h2 className="cluster-title">Precision Water and Nutrient Management</h2>
      <p>Developing integrated systems for real-time crop water stress detection, irrigation mapping, and nutrient management using multispectral UAV imagery, IoT sensors, and ML algorithms. Creating IoT-enabled digital twins running on HPC platforms that integrate real-time sensor data, weather forecasts, and hydrological simulations for spatially explicit decision-making. Investigating subsurface water movement in tile-drained fields to quantify nutrient-load reductions. Developing mobile applications that deliver AI-driven recommendations for irrigation scheduling, nutrient management, and livestock disease diagnosis.</p>

      <figure className="project-figure">
        <img src="/images/News/diagram1.png" alt="AI-enabled precision agriculture framework" width={600} />
      </figure>

      <figure className="project-figure">
        <img src="/images/News/diagram2.png" alt="Integrated AI Framework – data flow and components overview" width={600} />
      </figure>

      <h2 className="cluster-title">Soil Health, Carbon Dynamics, and Climate Resilience</h2>
      <p>Integrating UAV multispectral imagery, proximal soil sensors (FT-IR, electromagnetic induction), and ML to generate high-resolution SOC maps and monitor soil health indicators across Maryland landscapes. Assessing climate change impacts using crop models and hydrological simulations. Evaluating adaptation strategies including deficit irrigation, heat-tolerant varieties, cover cropping, and conservation practices to enhance agricultural resilience and support carbon sequestration initiatives.</p>

      <figure style={{ margin: '2rem 0', textAlign: 'center' }}>
        <img src="/images/News/Banners17.png" alt="Soil health and carbon dynamics research" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
      </figure>

      <h2 className="cluster-title">AI-Enabled Crop Health and Pest Management</h2>
      <p>Developing AI systems for early detection of plant diseases and pests using modified CNN architectures, deep learning, UAV imagery, and weather data. Creating early warning systems and deploying scalable AI models for integrated pest management. Optimizing nutrient management for Maryland specialty crops and urban agriculture using UAV imagery, remote sensing, IoT, and ML to support urban food production and green infrastructure.</p>

      <h2 className="cluster-title">Global Capacity Building and Knowledge Transfer</h2>
      <p>Expanding a volunteer-based digital platform connecting students and early-career professionals in developing countries with mentors in developed countries, facilitating knowledge transfer, scholarship opportunities, and capacity building in agriculture, water resources, AI, and engineering.</p>

      <figure style={{ margin: '2rem 0', textAlign: 'center' }}>
        <img src="/images/News/Bannners20.png" alt="Global capacity building" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
      </figure>

    </>
  )
}
