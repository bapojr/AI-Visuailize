# Paperpal AI Visualizer PRD

## Document Control

- Product: Paperpal AI Visualizer landing, generation, and editing experience
- Prepared for: Paperpal
- Date: April 14, 2026
- Status: Draft v1
- Input sources: user brief, attached screenshots, existing local prototype, reference patterns from GPAI, Canva AI, Canva AI thread/editor, and ConceptViz

## 1. Product Summary

Paperpal needs an AI visualization experience that helps researchers turn prompts into polished scientific visuals with minimal effort. The product should combine the strongest interaction patterns from GPAI and Canva AI while staying focused on research visualization use cases rather than general-purpose AI creation.

The experience starts as a landing page with a GPAI-inspired prompt box, Canva-style category pills, and a Canva-like discovery section for templates and pre-made design examples. After the user submits a prompt, the interface transitions into a centered conversational generation flow inspired by Canva AI thread view. When the user selects an image, it opens in an enlarged right-hand preview with an `Edit in Editor` CTA. The editor then combines Canva’s top contextual editing toolbar, GPAI’s bottom action toolbar, and ConceptViz-inspired version history on the right.

This PRD defines the UX, feature requirements, scope, and acceptance criteria for that experience.

## 2. Goal

Create a premium, intuitive AI visualization flow for Paperpal that:

- Helps academic users generate `Infographics`, `Posters`, and `Graphical Abstracts`
- Feels modern and high-confidence by borrowing proven UX patterns from Canva AI and GPAI
- Keeps the experience tightly focused on research visualization rather than broad creative tooling
- Makes iteration easy through conversational refinement, template discovery, and side-by-side history review
- Creates a clear bridge from prompt to generation to editing to export

## 3. Problem Statement

Researchers often know what they want to communicate, but not how to structure it visually. Existing research visuals are time-consuming to create, difficult to iterate, and usually require design expertise or multiple tools. A generic AI chat UI is not enough because users also need:

- relevant scientific subject context
- domain-specific template inspiration
- multiple generated visual directions
- an editing surface that does not feel overwhelming
- a reliable way to compare versions after each change

Paperpal can solve this by offering a guided visualization workflow tailored to research communication.

## 4. Background and Design Direction

The requested experience should intentionally combine reference patterns rather than copy whole products.

### GPAI-inspired patterns to adopt

- Hero layout with the prompt/chatbox as the focal point
- Large, simple visualization-first input area
- Subject-area dropdown inside the chatbox area
- Bottom editor action toolbar behavior and structure
- Canvas-behind-image editing stage

### Canva-inspired patterns to adopt

- Category pills directly below the main prompt area
- `See what you can do with AI` gallery section
- Centered conversation thread after prompt submission
- Prompt plus generated results stacked in a visually calm, centered flow
- Large preview on the right when a design is selected
- Top contextual editing toolbar for selected elements

### ConceptViz-inspired patterns to adopt

- Persistent right-side history rail in the editor
- Thumbnail-based version recall
- Clear visibility into successive edits for comparison

### Explicit exclusions from references

- GPAI’s upper tool-navigation bar is out of scope
- Canva’s full general-purpose multi-tool ecosystem is out of scope
- Floating element-adjacent mini toolbar from Canva is out of scope
- Anything not relevant to visualization generation and editing should be excluded

## 5. Users

### Primary users

- Researchers
- PhD students
- Postdocs
- Clinicians and medical communicators
- Academic marketers or lab managers preparing visual summaries

### Secondary users

- Science educators
- Publishing support teams
- Students preparing visual assignments or posters

## 6. User Jobs To Be Done

- When I have a scientific concept, I want to describe it in natural language and get visual design options quickly.
- When I am unsure how to structure a design, I want examples and templates to guide me.
- When I work in a specific domain, I want to specify a subject area so the visual output feels more relevant.
- When I get design results, I want to refine them conversationally instead of starting over.
- When I edit a design, I want simple tools for common AI-assisted changes without needing professional design expertise.
- When I try multiple edits, I want to revisit older versions easily and compare them.

## 7. Success Metrics

### Primary product metrics

- Prompt submission rate from landing page
- Template engagement rate from `See what you can do with AI`
- Percentage of prompt sessions that open at least one generated preview
- Percentage of preview sessions that click `Edit in Editor`
- Percentage of editor sessions that complete at least one edit action
- Export or save completion rate

### Quality metrics

- Time from first prompt to first generated result
- Time from result selection to editor entry
- History interaction rate in editor
- Reduction in bounce after first prompt

### UX health metrics

- Subject dropdown usage
- Category pill filter usage
- Follow-up prompt rate in conversation thread
- Repeat visualization creation rate

## 8. Product Scope

## In Scope

