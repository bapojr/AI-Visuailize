const categories = ["Infographics", "Posters", "Graphical Abstract"];

const templateCatalog = [
  {
    id: "infographic-crispr",
    title: "CRISPR-Cas9 Gene Editing Mechanism",
    category: "Infographics",
    type: "AI-generated",
    accent: "blueprint",
    subject: "Molecular Biology",
    image: "infographic-crispr.png",
    orientation: "landscape",
    summary: "A finished infographic showing target recognition, cutting, repair pathways, and edited outcomes.",
  },
  {
    id: "infographic-plants",
    title: "Nutrient Transport in Plants",
    category: "Infographics",
    type: "AI-generated",
    accent: "botanical",
    subject: "Plant Science",
    image: "infographic-plant-transport.png",
    orientation: "portrait",
    summary: "A detailed plant-transport infographic with xylem, phloem, transpiration, and mineral movement.",
  },
  {
    id: "infographic-climate",
    title: "Climate Change Impact Pathways",
    category: "Infographics",
    type: "AI-generated",
    accent: "sky",
    subject: "Environmental Science",
    image: "infographic-climate-pathways.png",
    orientation: "portrait",
    summary: "A polished climate-impact infographic linking greenhouse gases, temperature rise, ecosystems, and response.",
  },
  {
    id: "poster-diabetes",
    title: "How Type 2 Diabetes Develops in the Body",
    category: "Posters",
    type: "AI-generated",
    accent: "clinical",
    subject: "Medical Science",
    image: "poster-diabetes.png",
    orientation: "portrait",
    summary: "A research-style medical poster covering progression, insulin resistance, pancreas function, and warning signs.",
  },
  {
    id: "poster-microbiome",
    title: "The Human Gut Microbiome: Role in Health and Disease",
    category: "Posters",
    type: "AI-generated",
    accent: "amber",
    subject: "Microbiology",
    image: "poster-gut-microbiome.png",
    orientation: "portrait",
    summary: "A complete scientific poster with microbiome diversity, immune interaction, dysbiosis, and interventions.",
  },
  {
    id: "poster-alzheimers",
    title: "Neurodegeneration in Alzheimer’s Disease",
    category: "Posters",
    type: "AI-generated",
    accent: "violet",
    subject: "Neuroscience",
    image: "poster-alzheimers.png",
    orientation: "portrait",
    summary: "A detailed poster covering plaques, tangles, neuron damage, disease stages, and therapeutic targets.",
  },
  {
    id: "ga-inflammation",
    title: "Inflammation Response Pathway",
    category: "Graphical Abstract",
    type: "AI-generated",
    accent: "sunset",
    subject: "Immunology",
    image: "ga-inflammation.png",
    orientation: "portrait",
    summary: "A finished pathway figure showing trigger detection, cytokine signaling, immune activation, and resolution.",
  },
  {
    id: "ga-rna",
    title: "mRNA Delivery Using Lipid Nanoparticles",
    category: "Graphical Abstract",
    type: "AI-generated",
    accent: "ocean",
    subject: "Biotechnology",
    image: "ga-mrna-delivery.png",
    orientation: "landscape",
    summary: "A polished delivery pathway figure showing nanoparticle uptake, endosomal escape, and release.",
  },
  {
    id: "ga-bacterial-response",
    title: "Bacterial Infection and Immune Response",
    category: "Graphical Abstract",
    type: "AI-generated",
    accent: "mint",
    subject: "Microbiology",
    image: "ga-bacterial-immune-response.png",
    orientation: "landscape",
    summary: "A mechanistic graphical abstract tracing entry, immune recognition, inflammation, and intervention.",
  },
];

const variants = [
  {
    id: 1,
    title: "Clinical infographic system",
    accent: "blueprint",
    summary: "Strong sectioning, medical blues, concise anatomy labels, and publication-style spacing.",
  },
  {
    id: 2,
    title: "Conference poster direction",
    accent: "clinical",
    summary: "A more editorial poster with larger title hierarchy and balanced visual panels.",
  },
  {
    id: 3,
    title: "Minimal graphical abstract",
    accent: "mint",
    summary: "Compact layout, cleaner line work, and a sharper emphasis on process flow.",
  },
  {
    id: 4,
    title: "Illustrated teaching visual",
    accent: "amber",
    summary: "A more expressive educational style with friendlier icons and bold segmentation.",
  },
];

const historyItems = [
  {
    title: "Current version",
    time: "Just now",
    note: "Change the background to blue",
    accent: "blueprint",
    image: "poster-diabetes.png",
    templateId: "poster-diabetes",
  },
  {
    title: "Colors refined",
    time: "2 min ago",
    note: "Create a clean scientific education poster treatment",
    accent: "clinical",
    image: "poster-alzheimers.png",
    templateId: "poster-alzheimers",
  },
  {
    title: "Poster layout pass",
    time: "5 min ago",
    note: "Make the colors more natural and simplify the labels",
    accent: "mint",
    image: "ga-inflammation.png",
    templateId: "ga-inflammation",
  },
];

const suggestionPills = [
  "More designs",
  "Make the colors more natural",
  "Simplify the labels",
  "Turn this into a poster",
  "Make the style more minimal",
];

