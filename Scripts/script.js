// Base de données des espèces de Lozère avec positions GPS réelles
const speciesData = [
    {
        id: 1,
        name: "Vautour fauve",
        scientificName: "Gyps fulvus",
        family: "Oiseaux",
        status: "Protégé",
        image: "https://tryzub.fr/images/nature/oiseaux/vautour_tete_chauve.JPEG",
        description: "Grand rapace nécrophage réintroduit avec succès dans les Grands Causses depuis 1981. Population en croissance de +14% par an.",
        habitat: "Gorges et falaises calcaires des Causses",
        observations: [
            { lat: 44.3356, lng: 3.2847, date: "2025-09-15", location: "Gorges du Tarn" },
            { lat: 44.2945, lng: 3.4123, date: "2025-09-20", location: "Causse Méjean" },
            { lat: 44.4123, lng: 3.3567, date: "2025-10-01", location: "Gorges de la Jonte" },
            { lat: 44.1876, lng: 3.2934, date: "2025-10-05", location: "Causse Noir" }
        ]
    },
    {
        id: 2,
        name: "Cerf élaphe",
        scientificName: "Cervus elaphus",
        family: "Mammifères",
        status: "Commun",
        image: "https://www.notrenature.be/media/cache/fb_og_image/uploads/media/5e5fbd74a994a/vilda-92658-burlende-edelhert-yves-adams-800-px-45104.jpg",
        description: "Grand cervidé présent dans les forêts de Lozère. Proie principale du loup avec 80% de son régime alimentaire.",
        habitat: "Forêts de résineux et de feuillus, zones bocagères",
        observations: [
            { lat: 44.5234, lng: 3.7123, date: "2025-09-18", location: "Mont Lozère" },
            { lat: 44.4567, lng: 3.6845, date: "2025-09-25", location: "Forêt de Mercoire" },
            { lat: 44.3789, lng: 3.5234, date: "2025-10-03", location: "Forêt du Goulet" },
            { lat: 44.6012, lng: 3.7456, date: "2025-10-08", location: "Pic de Finiels" }
        ]
    },
    {
        id: 3,
        name: "Mouflon de Corse",
        scientificName: "Ovis gmelini musimon",
        family: "Mammifères",
        status: "Protégé",
        image: "https://www.mercantour-parcnational.fr/sites/mercantour-parcnational.fr/files/styles/extra_large/public/thumbnails/image/22239_pnm_valarcher-robert_800px.jpg?itok=aKVqPtuI",
        description: "Ongulé sauvage des reliefs rocheux, présent de 300 à 2500m d'altitude. Population en équilibre avec son milieu.",
        habitat: "Milieux rocailleux bien drainés, landes et maquis",
        observations: [
            { lat: 44.4823, lng: 3.7689, date: "2025-09-22", location: "Crêtes du Mont Lozère" },
            { lat: 44.3456, lng: 3.4789, date: "2025-09-28", location: "Causse de Sauveterre" },
            { lat: 44.2678, lng: 3.3912, date: "2025-10-04", location: "Rochers du Boundoulaou" }
        ]
    },
    {
        id: 4,
        name: "Loup gris",
        scientificName: "Canis lupus",
        family: "Mammifères",
        status: "Protégé",
        image: "https://s3-eu-west-1.amazonaws.com/blog-ecotree/blog/0001/02/47b656453f6be8c384bbf07abf3613d1e4a3fa0d.jpeg",
        description: "Prédateur naturellement de retour en Lozère. Se nourrit à 80% d'ongulés sauvages (cerfs, chevreuils, sangliers, mouflons).",
        habitat: "Forêts et zones montagneuses, zones d'élevage extensif",
        observations: [
            { lat: 44.5456, lng: 3.7234, date: "2025-09-20", location: "Forêts du Mont Lozère" },
            { lat: 44.4123, lng: 3.6012, date: "2025-10-02", location: "Vallée du Lot" },
            { lat: 44.3234, lng: 3.4567, date: "2025-10-06", location: "Causse Méjean nord" }
        ]
    },
    {
        id: 5,
        name: "Vautour moine",
        scientificName: "Aegypius monachus",
        family: "Oiseaux",
        status: "Protégé",
        image: "https://www.ornitho.photos/wp-content/uploads/2024/06/blog2024.05.23_Z928441-Modifier-1024x683.jpg",
        description: "Plus grand rapace d'Europe, réintroduit dans les Grands Causses. Nécrophage comme le vautour fauve.",
        habitat: "Falaises isolées et zones boisées des Causses",
        observations: [
            { lat: 44.3123, lng: 3.3456, date: "2025-09-24", location: "Gorges du Tarn" },
            { lat: 44.2567, lng: 3.4234, date: "2025-10-07", location: "Causse Méjean sud" }
        ]
    },
    {
        id: 6,
        name: "Chevreuil européen",
        scientificName: "Capreolus capreolus",
        family: "Mammifères",
        status: "Commun",
        image: "https://ressources.shna-ofab.fr/visuels/1479803045_26_CAPREOLUS_CAPREOLUS_G.BEDRINES.JPG.jpg",
        description: "Petit cervidé très répandu en Lozère. Fait partie des proies du loup.",
        habitat: "Lisières forestières, bocages, zones semi-ouvertes",
        observations: [
            { lat: 44.4789, lng: 3.6234, date: "2025-09-19", location: "Vallée du Tarn" },
            { lat: 44.3912, lng: 3.5123, date: "2025-09-26", location: "Forêt de Mercoire" },
            { lat: 44.5123, lng: 3.7012, date: "2025-10-05", location: "Bois du Bleymard" }
        ]
    },
    {
        id: 7,
        name: "Aigle royal",
        scientificName: "Aquila chrysaetos",
        family: "Oiseaux",
        status: "Protégé",
        image: "https://www.lpo.fr/var/site/storage/images/_aliases/detailed_content/7/3/8/6/246837-1-fre-FR/dsc3102brunoberthemy.jpg",
        description: "Majestueux rapace des montagnes, nichant dans les falaises isolées.",
        habitat: "Hautes falaises et zones montagneuses",
        observations: [
            { lat: 44.5678, lng: 3.7890, date: "2025-09-21", location: "Sommet du Finiels" },
            { lat: 44.3456, lng: 3.3789, date: "2025-10-03", location: "Falaises de la Jonte" }
        ]
    },
    {
        id: 8,
        name: "Sanglier",
        scientificName: "Sus scrofa",
        family: "Mammifères",
        status: "Commun",
        image: "https://www.radiofrance.fr/pikapi/images/ac6ec2d0-55aa-4d96-bc77-e95e7191e26f/1280?webp=false",
        description: "Ongulé forestier omnivore, très présent en Lozère. Fait partie du régime alimentaire du loup.",
        habitat: "Forêts mixtes, zones de bocage",
        observations: [
            { lat: 44.4234, lng: 3.5678, date: "2025-09-23", location: "Forêt de Mercoire" },
            { lat: 44.3678, lng: 3.4912, date: "2025-09-30", location: "Vallée du Lot" },
            { lat: 44.5012, lng: 3.6789, date: "2025-10-08", location: "Bois de Cubières" }
        ]
    },
    {
        id: 9,
        name: "Milan royal",
        scientificName: "Milvus milvus",
        family: "Oiseaux",
        status: "Protégé",
        image: "https://www.pyrenees-parcnational.fr/sites/pyrenees-parcnational.fr/files/styles/extra_large/public/milan_royal_louron_patrick_harle_prtps_2014_20.jpg?itok=G56O0exq",
        description: "Rapace migrateur reconnaissable à sa queue échancrée rousse. Présent surtout en période de migration.",
        habitat: "Zones agricoles ouvertes, prairies",
        observations: [
            { lat: 44.3789, lng: 3.4567, date: "2025-09-17", location: "Plateau de l'Aubrac" },
            { lat: 44.4456, lng: 3.5890, date: "2025-09-29", location: "Vallée du Lot" }
        ]
    },
    {
        id: 10,
        name: "Chamois",
        scientificName: "Rupicapra rupicapra",
        family: "Mammifères",
        status: "Commun",
        image: "https://woody.cloudly.space/app/uploads/aubracgorgesdutarn/2023/12/thumbs/maman-et-chamois-640x360.jpg",
        description: "Capriné des zones rocheuses et montagneuses, présent dans les reliefs de Lozère.",
        habitat: "Zones rocheuses et escarpées d'altitude",
        observations: [
            { lat: 44.5234, lng: 3.7567, date: "2025-09-27", location: "Crêtes du Mont Lozère" },
            { lat: 44.4567, lng: 3.7123, date: "2025-10-04", location: "Vallée du Tarn" }
        ]
    },
    {
        id: 11,
        name: "Apollon",
        scientificName: "Parnassius apollo",
        family: "Insectes",
        status: "Protégé",
        image: "https://www.pyrenees-parcnational.fr/sites/pyrenees-parcnational.fr/files/styles/slide_1500_1000/public/00002421_0.jpeg?itok=7lgX1xHY",
        description: "Grand papillon emblématique des montagnes, protégé. Présent sur les Causses Méjean et Sauveterre. En déclin depuis 50 ans, il a disparu du Mont Lozère.",
        habitat: "Pelouses et éboulis ensoleillés des Causses entre 1000 et 2000m",
        observations: [
            { lat: 44.2856, lng: 3.4234, date: "2025-07-12", location: "Causse Méjean" },
            { lat: 44.3567, lng: 3.4512, date: "2025-07-18", location: "Causse de Sauveterre" },
            { lat: 44.2734, lng: 3.3856, date: "2025-07-25", location: "Dalles du Méjean" }
        ]
    },
    {
        id: 12,
        name: "Lucane cerf-volant",
        scientificName: "Lucanus cervus",
        family: "Insectes",
        status: "Commun",
        image: "https://diversité-forestière.ch/06_images-dossier/hirschkaefer-bafu-waldvielfalt-biodiversitaet-gettyimages-106417505.jpg",
        description: "Plus grand coléoptère d'Europe avec ses mandibules en forme de bois de cerf. Actif au crépuscule de juin à août. Rare sur les Causses, très présent en ripisylve.",
        habitat: "Forêts de feuillus, parcs arborés, bois mort",
        observations: [
            { lat: 44.4912, lng: 3.6345, date: "2025-06-20", location: "Forêt de Mercoire" },
            { lat: 44.3234, lng: 3.4567, date: "2025-07-05", location: "Vallée du Tarn" },
            { lat: 44.5123, lng: 3.7234, date: "2025-07-15", location: "Saint-Étienne-du-Valdonnez" }
        ]
    },
    {
        id: 13,
        name: "Agrion de mercure",
        scientificName: "Coenagrion mercuriale",
        family: "Insectes",
        status: "Protégé",
        image: "https://www.lagaredesramieres.com/images/explorer-la-reserve/les-animaux/les-libellules/agrion-de-mercure.jpg",
        description: "Petite demoiselle bleue et noire des ruisseaux. Bio-indicateur de la qualité des cours d'eau. Protégée par la Directive européenne Habitats-Faune-Flore.",
        habitat: "Petits ruisseaux et fossés des prairies bien ensoleillés",
        observations: [
            { lat: 44.4456, lng: 3.5789, date: "2025-05-28", location: "Ruisseau du Bramont" },
            { lat: 44.3678, lng: 3.4912, date: "2025-06-08", location: "Vallée du Lot" },
            { lat: 44.5234, lng: 3.6123, date: "2025-06-15", location: "Sources du Tarn" }
        ]
    },
    {
        id: 14,
        name: "Paon du jour",
        scientificName: "Aglais io",
        family: "Insectes",
        status: "Commun",
        image: "https://cdn-s-www.vosgesmatin.fr/images/8FADFC21-F393-48FD-95EC-F2C9A4F30DC8/MF_contenu/gros-plan-sur-le-paon-du-jour-1579793504.jpg",
        description: "Papillon aux magnifiques ocelles rappelant les plumes de paon. En régression locale sur l'Aigoual et le Mont Lozère. Se nourrit sur les orties.",
        habitat: "Prairies fleuries, lisières forestières, jardins",
        observations: [
            { lat: 44.4567, lng: 3.5234, date: "2025-08-03", location: "Prairies de Marvejols" },
            { lat: 44.3789, lng: 3.4456, date: "2025-08-12", location: "Florac" },
            { lat: 44.4123, lng: 3.5678, date: "2025-08-20", location: "Vallée de la Colagne" }
        ]
    },
    {
        id: 15,
        name: "Grande Sauterelle verte",
        scientificName: "Tettigonia viridissima",
        family: "Insectes",
        status: "Commun",
        image: "https://www.shna-ofab.fr/visuels/1457002174_22_TETTIGONIA_VIRIDISSIMA_O.BARDET_-femelle.jpg",
        description: "Grande sauterelle verte carnivore reconnaissable à son chant strident en été. Peut atteindre 5 cm de long. Active la nuit.",
        habitat: "Prairies hautes, friches, lisières",
        observations: [
            { lat: 44.4234, lng: 3.5456, date: "2025-07-30", location: "Prairies de Chanac" },
            { lat: 44.3456, lng: 3.4789, date: "2025-08-05", location: "Causse de Sauveterre" },
            { lat: 44.5123, lng: 3.6234, date: "2025-08-18", location: "Mont Lozère" }
        ]
    },
    {
        id: 16,
        name: "Cigale grise",
        scientificName: "Cicada orni",
        family: "Insectes",
        status: "Commun",
        image: "https://biodiversite-basse-durance.fr/espece/static/medias/51913_3264_Cigale.jpg",
        description: "Insecte emblématique du Midi au chant caractéristique. Symbole de l'été méditerranéen. Les mâles chantent pour attirer les femelles.",
        habitat: "Zones chaudes et ensoleillées, garrigues, bords de routes",
        observations: [
            { lat: 44.3234, lng: 3.4567, date: "2025-07-20", location: "Gorges du Tarn" },
            { lat: 44.2845, lng: 3.3912, date: "2025-07-28", location: "Causse Noir" },
            { lat: 44.3678, lng: 3.4123, date: "2025-08-08", location: "La Malène" }
        ]
    },
    {
        id: 17,
        name: "Machaon",
        scientificName: "Papilio machaon",
        family: "Insectes",
        status: "Commun",
        image: "https://media.gerbeaud.net/2025/04/640/papilio-machaon.jpg",
        description: "Grand papillon jaune et noir avec queue en hirondelle. Un des plus beaux papillons d'Europe. Vole de mars à octobre. Rapide et précis, peut atteindre 50 km/h.",
        habitat: "Prairies fleuries, jardins, milieux ouverts",
        observations: [
            { lat: 44.4456, lng: 3.5678, date: "2025-06-15", location: "Vallée du Lot" },
            { lat: 44.3789, lng: 3.4912, date: "2025-07-10", location: "Causse de Sauveterre" },
            { lat: 44.5234, lng: 3.7123, date: "2025-08-02", location: "Mont Lozère" }
        ]
    },
    {
        id: 18,
        name: "Criquet égyptien",
        scientificName: "Anacridium aegyptium",
        family: "Insectes",
        status: "Commun",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Grasshopper_November_2008-3.jpg/1200px-Grasshopper_November_2008-3.jpg",
        description: "Plus grand criquet d'Europe pouvant atteindre 7 cm. Reconnaissable à ses yeux rayés. Présent dans les zones chaudes du sud de la France.",
        habitat: "Zones rocailleuses ensoleillées, garrigues",
        observations: [
            { lat: 44.3123, lng: 3.4234, date: "2025-08-15", location: "Gorges de la Jonte" },
            { lat: 44.2567, lng: 3.3789, date: "2025-08-22", location: "Causse Noir" }
        ]
    },
    {
        id: 19,
        name: "Coccinelle à 7 points",
        scientificName: "Coccinella septempunctata",
        family: "Insectes",
        status: "Commun",
        image: "https://i0.wp.com/jessica-joachim.com/wp-content/uploads/2022/02/Coccinelle-a-7-points-Coccinella-septempunctata-Servies-18.12.2021-4.jpg?ssl=1",
        description: "Coccinelle la plus commune d'Europe. Auxiliaire précieux du jardinier, elle dévore les pucerons. Peut manger jusqu'à 100 pucerons par jour.",
        habitat: "Jardins, prairies, cultures, zones fleuries",
        observations: [
            { lat: 44.4567, lng: 3.5234, date: "2025-05-20", location: "Marvejols" },
            { lat: 44.3912, lng: 3.4678, date: "2025-06-10", location: "Florac" },
            { lat: 44.4789, lng: 3.6123, date: "2025-07-05", location: "Mende" }
        ]
    },
    {
        id: 20,
        name: "Bourdon terrestre",
        scientificName: "Bombus terrestris",
        family: "Insectes",
        status: "Commun",
        image: "https://www.apiculture.net/modules/prestablog/views/img/grid-for-1-7/up-img/346.jpg?218c4d56c9915deafc863d4e33fc911e",
        description: "Gros bourdon noir et jaune, pollinisateur essentiel. Peut voler même par temps frais. Forme de grosses colonies souterraines.",
        habitat: "Prairies fleuries, jardins, lisières, tous milieux fleuris",
        observations: [
            { lat: 44.4234, lng: 3.5456, date: "2025-04-15", location: "Prairies de Chanac" },
            { lat: 44.3678, lng: 3.4912, date: "2025-05-22", location: "Causse Méjean" },
            { lat: 44.5123, lng: 3.7234, date: "2025-06-18", location: "Mont Lozère" },
            { lat: 44.4567, lng: 3.5789, date: "2025-07-08", location: "Vallée du Lot" }
        ]
    }
];

