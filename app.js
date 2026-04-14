const categories = ["Infographics", "Posters", "Graphical Abstract"];

const templateCatalog = [
  {
    id: "infographic-crispr",
    title: "CRISPR editing workflow",
    category: "Infographics",
    type: "Template",
    accent: "blueprint",
    summary: "A vertical explainer with arrows, labels, and an editorial scientific palette.",
  },
  {
    id: "poster-diabetes",
    title: "Type 2 diabetes education poster",
    category: "Posters",
    type: "Pre-made",
    accent: "clinical",
    summary: "A poster layout for disease progression, risk factors, and warning signs.",
  },
  {
    id: "ga-neural",
    title: "Neural repair graphical abstract",
    category: "Graphical Abstract",
    type: "Template",
    accent: "mint",
    summary: "A compact publication-style figure showing a mechanism with clear callouts.",
  },
  {
    id: "infographic-plants",
    title: "Plant nutrient transport",
    category: "Infographics",
    type: "Pre-made",
    accent: "botanical",
    summary: "A multi-panel educational visual for xylem, phloem, and nutrient uptake.",
  },
  {
    id: "poster-microbiome",
    title: "Gut microbiome poster",
    category: "Posters",
    type: "Template",
    accent: "amber",
    summary: "A conference-style poster with modular sections and data-aware spacing.",
  },
  {
    id: "ga-cancer",
    title: "Tumor signaling abstract",
    category: "Graphical Abstract",
    type: "Pre-made",
    accent: "rose",
    summary: "A pathway-first graphical abstract for cell signaling and intervention points.",
  },
  {
    id: "infographic-climate",
    title: "Climate impact explainer",
    category: "Infographics",
    type: "Template",
    accent: "sky",
    summary: "An explanatory card stack with annotated environmental consequences.",
  },
  {
    id: "poster-neuro",
    title: "Neurodegeneration poster",
    category: "Posters",
    type: "Pre-made",
    accent: "violet",
    summary: "A structured poster balancing anatomy, progression, and biomarker sections.",
  },
  {
    id: "ga-rna",
    title: "mRNA delivery abstract",
    category: "Graphical Abstract",
    type: "Template",
    accent: "ocean",
    summary: "A compact figure with process arrows and high-signal annotations.",
  },
  {
    id: "infographic-lens",
    title: "Optics concept visual",
    category: "Infographics",
    type: "Pre-made",
    accent: "slate",
    summary: "A concept-first infographic for STEM diagrams and educational explainers.",
  },
  {
    id: "poster-ecology",
    title: "Ecosystem interactions poster",
    category: "Posters",
    type: "Template",
    accent: "forest",
    summary: "A modular poster composition for research highlights and figures.",
  },
  {
    id: "ga-inflammation",
    title: "Inflammation pathway abstract",
    category: "Graphical Abstract",
    type: "Pre-made",
    accent: "sunset",
    summary: "A pathway story designed for high-density scientific communication.",
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
    note: "Enhanced label clarity and callout spacing",
    accent: "blueprint",
  },
  {
    title: "Colors refined",
    time: "2 min ago",
    note: "Shifted palette toward natural medical tones",
    accent: "clinical",
  },
  {
    title: "Poster layout pass",
    time: "5 min ago",
    note: "Reordered modules and rebalanced hierarchy",
    accent: "mint",
  },
  {
    title: "Initial generation",
    time: "8 min ago",
    note: "Base visual from original prompt",
    accent: "amber",
  },
];

const suggestionPills = [
  "More designs",
  "Make the colors more natural",
  "Simplify the labels",
  "Turn this into a poster",
  "Make the style more minimal",
];

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
  },
  mobile: {
    activeScreen: "landing-mobile",
    activeCategory: null,
    galleryCount: 4,
    subject: "Default",
  },
  prompt:
    "Create a scientific infographic explaining the mechanism of CRISPR-Cas9 with labeled steps, clean callouts, and a clinical blue accent palette.",
  selectedVariant: 1,
  activeOverlay: null,
  editorState: "text",
  zoom: 100,
  hasHistory: false,
  mixedOrder: shuffle([...templateCatalog]),
};

const desktopScreens = document.querySelectorAll(".desktop-shell .screen");
const mobileScreens = document.querySelectorAll(".mobile-shell .screen");
const overlayBackdrop = document.getElementById("overlayBackdrop");
const overlayIds = [
  "preview-panel",
  "chat-panel",
  "history-modal",
  "export-modal",
  "share-modal",
  "overflow-menu",
  "remove-bg",
  "segment-overlay",
  "subject-dropdown",
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
}

function showOverlay(id) {
  hideOverlay();
  const overlay = document.getElementById(id);
  if (!overlay) return;
  overlay.classList.remove("hidden");
  overlayBackdrop.classList.remove("hidden");
  state.activeOverlay = id;
}

function hideOverlay() {
  overlayIds.forEach((id) => {
    document.getElementById(id)?.classList.add("hidden");
  });
  overlayBackdrop.classList.add("hidden");
  state.activeOverlay = null;
}

function showToast() {
  const toast = document.getElementById("download-toast");
  toast.classList.remove("hidden");
  setTimeout(() => toast.classList.add("hidden"), 1800);
}