const segmentationRegions = {
  "infographic-crispr": [
    { id: "title", type: "text", label: "Title", x: 24, y: 4, w: 52, h: 8 },
    { id: "guide-card", type: "graphic", label: "Guide RNA module", x: 6, y: 14, w: 38, h: 25 },
    { id: "cutting-card", type: "graphic", label: "DNA cutting module", x: 57, y: 14, w: 35, h: 25 },
    { id: "repair-panel", type: "graphic", label: "Repair pathways", x: 10, y: 52, w: 38, h: 30 },
    { id: "outcome-panel", type: "graphic", label: "Edited outcomes", x: 58, y: 52, w: 29, h: 28 },
  ],
  "infographic-plants": [
    { id: "title", type: "text", label: "Title", x: 22, y: 3, w: 48, h: 8 },
    { id: "plant", type: "graphic", label: "Main plant diagram", x: 20, y: 12, w: 48, h: 66 },
    { id: "xylem", type: "callout", label: "Xylem callout", x: 7, y: 31, w: 22, h: 14 },
    { id: "phloem", type: "callout", label: "Phloem callout", x: 68, y: 31, w: 22, h: 14 },
    { id: "roots", type: "callout", label: "Roots callout", x: 7, y: 59, w: 22, h: 14 },
  ],
  "infographic-climate": [
    { id: "title", type: "text", label: "Title", x: 15, y: 3, w: 62, h: 8 },
    { id: "emissions", type: "graphic", label: "Emissions module", x: 5, y: 14, w: 34, h: 22 },
    { id: "ecosystem", type: "graphic", label: "Ecosystem module", x: 52, y: 30, w: 37, h: 17 },
    { id: "sea-level", type: "graphic", label: "Sea-level module", x: 5, y: 50, w: 36, h: 18 },
    { id: "response", type: "graphic", label: "Response module", x: 12, y: 79, w: 76, h: 14 },
  ],
  "poster-diabetes": [
    { id: "title", type: "text", label: "Poster title", x: 3, y: 2, w: 78, h: 6 },
    { id: "progression", type: "graphic", label: "Disease progression", x: 4, y: 9, w: 55, h: 13 },
    { id: "risk", type: "text", label: "Risk factors", x: 66, y: 9, w: 28, h: 20 },
    { id: "body-1", type: "graphic", label: "Insulin resistance", x: 4, y: 24, w: 57, h: 24 },
    { id: "warning", type: "text", label: "Warning signs", x: 67, y: 26, w: 27, h: 19 },
    { id: "body-2", type: "graphic", label: "Pancreas function", x: 4, y: 52, w: 57, h: 24 },
    { id: "glucose", type: "graphic", label: "Blood glucose buildup", x: 4, y: 84, w: 91, h: 10 },
  ],
  "poster-microbiome": [
    { id: "title", type: "text", label: "Poster title", x: 4, y: 2, w: 85, h: 7 },
    { id: "intro", type: "text", label: "Introduction", x: 4, y: 12, w: 28, h: 34 },
    { id: "diversity", type: "graphic", label: "Microbial diversity", x: 35, y: 12, w: 33, h: 32 },
    { id: "immune", type: "graphic", label: "Immune interaction", x: 70, y: 12, w: 25, h: 24 },
    { id: "inflammation", type: "graphic", label: "Inflammation panel", x: 35, y: 48, w: 33, h: 18 },
    { id: "therapy", type: "text", label: "Therapeutic interventions", x: 72, y: 58, w: 22, h: 28 },
  ],
  "poster-alzheimers": [
    { id: "title", type: "text", label: "Poster title", x: 4, y: 2, w: 82, h: 7 },
    { id: "intro", type: "text", label: "Introduction", x: 3, y: 11, w: 27, h: 17 },
    { id: "brain", type: "graphic", label: "Brain overview", x: 33, y: 11, w: 62, h: 18 },
    { id: "plaques", type: "graphic", label: "Amyloid plaques", x: 3, y: 30, w: 44, h: 20 },
    { id: "tau", type: "graphic", label: "Tau tangles", x: 49, y: 30, w: 46, h: 20 },
    { id: "stages", type: "graphic", label: "Disease stages", x: 49, y: 52, w: 46, h: 14 },
    { id: "targets", type: "text", label: "Therapeutic targets", x: 61, y: 75, w: 34, h: 20 },
  ],
  "ga-inflammation": [
    { id: "title", type: "text", label: "Title", x: 14, y: 4, w: 62, h: 8 },
    { id: "trigger", type: "graphic", label: "Trigger detection", x: 5, y: 17, w: 38, h: 14 },
    { id: "cytokine", type: "graphic", label: "Cytokine signaling", x: 49, y: 17, w: 40, h: 16 },
    { id: "inflammation", type: "graphic", label: "Tissue inflammation", x: 5, y: 50, w: 85, h: 18 },
    { id: "resolution", type: "graphic", label: "Resolution", x: 5, y: 78, w: 85, h: 14 },
  ],
  "ga-rna": [
    { id: "title", type: "text", label: "Title", x: 18, y: 3, w: 58, h: 8 },
    { id: "delivery", type: "graphic", label: "Nanoparticle delivery", x: 3, y: 18, w: 27, h: 42 },
    { id: "entry", type: "graphic", label: "Cell entry", x: 32, y: 18, w: 19, h: 42 },
    { id: "escape", type: "graphic", label: "Endosomal escape", x: 52, y: 18, w: 22, h: 42 },
    { id: "release", type: "graphic", label: "mRNA release", x: 76, y: 18, w: 18, h: 42 },
  ],
  "ga-bacterial-response": [
    { id: "title", type: "text", label: "Title", x: 14, y: 3, w: 66, h: 8 },
    { id: "entry", type: "graphic", label: "Bacterial entry", x: 4, y: 16, w: 22, h: 22 },
    { id: "recognition", type: "graphic", label: "Immune recognition", x: 35, y: 16, w: 22, h: 22 },
    { id: "inflammation", type: "graphic", label: "Tissue inflammation", x: 73, y: 25, w: 22, h: 19 },
    { id: "neutrophil", type: "graphic", label: "Neutrophil activation", x: 4, y: 58, w: 25, h: 24 },
    { id: "intervention", type: "graphic", label: "Therapeutic intervention", x: 66, y: 58, w: 24, h: 24 },
  ],
};

const subjectGroups = {
  "Suggested": ["Default"],
  "Life Sciences": [
    "Medical Science",
    "Nutrition",
    "Odontology",
    "Pharmacy",
    "Nursing",
    "Animal Science",
    "Plant Science",
    "Biology",
    "Molecular Sciences",
    "Life Science",
    "Pharmacology",
  ],
  "Broader Disciplines": ["Environmental Science", "Humanities", "STEM", "Others"],
};