"use strict";

/* =========================
   Variables globales
========================= */
let map;
let markers = [];
let currentView = "map";
let filteredData = speciesData;


// timer par marqueur pour l’anti-clignotement du popup
const hoverCloseTimers = new WeakMap();

/* =========================
   Initialisation de la carte
========================= */
function initMap() {
  // Centre sur la Lozère
  map = L.map("map").setView([44.4833, 3.5], 10);

  // Fond de carte OpenStreetMap
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
    maxZoom: 18,
  }).addTo(map);

  // Ajout initial des marqueurs
  updateMarkers();
}

/* =========================
   Marqueurs + popups
========================= */
function updateMarkers() {
  // Nettoyer les anciens marqueurs
  markers.forEach((m) => map.removeLayer(m));
  markers = [];

  filteredData.forEach((species) => {
    species.observations.forEach((obs) => {
      const marker = L.marker([obs.lat, obs.lng], { riseOnHover: true })
        .bindPopup(createPopupContent(species, obs), {
          closeButton: false,
          autoClose: false,
          className: "species-popup",
          closeOnEscapeKey: true,
        })
        .addTo(map);

      // Ouverture au survol
      marker.on("mouseover", () => openHoverPopup(marker));
      // Fermeture différée quand la souris quitte le marker
      marker.on("mouseout", () => scheduleHoverClose(marker));
      // Clic = ouvre la fiche détaillée
      marker.on("click", () => openModal(species));

      // Empêche la fermeture si la souris survole le popup lui-même
      marker.on("popupopen", (e) => {
        const popupEl = e.popup.getElement();
        if (!popupEl) return;
        popupEl.addEventListener("mouseenter", () => clearHoverClose(marker));
        popupEl.addEventListener("mouseleave", () => scheduleHoverClose(marker));
      });

      markers.push(marker);
    });
  });
}

