# Portland Condo Investment Analysis

## Project Overview
Interactive HTML/JavaScript report analyzing the Ritz-Carlton Residences at Block 216 in Portland, OR as a long-term investment opportunity (pied-a-terre / second home).

## Output
Multi-page web app in `report/` directory:
- `report/index.html` - Landing page with executive summary and clear investment conclusion
- Additional pages for each analysis section (comps, calculator, break-even, negotiation, risks, timeline)
- Shared CSS/JS assets
- Chart.js from CDN (https://cdn.jsdelivr.net/npm/chart.js)
- No build step required - open index.html in browser

## Reference Data
All source documents are in `references/`:
- `compass_artifact_wf-bb57d54d-cfd0-404d-b271-fad381b92c82_text_markdown.md` - Market overview, HOA analysis, risk factors
- `deep-research-report.md` - Unit-level data, market trends, negotiation strategies
- `Portland Luxury Condo Market Analysis.md` - Institutional analysis, comps, tax implications

## Key Parameters
- Use case: Second home / pied-a-terre (8-12 weeks/year personal use)
- Budget: $1.2M-$1.8M (2-3BR units)
- Horizon: 7-10 years
- Analyses: Total cost of ownership, break-even vs S&P 500 + renting, comp-based negotiation
- Data enrichment: Supplement references with current live data (rates, indices)

## Design Principles
- Use Anthropic's `frontend-design` skill for high-quality, distinctive UI
- Modern, clean financial report aesthetic (navy/slate/gold accents)
- Color-blind accessible palette (blue-dominant, avoid red/green distinctions)
- Easy-to-read style with clear hierarchy and generous whitespace
- Index page leads with summary conclusion (investment thesis + recommendation)
- Best layout/print principles (proper margins, page breaks, print-friendly)
- Responsive layout (desktop/tablet/mobile)
- Dark/light mode toggle
- Interactive sliders for scenario modeling
- Clear, well-labeled charts with patterns/textures in addition to color