const state = {
  desktop: {
    activeScreen: "landing-desktop",
    activeCategory: null,
    galleryCount: 9,
    subject: "Default",
    style: "No Style",
    model: "GPT Image 1",
    ratio: "Ratio",
  },
  mobile: {
    activeScreen: "landing-mobile",
    activeCategory: null,
    galleryCount: 4,
    subject: "Default",
    style: "No Style",
    model: "GPT Image 1",
    ratio: "Ratio",
  },
  prompt: "",
  selectedVariant: 1,
  activeOverlay: null,
  editorState: "text",
  zoom: 100,
  currentEditorTemplate: templateCatalog[0],
  editorBackground: "#FFFFFF",
  editorTitle: "Untitled",
  selectedEditorSegmentId: null,
  selectedEditorSegmentType: null,
  isEditorFrameSelected: false,
  hasHistory: false,
  mixedOrder: shuffle([...templateCatalog]),
  generatedResultTemplate: templateCatalog[0],
  pendingGeneratedResultTemplate: null,
  isGeneratingImage: false,
  generationTimer: null,
};

const desktopScreens = document.querySelectorAll(".desktop-shell .screen");
const mobileScreens = document.querySelectorAll(".mobile-shell .screen");
const overlayBackdrop = document.getElementById("overlayBackdrop");
const overlayIds = [
  "preview-panel",
  "gallery-preview-modal",
  "chat-panel",
  "history-modal",
  "export-modal",
  "share-modal",
  "overflow-menu",
  "remove-bg",
  "segment-overlay",
  "rename-visualization-modal",
  "subject-dropdown",
  "ratio-dropdown",
  "style-dropdown",
  "model-dropdown",
  "mobile-drawer",
  "mobile-preview",
  "mobile-history",
  "mobile-export",
  "download-toast",
  "mobile-select-note",
];

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function isMobileViewport() {
  return window.innerWidth <= 920;
}

function variantById(id) {
  return variants.find((item) => item.id === id) || variants[0];
}

function randomTemplateItem() {
  return templateCatalog[Math.floor(Math.random() * templateCatalog.length)];
}

function startImageGeneration() {
  const nextTemplate = randomTemplateItem();
  state.pendingGeneratedResultTemplate = nextTemplate;
  state.isGeneratingImage = true;

  if (state.generationTimer) {
    clearTimeout(state.generationTimer);
  }

  renderVariants();
  updatePreviewVisuals();

  state.generationTimer = setTimeout(() => {
    state.generatedResultTemplate = state.pendingGeneratedResultTemplate || nextTemplate;
    state.pendingGeneratedResultTemplate = null;
    state.isGeneratingImage = false;
    renderVariants();
    updatePreviewVisuals();
    state.generationTimer = null;
  }, 5000);
}

function getGalleryItems(category) {
  if (!category) {
    return state.mixedOrder;
  }
  return templateCatalog.filter((item) => item.category === category);
}

function setScreen(name) {
  const isMobile = name.includes("mobile");
  const targetScreens = isMobile ? mobileScreens : desktopScreens;

  targetScreens.forEach((screen) => {
    screen.classList.toggle("active", screen.dataset.screen === name);
  });

  if (isMobile) {
    state.mobile.activeScreen = name;
  } else {
    state.desktop.activeScreen = name;
  }

  if (name === "conversation-desktop") {
    syncConversationPrompt();
    state.hasHistory = true;
    renderLandingHistoryVisibility();
  }

  if (name === "conversation-mobile") {
    syncMobileConversationPrompt();
    state.hasHistory = true;
    renderLandingHistoryVisibility();
  }

  if (name === "editor-desktop") {
    renderEditorCanvas();
  }
}

function showOverlay(id) {
  hideOverlay();
  const overlay = document.getElementById(id);
  if (!overlay) return;
  if (id === "rename-visualization-modal") {
    const input = document.getElementById("renameVisualizationInput");
    if (input) {
      input.value = state.editorTitle;
      setTimeout(() => {
        input.focus();
        input.select();
      }, 0);
    }
  }
  overlay.classList.remove("hidden");
  overlayBackdrop.classList.remove("hidden");
  overlayBackdrop.classList.toggle("preview-active", id === "preview-panel");
  state.activeOverlay = id;
}

function hideOverlay() {
  overlayIds.forEach((id) => {
    document.getElementById(id)?.classList.add("hidden");
  });
  overlayBackdrop.classList.add("hidden");
  overlayBackdrop.classList.remove("preview-active");
  state.activeOverlay = null;
}

function showToast() {
  const toast = document.getElementById("download-toast");
  toast.classList.remove("hidden");
  setTimeout(() => toast.classList.add("hidden"), 1800);
}

function renderGalleryPreview(template) {
  const preview = document.getElementById("galleryPreviewImage");
  if (!preview || !template) return;
  preview.innerHTML = `<img src="${template.image}" alt="${template.title}" class="preview-real-image" />`;
}

function createTemplateCard(template) {
  const card = document.createElement("button");
  card.className = `template-card template-card-image orientation-${template.orientation} accent-${template.accent}`;
  card.innerHTML = `
    <div class="template-thumb template-image-thumb orientation-${template.orientation}">
      <div class="template-corner-badge">${template.category === "Graphical Abstract" ? "GA" : template.category}</div>
      <img src="${template.image}" alt="${template.title}" class="template-real-image" />
    </div>
  `;

  card.addEventListener("click", () => {
    state.generatedResultTemplate = template;
    state.currentEditorTemplate = template;
    renderGalleryPreview(template);
    showOverlay("gallery-preview-modal");
  });

  return card;
}

function renderCategoryPills(targetId, scope) {
  const container = document.getElementById(targetId);
  if (!container) return;
  container.innerHTML = "";

  categories.forEach((category) => {
    const button = document.createElement("button");
    const isActive = state[scope].activeCategory === category;
    button.className = `pill ${isActive ? "active" : ""}`;
    button.textContent = category;
    button.addEventListener("click", () => {
      state[scope].activeCategory = isActive ? null : category;
      renderCategoryPills("desktopCategoryPills", "desktop");
      renderCategoryPills("mobileCategoryPills", "mobile");
      renderGalleries();
    });
    container.appendChild(button);
  });
}