- Landing page for AI visualization
- Three category pills: `Infographics`, `Posters`, `Graphical Abstract`
- Prompt input with subject-area dropdown
- Default mixed discovery gallery
- Filtered gallery behavior by category pill
- Conversation view after prompt submission
- Generated result cards and centered chat experience
- Enlarged preview on right-hand side after image selection
- `Edit in Editor` CTA
- Editor canvas with image-centered layout
- Top contextual toolbar for selected editable elements
- Bottom AI edit toolbar modeled on GPAI
- Right-side version history rail
- Version selection and preview switching

## Out of Scope for v1

- Full general design suite
- Multi-document project management
- Real-time collaboration
- Inline floating mini toolbars next to selected elements
- Advanced layer panel
- Full brand-kit system
- Extensive export settings beyond basic needs
- Non-visual Paperpal tools in the same hero/navigation

## 9. Core Experience Overview

The experience has three primary states:

1. Landing and discovery
2. Conversational generation
3. Editor and versioned refinement

Each state should feel connected, not like separate products.

## 10. Detailed Requirements

## 10.1 Landing Page

### Objective

Give users a high-confidence starting point to either type a prompt immediately or browse relevant visualization examples before starting.

### Layout

- Hero should be dominated by a GPAI-inspired chatbox
- No GPAI-style top tool-switcher bar above the chatbox
- Chatbox should be the central interaction element
- Directly below the chatbox, show category pills
- Below pills, show the Canva-inspired `See what you can do with AI` section

### Hero content

- Clear Paperpal branding
- Title and subheading focused on research visualization
- Main prompt field for describing what the user wants to visualize
- Upload/reference affordance may exist if supported by product scope
- Subject-area dropdown integrated inside the prompt/chatbox control area
- Submit action clearly visible

### Subject dropdown behavior

- Dropdown label defaults to `Default`
- If needed for clarity in UI copy, supporting helper text may read `Default (No specific subject)`
- User can open dropdown and select one subject area
- Selected subject persists through generation and editing flow unless changed

### Subject list for v1

- Default
- Medical Science
- Nutrition
- Odontology
- Pharmacy
- Nursing
- Animal Science
- Plant Science
- Biology
- Molecular Sciences
- Life Science
- Pharmacology
- Environmental Science
- Humanities
- STEM
- Others

### Landing acceptance criteria

- User can enter a prompt without selecting a subject
- Default subject is preselected on initial load
- User can change subject before prompt submission
- Prompt submit transitions user to conversation view

## 10.2 Category Pills

### Objective

Help users quickly narrow discovery content to the type of visualization they want.

### Required pills

- Infographics
- Posters
- Graphical Abstract

### Behavior

- By default, no pill is actively filtering, and the gallery shows a mixed assortment of all three categories in random order
- When a pill is selected, only templates and pre-made designs from that category are shown
- User can switch among pills without reloading the page
- Selected pill state should be visually prominent

### Content rules

- Discovery content should include both templates and pre-made design examples
- Default state should mix all three categories in random order
- Filtered state should show only relevant items for selected pill

### Acceptance criteria

- User sees all three pills immediately below the chatbox
- Selecting `Infographics` filters gallery to infographic content only
- Selecting `Posters` filters gallery to poster content only
- Selecting `Graphical Abstract` filters gallery to graphical abstract content only

## 10.3 `See what you can do with AI` Section

### Objective

Provide inspiration and reduce blank-page friction using Canva-like browsing patterns adapted for research visuals.

### Layout

- Section title: `See what you can do with AI`
- Card-based gallery visually similar to Canva’s section
- Mixture of template cards and pre-made design cards
- Cards should be scannable, image-forward, and category-tagged if useful

### Content behavior

- Default state: random mixed ordering across all three categories
- Filtered state: only items matching selected pill
- Cards should feel like research and academic design examples, not generic consumer content

### Card types

- Template cards: starting points for creating a new design
- Pre-made design cards: example outputs users can inspect and potentially start from

### Acceptance criteria

- Gallery loads below category pills on landing
- Gallery content updates when pill changes
- Gallery defaults to random mixed order

## 10.4 Prompt History Placement on Landing

### Objective

Preserve session continuity after the user has started creating.

### Behavior

- Before any prompt history exists, only show pills and the `See what you can do with AI` section
- Once user has prompt/conversation history, insert a history strip between the category pills and the `See what you can do with AI` section
- Placement should follow the Canva-inspired pattern described in the brief

### History strip content

- Previously generated visual sessions or prompt summaries
- Thumbnail-led cards for fast recall
- Most recent items first

### Acceptance criteria

- History section appears only after there is user history
- History is positioned between pills and the discovery section

## 10.5 Conversation View After Prompt Submission

