# Plan: Portland Ritz-Carlton Investment Analysis Report

## Context
The Ritz-Carlton Residences at Block 216 (Portland, OR) underwent a 50-65% price reset in January 2026 after the developer's deed-in-lieu of foreclosure to Ready Capital. Only 11 of 132 units have sold. The user is evaluating this as a second home / pied-a-terre ($1.2M-$1.8M budget, 7-10 year hold, 8-12 weeks/year personal use). Three detailed reference documents provide market data, comps, and risk analysis. The goal is a polished, interactive HTML report that helps make an informed investment decision.

## Deliverable
Multi-page web app in `/Users/beegle/Desktop/Portland Condo/report/`
- Uses Anthropic `frontend-design` skill for polished, distinctive UI
- Index page opens with clear summary/conclusion and investment thesis
- Separate pages for deep-dive into each analysis facet
- Color-blind accessible (blue-dominant palette, patterns on charts, no red/green reliance)
- Easy-to-read writing style, modern design, best layout/print principles
- Fully responsive (mobile/tablet/desktop)

### Page Structure
1. `index.html` - Executive summary, investment conclusion, key metrics dashboard, navigation to all sections
2. `property.html` - Property overview, amenities, unit inventory, distress timeline
3. `comps.html` - Comparable market analysis with sortable tables and charts
4. `calculator.html` - Total cost of ownership interactive calculator
5. `breakeven.html` - Break-even analysis (RE vs S&P, Own vs Rent, sensitivity matrix)
6. `negotiation.html` - Negotiation intelligence, offer calculator, carrying cost leverage
7. `risks.html` - Risk matrix with scored categories and composite gauge
8. `timeline.html` - Market outlook timeline with recovery indicators
- `styles.css` - Shared design system
- `app.js` - Shared data model, utilities, chart configs, interactivity

## Implementation Steps

### Step 0: Download Supporting Images
Download relevant images to `report/images/`:
- Ritz-Carlton Portland exterior/building photo
- Portland skyline / downtown aerial
- Interior/amenity photos if available
- Maps or neighborhood context

### Step 1: Fetch Live Data
Use web search to get current values for:
- 30-year fixed mortgage rate (current)
- S&P 500 YTD and 10-year avg return
- Portland luxury rental rates ($2BR+)
- Portland office vacancy latest data

These get hardcoded into the report's data model with "as of" dates.

### Step 2: Build Shared Design System (`styles.css` + `app.js`)
Use `frontend-design` skill for distinctive, production-grade UI:
- CSS custom properties for light/dark themes (navy/slate/gold palette)
- Color-blind accessible: blue-dominant palette, chart patterns/textures, no red/green reliance
- Responsive grid layouts (4-col dashboard, 2-col calculator, mobile-first)
- Card component, typography, spacing system
- Print styles with proper margins, page breaks, hidden interactive controls
- Shared nav component with page links + theme toggle
- Shared data model in `app.js` with all reference data consolidated
- System font stack (no external font dependency)

### Step 3: Index Page - Summary, Conclusion & Dashboard (`index.html`)
**Lead with the conclusion:** Clear investment thesis statement (buy/hold/pass with conditions).
Easy-to-read narrative summary covering: what happened, why it matters, what the numbers say, what to watch for.
8 metric cards: discount from original (50-65%), PPSF range ($423-$854), unsold inventory (121/132), market timing (buyer's market), mortgage rate, composite risk score, Pearl PPSF decline (-13.26%), office vacancy (35%).
Navigation cards linking to each analysis page.

### Step 4: Property Overview (`property.html`)
- Building profile (35 stories, 132 units, LEED Gold)
- Distress timeline (2024 launch → 2025 foreclosure → 2026 price reset)
- Amenity grid with Bonvoy perks (Gold Elite, 15 night credits, $300 travel credit)
- Unit table filtered to $1.2-1.8M range

### Step 5: Comparable Market Analysis (`comps.html`)
- Sortable/filterable table of 9 comparable buildings
- PPSF horizontal bar chart (Chart.js)
- HOA comparison chart with 10-year cumulative cost differential
- Ritz row visually highlighted

### Step 6: Total Cost of Ownership Calculator (`calculator.html`)
Interactive sliders: purchase price, down payment %, mortgage rate, HOA, tax rate, insurance, maintenance, personal-use weeks, rental weeks/rate.
Live outputs: monthly breakdown, annual cost, 10-year cumulative, cost per night of personal use.

### Step 7: Break-Even Analysis (`breakeven.html`)
- **Chart A:** RE total returns vs. S&P 500 over 1-10 years (line chart with appreciation/return sliders)
- **Chart B:** Own vs. Rent comparison (stacked area, rent slider)
- **Table C:** Sensitivity matrix (appreciation rates x hold periods, color-coded RE vs S&P differential)

### Step 8: Negotiation Intelligence (`negotiation.html`)
- PPSF framework bars (resale luxury $425-526 vs. branded $749-803 vs. Ritz ask)
- Unit-level offer calculator (aggressive/market/full ask for each unit)
- Ready Capital carrying cost leverage ($254K/month HOA on 121 unsold units)
- Days on market analysis chart

### Step 9: Risk Matrix (`risks.html`)
6 risk cards (Market, HOA, Tax, Liquidity, Structural, Operational) each scored 1-10 with color coding. Composite risk gauge (Chart.js doughnut).

### Step 10: Market Outlook Timeline (`timeline.html`)
Horizontal CSS timeline from 2023 (hotel opens) through 2030 (7-year hold mark). Events color-coded by sentiment (positive/negative/neutral).

### Step 11: Interactive Features + Polish
- Dark/light theme toggle with Chart.js color sync
- Section collapsing (accordion)
- Sticky nav with scroll-spy
- Responsive breakpoints (mobile/tablet/desktop)
- Print-friendly styles (hide sliders, constrain canvas)

## Key Files
- **Output directory:** `/Users/beegle/Desktop/Portland Condo/report/`
- **Data source:** `references/Portland Luxury Condo Market Analysis.md` (comps, taxes, strategy)
- **Data source:** `references/compass_artifact_*.md` (unit-level comps, HOA differentials)
- **Data source:** `references/deep-research-report.md` (Ritz unit pricing, market trends)

## Verification
1. Open `portland-ritz-analysis.html` in browser
2. Verify all 8 sections render with data
3. Test dark/light mode toggle
4. Adjust TCO calculator sliders - verify outputs update in real-time
5. Adjust break-even sliders - verify charts redraw
6. Test negotiation offer calculator with different units
7. Verify print layout (Cmd+P)
8. Test responsive behavior at mobile/tablet widths