function renderGalleries() {
  const desktopGallery = document.getElementById("desktopGallery");
  const desktopItems = getGalleryItems(state.desktop.activeCategory).slice(0, state.desktop.galleryCount);
  if (desktopGallery) {
    desktopGallery.innerHTML = "";
    desktopItems.forEach((item) => desktopGallery.appendChild(createTemplateCard(item)));
  }

  const mobileGallery = document.getElementById("mobileGallery");
  const mobileItems = getGalleryItems(state.mobile.activeCategory).slice(0, state.mobile.galleryCount);
  if (mobileGallery) {
    mobileGallery.innerHTML = "";
    mobileItems.forEach((item) => mobileGallery.appendChild(createTemplateCard(item)));
  }
}

function createHistoryNode(item, compact = false, isActive = false) {
  const button = document.createElement("button");
  button.className = compact ? "history-thumb" : `history-entry ${isActive ? "active" : ""}`;

  if (compact) {
    const latestTemplate = state.generatedResultTemplate || templateCatalog[0];
    button.className = `${button.className} orientation-${latestTemplate.orientation}`;
    button.innerHTML = `
      <div class="thumb-preview accent-${item.accent}">
        <img src="${latestTemplate.image}" alt="${latestTemplate.title}" class="history-thumb-image" />
      </div>
      <div class="thumb-time">${item.time}</div>
    `;
  } else {
    button.innerHTML = `
      <div class="history-entry-image-wrap">
        <img src="${item.image}" alt="${item.note}" class="history-entry-image" />
      </div>
      <div class="history-entry-copy">
        <div class="history-entry-note">${item.note}</div>
        <div class="thumb-time">${item.time}</div>
      </div>
    `;
  }

  button.addEventListener("click", () => {
    if (compact) {
      setScreen("conversation-desktop");
    } else {
      const nextTemplate = templateCatalog.find((template) => template.id === item.templateId) || templateCatalog[0];
      state.selectedVariant = 1;
      state.generatedResultTemplate = nextTemplate;
      state.currentEditorTemplate = nextTemplate;
      renderEditorCanvas();
      updatePreviewVisuals();
      }
  });

  return button;
}

function renderHistory() {
  renderSidebarRecent();

  [
    "editorHistoryList",
    "editorHistoryListSelect",
    "historyModalList",
    "mobileHistoryList",
  ].forEach((id) => {
    const container = document.getElementById(id);
    if (!container) return;
    container.innerHTML = "";
    historyItems.forEach((item, index) => {
      container.appendChild(createHistoryNode(item, false, index === 0));
    });
  });
}

function renderLandingHistoryVisibility() {
  renderSidebarRecent();
}

function createSidebarRecentNode(item, index) {
  const button = document.createElement("button");
  button.className = "sidebar-recent-item";
  button.type = "button";
  button.textContent = item.sidebarTitle || "Untitled";
  button.addEventListener("click", () => {
    const nextTemplate = templateCatalog.find((template) => template.id === item.templateId) || templateCatalog[0];
    state.generatedResultTemplate = nextTemplate;
    state.currentEditorTemplate = nextTemplate;
    updatePreviewVisuals();
    setScreen("conversation-desktop");
  });
  return button;
}

function renderSidebarRecent() {
  const container = document.getElementById("sidebarRecentList");
  if (!container) return;

  container.innerHTML = "";

  if (!state.hasHistory) {
    const empty = document.createElement("div");
    empty.className = "sidebar-empty-state";
    empty.textContent = "No items yet";
    container.appendChild(empty);
    return;
  }

  historyItems.forEach((item, index) => {
    container.appendChild(createSidebarRecentNode(item, index));
  });
}

function createVariantCard(item) {
  const button = document.createElement("button");
  button.className = `variant-card variant-card-image accent-${item.accent} active`;

  if (state.isGeneratingImage) {
    button.classList.add("is-loading");
    button.innerHTML = `
      <div class="variant-image variant-image-real variant-image-loading orientation-${item.orientation} accent-${item.accent}">
        <div class="generation-dot-grid" aria-hidden="true"></div>
        <div class="generation-image-shell">
          <img src="${item.image}" alt="${item.title}" class="variant-real-image generation-preview-image" />
          <div class="generation-reveal-mask" aria-hidden="true"></div>
          <div class="generation-blur-band" aria-hidden="true"></div>
        </div>
      </div>
    `;
  } else {
    button.innerHTML = `
      <div class="variant-image variant-image-real orientation-${item.orientation} accent-${item.accent}">
        <img src="${item.image}" alt="${item.title}" class="variant-real-image" />
      </div>
    `;
  }

  button.addEventListener("click", () => {
    if (state.isGeneratingImage) return;
    state.generatedResultTemplate = item;
    updatePreviewVisuals();
    renderVariants();
    showOverlay(isMobileViewport() ? "mobile-preview" : "preview-panel");
  });

  return button;
}

function renderVariants() {
  const desktop = document.getElementById("desktopVariants");
  const mobile = document.getElementById("mobileVariants");
  const item = state.isGeneratingImage
    ? state.pendingGeneratedResultTemplate || state.generatedResultTemplate
    : state.generatedResultTemplate;

  if (desktop) {
    desktop.innerHTML = "";
    if (item) desktop.appendChild(createVariantCard(item));
  }

  if (mobile) {
    mobile.innerHTML = "";
    if (item) mobile.appendChild(createVariantCard(item));
  }
}

function renderSuggestions() {
  ["desktopSuggestions", "mobileSuggestions"].forEach((id) => {
    const container = document.getElementById(id);
    if (!container) return;
    container.innerHTML = "";
    suggestionPills.forEach((text) => {
      const button = document.createElement("button");
      button.className = "pill";
      button.textContent = text;
      button.addEventListener("click", () => {
        const target = id === "desktopSuggestions"
          ? document.getElementById("conversationPromptBar")
          : document.getElementById("mobilePromptBar");
        target.value = text;
      });
      container.appendChild(button);
    });
  });
}

