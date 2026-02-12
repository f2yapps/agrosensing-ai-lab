import { publicationJournalArticles } from '../data/publicationData'

export default function Publication() {
  return (
    <>
      <h1 className="page-title">Publications</h1>
      <p><strong>Peer-reviewed total: 23</strong> | h-index: 14 | i10-index: 15</p>

      <h2>Peer-Reviewed Journal Articles</h2>
      <ol className="pub-list">
        {publicationJournalArticles.map((html, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: html }} />
        ))}
      </ol>

      <h2>Peer-Reviewed Extension Factsheets</h2>
      <ul className="pub-list">
        <li>Bartell, C., Bayabil, H.K., Schaffer, B., Tilahun, F., Getachew, F., 2021. Measuring Leaf Water Potential: AE563/AE563, 10/2021. EDIS 2021.</li>
        <li>Bayabil, H.K., Tilahun, F.T., Li, Y., Campoverde, E.V., 2021. Moisture Retention and Chemical Properties of Nursery Potting Substrates: AE562/AE562, 10/2021. EDIS 2021.</li>
      </ul>

      <h2>Conference Proceedings</h2>
      <ul className="pub-list">
        <li>Bayabil, H.K., <strong>Teshome, F.T.</strong>, Guzman, S.M., Schaffer, B., 2021. Effects of Irrigation Rate on Evapotranspiration Rates of Three Sweet Corn Cultivars. <em>Proceedings of the Florida State Horticultural Society</em>.</li>
        <li>Hailegnaw, N.S., Bayabil, H.K., <strong>Teshome, F.</strong>, Li, Y., Gao, B., 2023. Impacts of flooding-induced salinity on soil hydrology and nutrient leaching from a poorly drained marl soil. ASABE 2023, Omaha, Nebraska. <a href="https://doi.org/10.13031/aim.202300377" target="_blank" rel="noopener">doi:10.13031/aim.202300377</a></li>
      </ul>

      <h2>Invited Conference Abstracts</h2>
      <ul className="pub-list">
        <li><strong>Teshome, F.T.</strong>, H. Bayabil, N. Hailegnaw, and M. Berihun. 2023. Evaluating field-scale hydrologic and crop simulation models in South Florida. Greater Everglades Ecosystem Restoration (GEER) Science Conference. Coral Springs, FL. April 17–20, 2023.</li>
        <li><strong>Teshome, F.T.</strong> and H. Bayabil. 2023. Unmanned Aerial Vehicle (UAV)-based Imaging and Artificial Intelligence (AI) Models for Plant Phenotyping. AI in Agriculture Conference. Orlando, FL. April 17–19, 2023.</li>
      </ul>

      <h2>Conference Abstracts &amp; Presentations</h2>
      <ul className="pub-list">
        <li><strong>Teshome, F.T.</strong>, M. Berihun, N. Hailegnaw, and H. Bayabil. 2024. Soil moisture prediction using Deep Learning and Machine Learning Models. UF Graduate Student Research Day. Gainesville, FL. April 2, 2024.</li>
        <li><strong>Teshome, F.T.</strong>, M. Berihun, N. Hailegnaw, and H. Bayabil. 2023. Evaluating DSSAT Model Performance in Simulating Sweet Corn and Green Beans Growth Under Variable Irrigation Rates. FL-ASABE Annual Meeting. Duck Key, FL. June 4–6, 2023.</li>
        <li><strong>Teshome, F.T.</strong>, M. Berihun, N. Hailegnaw, and H. Bayabil. 2023. Predicting Root Zone Soil Moisture Using Machine Learning Models. FL-ASABE Annual Meeting. Duck Key, FL. June 4–6, 2023.</li>
        <li><strong>Teshome, F.T.</strong>, H. Bayabil, N. Hailegnaw, and M. Berihun. 2023. Evaluating Hydrologic and Crop Simulation Models for Field-Level Evapotranspiration Modeling. ASABE Annual International Meeting. Omaha, NE. July 9–12, 2023.</li>
        <li><strong>Teshome, F.T.</strong> and H. Bayabil. 2023. Application of UAV-Based Imaging and Machine Learning for Sweet Corn Plant Phenotyping. ASABE Annual International Meeting. Omaha, NE. July 9–12, 2023.</li>
        <li>Waqas, M.S., N. Hailegnaw, M. Berihun, S. Madni, Y. Li, <strong>F. Teshome</strong>, H. Bayabil. 2023. Optimizing Irrigation and Phosphorus Management for Snap Bean Production on Calcareous Soils of South Florida. FL-ASABE Annual Meeting. Duck Key, FL. June 4–6, 2023.</li>
        <li>Waqas, M.S., <strong>F. Teshome</strong>, S. Madni, N. Hailegnaw, M. Berihun, H. Bayabil. 2023. Applications of Infrared Sensors for Crop Water Stress Monitoring. FL-ASABE Annual Meeting. Duck Key, FL. June 4–6, 2023.</li>
        <li>Berihun, M.L, <strong>F. Teshome</strong>, N. Hailegnaw, H. Bayabil. 2023. Simulating soil hydrology of irrigated fields using the APEX model. FL-ASABE Annual Meeting. Duck Key, FL. June 4–6, 2023.</li>
        <li>Madni, S.S., <strong>F. Teshome</strong>, N. Hailegnaw, M. Berihun, M. Waqas, H. Bayabi. 2023. Precision Irrigation to improve water efficiency &amp; agricultural productivity. FL-ASABE Annual Meeting. Duck Key, FL. June 4–6, 2023.</li>
        <li><strong>Teshome F.T.</strong>, Haimanote Bayabil, Sandra Guzman, and Bruce Schaffer. Evapotranspiration Rates of Three Sweet Corn Cultivars Under Different Irrigation Levels. FSHS Annual Conference, September 26–28, 2021.</li>
        <li>Bayabil, H. K., <strong>Teshome, F.T.</strong>, Schaffer, B. 2020. Soil Moisture &amp; Canopy Temperature Dynamics of Sweet Corn &amp; Green Beans Under Variable Rate Irrigation. ASABE Florida Section Annual Conference, June 9–13, 2021.</li>
        <li><strong>Teshome, F.T.</strong>, Bayabil, H.K., Welidehanna, F.G., 2020. Application of Unmanned Aerial Vehicles for Estimating Sweet Corn Height. ASABE Florida Section Annual Conference, June 9–13, 2021.</li>
        <li>Bayabil, H. K., <strong>Teshome, F.T.</strong>, Schaffer, B. 2020. Effects of Irrigation Level on Water Use and Yield of Sweet Corn Cultivars. ASABE Florida Section Annual Conference, June 10–13, 2020.</li>
        <li><strong>Teshome, F.T.</strong>, Bayabil, H.K., Welidehanna, F.G., 2020. Evapotranspiration Trend over South Florida. ASABE Florida Section Annual Conference, June 10–13, 2020.</li>
        <li>Hussain, S., Teshome, F.T, B. Tulu, G. Awoke, and H. K. Bayabil. 2024. Levering Artificial Intelligence and UAV Images-based Vegetation Indices for Leaf Area Index (LAI) Estimation. FL-ASABE Annual Meeting. Jensen Beach, FL. June 12–15, 2024. Oral presentation.</li>
        <li>Teshome F.T, Bayabil H.K., Berihun, M.L., N. Hailegnaw, Hussain, S., and Awoke, G.W. Soil Moisture Sensing for Estimating Crop Evapotranspiration. FL-ASABE Annual Meeting. Jensen Beach, FL. June 12–15, 2024. Oral presentation.</li>
        <li>Additional conference abstracts (AWRA 2020, ASABE 2020 Virtual, etc.) on irrigation, evaporation trends, and organic amendments.</li>
      </ul>
    </>
  )
}