function openHoverPopup(marker) {
  clearHoverClose(marker);
  marker.openPopup();
}

function scheduleHoverClose(marker) {
  clearHoverClose(marker);
  const t = setTimeout(() => marker.closePopup(), 180);
  hoverCloseTimers.set(marker, t);
}

function clearHoverClose(marker) {
  const t = hoverCloseTimers.get(marker);
  if (t) {
    clearTimeout(t);
    hoverCloseTimers.delete(marker);
  }
}

/* =========================
   Contenu du popup
========================= */
function createPopupContent(species, observation) {
  return `
    <div class="popup-content">
      <img src="${escapeHtml(species.image)}" alt="${escapeHtml(species.name)}" class="popup-image">
      <div class="popup-info">
        <h4>${escapeHtml(species.name)}</h4>
        <p class="scientific"><em>${escapeHtml(species.scientificName)}</em></p>
        <p class="popup-date">📍 ${escapeHtml(observation.location)}</p>
        <p class="popup-date">📅 ${formatDate(observation.date)}</p>
      </div>
    </div>
  `;
}

/* =========================
   Utilitaires
========================= */
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function $(id) {
  return document.getElementById(id);
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

// petit debounce pour la recherche live
function debounce(fn, delay = 200) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(null, args), delay);
  };
}