function renderSubjectList(filter = "") {
  const list = document.getElementById("subjectList");
  if (!list) return;

  list.innerHTML = "";

  Object.entries(subjectGroups).forEach(([group, items]) => {
    const matched = items.filter((item) =>
      item.toLowerCase().includes(filter.trim().toLowerCase())
    );
    if (!matched.length) return;

    matched.forEach((item) => {
      const button = document.createElement("button");
      const isActive = item === state.desktop.subject || item === state.mobile.subject;
      button.className = `dropdown-item ${isActive ? "active" : ""}`;
      button.textContent = item;
      button.addEventListener("click", () => {
        state.desktop.subject = item;
        state.mobile.subject = item;
        document.querySelectorAll(".subject-pill-text").forEach((node) => {
          node.textContent = item;
        });
        hideOverlay();
        renderSubjectList(filter);
      });
      list.appendChild(button);
    });
  });
}

function updatePreviewVisuals() {
  const activeVariant = (
    state.isGeneratingImage
      ? state.pendingGeneratedResultTemplate || state.generatedResultTemplate
      : state.generatedResultTemplate
  ) || templateCatalog[0];
  const preview = document.getElementById("previewPanelImage");
  const mobilePreview = document.getElementById("mobilePreviewImage");
  const conversationAiOutput = document.getElementById("conversationAiOutput");
  const previewConversationUserPrompt = document.getElementById("previewConversationUserPrompt");
  const previewConversationAiOutput = document.getElementById("previewConversationAiOutput");
  const previewConversationImage = document.getElementById("previewConversationImage");
  const previewConversationPills = document.getElementById("previewConversationPills");

  if (conversationAiOutput) {
    conversationAiOutput.textContent = state.isGeneratingImage
      ? `Generating a ${activeVariant.category.toLowerCase()} direction for ${activeVariant.subject.toLowerCase()}. This will be ready in a moment.`
      : `Here is a generated ${activeVariant.category.toLowerCase()} direction for ${activeVariant.subject.toLowerCase()}. You can continue refining the visual, ask for a different layout, or generate another direction.`;
  }

  if (previewConversationUserPrompt) {
    previewConversationUserPrompt.textContent =
      state.prompt || document.getElementById("conversationUserPrompt")?.textContent || "";
  }

  if (previewConversationAiOutput) {
    previewConversationAiOutput.textContent = state.isGeneratingImage
      ? `Generating a ${activeVariant.category.toLowerCase()} direction for ${activeVariant.subject.toLowerCase()}. This will be ready in a moment.`
      : `Here is a generated ${activeVariant.category.toLowerCase()} direction for ${activeVariant.subject.toLowerCase()}. You can continue refining the visual, ask for a different layout, or generate another direction.`;
  }

  if (previewConversationImage) {
    previewConversationImage.className = `preview-thread-image-card orientation-${activeVariant.orientation}`;
    previewConversationImage.innerHTML = `<img src="${activeVariant.image}" alt="${activeVariant.title}" class="preview-real-image" />`;
  }

  if (previewConversationPills) {
    previewConversationPills.innerHTML = "";
    suggestionPills.forEach((text) => {
      const button = document.createElement("button");
      button.className = "pill";
      button.textContent = text;
      previewConversationPills.appendChild(button);
    });
  }

  if (preview) {
    preview.className = `preview-image large orientation-${activeVariant.orientation} accent-${activeVariant.accent}`;
    preview.innerHTML = `<img src="${activeVariant.image}" alt="${activeVariant.title}" class="variant-real-image preview-real-image" />`;
  }

  if (mobilePreview) {
    mobilePreview.className = `preview-image mobile-large orientation-${activeVariant.orientation} accent-${activeVariant.accent}`;
    mobilePreview.innerHTML = `<img src="${activeVariant.image}" alt="${activeVariant.title}" class="variant-real-image preview-real-image" />`;
  }

  [document.getElementById("previewDots"), document.getElementById("mobilePreviewDots")].forEach((container) => {
    if (!container) return;
    container.innerHTML = "";
    [activeVariant].forEach((item) => {
      const dot = document.createElement("button");
      dot.className = "dot active";
      dot.addEventListener("click", () => {
        state.generatedResultTemplate = item;
        updatePreviewVisuals();
        renderVariants();
      });
      container.appendChild(dot);
    });
  });
}

function renderEditorTitle() {
  document.querySelectorAll("#editorDocumentTitle, .editor-document-title-text").forEach((node) => {
    node.textContent = state.editorTitle;
  });
}

function syncConversationPrompt() {
  const value = document.getElementById("landingPromptDesktop")?.value.trim() || state.prompt;
  state.prompt = value;
  document.getElementById("conversationUserPrompt").textContent = value;
}

function syncMobileConversationPrompt() {
  const value = document.getElementById("landingPromptMobile")?.value.trim() || state.prompt;
  state.prompt = value;
  document.getElementById("mobileConversationUserPrompt").textContent = value;
}

function toggleSubmitStates() {
  const desktopValue = document.getElementById("landingPromptDesktop")?.value.trim() || "";
  const mobileValue = document.getElementById("landingPromptMobile")?.value.trim() || "";
  const desktopButton = document.getElementById("landingSubmitDesktop");
  const mobileButton = document.getElementById("landingSubmitMobile");
  document
    .getElementById("desktopLandingChatbox")
    ?.classList.toggle("has-value", Boolean(desktopValue));
  document
    .getElementById("mobileLandingChatbox")
    ?.classList.toggle("has-value", Boolean(mobileValue));
  if (desktopButton) desktopButton.disabled = !desktopValue;
  if (mobileButton) mobileButton.disabled = !mobileValue;
}