### Objective

Move the user from landing into a generation flow that feels like Canva AI thread view, centered and focused.

### Layout

- Center-aligned conversational UI
- User prompt displayed prominently in thread
- AI response below with generated design options
- Follow-up prompt input remains accessible
- Visual pacing should be calm, spacious, and design-first

### Behavior

- After prompt submission, user is taken to conversation screen
- Thread shows the original prompt as first message
- System responds with generated outputs and optional refinement chips
- User can continue refining through follow-up prompts

### Result presentation

- Generated outputs shown as image cards or a result strip/grid
- Clicking any generated image opens enlarged preview on the right-hand side

### Acceptance criteria

- Prompt submission always opens the centered conversation view
- User sees original prompt in thread
- User can submit follow-up prompts in the same conversation

## 10.6 Right-Hand Enlarged Preview

### Objective

Let users inspect a selected design without leaving the conversation context.

### Layout and behavior

- When a generated image is selected, open it in enlarged view on the right-hand side
- Preview should remain tied to the current conversation context
- Preview should include a prominent `Edit in Editor` CTA
- If applicable, allow cycling between generated options while keeping preview open

### Acceptance criteria

- Clicking a generated image opens enlarged RHS preview
- Preview includes `Edit in Editor`
- Clicking CTA opens editor with selected image as active design

## 10.7 Editor Experience

### Objective

Provide a guided editing environment that combines Canva’s contextual editing ease with GPAI’s AI-action workflow and ConceptViz’s version visibility.

### Core editor structure

- Canvas centered on screen
- Selected design displayed on the canvas
- Background canvas visible behind the image
- Top contextual toolbar
- Bottom AI action toolbar
- Right-side history rail

### 10.7.1 Canvas

- The design/image sits within a visible canvas/stage
- Canvas should resemble the structured editing environment seen in Canva and GPAI
- Users should clearly understand they are editing a visual artifact, not just viewing an image

### 10.7.2 Top Toolbar

Follow Canva-inspired behavior:

- Toolbar appears at the top of the editor
- Selecting editable elements updates available top-toolbar actions
- Only top contextual toolbar is needed
- No element-adjacent floating toolbar should appear next to selected elements

### Top toolbar functional requirements

- Text styling controls for text elements
- Basic layout/position controls where appropriate
- Visual styling controls based on selected object type
- Toolbar state must change depending on selected element

### Acceptance criteria

- Selecting text element updates top toolbar with text controls
- Selecting image or graphic element updates top toolbar with relevant controls
- No floating side mini-toolbar appears next to selected element

### 10.7.3 Bottom Toolbar

Follow GPAI-inspired interaction model below the image.

### Required bottom-toolbar actions

- Edit via chat
- Segment object
- Select area
- Remove background
- More
- Delete or trash action if supported

### `Select area` behavior

- Selecting this mode should update the canvas into area-selection state
- User can define a selection area on the image
- Area-selection state should visually match the requested GPAI interaction pattern

### `More` menu

Should support v1 options such as:

- Vectorize
- Crop
- Extract text

### Acceptance criteria

- Bottom toolbar is always visible under the image during editing
- `Select area` visibly changes interaction mode
- `More` opens a menu with the required additional options

## 10.8 Right-Hand History Rail in Editor

### Objective

Help users compare iterations and revisit prior states without losing confidence.

### Layout

- Persistent RHS history panel inspired by ConceptViz
- Thumbnail image for each version
- Associated prompt/edit summary shown with each version where useful
- Most recent version should be clearly indicated

### Behavior

- Each meaningful change creates a new history item
- User can click any history thumbnail to view that version
- Current selected version should be clearly highlighted
- History panel should support quick comparison and scrolling

### Acceptance criteria

- Every edit creates a new visible version item
- Clicking a version updates the main preview/canvas to that version
- Users can visually compare prior versions using thumbnails

## 11. End-to-End User Flow

1. User lands on Paperpal AI Visualizer landing page
2. User sees chatbox, subject dropdown, category pills, and mixed discovery gallery
3. User optionally filters by `Infographics`, `Posters`, or `Graphical Abstract`
4. User enters prompt and optionally selects a subject area
5. User submits prompt
6. UI transitions to centered conversation view
7. User sees prompt and generated design options
8. User clicks a design
9. Selected design opens in enlarged RHS preview
10. User clicks `Edit in Editor`
11. Editor opens with selected design on canvas
12. User edits using top toolbar, bottom toolbar, or chat-based refinements
13. Each edit is saved into RHS history panel
14. User can click previous versions to compare and revisit
15. User exports or continues iterating

## 12. Functional Requirements

## Landing and Discovery

