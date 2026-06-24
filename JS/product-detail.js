/* ══════════════════════════════════════════════════════
   LongRun LED — product-detail.js
   Data store & renderer for all 14 product detail pages
   ══════════════════════════════════════════════════════ */

/* ─────────────────────────────
   PRODUCT DATABASE
   ───────────────────────────── */
const PRODUCTS = {

  /* ── FINE PITCH ── */
  'cv-series': {
    id: 'cv-series',
    name: 'CV Series',
    series: 'Fine Pitch Series',
    tech: 'COB',
    category: 'fine',
    headline: 'COB Ultra-high Definition LED Display',
    pitch: '0.93 / 1.25 / 1.56 / 1.87mm',
    cabinetSize: '600×337.5mm',
    imgColor: '0d2a5e',
    heroImg: `https://placehold.co/900x506/0d2a5e/white?text=CV+Series`,
    thumbs: [
      `https://placehold.co/160x112/0d2a5e/white?text=CV+1`,
      `https://placehold.co/160x112/102060/white?text=CV+2`,
      `https://placehold.co/160x112/153070/white?text=CV+3`,
    ],
    keyIcons: [
      { label: 'Flip Chip Process',    icon: 'chip'       },
      { label: 'Ultra High-definition',icon: 'hd'         },
      { label: 'Golden Ratio',         icon: 'ratio'      },
      { label: 'Broad Gamut',          icon: 'gamut'      },
      { label: 'Ultra Thin',           icon: 'thin'       },
      { label: 'Energy Saving',        icon: 'energy'     },
      { label: 'High Contrast',        icon: 'contrast'   },
      { label: 'Easy Installation',    icon: 'install'    },
    ],
    features: [
      {
        title: 'Ultra High Definition Display Quality',
        desc: 'LongRun COB Small Pitch is designed for high definition display, superb white balance, ink color, gray level, display consistency, constant brightness, super clear picture.',
        bullets: ['Superior color accuracy', 'Consistent brightness across panels', 'Professional-grade gray scale'],
        img: `https://placehold.co/600x450/0d2a5e/white?text=HD+Quality`,
      },
      {
        title: 'Simple Ultra-Thin Cabinet Design',
        desc: '27 inch die-cast aluminum cabinet material, 16:9 ultra-thin cabinet design, wireless connection, save space, simple design, easy assembly, save time and effort.',
        bullets: ['Lightweight die-cast aluminum', '16:9 native cabinet ratio', 'Wireless signal connection'],
        img: `https://placehold.co/600x450/102060/white?text=Thin+Cabinet`,
      },
      {
        title: 'Flip Chip Process Supporting Common-Cathode Scheme',
        desc: 'The chip adopts full flip process technology, higher luminous rate, better stability, low energy consumption, low light decay, prolong the service time.',
        bullets: ['Up to 30% energy reduction', 'Lower heat generation', 'Extended service lifespan'],
        img: `https://placehold.co/600x450/153070/white?text=Flip+Chip`,
      },
      {
        title: 'Seamless Stitching 2K / 4K / 8K Screen',
        desc: '16:9 cabinet ratio, point-to-point matching HD video source, free stitching 2K/4K/8K large screen for any configuration.',
        bullets: ['Zero-gap seamless splicing', 'Native 2K/4K/8K support', 'Modular expandable system'],
        img: `https://placehold.co/600x450/1a3a60/white?text=4K+Seamless`,
      },
    ],
    specs: [
      ['Pixel Pitch', '0.93mm', '1.25mm', '1.56mm', '1.87mm'],
      ['Cabinet Size', '600×337.5mm', '600×337.5mm', '600×337.5mm', '600×337.5mm'],
      ['Resolution (per cabinet)', '645×363', '480×270', '384×216', '320×180'],
      ['Brightness (nits)', '800', '1000', '1000', '1000'],
      ['Contrast Ratio', '5000:1', '5000:1', '4000:1', '4000:1'],
      ['Refresh Rate', '3840Hz', '3840Hz', '3840Hz', '3840Hz'],
      ['Gray Scale', '16 bit', '16 bit', '16 bit', '16 bit'],
      ['Viewing Angle (H/V)', '170° / 170°', '170° / 170°', '170° / 170°', '170° / 170°'],
      ['IP Rating', 'IP40', 'IP40', 'IP40', 'IP40'],
      ['Power Consumption (max)', '450W/m²', '350W/m²', '350W/m²', '350W/m²'],
      ['Cabinet Weight', '7.5 kg', '7.5 kg', '7.5 kg', '7.5 kg'],
      ['Operating Temperature', '-20°C ~ +50°C', '-20°C ~ +50°C', '-20°C ~ +50°C', '-20°C ~ +50°C'],
    ],
    related: ['m-series', 'i-board-series', 'x-series'],
  },

  'm-series': {
    id: 'm-series',
    name: 'M Series',
    series: 'Fine Pitch Series',
    tech: 'SMD/GOB',
    category: 'fine',
    headline: 'High Definition Small Pitch Display',
    pitch: '1.25 / 1.56 / 1.87mm',
    cabinetSize: '600×337.5mm',
    imgColor: '102060',
    heroImg: `https://placehold.co/900x506/102060/white?text=M+Series`,
    thumbs: [
      `https://placehold.co/160x112/102060/white?text=M+1`,
      `https://placehold.co/160x112/0d2a5e/white?text=M+2`,
      `https://placehold.co/160x112/1a3a60/white?text=M+3`,
    ],
    keyIcons: [
      { label: 'High Definition', icon: 'hd'       },
      { label: 'GOB Protection',  icon: 'shield'   },
      { label: 'Wide Color',      icon: 'gamut'    },
      { label: 'Front Maintain',  icon: 'install'  },
      { label: 'Low Power',       icon: 'energy'   },
      { label: 'High Refresh',    icon: 'refresh'  },
      { label: 'Slim Cabinet',    icon: 'thin'     },
      { label: 'Easy Setup',      icon: 'chip'     },
    ],
    features: [
      {
        title: 'SMD & GOB Dual Technology Options',
        desc: 'Available in standard SMD or GOB (Glue on Board) encapsulation for extra surface protection, anti-collision, moisture resistance and longer reliability.',
        bullets: ['GOB surface protection available', 'Anti-humidity & dust resistance', 'Enhanced physical protection'],
        img: `https://placehold.co/600x450/102060/white?text=SMD+GOB`,
      },
      {
        title: 'High Refresh Rate for Broadcast Environments',
        desc: 'Up to 3840Hz refresh rate ensures zero flickering when captured by cameras, making the M Series ideal for broadcast studios, conference rooms, and TV productions.',
        bullets: ['3840Hz ultra-high refresh rate', 'Zero flicker for camera capture', 'Broadcast-ready quality'],
        img: `https://placehold.co/600x450/1a3a60/white?text=High+Refresh`,
      },
      {
        title: 'Modular Front & Rear Maintenance',
        desc: 'Magnetic module design allows quick individual module replacement from both front and rear, minimizing downtime and simplifying long-term maintenance.',
        bullets: ['Magnetic quick-release modules', 'Front or rear access', 'Zero-tool module replacement'],
        img: `https://placehold.co/600x450/153070/white?text=Maintenance`,
      },
    ],
    specs: [
      ['Pixel Pitch', '1.25mm', '1.56mm', '1.87mm'],
      ['Cabinet Size', '600×337.5mm', '600×337.5mm', '600×337.5mm'],
      ['Resolution (per cabinet)', '480×270', '384×216', '320×180'],
      ['Brightness (nits)', '1000', '1000', '1000'],
      ['Contrast Ratio', '5000:1', '5000:1', '4000:1'],
      ['Refresh Rate', '3840Hz', '3840Hz', '3840Hz'],
      ['Gray Scale', '16 bit', '16 bit', '16 bit'],
      ['Viewing Angle (H/V)', '160° / 160°', '160° / 160°', '160° / 160°'],
      ['IP Rating', 'IP40', 'IP40', 'IP40'],
      ['Power Consumption (max)', '350W/m²', '350W/m²', '350W/m²'],
      ['Cabinet Weight', '8 kg', '8 kg', '8 kg'],
      ['Lifespan', '≥100,000 hrs', '≥100,000 hrs', '≥100,000 hrs'],
    ],
    related: ['cv-series', 'i-board-series', 'r-pro-series'],
  },

  'i-board-series': {
    id: 'i-board-series',
    name: 'I-BOARD Series',
    series: 'Fine Pitch Series',
    tech: 'SMD/GOB/COB',
    category: 'fine',
    headline: '54" & 27" Indoor 16:9 Ultra Slim and Light LED Display',
    pitch: '1.25 / 1.56 / 1.87mm',
    cabinetSize: '600×337.5mm / 1200×675mm',
    imgColor: '153070',
    heroImg: `https://placehold.co/900x506/153070/white?text=I-BOARD+Series`,
    thumbs: [
      `https://placehold.co/160x112/153070/white?text=IB+1`,
      `https://placehold.co/160x112/0d2a5e/white?text=IB+2`,
      `https://placehold.co/160x112/1a3a60/white?text=IB+3`,
    ],
    keyIcons: [
      { label: 'All-in-One Design', icon: 'thin'     },
      { label: 'Ultra Slim',        icon: 'chip'     },
      { label: '16:9 Ratio',        icon: 'ratio'    },
      { label: 'COB/SMD/GOB',       icon: 'hd'       },
      { label: 'Front Maintain',    icon: 'install'  },
      { label: 'Broad Gamut',       icon: 'gamut'    },
      { label: 'Low Power',         icon: 'energy'   },
      { label: 'High Contrast',     icon: 'contrast' },
    ],
    features: [
      {
        title: 'Available in 27" and 54" Sizes',
        desc: 'The I-BOARD comes in two standard sizes matching the 16:9 aspect ratio. The 27" (600×337.5mm) and 54" (1200×675mm) cabinets can be freely combined for any display size.',
        bullets: ['Native 16:9 aspect ratio', 'Point-to-point HD matching', 'Modular free combination'],
        img: `https://placehold.co/600x450/153070/white?text=27+54+inch`,
      },
      {
        title: 'Ultra-Slim Lightweight Cabinet',
        desc: 'Designed to be the thinnest cabinet in its class, with an ultra-slim profile ideal for wall mounting, ceiling installation, or fixed indoor signage applications.',
        bullets: ['<45mm ultra-thin profile', 'Lightweight for wall mounting', 'Easy embedded installation'],
        img: `https://placehold.co/600x450/1a3a60/white?text=Ultra+Slim`,
      },
    ],
    specs: [
      ['Pixel Pitch', '1.25mm', '1.56mm', '1.87mm'],
      ['Cabinet Size', '600×337.5mm / 1200×675mm', '600×337.5mm / 1200×675mm', '600×337.5mm / 1200×675mm'],
      ['Brightness (nits)', '800', '800', '800'],
      ['Contrast Ratio', '5000:1', '5000:1', '4000:1'],
      ['Refresh Rate', '3840Hz', '3840Hz', '3840Hz'],
      ['Gray Scale', '16 bit', '16 bit', '16 bit'],
      ['Viewing Angle (H/V)', '160° / 160°', '160° / 160°', '160° / 160°'],
      ['Cabinet Thickness', '<45mm', '<45mm', '<45mm'],
      ['IP Rating', 'IP40', 'IP40', 'IP40'],
    ],
    related: ['cv-series', 'm-series', 'x-series'],
  },

  'x-series': {
    id: 'x-series',
    name: 'X Series',
    series: 'Retail & Commercial',
    tech: 'SMD/GOB/COB',
    category: 'commercial',
    headline: 'Upgraded LED Display for Better Overall Performance',
    pitch: '1.25 / 1.56 / 1.95 / 2.6 / 2.97 / 3.91mm',
    cabinetSize: '500×500mm / 500×250mm',
    imgColor: '1a3a60',
    heroImg: `https://placehold.co/900x506/1a3a60/white?text=X+Series`,
    thumbs: [
      `https://placehold.co/160x112/1a3a60/white?text=X+1`,
      `https://placehold.co/160x112/102060/white?text=X+2`,
      `https://placehold.co/160x112/0d2a5e/white?text=X+3`,
    ],
    keyIcons: [
      { label: 'Wide Pitch Range', icon: 'ratio'    },
      { label: 'High Brightness',  icon: 'hd'       },
      { label: 'Broad Gamut',      icon: 'gamut'    },
      { label: 'Front Maintain',   icon: 'install'  },
      { label: 'Energy Saving',    icon: 'energy'   },
      { label: 'High Contrast',    icon: 'contrast' },
      { label: 'Slim Design',      icon: 'thin'     },
      { label: 'COB Option',       icon: 'chip'     },
    ],
    features: [
      {
        title: 'Wide Pixel Pitch Range for Every Scenario',
        desc: 'From 1.25mm ultra-fine pitch for close-up viewing to 3.91mm for larger retail environments, the X Series covers every indoor commercial application.',
        bullets: ['6 pixel pitch options', 'Optimal viewing distances covered', 'Scalable to any project size'],
        img: `https://placehold.co/600x450/1a3a60/white?text=Wide+Pitch`,
      },
      {
        title: 'Commercial-Grade Reliability',
        desc: 'Engineered for 24/7 continuous operation in retail, hospitality, corporate lobbies, and entertainment venues with minimal maintenance requirements.',
        bullets: ['24/7 continuous operation', 'Auto brightness adjustment', 'Commercial-grade components'],
        img: `https://placehold.co/600x450/0f2850/white?text=Commercial+Grade`,
      },
    ],
    specs: [
      ['Pixel Pitch', '1.25mm', '1.56mm', '1.95mm', '2.6mm', '2.97mm', '3.91mm'],
      ['Cabinet Size', '500×500mm', '500×500mm', '500×500mm', '500×500mm', '500×500mm', '500×500mm'],
      ['Brightness (nits)', '1000', '1000', '1000', '1200', '1200', '1200'],
      ['Contrast Ratio', '5000:1', '5000:1', '5000:1', '5000:1', '5000:1', '5000:1'],
      ['Refresh Rate', '3840Hz', '3840Hz', '3840Hz', '3840Hz', '3840Hz', '3840Hz'],
      ['IP Rating', 'IP40', 'IP40', 'IP40', 'IP40', 'IP40', 'IP40'],
    ],
    related: ['r-pro-series', 'i-tag-series', 'cv-series'],
  },

  'r-pro-series': {
    id: 'r-pro-series',
    name: 'R-PRO Series',
    series: 'Retail & Commercial',
    tech: 'SMD/GOB',
    category: 'commercial',
    headline: 'High Cost-effective Widely Used Indoor Fixed LED Display',
    pitch: '1.25 / 1.53 / 1.86 / 2 / 2.5mm',
    cabinetSize: '640×480mm',
    imgColor: '0f2850',
    heroImg: `https://placehold.co/900x506/0f2850/white?text=R-PRO+Series`,
    thumbs: [
      `https://placehold.co/160x112/0f2850/white?text=RP+1`,
      `https://placehold.co/160x112/1a3a60/white?text=RP+2`,
      `https://placehold.co/160x112/102060/white?text=RP+3`,
    ],
    keyIcons: [
      { label: 'Cost Effective',  icon: 'energy'   },
      { label: 'Wide Usage',      icon: 'ratio'    },
      { label: 'High Definition', icon: 'hd'       },
      { label: 'GOB Protection',  icon: 'shield'   },
      { label: 'High Refresh',    icon: 'refresh'  },
      { label: 'Easy Install',    icon: 'install'  },
      { label: 'Slim Design',     icon: 'thin'     },
      { label: 'High Contrast',   icon: 'contrast' },
    ],
    features: [
      {
        title: 'Best Value Indoor Fixed Display',
        desc: 'The R-PRO Series delivers professional-grade image quality at the most competitive price point, making it the top choice for budget-conscious projects without compromising on performance.',
        bullets: ['Best price-performance ratio', 'Professional brightness & color', 'Long-term reliability proven'],
        img: `https://placehold.co/600x450/0f2850/white?text=Best+Value`,
      },
      {
        title: 'Versatile Application Scenarios',
        desc: 'From corporate meeting rooms and hotel lobbies to retail stores and exhibition halls, the R-PRO Series adapts to any indoor fixed installation environment.',
        bullets: ['Conference & meeting rooms', 'Retail & hospitality venues', 'Exhibition & showroom'],
        img: `https://placehold.co/600x450/1c3355/white?text=Applications`,
      },
    ],
    specs: [
      ['Pixel Pitch', '1.25mm', '1.53mm', '1.86mm', '2mm', '2.5mm'],
      ['Cabinet Size', '640×480mm', '640×480mm', '640×480mm', '640×480mm', '640×480mm'],
      ['Brightness (nits)', '800', '800', '800', '800', '800'],
      ['Contrast Ratio', '4000:1', '4000:1', '4000:1', '4000:1', '4000:1'],
      ['Refresh Rate', '3840Hz', '3840Hz', '3840Hz', '3840Hz', '3840Hz'],
      ['Gray Scale', '16 bit', '16 bit', '16 bit', '16 bit', '16 bit'],
      ['IP Rating', 'IP40', 'IP40', 'IP40', 'IP40', 'IP40'],
    ],
    related: ['x-series', 'i-tag-series', 'm-series'],
  },

  'i-tag-series': {
    id: 'i-tag-series',
    name: 'I-TAG Series',
    series: 'Retail & Commercial',
    tech: 'SMD/GOB/COB',
    category: 'commercial',
    headline: 'Multi-function Shelf & Electronic Price Tag Display',
    pitch: 'COB 1.25mm',
    cabinetSize: '303×60×25mm',
    imgColor: '1c3355',
    heroImg: `https://placehold.co/900x506/1c3355/white?text=I-TAG+Series`,
    thumbs: [
      `https://placehold.co/160x112/1c3355/white?text=IT+1`,
      `https://placehold.co/160x112/0f2850/white?text=IT+2`,
      `https://placehold.co/160x112/1a3a60/white?text=IT+3`,
    ],
    keyIcons: [
      { label: 'Shelf Display',    icon: 'thin'     },
      { label: 'COB Technology',   icon: 'chip'     },
      { label: 'Dynamic Content',  icon: 'hd'       },
      { label: 'Low Power',        icon: 'energy'   },
      { label: 'Easy Mounting',    icon: 'install'  },
      { label: 'High Brightness',  icon: 'contrast' },
      { label: 'Wide Viewing',     icon: 'gamut'    },
      { label: 'Durable Build',    icon: 'shield'   },
    ],
    features: [
      {
        title: 'Revolutionary Retail Shelf Display',
        desc: 'Replaces traditional static price tags with dynamic full-color LED displays, enabling real-time price updates, promotional content, and product information from a central management system.',
        bullets: ['Remote content management', 'Real-time price updates', 'Full-color promotional content'],
        img: `https://placehold.co/600x450/1c3355/white?text=Shelf+Display`,
      },
      {
        title: 'Ultra-Compact COB Design',
        desc: 'At only 25mm depth, the I-TAG fits into existing retail shelving systems without modification, while the COB technology ensures excellent image quality in bright retail environments.',
        bullets: ['Only 25mm depth profile', 'No shelf modification needed', 'Bright retail-optimized display'],
        img: `https://placehold.co/600x450/0f2850/white?text=Ultra+Compact`,
      },
    ],
    specs: [
      ['Pixel Pitch', 'COB 1.25mm'],
      ['Cabinet Size', '303×60×25mm'],
      ['Brightness (nits)', '≥800'],
      ['Contrast Ratio', '≥5000:1'],
      ['Refresh Rate', '3840Hz'],
      ['Viewing Angle (H/V)', '160° / 160°'],
      ['Power Consumption', '≤5W per unit'],
      ['Operating Temp.', '-10°C ~ +40°C'],
    ],
    related: ['x-series', 'r-pro-series', 'cv-series'],
  },

  'z-series': {
    id: 'z-series',
    name: 'Z Series',
    series: 'Rental & Stage',
    tech: 'COB',
    category: 'rental',
    headline: 'High Stability COB Rental LED Display',
    pitch: '1.95 / 2.6mm',
    cabinetSize: '500×500mm',
    imgColor: '1e2d50',
    heroImg: `https://placehold.co/900x506/1e2d50/white?text=Z+Series`,
    thumbs: [
      `https://placehold.co/160x112/1e2d50/white?text=Z+1`,
      `https://placehold.co/160x112/22324e/white?text=Z+2`,
      `https://placehold.co/160x112/26354c/white?text=Z+3`,
    ],
    keyIcons: [
      { label: 'COB Durability',  icon: 'chip'     },
      { label: 'Quick Lock',      icon: 'install'  },
      { label: 'High Brightness', icon: 'contrast' },
      { label: 'Lightweight',     icon: 'thin'     },
      { label: 'Tool-free',       icon: 'ratio'    },
      { label: 'Energy Saving',   icon: 'energy'   },
      { label: 'Wide Gamut',      icon: 'gamut'    },
      { label: 'High Refresh',    icon: 'refresh'  },
    ],
    features: [
      {
        title: 'COB Technology for Rental Durability',
        desc: 'The Z Series uses COB (Chip on Board) encapsulation which provides superior protection against physical impacts, moisture, and dust — essential for rental displays that are transported and assembled repeatedly.',
        bullets: ['Impact-resistant COB encapsulation', 'Moisture & dust proof surface', 'Handles repeated assembly/disassembly'],
        img: `https://placehold.co/600x450/1e2d50/white?text=COB+Durability`,
      },
      {
        title: 'Fast Tool-Free Assembly System',
        desc: 'Precision die-cast aluminum cabinets with integrated quick-lock mechanism allow a single technician to assemble large rental stages in minimal time.',
        bullets: ['Single-person tool-free setup', 'Precision die-cast aluminum', 'Integrated cable management'],
        img: `https://placehold.co/600x450/22324e/white?text=Quick+Assembly`,
      },
    ],
    specs: [
      ['Pixel Pitch', '1.95mm', '2.6mm'],
      ['Cabinet Size', '500×500mm', '500×500mm'],
      ['Cabinet Weight', '8.5 kg', '8.5 kg'],
      ['Brightness (nits)', '1200', '1200'],
      ['Contrast Ratio', '5000:1', '5000:1'],
      ['Refresh Rate', '3840Hz', '3840Hz'],
      ['Gray Scale', '16 bit', '16 bit'],
      ['IP Rating', 'IP43', 'IP43'],
      ['Power (max)', '550W/m²', '550W/m²'],
    ],
    related: ['s-series', 'e-pro-rental', 'cv-series'],
  },

  's-series': {
    id: 's-series',
    name: 'S Series',
    series: 'Rental & Stage',
    tech: 'SMD',
    category: 'rental',
    headline: 'Competitive and User-friendly Rental LED Display',
    pitch: '1.95 / 2.6 / 2.97 / 3.91 / 4.81mm',
    cabinetSize: '500×500mm / 500×1000mm',
    imgColor: '22324e',
    heroImg: `https://placehold.co/900x506/22324e/white?text=S+Series`,
    thumbs: [
      `https://placehold.co/160x112/22324e/white?text=S+1`,
      `https://placehold.co/160x112/1e2d50/white?text=S+2`,
      `https://placehold.co/160x112/26354c/white?text=S+3`,
    ],
    keyIcons: [
      { label: 'Cost Effective', icon: 'energy'  },
      { label: 'Dual Format',    icon: 'ratio'   },
      { label: 'Quick Setup',    icon: 'install' },
      { label: 'High Refresh',   icon: 'refresh' },
      { label: 'Wide Viewing',   icon: 'gamut'   },
      { label: 'High Contrast',  icon: 'contrast'},
      { label: 'Lightweight',    icon: 'thin'    },
      { label: 'Universal',      icon: 'hd'      },
    ],
    features: [
      {
        title: 'Two Cabinet Formats for Maximum Flexibility',
        desc: 'The S Series offers both 500×500mm square and 500×1000mm rectangular cabinets, allowing rental companies to create portrait, landscape, or mixed configurations with the same panel inventory.',
        bullets: ['500×500mm and 500×1000mm cabinets', 'Mix-and-match configurations', 'Reduced inventory requirements'],
        img: `https://placehold.co/600x450/22324e/white?text=Dual+Format`,
      },
      {
        title: 'User-Friendly Fast Rigging',
        desc: 'Designed with rental technicians in mind, the S Series features intuitive quick-lock connectors, built-in rigging points, and color-coded cable connections to minimize setup errors.',
        bullets: ['Intuitive quick-lock design', 'Built-in rigging hardware', 'Color-coded connectivity'],
        img: `https://placehold.co/600x450/1e2d50/white?text=Fast+Rigging`,
      },
    ],
    specs: [
      ['Pixel Pitch', '1.95mm', '2.6mm', '2.97mm', '3.91mm', '4.81mm'],
      ['Cabinet Size', '500×500mm / 500×1000mm (all)'],
      ['Brightness (nits)', '1200', '1200', '1500', '1500', '1500'],
      ['Contrast Ratio', '5000:1', '5000:1', '5000:1', '5000:1', '5000:1'],
      ['Refresh Rate', '3840Hz', '3840Hz', '3840Hz', '3840Hz', '3840Hz'],
      ['IP Rating', 'IP43', 'IP43', 'IP43', 'IP43', 'IP43'],
      ['Cabinet Weight', '9 kg (500²)', '9 kg (500²)', '18 kg (500×1000)', '18 kg', '18 kg'],
    ],
    related: ['z-series', 'e-pro-rental', 'd-pro-series'],
  },

  'e-pro-rental': {
    id: 'e-pro-rental',
    name: 'E-PRO Series',
    series: 'Rental & Stage',
    tech: 'SMD',
    category: 'rental',
    headline: 'High-end Version Rental Display for Premium Events',
    pitch: '1.95 / 2.6 / 3.91 / 4.81mm',
    cabinetSize: '500×500mm / 500×1000mm',
    imgColor: '26354c',
    heroImg: `https://placehold.co/900x506/26354c/white?text=E-PRO+Rental`,
    thumbs: [
      `https://placehold.co/160x112/26354c/white?text=EP+1`,
      `https://placehold.co/160x112/22324e/white?text=EP+2`,
      `https://placehold.co/160x112/1e2d50/white?text=EP+3`,
    ],
    keyIcons: [
      { label: 'Premium Build',   icon: 'chip'     },
      { label: 'High Brightness', icon: 'contrast' },
      { label: 'Tour-grade',      icon: 'shield'   },
      { label: 'Quick Setup',     icon: 'install'  },
      { label: 'Wide Gamut',      icon: 'gamut'    },
      { label: 'High Refresh',    icon: 'refresh'  },
      { label: 'Low Power',       icon: 'energy'   },
      { label: '16:9 Format',     icon: 'ratio'    },
    ],
    features: [
      {
        title: 'Premium Performance for Touring & Concerts',
        desc: 'Built to withstand the rigorous demands of touring concerts, music festivals, and broadcast productions. The E-PRO delivers outstanding brightness and color accuracy under all lighting conditions.',
        bullets: ['Tour-grade build quality', 'High brightness for outdoor stages', 'Broadcast color accuracy'],
        img: `https://placehold.co/600x450/26354c/white?text=Concert+Grade`,
      },
      {
        title: 'Advanced Signal Management',
        desc: 'Dual receiving card backup and redundant power supply ensure zero signal loss during live events. Remote monitoring capability allows proactive management of large display arrays.',
        bullets: ['Dual receiving card backup', 'Redundant power supply', 'Remote real-time monitoring'],
        img: `https://placehold.co/600x450/1e2d50/white?text=Signal+Backup`,
      },
    ],
    specs: [
      ['Pixel Pitch', '1.95mm', '2.6mm', '3.91mm', '4.81mm'],
      ['Cabinet Size', '500×500mm / 500×1000mm (all)'],
      ['Brightness (nits)', '1500', '1500', '2000', '2000'],
      ['Contrast Ratio', '6000:1', '6000:1', '6000:1', '6000:1'],
      ['Refresh Rate', '3840Hz', '3840Hz', '3840Hz', '3840Hz'],
      ['Gray Scale', '16 bit', '16 bit', '16 bit', '16 bit'],
      ['IP Rating', 'IP43', 'IP43', 'IP43', 'IP43'],
      ['Power Backup', 'Dual', 'Dual', 'Dual', 'Dual'],
    ],
    related: ['z-series', 's-series', 'cob198-epro'],
  },

  'd-pro-series': {
    id: 'd-pro-series',
    name: 'D-PRO Series',
    series: 'DOOH Outdoor',
    tech: 'SMD',
    category: 'dooh',
    headline: 'High Performance Outdoor Display With Front Maintenance',
    pitch: '5 / 5.7 / 6.67 / 8 / 10mm',
    cabinetSize: '960×960mm',
    imgColor: '1a2d48',
    heroImg: `https://placehold.co/900x506/1a2d48/white?text=D-PRO+Series`,
    thumbs: [
      `https://placehold.co/160x112/1a2d48/white?text=DP+1`,
      `https://placehold.co/160x112/1e3244/white?text=DP+2`,
      `https://placehold.co/160x112/223442/white?text=DP+3`,
    ],
    keyIcons: [
      { label: 'Front Maintain', icon: 'install'  },
      { label: 'IP65 Rated',     icon: 'shield'   },
      { label: 'High Brightness',icon: 'contrast' },
      { label: 'Wide Viewing',   icon: 'gamut'    },
      { label: 'Energy Saving',  icon: 'energy'   },
      { label: 'Auto Dimming',   icon: 'hd'       },
      { label: 'Weatherproof',   icon: 'refresh'  },
      { label: 'Fast Install',   icon: 'thin'     },
    ],
    features: [
      {
        title: 'Front-Access Maintenance Design',
        desc: 'The D-PRO Series is specifically engineered for wall-mounted outdoor installations where rear access is impossible. All maintenance operations — modules, power supplies, receiving cards — can be performed from the front.',
        bullets: ['100% front-access maintenance', 'Wall-mount friendly design', 'Reduced maintenance time & cost'],
        img: `https://placehold.co/600x450/1a2d48/white?text=Front+Maintain`,
      },
      {
        title: 'IP65 Weatherproof for All Climates',
        desc: 'Rated IP65 for complete dust protection and water jet resistance. Operating temperature range from -30°C to +60°C ensures reliable performance in all weather conditions worldwide.',
        bullets: ['IP65 full weatherproof protection', '-30°C to +60°C operating range', 'Lightning & surge protection'],
        img: `https://placehold.co/600x450/1e3244/white?text=IP65+Outdoor`,
      },
    ],
    specs: [
      ['Pixel Pitch', '5mm', '5.7mm', '6.67mm', '8mm', '10mm'],
      ['Cabinet Size', '960×960mm (all)'],
      ['Brightness (nits)', '7500', '7500', '7500', '7500', '7500'],
      ['Contrast Ratio', '5000:1', '5000:1', '5000:1', '5000:1', '5000:1'],
      ['IP Rating', 'IP65 / IP65', 'IP65 / IP65', 'IP65 / IP65', 'IP65 / IP65', 'IP65 / IP65'],
      ['Operating Temp.', '-30°C ~ +60°C (all)'],
      ['Lifespan', '≥100,000 hrs (all)'],
    ],
    related: ['a-series', 'b-series', 's-series'],
  },

  'a-series': {
    id: 'a-series',
    name: 'A Series',
    series: 'DOOH Outdoor',
    tech: 'SMD',
    category: 'dooh',
    headline: 'Outdoor Standard Waterproof LED Display',
    pitch: '2.5 / 4 / 5 / 6.67 / 8 / 10mm',
    cabinetSize: '960×960mm',
    imgColor: '1e3244',
    heroImg: `https://placehold.co/900x506/1e3244/white?text=A+Series`,
    thumbs: [
      `https://placehold.co/160x112/1e3244/white?text=A+1`,
      `https://placehold.co/160x112/1a2d48/white?text=A+2`,
      `https://placehold.co/160x112/223442/white?text=A+3`,
    ],
    keyIcons: [
      { label: 'IP65 Waterproof', icon: 'shield'   },
      { label: 'High Brightness', icon: 'contrast' },
      { label: 'Wide Pitch',      icon: 'ratio'    },
      { label: 'Auto Dimming',    icon: 'hd'       },
      { label: 'Energy Saving',   icon: 'energy'   },
      { label: 'Long Lifespan',   icon: 'refresh'  },
      { label: 'Easy Install',    icon: 'install'  },
      { label: 'Wide Gamut',      icon: 'gamut'    },
    ],
    features: [
      {
        title: 'Standard Outdoor Waterproof Protection',
        desc: 'The A Series provides comprehensive IP65 weatherproof protection suitable for all outdoor environments, from roadside billboards to building facades and sports venues.',
        bullets: ['IP65 front & rear protection', 'Corrosion-resistant housing', 'UV-stabilized module surface'],
        img: `https://placehold.co/600x450/1e3244/white?text=Waterproof`,
      },
      {
        title: 'Auto Brightness for Day & Night',
        desc: 'Built-in light sensors automatically adjust display brightness from 500 nits (night mode) to 7500 nits (full sunlight) for optimal visibility and energy efficiency around the clock.',
        bullets: ['500–7500 nit auto adjustment', 'Built-in ambient light sensor', 'Energy saving in low-light'],
        img: `https://placehold.co/600x450/223442/white?text=Auto+Brightness`,
      },
    ],
    specs: [
      ['Pixel Pitch', '2.5mm', '4mm', '5mm', '6.67mm', '8mm', '10mm'],
      ['Cabinet Size', '960×960mm (all)'],
      ['Brightness (nits)', '5000', '7000', '7500', '7500', '7500', '7500'],
      ['IP Rating', 'IP65 / IP65 (all)'],
      ['Operating Temp.', '-30°C ~ +60°C (all)'],
      ['Lifespan', '≥100,000 hrs (all)'],
    ],
    related: ['d-pro-series', 'b-series', 'cob198-epro'],
  },

  'b-series': {
    id: 'b-series',
    name: 'B Series',
    series: 'DOOH Outdoor',
    tech: 'SMD',
    category: 'dooh',
    headline: 'Creative Outdoor Advertising LED Display',
    pitch: '3 / 3.8 / 6mm',
    cabinetSize: '768×768mm',
    imgColor: '223442',
    heroImg: `https://placehold.co/900x506/223442/white?text=B+Series`,
    thumbs: [
      `https://placehold.co/160x112/223442/white?text=B+1`,
      `https://placehold.co/160x112/1e3244/white?text=B+2`,
      `https://placehold.co/160x112/1a2d48/white?text=B+3`,
    ],
    keyIcons: [
      { label: 'Creative Shape',  icon: 'ratio'    },
      { label: 'IP65 Outdoor',    icon: 'shield'   },
      { label: 'High Brightness', icon: 'contrast' },
      { label: 'Slim Cabinet',    icon: 'thin'     },
      { label: 'Easy Install',    icon: 'install'  },
      { label: 'Wide Gamut',      icon: 'gamut'    },
      { label: 'Energy Saving',   icon: 'energy'   },
      { label: 'High Refresh',    icon: 'refresh'  },
    ],
    features: [
      {
        title: 'Designed for Creative Outdoor Advertising',
        desc: 'The B Series 768×768mm cabinet unlocks creative aspect ratios and unconventional screen configurations for outdoor advertising columns, pillar displays, and artistic installations.',
        bullets: ['768×768mm creative cabinet', 'Non-standard shape possibilities', 'Column & pillar wrapping'],
        img: `https://placehold.co/600x450/223442/white?text=Creative+Outdoor`,
      },
    ],
    specs: [
      ['Pixel Pitch', '3mm', '3.8mm', '6mm'],
      ['Cabinet Size', '768×768mm', '768×768mm', '768×768mm'],
      ['Brightness (nits)', '6000', '7000', '7000'],
      ['IP Rating', 'IP65 / IP65', 'IP65 / IP65', 'IP65 / IP65'],
      ['Operating Temp.', '-30°C ~ +60°C (all)'],
    ],
    related: ['d-pro-series', 'a-series', 's-series'],
  },

  'cob198-epro': {
    id: 'cob198-epro',
    name: 'COB1.98 E-PRO',
    series: 'E-PRO Outdoor COB',
    tech: 'COB',
    category: 'outdoor-cob',
    headline: 'Outdoor Highlight Rental COB1.98 Small Pitch LED Display',
    pitch: '1.98mm',
    cabinetSize: '500×500mm',
    imgColor: '0e2840',
    heroImg: `https://placehold.co/900x506/0e2840/white?text=COB1.98+E-PRO`,
    thumbs: [
      `https://placehold.co/160x112/0e2840/white?text=COB+1`,
      `https://placehold.co/160x112/0d2a5e/white?text=COB+2`,
      `https://placehold.co/160x112/1e2d50/white?text=COB+3`,
    ],
    keyIcons: [
      { label: 'COB Outdoor',     icon: 'chip'     },
      { label: 'High Brightness', icon: 'contrast' },
      { label: 'IP65 Rating',     icon: 'shield'   },
      { label: 'Small Pitch',     icon: 'hd'       },
      { label: 'Rental Ready',    icon: 'install'  },
      { label: 'Wide Gamut',      icon: 'gamut'    },
      { label: 'Energy Saving',   icon: 'energy'   },
      { label: 'High Refresh',    icon: 'refresh'  },
    ],
    features: [
      {
        title: 'World-class Outdoor COB Small Pitch',
        desc: 'The COB1.98 E-PRO combines the durability of COB encapsulation with outdoor-rated brightness (≥5000 nits), creating the world\'s most capable outdoor rental small-pitch LED display.',
        bullets: ['≥5000 nits outdoor brightness', 'COB impact & moisture resistance', '1.98mm pixel pitch for clarity'],
        img: `https://placehold.co/600x450/0e2840/white?text=Outdoor+COB`,
      },
      {
        title: 'Rental-Optimized Cabinet Design',
        desc: 'Standard 500×500mm cabinet size compatible with existing rental infrastructure. Tool-free quick-lock system ensures fast deployment and teardown at outdoor events.',
        bullets: ['Industry-standard 500×500mm', 'Tool-free assembly system', 'Lightweight aluminum cabinet'],
        img: `https://placehold.co/600x450/1e2d50/white?text=Rental+Ready`,
      },
    ],
    specs: [
      ['Pixel Pitch', '1.98mm'],
      ['Cabinet Size', '500×500mm'],
      ['Brightness (nits)', '≥5000'],
      ['Contrast Ratio', '≥10000:1'],
      ['Refresh Rate', '3840Hz'],
      ['IP Rating', 'IP65 / IP65'],
      ['Operating Temp.', '-30°C ~ +60°C'],
      ['Cabinet Weight', '9.5 kg'],
    ],
    related: ['z-series', 'e-pro-rental', 'cv-series'],
  },

  'all-in-one': {
    id: 'all-in-one',
    name: 'All-in-One',
    series: 'Creative Display',
    tech: 'COB',
    category: 'allinone',
    headline: 'Creative Conference All-in-One LED Display',
    pitch: '0.93 / 1.25 / 1.56mm',
    cabinetSize: '600×337.5mm',
    imgColor: '12223e',
    heroImg: `Assets/c series 1.jpg`,
    thumbs: [
      `Assets/c series 1.jpg`,
      `Assets/c series 2.jpg`,
      `Assets/c series 3.jpg`,
    ],
    keyIcons: [
      { label: 'All-in-One',      icon: 'thin'     },
      { label: 'Ultra HD COB',    icon: 'chip'     },
      { label: 'Touch Optional',  icon: 'install'  },
      { label: 'Smart System',    icon: 'hd'       },
      { label: 'Wide Gamut',      icon: 'gamut'    },
      { label: 'Energy Saving',   icon: 'energy'   },
      { label: 'High Contrast',   icon: 'contrast' },
      { label: '8K Support',      icon: 'ratio'    },
    ],
    features: [
      {
        title: 'Features',
        desc: 'uses Colorlight C-Series technology for its processing system, controller, and media player.',
        bullets: ['Pitch:CH4/CH5/CH5.7/CH8/CH10', 'Common-cathode technology with energy saving by nearly 20%', 'Fast heat dissipation, low temperature rise, stable operation and long life of the screen', 'Vivid picture with a wide field of view for advertising', '3.2V+4.2V dual channel power supply, greatly save power and energy'],
        img: `Assets/c series 2.jpg`,
      },
      {
        title: 'Advantages of common-cathode screen',
        desc: 'Adopt dual channel power supply tech. based on different optical characteristics of RGB LED. With smart IC control system, it distributes precise voltage to LED and driving IC saving 20 to 30% energy. (Comparing that with common-athode LED)',
        bullets: ['Separate power supply with R/GB, accurate current distribution to lamp beads to reduce power loss.', 'Reduce temperature rise, no need for air conditioning, highly reduce input cost.', 'Uniform heat distribution with good consistency, constant color temperature, no color cast, no color blocks.'],
        img: `Assets/c series 3.jpg`,
      },
    ],
    specs: [
      ['Item', 'CH 4', 'CH 5', 'CH 5.7', 'CH 8', 'CH 10'],
      ['Module Size (W×H×D) mm', '320×160×21', '320×160×21', '320×160×21', '320×160×21', '320×160×21'],
      ['Module Resolution (W×H)', '80×40', '64 x 32', '56 x 28', '40 x 20', '32 x 16'],
      ['Scanning Mode', '1/10', '1/8', '1/7', '1/5', '1/2'],
      ['LED Configuration', '1R1G1B', '1R1G1B', '1R1G1B', '1R1G1B', '1R1G1B'],
      ['LED Type', '1921 Common-cathode', '2727 Common-cathode', '2727 Common-cathode', '3535 Common-cathode', '3535 Common-cathode'],
      ['Maintenance Method', 'Back Service', 'Back Service', 'Back Service', 'Back Service', 'Back Service'],
      ['Installation Method', 'Back Installation', 'Back Installation', 'Back Installation', 'Back Installation', 'Back Installation'],
      ['Cabinet Size (W×H×D) mm', 'customized', 'customized', 'customized', 'customized', 'customized'],
      ['Installation Method', 'Back Installation', 'Back Installation', 'Back Installation', 'Back Installation', 'Back Installation'],
      ['Installation Method', 'Back Installation', 'Back Installation', 'Back Installation', 'Back Installation', 'Back Installation'],
      ['Installation Method', 'Back Installation', 'Back Installation', 'Back Installation', 'Back Installation', 'Back Installation'],
      ['Installation Method', 'Back Installation', 'Back Installation', 'Back Installation', 'Back Installation', 'Back Installation'],
    ],
    related: ['cv-series', 'i-board-series', 'm-series'],
  },

};