function updateEditorToolbar(kind) {
  const toolbar = document.getElementById("editorContextToolbar");
  if (!toolbar) return;

  if (kind === "text") {
    toolbar.innerHTML = `
      <div class="toolbar-group">
        <span class="toolbar-chip">Manrope</span>
        <span class="toolbar-chip">28.0</span>
        <span class="toolbar-chip">A</span>
        <span class="toolbar-chip strong">B</span>
        <span class="toolbar-chip italic">I</span>
        <span class="toolbar-chip">Align</span>
        <span class="toolbar-chip">Spacing</span>
        <span class="toolbar-chip">Effects</span>
        <span class="toolbar-chip">Position</span>
      </div>
    `;
    return;
  }

  if (kind === "shape") {
    toolbar.innerHTML = `
      <div class="toolbar-group">
        <span class="toolbar-chip">Fill</span>
        <span class="toolbar-chip">Border</span>
        <span class="toolbar-chip">Opacity 100%</span>
        <span class="toolbar-chip">Shadow</span>
        <span class="toolbar-chip">Arrange</span>
        <span class="toolbar-chip">Position</span>
      </div>
    `;
    return;
  }

  toolbar.innerHTML = '<div class="toolbar-group"><span class="toolbar-chip">Select any element to edit its properties</span></div>';
}

function renderEditorCanvas() {
  const activeTemplate = state.generatedResultTemplate || state.currentEditorTemplate || templateCatalog[0];
  state.currentEditorTemplate = activeTemplate;

  const canvas = document.getElementById("editorCanvas");
  const image = document.getElementById("editorCanvasImage");
  const mediaShell = document.getElementById("editorCanvasMediaShell");
  const stageContent = document.getElementById("editorCanvasStageContent");
  const segmentation = document.getElementById("editorImageSegmentation");
  const actionStack = document.getElementById("editorImageActionStack");
  const textActionStack = document.getElementById("editorTextActionStack");
  if (!canvas || !image) return;

  canvas.classList.add("image-mode");
  image.src = activeTemplate.image;
  image.alt = activeTemplate.title;
  image.className = `editor-canvas-image orientation-${activeTemplate.orientation}`;
  if (mediaShell) {
    mediaShell.style.background = state.editorBackground;
  }
  stageContent?.classList.toggle("is-frame-selected", state.isEditorFrameSelected);
  if (segmentation) {
    segmentation.innerHTML = "";
    (segmentationRegions[activeTemplate.id] || []).forEach((region) => {
      const button = document.createElement("button");
      button.className = `editor-segment ${state.selectedEditorSegmentId === region.id ? "active" : ""}`;
      button.style.left = `${region.x}%`;
      button.style.top = `${region.y}%`;
      button.style.width = `${region.w}%`;
      button.style.height = `${region.h}%`;
      button.dataset.segmentId = region.id;
      button.dataset.segmentType = region.type;
      button.setAttribute("aria-label", region.label);
      button.innerHTML = `<span class="editor-segment-label">${region.label}</span>`;
      segmentation.appendChild(button);
    });
  }
  actionStack?.classList.add("hidden");
  textActionStack?.classList.add("hidden");
  updateZoom();
}

function updateSuggestionsRailState() {
  const rail = document.getElementById("desktopSuggestions");
  const leftArrow = document.querySelector(".suggestions-arrow-left");
  const rightArrow = document.querySelector(".suggestions-arrow-right");
  const leftFade = document.querySelector(".suggestions-fade-left");
  const rightFade = document.querySelector(".suggestions-fade-right");
  if (!rail || !leftArrow || !rightArrow || !leftFade || !rightFade) return;

  const maxScroll = rail.scrollWidth - rail.clientWidth;
  const atStart = rail.scrollLeft <= 2;
  const atEnd = rail.scrollLeft >= maxScroll - 2 || maxScroll <= 0;

  leftArrow.classList.toggle("is-hidden", atStart);
  leftFade.classList.toggle("is-hidden", atStart);
  rightArrow.classList.toggle("is-hidden", atEnd);
  rightFade.classList.toggle("is-hidden", atEnd);
}

function bindCanvasSelection() {
  document.querySelectorAll("[data-select]").forEach((node) => {
    node.addEventListener("click", (event) => {
      event.stopPropagation();
      state.editorState = node.dataset.select;
      document.querySelectorAll("[data-select]").forEach((item) => item.classList.remove("focused"));
      node.classList.add("focused");
      updateEditorToolbar(state.editorState);
    });
  });

  document.getElementById("editorCanvas")?.addEventListener("click", (event) => {
    if (event.target === event.currentTarget) {
      state.editorState = "default";
      document.querySelectorAll("[data-select]").forEach((item) => item.classList.remove("focused"));
      updateEditorToolbar(state.editorState);
    }
  });

  const editorImage = document.getElementById("editorCanvasImage");
  const stageContent = document.getElementById("editorCanvasStageContent");
  const imageToolbar = document.getElementById("editorImageActionStack");
  const textToolbar = document.getElementById("editorTextActionStack");
  const moreMenu = document.getElementById("editorImageMoreMenu");
  const moreTrigger = document.getElementById("editorImageMoreTrigger");
  const segmentation = document.getElementById("editorImageSegmentation");

  const clearEditorSelection = () => {
    state.selectedEditorSegmentId = null;
    state.selectedEditorSegmentType = null;
    state.isEditorFrameSelected = false;
    stageContent?.classList.remove("is-frame-selected");
    segmentation?.querySelectorAll(".editor-segment").forEach((segment) => {
      segment.classList.remove("active");
    });
    imageToolbar?.classList.add("hidden");
    textToolbar?.classList.add("hidden");
    moreMenu?.classList.add("hidden");
  };

  editorImage?.addEventListener("click", (event) => {
    event.stopPropagation();
    state.selectedEditorSegmentId = null;
    state.selectedEditorSegmentType = "frame";
    state.isEditorFrameSelected = true;
    stageContent?.classList.add("is-frame-selected");
    segmentation?.querySelectorAll(".editor-segment").forEach((segment) => {
      segment.classList.remove("active");
    });
    imageToolbar?.classList.remove("hidden");
    textToolbar?.classList.add("hidden");
    moreMenu?.classList.add("hidden");
  });

  moreTrigger?.addEventListener("click", (event) => {
    event.stopPropagation();
    moreMenu?.classList.toggle("hidden");
  });

  document.addEventListener("click", (event) => {
    if (!imageToolbar) return;
    if (
      !event.target.closest("#editorImageActionStack") &&
      !event.target.closest("#editorTextActionStack") &&
      !event.target.closest("#editorCanvasStageContent") &&
      !event.target.closest("#editorCanvasImage")
    ) {
      clearEditorSelection();
    }
  });

  segmentation?.addEventListener("click", (event) => {
    const segment = event.target.closest(".editor-segment");
    if (!segment) return;
    event.stopPropagation();
    state.selectedEditorSegmentId = segment.dataset.segmentId;
    state.selectedEditorSegmentType = segment.dataset.segmentType;
    state.isEditorFrameSelected = false;
    stageContent?.classList.remove("is-frame-selected");
    segmentation.querySelectorAll(".editor-segment").forEach((item) => {
      item.classList.toggle("active", item === segment);
    });
    moreMenu?.classList.add("hidden");
    if (segment.dataset.segmentType === "text") {
      textToolbar?.classList.remove("hidden");
      imageToolbar?.classList.add("hidden");
    } else {
      imageToolbar?.classList.remove("hidden");
      textToolbar?.classList.add("hidden");
    }
  });
}

