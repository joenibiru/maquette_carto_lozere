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
      { lat: 44.2789, lng: 3.2281, date: "2025-09-15", location: "Gorges du Tarn" },
      { lat: 44.26691, lng: 3.39569, date: "2025-09-20", location: "Causse Méjean" },
      { lat: 44.20079, lng: 3.348745, date: "2025-10-01", location: "Gorges de la Jonte" },
      { lat: 44.19611, lng: 3.3775, date: "2025-10-05", location: "Causse Noir" }
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
      { lat: 44.4259, lng: 3.7442, date: "2025-09-18", location: "Mont Lozère" },
      { lat: 44.616667, lng: 3.783333, date: "2025-09-25", location: "Forêt de Mercoire" },
      { lat: 44.51786, lng: 3.79724, date: "2025-10-03", location: "Forêt du Goulet" },
      { lat: 44.4259, lng: 3.7442, date: "2025-10-08", location: "Pic de Finiels" }
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
      { lat: 44.4259, lng: 3.7442, date: "2025-09-22", location: "Crêtes du Mont Lozère" },
      { lat: 44.3983, lng: 3.3122, date: "2025-09-28", location: "Causse de Sauveterre" },
      { lat: 44.2130, lng: 3.4765, date: "2025-10-04", location: "Rochers du Boundoulaou" }
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
      { lat: 44.4259, lng: 3.7442, date: "2025-09-20", location: "Forêts du Mont Lozère" },
      { lat: 44.521514, lng: 3.497547, date: "2025-10-02", location: "Vallée du Lot" },
      { lat: 44.3093, lng: 3.39829, date: "2025-10-06", location: "Causse Méjean nord" }
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
      { lat: 44.2789, lng: 3.2281, date: "2025-09-24", location: "Gorges du Tarn" },
      { lat: 44.243794, lng: 3.351429, date: "2025-10-07", location: "Causse Méjean sud" }
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
      { lat: 44.370452, lng: 3.532874, date: "2025-09-19", location: "Vallée du Tarn" },
      { lat: 44.616667, lng: 3.783333, date: "2025-09-26", location: "Forêt de Mercoire" },
      { lat: 44.486321, lng: 3.735879, date: "2025-10-05", location: "Bois du Bleymard" }
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
      { lat: 44.4259, lng: 3.7442, date: "2025-09-21", location: "Sommet du Finiels" },
      { lat: 44.20079, lng: 3.348745, date: "2025-10-03", location: "Falaises de la Jonte" }
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
      { lat: 44.616667, lng: 3.783333, date: "2025-09-23", location: "Forêt de Mercoire" },
      { lat: 44.521514, lng: 3.497547, date: "2025-09-30", location: "Vallée du Lot" },
      { lat: 44.473225, lng: 3.77161, date: "2025-10-08", location: "Bois de Cubières" }
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
      { lat: 44.722, lng: 3.286, date: "2025-09-17", location: "Aumont Aubrac" },
      { lat: 44.521514, lng: 3.497547, date: "2025-09-29", location: "Vallée du Lot" }
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
      { lat: 44.4259, lng: 3.7442, date: "2025-09-27", location: "Crêtes du Mont Lozère" },
      { lat: 44.370452, lng: 3.532874, date: "2025-10-04", location: "Vallée du Tarn" }
    ]
  },

  {
    id: 11,
    name: "Lézard vert occidental",
    scientificName: "Lacerta bilineata",
    family: "Reptiles",
    status: "Commun",
    image: "https://www.lanaturemoi.com/wp-content/uploads/2021/08/Lezard-vert-Lacerta-bilineata-03.jpg",
    description: "Superbe lézard vert émeraude, emblématique des Causses et des coteaux lozériens. Les mâles se parent d’un bleu intense à la gorge au printemps.",
    habitat: "Haies, prairies, talus, bords de chemins ensoleillés",
    observations: [
      { lat: 44.3983, lng: 3.3122, date: "2025-05-22", location: "Causse de Sauveterre" },
      { lat: 44.466806, lng: 3.340478, date: "2025-06-10", location: "Chanac" },
      { lat: 44.4259, lng: 3.7442, date: "2025-06-20", location: "Mont Lozère" }
    ]
  },
  {
    id: 12,
    name: "Lézard des murailles",
    scientificName: "Podarcis muralis",
    family: "Reptiles",
    status: "Très commun",
    image: "https://www.labaule-guerande.com/medias/images/info_pages/multitailles/640x480_lezard-des-murailles-882.jpg",
    description: "Petit lézard brun rapide et curieux, souvent visible sur les vieux murs ou les rochers. Résistant et bien adapté à l’altitude lozérienne.",
    habitat: "Murets, rocailles, bords de routes, zones urbaines",
    observations: [
      { lat: 44.550133, lng: 3.289894, date: "2025-05-12", location: "Marvejols" },
      { lat: 44.324014, lng: 3.593714, date: "2025-06-04", location: "Florac" },
      { lat: 44.486321, lng: 3.735879, date: "2025-07-15", location: "Le Bleymard" }
    ]
  },
  {
    id: 13,
    name: "Couleuvre d’esculape",
    scientificName: "Zamenis longissimus",
    family: "Reptiles",
    status: "Protégé",
    image: "https://biodiv-occitanie.fr/static/medias/444446_8238_Couleuvre_dEsculape_-_Zamenis_longissimus_-_Ariege.jpg",
    description: "Grande couleuvre non venimeuse, agile et arboricole. Fréquente les forêts et vergers lozériens. Symbole du caducée des médecins.",
    habitat: "Lisières forestières, haies, murets, vergers anciens",
    observations: [
      { lat: 44.521514, lng: 3.497547, date: "2025-06-10", location: "Vallée du Lot" },
      { lat: 44.616667, lng: 3.783333, date: "2025-06-22", location: "Forêt de Mercoire" },
      { lat: 44.4259, lng: 3.7442, date: "2025-07-03", location: "Mont Lozère" }
    ]
  },
  {
    id: 14,
    name: "Vipère aspic",
    scientificName: "Vipera aspis",
    family: "Reptiles",
    status: "Commun",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Vipera_aspis_Lothringen_044.jpg",
    description: "Serpent venimeux discret, reconnaissable à sa tête triangulaire. Elle évite les humains et préfère fuir. Espèce protégée, utile à l’équilibre naturel.",
    habitat: "Landes, éboulis, talus ensoleillés, lisières sèches",
    observations: [
      { lat: 44.26691, lng: 3.39569, date: "2025-07-01", location: "Causse Méjean" },
      { lat: 44.515, lng: 3.255, date: "2025-07-10", location: "Vallée de la Colagne" },
      { lat: 44.4259, lng: 3.7442, date: "2025-07-18", location: "Mont Lozère" }
    ]
  },
  {
    id: 15,
    name: "Orvet fragile",
    scientificName: "Anguis fragilis",
    family: "Reptiles",
    status: "Commun",
    image: "https://www.researchgate.net/publication/283148990/figure/fig2/AS:288374389788675@1445765220778/Male-dorvet-fragile-Anguis-fragilis-presentant-des-points-bleus-Foret-de.png",
    description: "Reptile sans pattes souvent confondu avec un serpent. Inoffensif, il se nourrit surtout de limaces. Sa queue se détache facilement pour échapper aux prédateurs.",
    habitat: "Prairies, lisières, jardins, forêts humides",
    observations: [
      { lat: 44.466806, lng: 3.340478, date: "2025-06-15", location: "Chanac" },
      { lat: 44.3983, lng: 3.3122, date: "2025-07-05", location: "Causse de Sauveterre" },
      { lat: 44.4259, lng: 3.7442, date: "2025-07-20", location: "Mont Lozère" }
    ]
  },
  {
    id: 16,
    name: "Couleuvre verte et jaune",
    scientificName: "Hierophis viridiflavus",
    family: "Reptiles",
    status: "Commun",
    image: "https://www.lanaturemoi.com/wp-content/uploads/2024/10/couleuvre-verte-et-jaune-25.jpg",
    description: "Rapide et nerveuse, cette grande couleuvre non venimeuse affiche une robe verte et jaune spectaculaire. Elle chasse lézards et petits rongeurs.",
    habitat: "Coteaux secs, garrigues, murs de pierre, talus",
    observations: [
      { lat: 44.2789, lng: 3.2281, date: "2025-06-30", location: "Gorges du Tarn" },
      { lat: 44.19611, lng: 3.3775, date: "2025-07-08", location: "Causse Noir" },
      { lat: 44.303045, lng: 3.320135, date: "2025-07-15", location: "La Malène" }
    ]
  },
  {
    id: 17,
    name: "Tortue d’Hermann",
    scientificName: "Testudo hermanni",
    family: "Reptiles",
    status: "Rare / introduite",
    image: "https://www.jardiner-malin.fr/wp-content/uploads/2024/01/tortue-hermann-1.jpg",
    description: "Petite tortue terrestre méditerranéenne, rarement observée en Lozère où quelques individus issus de relâchés ont été signalés. Espèce strictement protégée.",
    habitat: "Garrigues, zones chaudes et sèches, maquis clairsemé",
    observations: [
      { lat: 44.3983, lng: 3.3122, date: "2025-08-02", location: "Causse de Sauveterre" },
      { lat: 44.303045, lng: 3.320135, date: "2025-08-14", location: "Gorges du Tarn" }
    ]
  },
  {
    id: 18,
    name: "Lézard vivipare",
    scientificName: "Zootoca vivipara",
    family: "Reptiles",
    status: "Commun",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/L%C3%A9zard_vivipaire.jpg/1200px-L%C3%A9zard_vivipaire.jpg",
    description: "Petit lézard brun des zones d’altitude, capable de donner naissance à des petits vivants. Il s’observe sur les tourbières du Mont Lozère.",
    habitat: "Tourbières, landes humides, prairies d’altitude",
    observations: [
      { lat: 44.4259, lng: 3.7442, date: "2025-07-28", location: "Mont Lozère" },
      { lat: 44.4259, lng: 3.7442, date: "2025-08-12", location: "Sommet du Finiels" }
    ]
  },
  {
    id: 19,
    name: "Lézard ocellé",
    scientificName: "Timon lepidus",
    family: "Reptiles",
    status: "Protégé",
    image: "https://iodde.org/Handlers/HTFile.ashx?MEDIAID=183434",
    description: "Le plus grand lézard d’Europe ! Robe vert vif constellée de taches bleues. Rare en Lozère, observé sur les Causses les plus chauds et en bordure du Tarn.",
    habitat: "Garrigues, causses secs, talus pierreux, zones rocailleuses",
    observations: [
      { lat: 44.2789, lng: 3.2281, date: "2025-07-05", location: "Gorges du Tarn" },
      { lat: 44.366298, lng: 3.410475, date: "2025-07-22", location: "Sainte-Enimie" },
      { lat: 44.191643, lng: 3.206943, date: "2025-08-01", location: "Le Rozier" }
    ]
  },
  {
    id: 20,
    name: "Couleuvre vipérine",
    scientificName: "Natrix maura",
    family: "Reptiles",
    status: "Commun",
    image: "https://www.infofauna.ch/sites/default/files/styles/grande_image_libre/public/images/media/2023/nama_meyer.jpg?itok=qThsbZOp",
    description: "Couleuvre semi-aquatique imitant la vipère par sa forme et son comportement. Inoffensive et excellente nageuse, elle se nourrit surtout de poissons et d’amphibiens.",
    habitat: "Bords de rivières, ruisseaux, étangs et mares",
    observations: [
      { lat: 44.521514, lng: 3.497547, date: "2025-06-10", location: "Rivière du Lot" },
      { lat: 44.26691, lng: 3.39569, date: "2025-06-25", location: "Causse Méjean" },
      { lat: 44.4259, lng: 3.7442, date: "2025-07-08", location: "Mont Lozère" },
      { lat: 44.804, lng: 3.277, date: "2025-07-18", location: "Saint-Chély-d’Apcher" }
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
function initMap() {
  // Centre sur la Lozère
  map = L.map("map").setView([44.4833, 3.5], 10);

  // --- Fonds de carte ---
  const osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
    maxZoom: 19,
  });

  // Satellite (Esri World Imagery)
  const esriSatellite = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
      attribution: "Tiles © Esri — Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community",
      maxZoom: 19,
    }
  );

  // Topo (Esri World Topo Map)
  const esriTopo = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
    {
      attribution: "Tiles © Esri — Esri, Garmin, FAO, NOAA, USGS, © OpenStreetMap contributors",
      maxZoom: 19,
    }
  );

  // Topo (OpenTopoMap) – optionnel, avec ombrage + courbes
  const openTopo = L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
    attribution: "Map data © OpenStreetMap contributors, SRTM | Style © OpenTopoMap (CC-BY-SA)",
    maxZoom: 17,
  });

  // --- Relief (ombrage) en surcouche activable ---
  const esriHillshade = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/Elevations/World_Hillshade/MapServer/tile/{z}/{y}/{x}",
    {
      attribution: "Hillshade © Esri",
      maxZoom: 19,
      opacity: 0.65, // ajuste si tu veux plus/moins de relief
    }
  );

  // Ajoute un fond par défaut (OSM)
  osm.addTo(map);

  // Contrôle de couches (fonds exclusifs + surcouches)
  const baseMaps = {
    "Plan (OSM)": osm,
    "Satellite (Esri)": esriSatellite,
    "Topo (Esri)": esriTopo,
    "Topo (OpenTopoMap)": openTopo,
  };

  const overlays = {
    "Relief (Esri Hillshade)": esriHillshade,
  };

  L.control.layers(baseMaps, overlays, { collapsed: false }).addTo(map);

  // Ajout initial des marqueurs
  updateMarkers();
}
window.addEventListener('resize', () => {
  if (map) map.invalidateSize();
});

// Si tu as un toggle liste/carte:
function showMapView() {
  // ... ton code pour afficher .map-container ...
  requestAnimationFrame(() => map.invalidateSize());
}

   