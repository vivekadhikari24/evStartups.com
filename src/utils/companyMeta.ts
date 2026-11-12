export interface CompanyMeta {
  microCategory: string;
  filterTag: string;
  tag: string;
  specs: string;
  summary: string;
  specialty: string;
}

export const COMPANY_METADATA: Record<string, CompanyMeta> = {
  'ampcontrol': {
    microCategory: 'Depot Energy & Load Balancing',
    filterTag: 'Charging Management (CPMS) Hardware-Agnostic',
    tag: 'Load Balancing',
    specs: 'OCPP 2.0.1 • Dynamic Load Balancing • Cloud API',
    summary: 'AI-driven EV depot charging and dynamic load management software optimizing power distribution and eliminating utility peak demand charges.',
    specialty: 'AI-driven depot energy orchestration and peak shaving',
  },
  'ampeco': {
    microCategory: 'White-Label CPMS Platform',
    filterTag: 'Charging Management (CPMS) Hardware-Agnostic',
    tag: 'White-Label',
    specs: 'White-Label CPMS • OCPP 2.0.1 • Multi-Currency Billing',
    summary: 'Enterprise white-label EV charging management system (CPMS) providing custom-branded driver apps, dynamic load balancing, and multi-currency billing across 70+ markets.',
    specialty: 'Scalable white-label platform for charge point operators',
  },
  'driivz': {
    microCategory: 'Enterprise Charging Network & V2G',
    filterTag: 'Charging Management (CPMS) Hardware-Agnostic',
    tag: 'Energy Mgmt',
    specs: 'Enterprise CPMS • Self-Healing Diagnostics • V2G Integration',
    summary: 'Global EV charging network management platform offering automated self-healing charger diagnostics, high-density depot scheduling, and Vehicle-to-Grid (V2G) orchestration.',
    specialty: 'High-volume charging network and energy management',
  },
  'epic-charging': {
    microCategory: 'Commercial Depot & Reimbursement',
    filterTag: 'Charging Management (CPMS) Hardware-Agnostic',
    tag: 'Depot Software',
    specs: 'Depot Management • Take-Home Reimbursement • Cloud API',
    summary: 'Cloud-native commercial fleet charging platform delivering multi-port depot energy balancing, real-time uptime monitoring, and automated take-home vehicle reimbursement.',
    specialty: 'Cloud-native fleet charging and automated billing',
  },
  'geotab': {
    microCategory: 'Fleet Telematics & Analytics',
    filterTag: 'Fleet Telematics Hardware-Agnostic',
    tag: 'Telematics',
    specs: 'Fleet Telematics • EVSA Suitability • Battery Health Analytics',
    summary: 'Enterprise connected fleet telematics platform featuring real-time EV battery State of Charge tracking, range diagnostics, and Electric Vehicle Suitability Assessments (EVSA).',
    specialty: 'Global enterprise fleet diagnostics and EV battery health',
  },
  'monta': {
    microCategory: 'Charging Management (CPMS)',
    filterTag: 'Charging Management (CPMS) Hardware-Agnostic',
    tag: 'Charging CPMS',
    specs: 'Depot Operating System • Spot-Price Charging • Power Sharing',
    summary: 'All-in-one EV charging operating system connecting depot chargers with dynamic spot-price smart charging, load sharing, and automated driver expense reimbursement.',
    specialty: 'All-in-one EV charger management, driver app, and billing',
  },
  'samsara': {
    microCategory: 'Connected Operations & IoT Telematics',
    filterTag: 'Fleet Telematics Hardware-Agnostic',
    tag: 'Operations',
    specs: 'IoT Telematics • Real-Time SoC • Route Electrification',
    summary: 'Connected Operations Cloud unifying commercial vehicle IoT telematics with live EV battery health monitoring, low-charge alerts, and depot electrification planning.',
    specialty: 'Integrated fleet IoT, video telematics, and asset tracking',
  },
  'chargepoint': {
    microCategory: 'Depot Charging & Hardware Integration',
    filterTag: 'Turnkey Depot & Hardware',
    tag: 'Turnkey Depot',
    specs: 'OCPP 1.6J • Dynamic Power Sharing • Fleet API',
    summary: 'Integrated commercial fleet depot charging management, dynamic power distribution, and multi-tier utility demand management.',
    specialty: 'Integrated fleet depot charging and turnkey hardware',
  },
  'motive': {
    microCategory: 'Commercial Telematics & AI Fleet Safety',
    filterTag: 'Fleet Telematics Hardware-Agnostic',
    tag: 'AI Telematics',
    specs: 'OBD-II / CAN Telematics • AI Dashcams • EV Energy Analytics',
    summary: 'AI-powered fleet operations platform delivering real-time EV battery State of Charge tracking, range forecasting, and EV suitability assessments.',
    specialty: 'Commercial telematics, EV battery monitoring, and AI fleet safety',
  },
  'ev-connect': {
    microCategory: 'White-Label & Enterprise CPMS',
    filterTag: 'Charging Management (CPMS) Hardware-Agnostic',
    tag: 'Enterprise CPMS',
    specs: 'OCPP 1.6J / 2.0.1 • OCPI Roaming • Fleet Portal',
    summary: 'Enterprise cloud EV charging management platform offering multi-vendor hardware certification, dynamic depot load balancing, and OCPI roaming.',
    specialty: 'Hardware certification lab and enterprise CPMS',
  },
  'abb-e-mobility': {
    microCategory: 'Commercial EV Charging Hardware (EVSE)',
    filterTag: 'Commercial Hardware (EVSE)',
    tag: 'DC Fast Hardware',
    specs: '50kW–360kW DC Fast • OppCharge Pantograph • MCS Ready',
    summary: 'Industrial commercial EV charging infrastructure manufacturing Terra 360 high-power DC fast chargers, depot pantographs, and megawatt transit systems.',
    specialty: 'Industrial high-power DC fast chargers and transit systems',
  },
  'kempower': {
    microCategory: 'Modular DC Fast Charging Hardware',
    filterTag: 'Commercial Hardware (EVSE)',
    tag: 'Modular DC EVSE',
    specs: 'Modular Power Units • Granular 25kW Routing • Movable DC',
    summary: 'Nordic modular DC fast charging manufacturer utilizing centralized high-power cabinets with space-saving satellite dispensers and dynamic power routing.',
    specialty: 'Modular DC fast chargers and dynamic power routing',
  },
  'tritium': {
    microCategory: 'Liquid-Cooled DC Fast Charging Hardware',
    filterTag: 'Commercial Hardware (EVSE)',
    tag: 'Liquid-Cooled EVSE',
    specs: 'Sealed IP65 Liquid-Cooling • PKM150 Architecture • NACS/CCS',
    summary: 'Sealed liquid-cooled DC fast chargers engineered for harsh commercial depot environments without recurring mechanical air filter replacements.',
    specialty: 'Liquid-cooled sealed DC fast chargers for harsh climates',
  },
  'the-mobility-house': {
    microCategory: 'Depot Energy Management & V2G',
    filterTag: 'Charging Management (CPMS) Hardware-Agnostic',
    tag: 'Local Load Mgmt',
    specs: 'ChargePilot Hybrid Controller • Dynamic Load Balancing • V2G',
    summary: 'Hardware-agnostic charging and energy management system featuring a fail-safe local controller operating even during cloud internet outages.',
    specialty: 'Fail-safe hybrid local controller and V2G energy orchestration',
  },
  'incharge-energy': {
    microCategory: 'Turnkey Fleet Electrification & CMS',
    filterTag: 'Turnkey Depot & Hardware',
    tag: 'Turnkey Electrification',
    specs: 'InControl Fleet CMS • Dual-Vehicle DC EVSE • Utility Services',
    summary: 'End-to-end commercial fleet electrification delivering utility interconnection, dual-port DC charging hardware, InControl CMS, and 24/7 service.',
    specialty: 'Turnkey utility interconnection and commercial fleet CMS',
  },
  'webfleet': {
    microCategory: 'Fleet Telematics & EV Diagnostics',
    filterTag: 'Fleet Telematics Hardware-Agnostic',
    tag: 'EV Telematics',
    specs: 'CAN Bus Telemetry • Topography Range Sync • Fleet Electrification',
    summary: 'Enterprise commercial vehicle telematics platform providing real-time EV battery State of Charge tracking, temperature-adjusted range, and transit planning.',
    specialty: 'Enterprise fleet telematics, SoC tracking, and range forecasting',
  },
};