function bindSelectGroups() {
  document.querySelectorAll(".selectable").forEach((group) => {
    group.addEventListener("click", (event) => {
      const button = event.target.closest(".pill");
      if (!button) return;
      group.querySelectorAll(".pill").forEach((pill) => pill.classList.remove("active"));
      button.classList.add("active");
    });
  });
}

function handlePromptSubmit(destination) {
  state.hasHistory = true;
  renderLandingHistoryVisibility();
  setScreen(destination);
  syncConversationPrompt();
  syncMobileConversationPrompt();
  startImageGeneration();
}

function initActions() {
  document.addEventListener("click", (event) => {
    const go = event.target.closest("[data-go-screen]");
    if (go) {
      const destination = go.dataset.goScreen;
      setScreen(destination);
      if (destination.includes("conversation")) {
        state.hasHistory = true;
        renderLandingHistoryVisibility();
        syncConversationPrompt();
        syncMobileConversationPrompt();
      }
      if (go.hasAttribute("data-close-overlay")) {
        hideOverlay();
      }
    }

    const open = event.target.closest("[data-open-overlay]");
    if (open) {
      showOverlay(open.dataset.openOverlay);
    }

    if (event.target.hasAttribute("data-close-overlay")) {
      hideOverlay();
    }

    const ratioOption = event.target.closest("[data-ratio-option]");
    if (ratioOption) {
      document.querySelectorAll("[data-ratio-option]").forEach((node) => {
        node.classList.toggle("active", node === ratioOption);
      });
      document.querySelectorAll(".ratio-pill-text").forEach((node) => {
        node.textContent = ratioOption.dataset.ratioOption;
      });
      state.desktop.ratio = ratioOption.dataset.ratioOption;
      state.mobile.ratio = ratioOption.dataset.ratioOption;
      hideOverlay();
    }

    const styleOption = event.target.closest("[data-style-option]");
    if (styleOption) {
      document.querySelectorAll("[data-style-option]").forEach((node) => {
        node.classList.toggle("active", node === styleOption);
      });
      document.querySelectorAll(".style-pill-text").forEach((node) => {
        node.textContent = styleOption.dataset.styleOption;
      });
      state.desktop.style = styleOption.dataset.styleOption;
      state.mobile.style = styleOption.dataset.styleOption;
      hideOverlay();
    }

    const modelOption = event.target.closest("[data-model-option]");
    if (modelOption) {
      document.querySelectorAll("[data-model-option]").forEach((node) => {
        node.classList.toggle("active", node === modelOption);
      });
      document.querySelectorAll(".model-pill-text").forEach((node) => {
        node.textContent = modelOption.dataset.modelOption;
      });
      state.desktop.model = modelOption.dataset.modelOption;
      state.mobile.model = modelOption.dataset.modelOption;
      hideOverlay();
    }

    const editorDropdownTrigger = event.target.closest("[data-editor-dropdown-trigger]");
    if (editorDropdownTrigger) {
      const dropdown = editorDropdownTrigger.closest("[data-editor-dropdown]");
      document.querySelectorAll("[data-editor-dropdown].open").forEach((node) => {
        if (node !== dropdown) node.classList.remove("open");
      });
      dropdown?.classList.toggle("open");
    }

    const editorDropdownOption = event.target.closest("[data-editor-dropdown-option]");
    if (editorDropdownOption) {
      const dropdown = editorDropdownOption.closest("[data-editor-dropdown]");
      const triggerText = dropdown?.querySelector("[data-editor-dropdown-trigger] span:first-child");
      if (triggerText) triggerText.textContent = editorDropdownOption.textContent;
      dropdown?.querySelectorAll("[data-editor-dropdown-option]").forEach((node) => {
        node.classList.toggle("selected", node === editorDropdownOption);
      });
      dropdown?.classList.remove("open");
    }

    const segmentedOption = event.target.closest(".editor-segmented button");
    if (segmentedOption) {
      segmentedOption.parentElement.querySelectorAll("button").forEach((node) => {
        node.classList.toggle("active", node === segmentedOption);
      });
    }
  });

  overlayBackdrop.addEventListener("click", hideOverlay);

  document.getElementById("landingPromptDesktop")?.addEventListener("input", toggleSubmitStates);
  document.getElementById("landingPromptMobile")?.addEventListener("input", toggleSubmitStates);
  document.querySelector(".sidebar-auth-cta")?.addEventListener("click", () => {
    document.querySelector(".landing-sidebar")?.classList.add("is-signed-in");
  });
  document.getElementById("sidebarLogoToggle")?.addEventListener("click", () => {
    document.querySelector(".first-user-shell")?.classList.toggle("sidebar-collapsed");
  });
  document.getElementById("subjectSearch")?.addEventListener("input", (event) => {
    renderSubjectList(event.target.value);
  });

  document.getElementById("desktopLoadMore")?.addEventListener("click", () => {
    state.desktop.galleryCount = Math.min(templateCatalog.length, state.desktop.galleryCount + 3);
    renderGalleries();
  });

  document.getElementById("mobileLoadMore")?.addEventListener("click", () => {
    state.mobile.galleryCount = Math.min(templateCatalog.length, state.mobile.galleryCount + 2);
    renderGalleries();
  });

  document.getElementById("landingSubmitDesktop")?.addEventListener("click", () => {
    if (!document.getElementById("landingPromptDesktop").value.trim()) return;
    handlePromptSubmit("conversation-desktop");
  });

  document.getElementById("landingSubmitMobile")?.addEventListener("click", () => {
    if (!document.getElementById("landingPromptMobile").value.trim()) return;
    handlePromptSubmit("conversation-mobile");
  });

  document.getElementById("downloadFromPreview")?.addEventListener("click", showToast);
  document.getElementById("mobileDownloadBtn")?.addEventListener("click", showToast);

  document.getElementById("confirmExport")?.addEventListener("click", () => {
    hideOverlay();
    showToast();
  });

  document.getElementById("mobileExportConfirm")?.addEventListener("click", () => {
    hideOverlay();
    showToast();
  });

  document.getElementById("copyShareBtn")?.addEventListener("click", (event) => {
    navigator.clipboard?.writeText("https://paperpal.app/share/crispr-visual");
    event.target.textContent = "Copied";
    setTimeout(() => {
      event.target.textContent = "Copy";
    }, 1200);
  });

  document.getElementById("conversationSubmit")?.addEventListener("click", () => {
    const input = document.getElementById("conversationPromptBar");
    if (!input.value.trim()) return;
    document.getElementById("conversationUserPrompt").textContent = input.value.trim();
    state.prompt = input.value.trim();
    input.value = "";
    startImageGeneration();
  });

  document.getElementById("mobileConversationSubmit")?.addEventListener("click", () => {
    const input = document.getElementById("mobilePromptBar");
    if (!input.value.trim()) return;
    document.getElementById("mobileConversationUserPrompt").textContent = input.value.trim();
    state.prompt = input.value.trim();
    input.value = "";
  });

  document.querySelector("[data-scroll-chat]")?.addEventListener("click", () => {
    document.querySelector(".landing-chat")?.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  document.querySelector(".suggestions-arrow-right")?.addEventListener("click", () => {
    const rail = document.getElementById("desktopSuggestions");
    const firstPill = rail?.querySelector(".pill");
    if (!rail || !firstPill) return;
    const styles = window.getComputedStyle(rail);
    const gap = parseFloat(styles.columnGap || styles.gap || "12") || 12;
    rail.scrollBy({
      left: firstPill.offsetWidth + gap,
      behavior: "smooth",
    });
    setTimeout(updateSuggestionsRailState, 260);
  });

  document.querySelector(".suggestions-arrow-left")?.addEventListener("click", () => {
    const rail = document.getElementById("desktopSuggestions");
    const firstPill = rail?.querySelector(".pill");
    if (!rail || !firstPill) return;
    const styles = window.getComputedStyle(rail);
    const gap = parseFloat(styles.columnGap || styles.gap || "12") || 12;
    rail.scrollBy({
      left: -(firstPill.offsetWidth + gap),
      behavior: "smooth",
    });
    setTimeout(updateSuggestionsRailState, 260);
  });

  document.getElementById("desktopSuggestions")?.addEventListener("scroll", updateSuggestionsRailState);
  window.addEventListener("resize", updateSuggestionsRailState);

  document.getElementById("saveVisualizationName")?.addEventListener("click", () => {
    const input = document.getElementById("renameVisualizationInput");
    const nextTitle = input?.value.trim() || "Untitled";
    state.editorTitle = nextTitle;
    renderEditorTitle();
    hideOverlay();
  });

  document.getElementById("renameVisualizationInput")?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("saveVisualizationName")?.click();
    }
  });

  document.getElementById("zoomInBtn")?.addEventListener("click", () => {
    state.zoom += 10;
    updateZoom();
  });

  document.getElementById("zoomOutBtn")?.addEventListener("click", () => {
    state.zoom = Math.max(50, state.zoom - 10);
    updateZoom();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (state.activeOverlay) {
        hideOverlay();
      } else if (state.desktop.activeScreen === "editor-select-area") {
        setScreen("editor-desktop");
      }
    }
  });
}

