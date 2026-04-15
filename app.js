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
  prompt: "",
  selectedVariant: 1,
  activeOverlay: null,
  editorState: "text",
  zoom: 100,
  hasHistory: false,
  mixedOrder: shuffle([...templateCatalog]),
  generatedResultTemplate: templateCatalog[0],
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

function randomTemplateItem() {
  return templateCatalog[Math.floor(Math.random() * templateCatalog.length)];
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
  card.className = `template-card template-card-image accent-${template.accent}`;
  card.innerHTML = `
    <div class="template-thumb template-image-thumb">
      <div class="template-corner-badge">${template.category === "Graphical Abstract" ? "GA" : template.category}</div>
      <img src="${template.image}" alt="${template.title}" class="template-real-image" />
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
  button.className = `variant-card variant-card-image accent-${item.accent} active`;
  button.innerHTML = `
    <div class="variant-image variant-image-real accent-${item.accent}">
      <img src="${item.image}" alt="${item.title}" class="variant-real-image" />
    </div>
  `;

  button.addEventListener("click", () => {
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
  const item = state.generatedResultTemplate;

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
  const activeVariant = state.generatedResultTemplate || templateCatalog[0];
  const preview = document.getElementById("previewPanelImage");
  const mobilePreview = document.getElementById("mobilePreviewImage");
  const conversationAiOutput = document.getElementById("conversationAiOutput");

  if (conversationAiOutput) {
    conversationAiOutput.textContent = `Here is a generated ${activeVariant.category.toLowerCase()} direction for ${activeVariant.subject.toLowerCase()}. You can continue refining the visual, ask for a different layout, or generate another direction.`;
  }

  if (preview) {
    preview.className = `preview-image large accent-${activeVariant.accent}`;
    preview.innerHTML = `<img src="${activeVariant.image}" alt="${activeVariant.title}" class="variant-real-image preview-real-image" />`;
  }

  if (mobilePreview) {
    mobilePreview.className = `preview-image mobile-large accent-${activeVariant.accent}`;
    mobilePreview.innerHTML = `<img src="${activeVariant.image}" alt="${activeVariant.title}" class="variant-real-image preview-real-image" />`;
  }

  const previewTitle = document.getElementById("previewTitle");
  const previewSummary = document.getElementById("previewSummary");
  if (previewTitle) previewTitle.textContent = activeVariant.title;
  if (previewSummary) previewSummary.textContent = activeVariant.summary;

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
  state.generatedResultTemplate = randomTemplateItem();
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
  updateSuggestionsRailState();
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