/* ─────────────────────────────
   ICON SVG PATHS
   ───────────────────────────── */
const ICONS = {
  chip:    '<path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h6m-6 0v18m6-18h4a2 2 0 0 1 2 2v4M3 9v6m18-6v6M3 15v4a2 2 0 0 0 2 2h4m10-6v4a2 2 0 0 1-2 2h-4m0 0H9"/><rect x="9" y="9" width="6" height="6"/>',
  hd:      '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M7 10v4M17 10v4M7 12h10"/>',
  ratio:   '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',
  gamut:   '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
  thin:    '<path d="M3 12h18M3 6h18M3 18h18"/>',
  energy:  '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>',
  contrast:'<circle cx="12" cy="12" r="10"/><path d="M12 2v20M12 12a10 10 0 0 1 0-20v20a10 10 0 0 1 0-20z" fill="currentColor"/>',
  install: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
  shield:  '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  refresh: '<polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>',
};

/* ─────────────────────────────
   RENDER HELPERS
   ───────────────────────────── */
function buildIcon(key) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${ICONS[key] || ICONS.chip}</svg>`;
}

function getProduct(id) {
  return PRODUCTS[id] || null;
}

function getRelatedProduct(id) {
  const p = PRODUCTS[id];
  if (!p) return null;
  return `
    <div class="product-card">
      <div class="card-img">
        <img src="https://placehold.co/600x450/${p.imgColor}/white?text=${encodeURIComponent(p.name)}" alt="${p.name}" loading="lazy" />
        <span class="card-badge">${p.series}</span>
        <span class="card-tech">${p.tech}</span>
      </div>
      <div class="card-body">
        <div class="card-series">${p.series}</div>
        <div class="card-name">${p.name}</div>
        <div class="card-desc">${p.headline}</div>
        <div class="card-specs">
          <div class="spec-row"><span class="spec-key">Pixel Pitch</span><span class="spec-val">${p.pitch}</span></div>
          <div class="spec-row"><span class="spec-key">Cabinet Size</span><span class="spec-val">${p.cabinetSize}</span></div>
        </div>
        <div class="card-actions">
          <a href="product-detail.html?id=${p.id}" class="btn-learn">Learn More</a>
          <a href="contact.html#page4" class="btn-inquiry">Product Inquiry</a>
        </div>
      </div>
    </div>`;
}

/* ─────────────────────────────
   MAIN RENDER FUNCTION
   ───────────────────────────── */
function renderProduct(productId) {
  const p = getProduct(productId);
  if (!p) {
    document.getElementById('detailRoot').innerHTML = `
      <div style="text-align:center;padding:120px 24px">
        <h2 style="font-size:28px;margin-bottom:16px">Product Not Found</h2>
        <p style="color:#6b7280;margin-bottom:32px">The product you're looking for doesn't exist.</p>
        <a href="product.html" style="background:#0057b8;color:#fff;padding:12px 28px;border-radius:8px;font-weight:700">← Back to Products</a>
      </div>`;
    return;
  }

  // Update <title> and breadcrumb
  document.title = `${p.name} — LongRun LED`;

  // ── HERO
  document.getElementById('detailHeroTitle').textContent = p.name;
  document.getElementById('detailBreadSeries').textContent = p.series;
  document.getElementById('detailBreadSeriesLink').href = `product.html#${p.category}`;

  // ── SHOWCASE
  document.getElementById('showcaseHeroImg').src = p.heroImg;
  document.getElementById('showcaseHeroImg').alt = p.name;

  // Thumbnails
  const thumbContainer = document.getElementById('galleryThumbs');
  thumbContainer.innerHTML = p.thumbs.map((src, i) => `
    <div class="thumb ${i === 0 ? 'active' : ''}" data-src="${src}" data-idx="${i}">
      <img src="${src}" alt="${p.name} view ${i+1}" />
    </div>`).join('');

  document.getElementById('infoTag').textContent        = p.series;
  document.getElementById('infoTitle').textContent      = p.name;
  document.getElementById('infoTechBadge').textContent  = p.tech;
  document.getElementById('infoDesc').textContent       = p.headline;

  // Key icons
  document.getElementById('keyIconsGrid').innerHTML = p.keyIcons.map(k => `
    <div class="key-icon-item">
      ${buildIcon(k.icon)}
      <span class="key-icon-label">${k.label}</span>
    </div>`).join('');

  // Spec table (sidebar)
  document.getElementById('sideSpecTable').innerHTML = [
    ['Pixel Pitch',   p.pitch],
    ['Cabinet Size',  p.cabinetSize],
    ['Technology',    p.tech],
  ].map(([k,v]) => `
    <div class="spec-table-row">
      <div class="spec-table-key">${k}</div>
      <div class="spec-table-val">${v}</div>
    </div>`).join('');

  // ── FEATURES
  const featuresEl = document.getElementById('featureBlocks');
  featuresEl.innerHTML = p.features.map((f, i) => `
    <div class="feature-block ${i % 2 === 1 ? 'reverse' : ''}">
      <div class="feature-img">
        <img src="${f.img}" alt="${f.title}" loading="lazy" />
      </div>
      <div class="feature-text">
        <div class="feature-number">0${i+1}</div>
        <h3 class="feature-title">${f.title}</h3>
        <p class="feature-desc">${f.desc}</p>
        <ul class="feature-bullets">
          ${f.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
      </div>
    </div>`).join('');

  // ── FULL SPEC TABLE
  // const specHeaders = ['Parameter', ...p.specs[0].slice(1).map((_, i) => `Option ${i+1}`)];
  // const pitchOptions = p.pitch.split('/').map(s => s.trim());
  // const cleanHeaders = ['Parameter', ...pitchOptions.slice(0, p.specs[0].length - 1)];

  // document.getElementById('specTableHead').innerHTML =
  //   (p.specs[0].length > 2 ? cleanHeaders : ['Parameter', 'Value'])
  //   .map(h => `<th>${h}</th>`).join('');

  document.getElementById('specTableBody').innerHTML = p.specs.map(row => `
    <tr>${row.map((cell, i) => `<td>${cell}</td>`).join('')}</tr>`).join('');

  // ── RELATED PRODUCTS
  document.getElementById('relatedGrid').innerHTML =
    (p.related || []).map(id => getRelatedProduct(id)).filter(Boolean).join('');

  // ── NAV active
  document.getElementById('detailNavName').textContent = p.name;
}