export function getCompanyMeta(id: string, fallbackTagline?: string): CompanyMeta {
  return COMPANY_METADATA[id] || {
    microCategory: 'Commercial EV Platform',
    filterTag: 'Hardware-Agnostic',
    tag: 'EV Software',
    specs: 'OCPP 1.6J / 2.0.1 • Cloud Management • REST API',
    summary: fallbackTagline || 'Commercial EV fleet charging software and energy management platform.',
    specialty: fallbackTagline || 'Commercial EV software and charging management',
  };
}

export function getCompanyDomain(websiteUrl: string, fallbackId: string): string {
  try {
    return new URL(websiteUrl).hostname.replace('www.', '');
  } catch {
    return `${fallbackId}.com`;
  }
}

export function getCompanyLogoUrl(websiteUrl: string, fallbackId: string, size: number = 128): string {
  const domain = getCompanyDomain(websiteUrl, fallbackId);
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`;
}

export const CATEGORY_CARD_META: Record<string, { summary: string; spec: string }> = {
  'ev-fleet-charging-software': {
    summary: 'Cloud platforms orchestrating depot energy management, dynamic load balancing, and utility peak demand shaving.',
    spec: 'OCPP 1.6J / 2.0.1',
  },
  'fleet-telematics-diagnostics': {
    summary: 'Real-time CAN bus telemetry capturing battery State of Charge (SoC), State of Health (SoH), and predictive range.',
    spec: 'CAN / OBD-II Telemetry',
  },
  'white-label-cpms-roaming': {
    summary: 'Turnkey charging station management systems (CPMS) offering multi-currency billing, driver apps, and OCPI roaming.',
    spec: 'OCPI 2.2.1 Roaming',
  },
  'commercial-ev-charging-hardware': {
    summary: 'Level 2 AC and high-power DC fast charging hardware (50kW–400kW) engineered for fleet depots and transit hubs.',
    spec: 'DC Fast & Megawatt EVSE',
  },
};

