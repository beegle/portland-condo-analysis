/* ================================================================
   Portland Ritz-Carlton Investment Analysis — Shared Application
   Data model, utilities, navigation, theming
   ================================================================ */

// --- DATA MODEL (consolidated from all reference documents) ---
const DATA = {
  ritz: {
    name: 'Ritz-Carlton Residences',
    address: '550 SW 10th Ave',
    year: 2024,
    stories: 35,
    totalUnits: 132,
    soldUnits: 11,
    unsoldUnits: 121,
    floors: '21–35',
    developer: 'BPM Real Estate Group',
    lender: 'Ready Capital',
    broker: "Christie's International Real Estate Evergreen",
    devCost: 600000000,
    hotelRooms: 251,
    officeSpace: 160000,
    originalPricing: { oneBed: [1200000, 1700000], twoBed: [2100000, 2600000], threeBed: [3300000, 3300000] },
    resetPricing: { oneBed: [600000, 600000], twoBed: [700000, 1235000], threeBed: [1600000, 1600000] },
    originalAvgPPSF: 2096,
    discountRange: '50–65%',
    hoaRange: [1700, 2500],
    hoaAvg: 2100,
    hoaPSFMonth: 1.50,
    inclusionaryFee: 7800000,
    inclusionaryFeePaid: 'Unknown',
    avgSoldPPSF: 1053,
    amenities: ['Infinity pool & jacuzzi', 'Ritz-Carlton Spa (5 treatment rooms)', '4,000 sq ft fitness center', '24-hour concierge', 'Valet parking', "Owners' lounge & terrace", 'Golf simulator', 'Wine storage', 'In-residence dining', 'Housekeeping services', 'Private entry & elevators'],
    finishes: ['10-foot ceilings', 'Floor-to-ceiling glass', 'Wolf/Sub-Zero/Miele appliances', 'Pedini Italian cabinetry', 'European White Oak floors'],
    bonvoy: { eliteStatus: 'Gold', nightCredits: 15, travelCredit: 300, hotelCredit: 100, clubUpgrades: 3 }
  },

  units: [
    { building: 'Ritz-Carlton', unit: '#2202', beds: 2, baths: 2.5, sqft: 1665, price: 705000, ppsf: 423, hoa: 2400, tax: null, parking: null, status: 'Active', dom: null },
    { building: 'Ritz-Carlton', unit: '#2110', beds: 2, baths: 2.5, sqft: 1515, price: 740000, ppsf: 488, hoa: 2400, tax: null, parking: null, status: 'Active', dom: null },
    { building: 'Ritz-Carlton', unit: '#2602', beds: 2, baths: 3, sqft: 1673, price: 1235000, ppsf: 738, hoa: 2467, tax: 15015, parking: 1, status: 'Active', dom: 17 },
    { building: 'Ritz-Carlton', unit: '#2610', beds: 2, baths: 2.5, sqft: 1446, price: 1235000, ppsf: 854, hoa: 2400, tax: null, parking: null, status: 'Active', dom: null },
    { building: 'Ritz-Carlton', unit: '#2805', beds: 2, baths: 3, sqft: 1670, price: 1250000, ppsf: 749, hoa: 2504, tax: 18540, parking: 1, status: 'Sold', dom: 8 }
  ],

  comparables: [
    { name: 'Vista North Pearl', address: '1150 NW Quimby St', year: 2018, stories: 21, units: 153, neighborhood: 'Pearl District', sqft: 1603, beds: 2, baths: 3, price: 1180000, ppsf: 736, hoaMonthly: 817, hoaRange: [595, 1908], tax: 17691, parking: 2, dom: 162, amenities: 'Garden terrace, concierge, guest suites, dog wash, bike storage', finishes: 'Bosch/Wolf/Sub-Zero, White Oak floors' },
    { name: 'The Cosmopolitan', address: '1075 NW Northrup St', year: 2016, stories: 28, units: 150, neighborhood: 'Pearl District', sqft: 1596, beds: 2, baths: 2.5, price: 649500, ppsf: 406, hoaMonthly: 1500, hoaRange: [1113, 1818], tax: null, parking: null, dom: 14, amenities: '24hr concierge, rooftop fire pits, guest suites, fitness, clubroom', finishes: 'Pedini/Miele, quartz, marble/travertine' },
    { name: 'The Metropolitan', address: '1001 NW Lovejoy St', year: 2006, stories: 19, units: 136, neighborhood: 'Pearl District', sqft: 1637, beds: 2, baths: 2, price: 959000, ppsf: 585, hoaMonthly: 1370, hoaRange: [745, 2901], tax: null, parking: null, dom: 306, amenities: '24/7 concierge, wine storage, rooftop deck, fitness, guest suites, LEED Silver', finishes: 'Premium, proven quality' },
    { name: 'The Casey', address: '311 NW 12th Ave', year: 2007, stories: 16, units: 61, neighborhood: 'Pearl District', sqft: 1663, beds: 2, baths: 2, price: 875000, ppsf: 526, hoaMonthly: 1738, hoaRange: [1038, 2826], tax: 17904, parking: null, dom: 133, amenities: '24/7 lobby attendant, LEED Platinum, private terraces', finishes: 'Floor-to-ceiling windows, large terraces' },
    { name: 'Atwater Place', address: '841 S Gaines St', year: 2008, stories: 23, units: 212, neighborhood: 'South Waterfront', sqft: 1594, beds: 2, baths: 2, price: 799900, ppsf: 502, hoaMonthly: 1000, hoaRange: [800, 1200], tax: null, parking: null, dom: null, amenities: '24hr concierge, eco garden, bocce court, river views', finishes: 'River & Mt. Hood views' },
    { name: 'Eliot Tower', address: '1221 SW 10th Ave', year: 2006, stories: 18, units: 232, neighborhood: 'Downtown', sqft: 1500, beds: 2, baths: 2, price: 520000, ppsf: 347, hoaMonthly: 800, hoaRange: [600, 1000], tax: null, parking: null, dom: null, amenities: '24/7 concierge, rooftop terrace', finishes: 'Near Portland Art Museum' },
    { name: 'The Encore', address: '1221 SW 10th Ave', year: 2008, stories: 16, units: 177, neighborhood: 'Pearl District', sqft: 1500, beds: 2, baths: 2, price: 525000, ppsf: 350, hoaMonthly: 550, hoaRange: [400, 700], tax: null, parking: null, dom: null, amenities: 'Standard amenities', finishes: 'Standard luxury' },
    { name: 'Park Ave West', address: '937 NW Glisan St', year: 2008, stories: null, units: null, neighborhood: 'Pearl District', sqft: 1580, beds: 2, baths: 2, price: 715000, ppsf: 453, hoaMonthly: 1296, hoaRange: [1275, 1296], tax: 13500, parking: 2, dom: 114, amenities: 'Standard Pearl District amenities', finishes: 'Standard luxury' },
    { name: 'The Henry', address: '1025 NW Couch St', year: 2004, stories: null, units: null, neighborhood: 'Pearl District', sqft: 1720, beds: 2, baths: 2, price: 730275, ppsf: 425, hoaMonthly: 1413, hoaRange: [1413, 1413], tax: 13533, parking: 1, dom: 118, amenities: 'Pearl District amenities', finishes: 'Standard luxury' },
    { name: 'The Meriwether', address: '836 S Curry St', year: 2006, stories: null, units: null, neighborhood: 'South Waterfront', sqft: 1525, beds: 2, baths: 2, price: 733250, ppsf: 481, hoaMonthly: 1689, hoaRange: [1689, 1689], tax: 13058, parking: 2, dom: 48, amenities: 'South Waterfront amenities', finishes: 'Waterfront views' }
  ],

  market: {
    medianCondoPrice: 325000,
    medianPriceChange: -0.03,
    avgPPSF: 325.78,
    ppsfChange: -0.035,
    avgCDOM: 102.5,
    cdomChange: 0.32,
    monthsOfSupply: 6.74,
    monthsOfSupplyPeak: 8.91,
    saleToList: 0.972,
    avgDOMDowntown: 130,
    pearlPPSFDecline: -0.1326,
    activeListings: 972,
    newListingsJan2026: 2109,
    officeVacancy: 0.34,
    officeVacancyPeakProjected: 'End of 2026',
    violentCrimeChange: -0.17,
    homicideChange: -0.51,
    footTrafficRecovery: 0.86,
    multifamilyPipeline: 656,
    condoDevDecline: -0.90,
    pearlMedianSalePrice: 561000,
    avgPPSFDowntown: 318
  },

  rates: {
    mortgage30yr: 6.00,
    mortgageDate: 'March 5, 2026',
    mortgageForecastEOY: 5.9,
    mortgageRangeExpected: [5.75, 6.30],
    sp500_10yr_avg: 13.5,
    sp500_longterm_avg: 10.0,
    hoaInflation: 0.03,
    propertyTaxRate: 0.011,
    insuranceHO6Annual: 633,
    earthquakeInsurance: 225
  },

  taxes: {
    propertyTaxRange: [0.010, 0.012],
    oregonIncomeTaxTop: 0.099,
    pfaSingle125k: 0.015,
    pfaSingle250k: 0.03,
    pfaJoint200k: 0.015,
    pfaJoint400k: 0.03,
    metroSHS: 0.01,
    artsTax: 35,
    parksLevy: 0.0014,
    parksLevyPerThousand: 1.40,
    combinedSurtaxImpact: [30000, 40000]
  }
};