- System must render a primary prompt-first landing page
- System must provide subject-area selection with `Default` preselected
- System must show exactly three category pills for v1
- System must display mixed template and pre-made design cards by default
- System must filter gallery content by selected pill
- System must surface session history only after prompt history exists

## Conversation

- System must create a conversation thread from the submitted prompt
- System must display generated outputs in a centered conversational layout
- System must support follow-up prompts in the same thread
- System must allow preview selection from generated outputs

## Preview

- System must show selected output in RHS enlarged preview
- System must provide `Edit in Editor` CTA

## Editor

- System must render a visible editing canvas behind the image
- System must provide top contextual toolbar
- System must provide bottom AI edit toolbar
- System must provide RHS history rail
- System must update history after each meaningful change

## 13. UX Principles

- Focused, not noisy: one dominant action per state
- Scientific, not generic: examples and templates should look credible for research communication
- Progressive disclosure: simple on first interaction, richer once editing begins
- Confidence through visibility: users should always know what changed and how to return to earlier versions
- Fast inspiration: users should never face an empty page without help

## 14. Content Strategy

### Voice and tone

- Clear
- Professional
- Academic-friendly
- Visually confident
- Not overly technical in UI labels

### Example content categories

- Clinical and medical pathways
- Biology and molecular mechanisms
- Environmental science summaries
- STEM concept explainers
- Research poster layouts
- Journal-style graphical abstracts

### Template inventory recommendation for launch

- At least 8 to 12 templates/examples per category
- Balanced across beginner-friendly and publication-style outputs
- Mixed orientation where useful, especially for posters and graphical abstracts

## 15. Non-Functional Requirements

- Responsive across desktop and tablet at minimum
- Smooth transitions between landing, conversation, preview, and editor
- Preview and editor should load fast enough to preserve creative momentum
- Visual hierarchy must remain clear even with long prompts
- History rail must support scroll for longer edit sessions

## 16. Accessibility Requirements

- Keyboard navigation for pills, dropdown, gallery cards, and toolbar actions
- Visible focus states
- Adequate contrast for all controls and text
- Alt text or accessible labels for thumbnails and actionable icons
- Clear selected states for pills, history items, and tool modes

## 17. Analytics Events

- `visualizer_landing_viewed`
- `subject_dropdown_opened`
- `subject_selected`
- `category_pill_selected`
- `template_card_clicked`
- `prompt_submitted`
- `conversation_followup_submitted`
- `result_preview_opened`
- `edit_in_editor_clicked`
- `editor_top_toolbar_used`
- `editor_bottom_toolbar_used`
- `history_version_clicked`
- `export_clicked`

## 18. Risks and Open Questions

### Risks

- Hybridizing multiple reference patterns may produce an inconsistent experience if not normalized into a single Paperpal visual system
- Too many visible options early on may reduce first-time prompt submission
- History generation for every change may create clutter unless summaries are concise

### Open questions

- Should `Default` be displayed simply as `Default` or as `Default (No specific subject)` in the UI?
- Should discovery cards open a prompt-prefilled flow or a ready-made editable design?
- What counts as a `meaningful` history step for automatic version creation?
- Will image/reference upload be available in v1 or deferred?
- Should the RHS preview in conversation replace part of the thread width or open as an overlay panel on smaller screens?

## 19. Recommended v1 Delivery Priorities

### P0

- Landing page with GPAI-style prompt area
- Subject dropdown with required list
- Three category pills
- Mixed/filtered discovery gallery
- Prompt-to-conversation transition
- Centered thread UI
- RHS enlarged preview with `Edit in Editor`
- Editor with top toolbar, bottom toolbar, and RHS history rail

### P1

- Better prompt history recall on landing
- Smarter version labels in history
- Template-start flow improvements
- Enhanced `More` menu actions

### P2

- Deeper editing controls
- Rich export options
- More advanced comparison views

## 20. Acceptance Summary

The PRD is considered satisfied when Paperpal ships a visualization journey where:

- users can start from a focused landing page
- the landing page contains a GPAI-inspired chatbox without extra top tool navigation
- users can choose among `Infographics`, `Posters`, and `Graphical Abstract`
- the discovery gallery behaves like Canva’s AI inspiration section
- subject selection works with `Default` as the initial state
- submitting a prompt transitions into a Canva-like centered conversation flow
- selecting an output opens RHS enlarged preview with `Edit in Editor`
- editor combines canvas stage, Canva-like top toolbar, GPAI-like bottom toolbar, and ConceptViz-like RHS history
- users can revisit prior versions by clicking history thumbnails

## 21. Implementation Note for Design and Engineering

This should be treated as a Paperpal-native product experience inspired by proven reference patterns, not a stitched copy of multiple tools. Visual consistency, research credibility, and flow continuity are more important than strict fidelity to any single reference.