function updateZoom() {
  const zoomLabel = `${state.zoom}%`;
  document.getElementById("zoomValue").textContent = zoomLabel;
  document.getElementById("canvasZoomPill").textContent = zoomLabel;
  document.getElementById("editorCanvasStageContent")?.style.setProperty("--editor-zoom-scale", `${state.zoom / 100}`);
}

function bindEditorBackgroundSwatches() {
  document.querySelectorAll(".editor-bg-swatch").forEach((button) => {
    button.addEventListener("click", () => {
      state.editorBackground = button.dataset.color || "#FFFFFF";
      document.querySelectorAll(".editor-bg-swatch").forEach((swatch) => {
        swatch.classList.toggle("active", swatch === button);
      });
      renderEditorCanvas();
    });
  });
}

function init() {
  renderCategoryPills("desktopCategoryPills", "desktop");
  renderCategoryPills("mobileCategoryPills", "mobile");
  renderGalleries();
  renderHistory();
  renderLandingHistoryVisibility();
  renderVariants();
  renderSuggestions();
  renderSubjectList();
  updatePreviewVisuals();
  renderEditorTitle();
  updateSuggestionsRailState();
  toggleSubmitStates();
  updateEditorToolbar("text");
  bindCanvasSelection();
  bindSelectGroups();
  bindEditorBackgroundSwatches();
  initActions();
  syncConversationPrompt();
  syncMobileConversationPrompt();
  renderEditorCanvas();
  updateZoom();
}

init();