function createTemplateCard(template) {
  const card = document.createElement("button");
  card.className = `template-card accent-${template.accent}`;
  card.innerHTML = `
    <div class="template-thumb template-${template.type.toLowerCase().replace(" ", "-")}">
      <div class="template-badge-row">
        <span class="badge subtle">${template.type}</span>
        <span class="badge teal">${template.category}</span>
      </div>
      <div class="template-illustration">
        <span class="illustration-bar"></span>
        <span class="illustration-bar short"></span>
        <span class="illustration-panel"></span>
      </div>
    </div>
    <div class="template-content">
      <strong>${template.title}</strong>
      <p>${template.summary}</p>
    </div>
  `;

  card.addEventListener("click", () => {
    state.prompt = `Create a ${template.category.toLowerCase()} inspired by ${template.title}, keeping the layout clean, scientific, and publication-ready.`;
    document.getElementById("landingPromptDesktop").value = state.prompt;
    document.getElementById("landingPromptMobile").value = state.prompt;
    toggleSubmitStates();
    document.querySelector(".landing-chat")?.scrollIntoView({ behavior: "smooth", block: "center" });
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
    button.innerHTML = `
      <div class="thumb-preview accent-${item.accent}">
        <span class="thumb-label">${item.title}</span>
      </div>
      <div class="thumb-time">${item.time}</div>
    `;
  } else {
    button.innerHTML = `
      <div class="history-mini accent-${item.accent}"></div>
      <div>
        <strong>${item.title}</strong>
        <div class="thumb-time">${item.time}</div>
        <div class="thumb-time">${item.note}</div>
      </div>
    `;
  }

  button.addEventListener("click", () => {
    if (compact) {
      setScreen("conversation-desktop");
    } else {
      state.selectedVariant = 1;
      updatePreviewVisuals();
    }
  });

  return button;
}

function renderHistory() {
  const historyDesktop = document.getElementById("historyDesktop");
  if (historyDesktop) {
    historyDesktop.innerHTML = "";
    historyItems.forEach((item) => historyDesktop.appendChild(createHistoryNode(item, true)));
  }

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
  document.getElementById("historyStripDesktop")?.classList.toggle("hidden", !state.hasHistory);
}

function createVariantCard(item) {
  const button = document.createElement("button");
  const isActive = state.selectedVariant === item.id;
  button.className = `variant-card accent-${item.accent} ${isActive ? "active" : ""}`;
  button.innerHTML = `
    <div class="variant-image accent-${item.accent}">
      <div class="variant-topline"></div>
      <div class="variant-figure"></div>
      <div class="variant-caption-lines">
        <span></span>
        <span></span>
        <span class="short"></span>
      </div>
    </div>
    <div class="variant-label">
      <strong>${item.title}</strong>
      <span>${item.summary}</span>
    </div>
  `;

  button.addEventListener("click", () => {
    state.selectedVariant = item.id;
    updatePreviewVisuals();
    renderVariants();
    showOverlay(isMobileViewport() ? "mobile-preview" : "preview-panel");
  });

  return button;
}

function renderVariants() {
  const desktop = document.getElementById("desktopVariants");
  const mobile = document.getElementById("mobileVariants");

  if (desktop) {
    desktop.innerHTML = "";
    variants.forEach((item) => desktop.appendChild(createVariantCard(item)));
  }

  if (mobile) {
    mobile.innerHTML = "";
    variants.forEach((item) => mobile.appendChild(createVariantCard(item)));
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

    const title = document.createElement("div");
    title.className = "dropdown-group-title";
    title.textContent = group;
    list.appendChild(title);

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
  const activeVariant = variantById(state.selectedVariant);
  const preview = document.getElementById("previewPanelImage");
  const mobilePreview = document.getElementById("mobilePreviewImage");

  if (preview) {
    preview.className = `preview-image large accent-${activeVariant.accent}`;
    preview.innerHTML = `
      <div class="preview-topline"></div>
      <div class="preview-frame">
        <div class="preview-column">
          <span></span>
          <span></span>
          <span class="short"></span>
        </div>
        <div class="preview-hero-circle"></div>
      </div>
      <div class="preview-foot">
        <span></span>
        <span class="short"></span>
      </div>
    `;
  }

  if (mobilePreview) {
    mobilePreview.className = `preview-image mobile-large accent-${activeVariant.accent}`;
    mobilePreview.innerHTML = `
      <div class="preview-frame mobile">
        <div class="preview-column">
          <span></span>
          <span></span>
        </div>
        <div class="preview-hero-circle"></div>
      </div>
    `;
  }

  const previewTitle = document.getElementById("previewTitle");
  const previewSummary = document.getElementById("previewSummary");
  if (previewTitle) previewTitle.textContent = activeVariant.title;
  if (previewSummary) previewSummary.textContent = activeVariant.summary;

  [document.getElementById("previewDots"), document.getElementById("mobilePreviewDots")].forEach((container) => {
    if (!container) return;
    container.innerHTML = "";
    variants.forEach((item) => {
      const dot = document.createElement("button");
      dot.className = `dot ${item.id === state.selectedVariant ? "active" : ""}`;
      dot.addEventListener("click", () => {
        state.selectedVariant = item.id;
        updatePreviewVisuals();
        renderVariants();
      });
      container.appendChild(dot);
    });
  });
}

function syncConversationPrompt() {
  const value = document.getElementById("landingPromptDesktop")?.value.trim() || state.prompt;
  state.prompt = value;
  document.getElementById("conversationUserPrompt").textContent = value;
  document.getElementById("conversationBreadcrumb").textContent = `${value.slice(0, 42)}...`;
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
  });

  overlayBackdrop.addEventListener("click", hideOverlay);

  document.getElementById("landingPromptDesktop")?.addEventListener("input", toggleSubmitStates);
  document.getElementById("landingPromptMobile")?.addEventListener("input", toggleSubmitStates);
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
  toggleSubmitStates();
  updateEditorToolbar("text");
  bindCanvasSelection();
  bindSelectGroups();
  initActions();
  syncConversationPrompt();
  syncMobileConversationPrompt();
  updateZoom();
}

init();