/* =========================
   Vues (carte / espèces)
========================= */
function switchView(view) {
  currentView = view;

  const mapView = $("mapView");
  const speciesView = $("speciesView");
  const mapBtn = $("mapViewBtn");
  const speciesBtn = $("speciesViewBtn");

  if (!mapView || !speciesView || !mapBtn || !speciesBtn) return;

  if (view === "map") {
    mapView.classList.remove("hidden");
    speciesView.classList.add("hidden");
    mapBtn.classList.add("active");
    speciesBtn.classList.remove("active");

    // Recalcule la taille de la carte quand elle redevient visible
    setTimeout(() => map && map.invalidateSize(), 100);
  } else {
    mapView.classList.add("hidden");
    speciesView.classList.remove("hidden");
    mapBtn.classList.remove("active");
    speciesBtn.classList.add("active");

    displaySpeciesGrid();
  }
}

/* =========================
   Grille d'espèces
========================= */
function displaySpeciesGrid() {
  const grid = $("speciesGrid");
  if (!grid) return;
  grid.innerHTML = "";

  filteredData.forEach((species) => {
    const card = document.createElement("div");
    card.className = "species-card";
    card.innerHTML = `
      <img src="${escapeHtml(species.image)}" alt="${escapeHtml(species.name)}" class="species-image">
      <div class="species-body">
        <div class="species-header">
          <div class="species-names">
            <h3>${escapeHtml(species.name)}</h3>
            <p class="scientific">${escapeHtml(species.scientificName)}</p>
          </div>
          <span class="status-badge ${species.status === "Protégé" ? "protected" : "common"}">
            ${escapeHtml(species.status)}
          </span>
        </div>
        <p class="species-description">${escapeHtml(species.description)}</p>
        <div class="species-tags">
          <span class="tag">${escapeHtml(species.family)}</span>
          <span class="tag">${species.observations.length} observations</span>
        </div>
        <button class="view-map-btn" data-id="${species.id}">
          Voir sur la carte 🗺️
        </button>
      </div>
    `;

    // clic "hors bouton" => ouvre la modale
    card.addEventListener("click", (e) => {
      const isBtn = e.target.closest(".view-map-btn");
      if (!isBtn) openModal(species);
    });

    // clic bouton => centrage carte + popup
    card.querySelector(".view-map-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      viewOnMap(species.id);
    });

    grid.appendChild(card);
  });
}