const DEFAULTS = {
  purchasePrice: 1250000,
  downPaymentPct: 30,
  mortgageRate: 6.0,
  hoaMonthly: 2100,
  propertyTaxRate: 1.1,
  insuranceAnnual: 1500,
  maintenanceReserve: 2400,
  personalUseWeeks: 10,
  rentalWeeks: 0,
  rentalNightlyRate: 400,
  appreciationRate: 2.0,
  sp500Return: 10.0,
  luxuryRentMonthly: 4500,
  rentInflation: 3.0,
  holdYears: 10
};

// Color-blind accessible chart palette (blue-dominant)
const CHART_COLORS = {
  blue: '#3b82f6',
  blueLight: '#60a5fa',
  blueDark: '#1e3a5f',
  gold: '#c9a84c',
  orange: '#e07a30',
  teal: '#0891b2',
  slate: '#64748b',
  navy: '#1e293b'
};

// --- UTILITY FUNCTIONS ---
function fmt(n, decimals = 0) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency', currency: 'USD',
    minimumFractionDigits: decimals, maximumFractionDigits: decimals
  }).format(n);
}

function fmtK(n) {
  if (n >= 1000000) return '$' + (n / 1000000).toFixed(1) + 'M';
  if (n >= 1000) return '$' + (n / 1000).toFixed(0) + 'K';
  return fmt(n);
}