/* ─────────────────────────────
   THUMBNAIL SWITCHER
   ───────────────────────────── */
document.addEventListener('click', e => {
  const thumb = e.target.closest('.thumb');
  if (!thumb) return;
  document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
  const heroImg = document.getElementById('showcaseHeroImg');
  heroImg.style.opacity = '0';
  setTimeout(() => {
    heroImg.src = thumb.dataset.src;
    heroImg.style.opacity = '1';
  }, 180);
});

/* ─────────────────────────────
   CAPTCHA (contact form)
   ───────────────────────────── */
let captchaAnswer = '';
function genCaptcha() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  captchaAnswer = Array.from({length:4}, () => chars[Math.floor(Math.random()*chars.length)]).join('');
  const el = document.getElementById('dfCaptchaBox');
  if (el) el.textContent = captchaAnswer;
}

/* ─────────────────────────────
   CONTACT FORM
   ───────────────────────────── */
function initDetailForm() {
  genCaptcha();
  const captchaBox = document.getElementById('dfCaptchaBox');
  if (captchaBox) captchaBox.addEventListener('click', genCaptcha);

  const form = document.getElementById('detailContactForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const captchaInput = form.querySelector('[name="captcha"]').value.toUpperCase();
    if (captchaInput !== captchaAnswer) {
      alert('Incorrect verification code. Please try again.');
      genCaptcha();
      return;
    }
    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    setTimeout(() => {
      form.style.display = 'none';
      document.getElementById('dfSuccess').style.display = 'block';
    }, 1200);
  });
}

/* ─────────────────────────────
   INIT ON LOAD
   ───────────────────────────── */
window.addEventListener('DOMContentLoaded', () => {
  const params    = new URLSearchParams(window.location.search);
  const productId = params.get('id') || 'cv-series';
  renderProduct(productId);
  initDetailForm();
});