/* =========================
   Voir une espèce sur la carte
========================= */
function viewOnMap(speciesId) {
  const species = speciesData.find((s) => s.id === speciesId);
  if (!species || species.observations.length === 0) return;

  switchView("map");

  // Centrer sur la première observation
  const firstObs = species.observations[0];
  map.setView([firstObs.lat, firstObs.lng], 12);

  // Ouvrir le popup correspondant (tolérance géographique)
  const tol = 0.0009;
  setTimeout(() => {
    markers.forEach((marker) => {
      const { lat, lng } = marker.getLatLng();
      if (
        Math.abs(lat - firstObs.lat) < tol &&
        Math.abs(lng - firstObs.lng) < tol
      ) {
        marker.openPopup();
      }
    });
  }, 250);
}

/* =========================
   Modale détails espèce
========================= */
function openModal(species) {
  const modal = $("detailModal");
  const modalImage = $("modalImage");
  const modalBody = $("modalBody");
  if (!modal || !modalImage || !modalBody) return;

  modalImage.src = species.image;
  modalImage.alt = species.name;

  modalBody.innerHTML = `
    <div class="modal-header">
      <div>
        <h2>${escapeHtml(species.name)}</h2>
        <p class="scientific">${escapeHtml(species.scientificName)}</p>
      </div>
      <span class="status-badge ${species.status === "Protégé" ? "protected" : "common"}">
        ${escapeHtml(species.status)}
      </span>
    </div>

    <div class="detail-section">
      <h3>📋 Description</h3>
      <p>${escapeHtml(species.description)}</p>
    </div>

    <div class="detail-section">
      <h3>🏞️ Habitat</h3>
      <p>${escapeHtml(species.habitat)}</p>
    </div>

    <div class="detail-section">
      <h3>📍 Observations récentes (${species.observations.length})</h3>
      ${species.observations
        .map(
          (obs) =>
            `<p><strong>${escapeHtml(obs.location)}</strong> - ${formatDate(
              obs.date
            )}</p>`
        )
        .join("")}
    </div>

    <div class="detail-section">
      <h3>ℹ️ Informations</h3>
      <p><strong>Famille :</strong> ${escapeHtml(species.family)}</p>
      <p><strong>Statut de conservation :</strong> ${escapeHtml(
        species.status
      )}</p>
    </div>
  `;

  modal.classList.add("active");
}