function fmtPct(n, decimals = 1) {
  return n.toFixed(decimals) + '%';
}

function fmtNum(n) {
  return new Intl.NumberFormat('en-US').format(n);
}

function calculateMonthlyPayment(principal, annualRate, months) {
  const r = annualRate / 100 / 12;
  if (r === 0) return principal / months;
  return principal * (r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
}

function calculateCumulativePrincipal(principal, annualRate, months) {
  const r = annualRate / 100 / 12;
  const monthlyPmt = calculateMonthlyPayment(principal, annualRate, 360);
  let balance = principal;
  let totalPrincipal = 0;
  for (let i = 0; i < months; i++) {
    const interest = balance * r;
    const principalPmt = monthlyPmt - interest;
    totalPrincipal += principalPmt;
    balance -= principalPmt;
  }
  return totalPrincipal;
}

function calculateRemainingBalance(principal, annualRate, monthsPaid) {
  const r = annualRate / 100 / 12;
  const monthlyPmt = calculateMonthlyPayment(principal, annualRate, 360);
  let balance = principal;
  for (let i = 0; i < monthsPaid; i++) {
    const interest = balance * r;
    balance -= (monthlyPmt - interest);
  }
  return Math.max(0, balance);
}

// --- CHART THEME HELPERS ---
function getChartColors() {
  return {
    text: '#4a5568',
    grid: 'rgba(212,208,200,0.5)',
    bg: '#ffffff'
  };
}

function baseChartOptions(title) {
  const c = getChartColors();
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: title ? { display: true, text: title, color: c.text, font: { family: "'Outfit', sans-serif", size: 13, weight: 600 }, padding: { bottom: 16 } } : { display: false },
      legend: { labels: { color: c.text, font: { family: "'Outfit', sans-serif", size: 12 }, usePointStyle: true, pointStyle: 'circle', padding: 16 } },
      tooltip: { backgroundColor: 'rgba(10,22,40,0.95)', titleColor: '#e8ecf1', bodyColor: '#8899ab', borderColor: 'rgba(201,168,76,0.3)', borderWidth: 1, cornerRadius: 8, padding: 12, titleFont: { family: "'Outfit', sans-serif", weight: 600 }, bodyFont: { family: "'Outfit', sans-serif" } }
    },
    scales: {
      x: { ticks: { color: c.text, font: { family: "'Outfit', sans-serif", size: 11 } }, grid: { color: c.grid }, border: { color: c.grid } },
      y: { ticks: { color: c.text, font: { family: "'Outfit', sans-serif", size: 11 } }, grid: { color: c.grid }, border: { color: c.grid } }
    }
  };
}

// --- NAVIGATION ---
const NAV_PAGES = [
  { href: 'index.html', label: 'Summary' },
  { href: 'property.html', label: 'Property' },
  { href: 'comps.html', label: 'Comparables' },
  { href: 'calculator.html', label: 'Calculator' },
  { href: 'breakeven.html', label: 'Break-Even' },
  { href: 'negotiation.html', label: 'Negotiation' },
  { href: 'risks.html', label: 'Risks' },
  { href: 'timeline.html', label: 'Timeline' }
];

function renderNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  const links = NAV_PAGES.map(p =>
    `<a href="${p.href}" class="${currentPage === p.href ? 'active' : ''}">${p.label}</a>`
  ).join('');

  nav.innerHTML = `
    <div class="nav-inner">
      <a href="index.html" class="nav-brand">Ritz-Carlton <span>Portland</span></a>
      <div class="nav-links" id="nav-links">${links}</div>
      <div class="nav-controls">
        <button class="nav-toggle" onclick="toggleNav()" aria-label="Toggle navigation">&#9776;</button>
      </div>
    </div>
  `;
}

function toggleNav() {
  const links = document.getElementById('nav-links');
  if (links) links.classList.toggle('open');
}


// --- FOOTER ---
function renderFooter() {
  const footer = document.getElementById('page-footer');
  if (!footer) return;
  footer.innerHTML = `
    <div class="container">
      <p>Portland Ritz-Carlton Residences Investment Analysis &mdash; Prepared March 2026<br>
      Data sourced from RMLS, Redfin, Freddie Mac, Portland Appraisal Blog, and public records. Not financial advice.</p>
    </div>
  `;
}

// --- REGISTER CHART ---
window.chartInstances = [];
function registerChart(chart) {
  window.chartInstances.push(chart);
  return chart;
}

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
  renderNav();
  renderFooter();
});