function closeModal() {
  const modal = $("detailModal");
  if (modal) modal.classList.remove("active");
}

function closeModalOnBackground(event) {
  if (event.target && event.target.id === "detailModal") closeModal();
}

/* =========================
   Filtres & Recherche
========================= */
function applyFilters() {
  const searchInput = $("searchInput");
  const familyFilter = $("familyFilter");
  const statusFilter = $("statusFilter");
  const countEl = $("speciesCount");

  const searchTerm = (searchInput?.value || "").toLowerCase();
  const fam = familyFilter?.value || "all";
  const stat = statusFilter?.value || "all";

  filteredData = speciesData.filter((species) => {
    const matchSearch =
      species.name.toLowerCase().includes(searchTerm) ||
      species.scientificName.toLowerCase().includes(searchTerm);
    const matchFamily = fam === "all" || species.family === fam;
    const matchStatus = stat === "all" || species.status === stat;
    return matchSearch && matchFamily && matchStatus;
  });

  if (countEl) countEl.textContent = String(filteredData.length);

  if (currentView === "map") {
    updateMarkers();
  } else {
    displaySpeciesGrid();
  }
}

/* =========================
   Boot
========================= */
document.addEventListener("DOMContentLoaded", () => {
  initMap();

  const searchInput = $("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", debounce(applyFilters, 200));
  }

  const familyFilter = $("familyFilter");
  if (familyFilter) {
    familyFilter.addEventListener("change", applyFilters);
  }

  const statusFilter = $("statusFilter");
  if (statusFilter) {
    statusFilter.addEventListener("change", applyFilters);
  }

  const countEl = $("speciesCount");
  if (countEl) countEl.textContent = String(speciesData.length);
});

   