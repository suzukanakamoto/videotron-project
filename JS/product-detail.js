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
    name: 'COB - V Series',
    series: 'Fine Pitch Series',
    tech: 'COB',
    category: 'fine',
    headline: 'COB Ultra-high Definition LED Display',
    pitch: '0.93 / 1.25 / 1.56 / 1.87 / 2.34mm',
    cabinetSize: '600×337.5×32.5mm',
    imgColor: '0d2a5e',
    heroImg: `Assets/v series - 1.jpg`,
    thumbs: [
      `Assets/v series - 1.jpg`,
      `Assets/v series - 2.jpg`,
      `Assets/v series - 3.png`,
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
        img: `Assets/v series - 1.jpg`,
      },
      {
        title: 'Simple Ultra-Thin Cabinet Design',
        desc: '27 inch die-cast aluminum cabinet material, 16:9 ultra-thin cabinet design, wireless connection, save space, simple design, easy assembly, save time and effort.',
        bullets: ['Lightweight die-cast aluminum', '16:9 native cabinet ratio', 'Wireless signal connection'],
        img: `Assets/v series - 2.jpg`,
      },
      {
        title: 'Features',
        desc: 'The chip adopts full flip process technology, higher luminous rate, better stability, low energy consumption, low light decay, prolong the service time.',
        bullets: ['Indoor 600 x 337.5mm die-casting aluminum cabinet (27") with ultra-thin thickness 32.5mm. compatible pitch: 0.93 / 1.25 / 1.56 / 1.87 / 2.34mm', '16:9 ratio cabinet design, 2K/4K/8K dot to dot match', 'Standard Flip Chip COB solution, low consumption, and more stable','170° wide viewing angle, 10000:1 high contrast ratio, refresh rate ≥3840HZ, Grey scale ≥14Bit. perfect display performance', 'Module face IP65, dust-proof, anti-oxidation, anti-static, anti-impact', '100% front service design, supporting wall mounting bracket, or stacking frame with wheels installation', 'HUB Connection and Dual Backup Design'],
        img: `Assets/v series - 3.png`,
      },
      {
        title: 'Application',
        desc: '16:9 cabinet ratio, point-to-point matching HD video source, free stitching 2K/4K/8K large screen for any configuration.',
        bullets: ['Conference Rooms', 'Control Center', 'Home Theater', 'Exhibition Hall'],
        img: `Assets/v series - 4.png`,
      },
    ],
    specs: [
      ["Item", "V0.93", "V1.25", "V1.56", "V1.87", "V2.34"],
      ["Module Size (W×H×D) mm", "150×168.75", "150×168.75", "150×168.75", "150×168.75", "150×168.75"],
      ["Module Resolution (W×H)", "160×180", "120×135", "96×108", "80×90", "64×72"],
      ["Scanning Mode", "1/60", "1/45", "1/48", "1/30", "1/16"],
      ["LED Configuration", "COB 1R1G1B", "COB 1R1G1B", "COB 1R1G1B", "COB 1R1G1B", "COB 1R1G1B"],
      ["Power Supply Method", "Common-Cathode & Common-Anode Customized", "Common-Cathode & Common-Anode Customized", "Common-Cathode & Common-Anode Customized", "Common-Cathode & Common-Anode Customized", "Common-Cathode & Common-Anode Customized"],
      ["Installation / Service Method", "Front or back installation / Front service", "Front or back installation / Front service", "Front or back installation / Front service", "Front or back installation / Front service", "Front or back installation / Front service"],
      ["Cabinet Size (W×H×D) mm", "600×337.5×32.5", "600×337.5×32.5", "600×337.5×32.5", "600×337.5×32.5", "600×337.5×32.5"],
      ["Cabinet Resolution (W×H) dot", "640×360", "480×270", "384×216", "320×180", "256×144"],
      ["Physical Density (dot/m²)", "1137778", "640000", "409600", "284444", "182044"],
      ["Brightness", "600-3000 cd/m²", "600-3000 cd/m²", "600-3000 cd/m²", "600-3000 cd/m²", "600-3000 cd/m²"],
      ["Max. Power Consumption", "≤300W", "≤350W", "≤350W", "≤350W", "≤350W"],
      ["Average Power Consumption", "≤100W", "≤110W", "≤110W", "≤110W", "≤110W"],
      ["Weight", "4.3KG", "4.3KG", "4.3KG", "4.3KG", "4.3KG"],
      ["Cabinet Material", "Die Casting Aluminum", "Die Casting Aluminum", "Die Casting Aluminum", "Die Casting Aluminum", "Die Casting Aluminum"],
      ["Protection Level", "IP65", "IP65", "IP65", "IP65", "IP65"],
      ["Contrast Ratio", "10000:1", "10000:1", "10000:1", "10000:1", "10000:1"],
      ["Grey Scale (Bit)", "14bit/16bit", "14bit/16bit", "14bit/16bit", "14bit/16bit", "14bit/16bit"],
      ["Max Refresh Rate", "≥2880", "≥3840", "≥3840", "≥3840", "≥3840"],
      ["Refresh Frame Frequency", "50/60Hz", "50/60Hz", "50/60Hz", "50/60Hz", "50/60Hz"],
      ["Horizontal View Angle", "≥170°", "≥170°", "≥170°", "≥170°", "≥170°"],
      ["Vertical View Angle", "≥170°", "≥170°", "≥170°", "≥170°", "≥170°"],
      ["Optimal Viewing Distance", "1M", "1.3M", "1.6M", "1.9M", "1.9M"],
      ["Power Input Voltage", "AC110V~AC220V", "AC110V~AC220V", "AC110V~AC220V", "AC110V~AC220V", "AC110V~AC220V"],
      ["Module Max Current", "(0.5A+1.5A) 2.8V+3.8V", "2A 4.2V", "2A 4.2V", "2A 4.2V", "2A 4.2V"],
      ["Working Temperature", "-20°C~+80°C", "-20°C~+80°C", "-20°C~+80°C", "-20°C~+80°C", "-20°C~+80°C"],
      ["Working Humidity", "10%RH~95%RH", "10%RH~95%RH", "10%RH~95%RH", "10%RH~95%RH", "10%RH~95%RH"],
      ["Life Time", "≥100000 hours", "≥100000 hours", "≥100000 hours", "≥100000 hours", "≥100000 hours"],
      ["MTBF", "≥10000 hours", "≥10000 hours", "≥10000 hours", "≥10000 hours", "≥10000 hours"],
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
    name: 'N2.5 Series',
    series: 'Retail & Commercial',
    tech: 'SMD/GOB/COB',
    category: 'commercial',
    headline: 'Upgraded LED Display for Better Overall Performance',
    pitch: '1.25 / 1.56 / 1.95 / 2.6 / 2.97 / 3.91mm',
    cabinetSize: '160×160×15mm / 160×160×18mm',
    imgColor: '1a3a60',
    heroImg: `Assets/cube - 1.jpg`,
    thumbs: [
      `Assets/cube - 1.jpg`,
      `Assets/cube - 2.jpg`,
      `Assets/cube - 3.jpg`,
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
        desc: 'With the 45° kit module, easily achieve seamless splicing',
        bullets: ['Special shapes and great visual impact. Could easily catch the audience eyes and bring excellent performance', '360° viewing angle. Could be seen from any angle. Good visual effects, all-round video playback, six sides could play different contents at the same time', 'Flexible control. Synchronous and asynchronous compatible, support offline and online', 'Creative LED Display, provide you customized service. Screen shape and size could be customized according to different projects'],
        img: `Assets/cube - 1.jpg`,
      },
      {
        title: 'Commercial-Grade Reliability',
        desc: 'Engineered for 24/7 continuous operation in retail, hospitality, corporate lobbies, and entertainment venues with minimal maintenance requirements.',
        bullets: ['24/7 continuous operation', 'Auto brightness adjustment', 'Commercial-grade components'],
        img: `Assets/cube - 2.jpg`,
      },
    ],
    specs: [
      ['Item', 'N2.5-160 Cube', 'N2.5-160 (45°)', 'N2.5-320 (45°)'],
      ["Module Size (W × H × D) mm", "160×160×15", "160×160×18", "320×160×18"],
      ["Module Resolution (W × H)", "64×64", "64×64", "128×64"],
      ["Scanning Mode", "1/32", "1/32", "1/32"],
      ["LED Configuration", "1R1G1B", "1R1G1B", "1R1G1B"],
      ["LED Type", "2121", "1515", "1515"],
      ["Maintenance Method", "Front service", "Front service", "Front service"],
      ["Installation Method", "Front or back installation", "Front or back installation", "Front or back installation"],
      ["Cabinet Size (W × H × D) mm", "Customizable", "Customizable", "Customizable"],
      ["Physical Density (dot/m²)", "160000", "160000", "160000"],
      ["Brightness", "600~900", "600~900", "600~900"],
      ["Max. Power Consumption", "600", "600", "600"],
      ["Average Power Consumption", "200", "200", "200"],
      ["Cabinet Material", "Iron Cabinet", "Iron Cabinet", "Iron Cabinet"],
      ["LED Lamp Protection Degree", "IP54", "IP54", "IP54"],
      ["Contrast Ratio", "5000:1", "5000:1", "5000:1"],
      ["Gray Level (Bit)", "14", "14", "14"],
      ["Refresh Rate", "3840", "3840", "3840"],
      ["Refresh Frame Frequency", "50/60", "50/60", "50/60"],
      ["Horizontal View Angle", "≥140°", "≥140°", "≥140°"],
      ["Vertical View Angle", "≥120°", "≥120°", "≥120°"],
      ["Optimal Viewing Distance", "2.5", "2.5", "2.5"],
      ["Input Voltage AC", "AC110V~AC220V", "AC110V~AC220V", "AC110V~AC220V"],
      ["Module Max Current (A)", "3", "3", "6"],
      ["Working Temperature", "-20°C~+80°C", "-20°C~+80°C", "-20°C~+80°C"],
      ["Working Humidity", "10%RH~95%RH", "10%RH~95%RH", "10%RH~95%RH"],
      ["Life Time", "≥100000", "≥100000", "≥100000"],
      ["MTBF", "≥10000", "≥10000", "≥10000"],
    ],
    related: ['r-pro-series', 'i-tag-series', 'cv-series'],
  },

  'r-pro-series': {
    id: 'r-pro-series',
    name: 'SF Series',
    series: 'Retail & Commercial',
    tech: 'SMD/GOB',
    category: 'commercial',
    headline: 'High Cost-effective Widely Used Indoor Fixed LED Display',
    pitch: '1.87 / 2 / 2.5mm',
    cabinetSize: '240×120×10mm / 320×160×8mm',
    imgColor: '0f2850',
    heroImg: `Assets/SF - 1.jpg`,
    thumbs: [
      `Assets/SF - 1.jpg`,
      `Assets/SF - 2.jpg`,
      `Assets/SF - 3.jpg`,
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
        title: 'Creative Display- Cylindrical Screens',
        desc: 'Flexible module can be customized with cylindrical, arc and various shapes',
        bullets: ['Pitch:SF1.87/SF2/SF2.5/SF2-320/SF2.5-320', 'High performance soft module,meet various scenarios needs', 'Highly flexible modules with high strength iron cabinets，effectively reduce screen splice gaps', 'Module mounted with strong magnet, support module fine-tuned with perfect flatness'],
        img: `Assets/SF - 3.jpg`,
      },
      {
        title: 'Product Advantages',
        desc: 'Cost-effective flexible modules to meet the needs of various scenarios.Flexible soft PCB board, and high-quality silicone bottom shell. With a curvature of less than or equal to 145° and a viewing angle of up to 140°, it is suitable for a wide range of cylindrical curved scenes.',
        bullets: ['Conference & meeting rooms', 'Retail & hospitality venues', 'Exhibition & showroom'],
        img: `Assets/SF - 4.jpg`,
      },
    ],
    specs: [
      ["Item", "SF1.87", "SF2", "SF2.5", "SF2-320", "SF2.5-320"],
      ["Module Size (W×H×D) mm", "240×120×10", "240×120×10", "240×120×10", "320×160×8", "320×160×8"],
      ["Module Resolution (W×H)", "128×64", "120×60", "96×48", "160×80", "128×64"],
      ["Scanning Mode", "1/32", "1/30", "1/24", "1/40", "1/32"],
      ["LED Configuration", "1R1G1B", "1R1G1B", "1R1G1B", "1R1G1B", "1R1G1B"],
      ["LED Type", "1212", "1515", "1515", "1515", "1515"],
      ["Maintenance Method", "Front or back service", "Front or back service", "Front or back service", "Front or back service", "Front or back service"],
      ["Installation Method", "Front or back installation", "Front or back installation", "Front or back installation", "Front or back installation", "Front or back installation"],
      ["Cabinet Size (W×H×D) mm", "customized", "customized", "customized", "customized", "customized"],
      ["Physical Density (dot/m²)", "284444", "250000", "160000", "250000", "160000"],
      ["Brightness", "600~800", "600~800", "600~800", "600~800", "600~800"],
      ["Max. Power Consumption", "650", "650", "650", "650", "650"],
      ["Average Power Consumption", "220", "220", "220", "220", "220"],
      ["Cabinet Material", "Iron Cabinet", "Iron Cabinet", "Iron Cabinet", "Iron Cabinet", "Iron Cabinet"],
      ["LED Lamp Protection Degree", "IP54", "IP54", "IP54", "IP54", "IP54"],
      ["Contrast Ratio", "≥5000:1", "≥5000:1", "≥5000:1", "≥5000:1", "≥5000:1"],
      ["Gray Level (Bit)", "14", "14", "14", "14", "14"],
      ["Refresh Rate", "3840", "3840", "3840", "3840", "3840"],
      ["Refresh Frame Frequency", "50/60", "50/60", "50/60", "50/60", "50/60"],
      ["Horizontal View Angle", "≥140°", "≥140°", "≥140°", "≥140°", "≥140°"],
      ["Vertical View Angle", "≥120°", "≥120°", "≥120°", "≥120°", "≥120°"],
      ["Optimal Viewing Distance", "1.9", "2", "2.5", "2", "2.5"],
      ["Input Voltage AC", "AC110V~AC220V", "AC110V~AC220V", "AC110V~AC220V", "AC110V~AC220V", "AC110V~AC220V"],
      ["Module Max Current", "4A", "4A", "4A", "6A", "6A"],
      ["Working Temperature", "-20°C~+80°C", "-20°C~+80°C", "-20°C~+80°C", "-20°C~+80°C", "-20°C~+80°C"],
      ["Working Humidity", "10%RH~95%RH", "10%RH~95%RH", "10%RH~95%RH", "10%RH~95%RH", "10%RH~95%RH"],
      ["Life Time", "≥100000", "≥100000", "≥100000", "≥100000", "≥100000"],
      ["MTBF", "≥10000", "≥10000", "≥10000", "≥10000", "≥10000"],
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
    name: 'COB1.984 E-PRO Series',
    series: 'E-PRO Outdoor COB',
    tech: 'COB',
    category: 'outdoor-cob',
    headline: 'Outdoor Highlight Rental COB1.984 Small Pitch LED Display',
    pitch: '1.98mm',
    cabinetSize: '500×500mm',
    imgColor: '0e2840',
    heroImg: `Assets/COB1.984 - 1.jpg`,
    thumbs: [
      `Assets/COB1.984 - 1.jpg`,
      `Assets/COB1.984 - 2.jpg`,
      `Assets/COB1.984 - 3.jpg`,
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
        bullets: ['Outdoor 500x500mm cabinet size, compatible pitch: 1.98mm', '10000:1 contrast ratio, 1.98mm Fine-pitch and high definition outdoor LED screen', 'Upgraded High-Protection COB technology,waterproof, dust-proof, anti-oxidation, anti-static, anti-impact', 'Support front/ rear installation, front/ rear maintenance', 'IP65 high protection both module face and cabinet, supporting use in outdoor weather', 'One cabinet for various applications, supporting concave and staggered splicing', 'Outdoor rental event and permanent installation freely'],
        img: `Assets/COB1.984 - 2.jpg`,
      },
      {
        title: 'Application',
        desc: 'Standard 500×500mm cabinet size compatible with existing rental infrastructure. Tool-free quick-lock system ensures fast deployment and teardown at outdoor events.',
        bullets: ['Sports Events', 'Events', 'Shopping Mall'],
        img: `Assets/COB1.984 - 3.jpg`,
      },
    ],
    specs: [
      ["Item", "EH1.98-Pro Standard Configuration (Common-anode)", "EH1.98-Pro Advanced Configuration (Common-anode)", "EH1.98-Pro Standard Configuration (Common-cathode)", "EH1.98-Pro Advanced Configuration (Common-cathode)"],
      ["Power Supply Method", "Common-anode", "Common-anode", "Common-cathode", "Common-cathode"],
      ["Pixel Pitch (mm)", "1.984", "1.984", "1.984", "1.984"],
      ["Receiving Card", "A10S PLUS-N", "A10S PRO", "A10S PLUS-N", "A10S PRO"],
      ["Module Calibration", "General calibration", "Full grey-scale calibration", "General calibration", "Full grey-scale calibration"],
      ["Full Grey-scale Calibration", "No", "Yes", "No", "Yes"],
      ["Physical Density (Dots/m²)", "254016", "254016", "254016", "254016"],
      ["LED Configuration", "1R1G1B", "1R1G1B", "1R1G1B", "1R1G1B"],
      ["Module Resolution (PX×PX)", "126×126", "126×126", "126×126", "126×126"],
      ["Scanning Mode", "21S", "21S", "21S", "21S"],
      ["Brightness", "3000", "3000", "3000", "3000"],
      ["Grey Scale (Bit)", "13", "13", "13", "13"],
      ["Refresh Rate", "3840", "3840", "3840", "3840"],
      ["Module Kit Material", "Plastic", "Plastic", "Plastic", "Plastic"],
      ["Horizontal View Angle", "160° (±10)", "160° (±10)", "160° (±10)", "160° (±10)"],
      ["Vertical View Angle", "160° (±10)", "160° (±10)", "160° (±10)", "160° (±10)"],
      ["Driving IC", "ICN2165+ICN2018", "MBI5264+ICN2018", "ICN2169+ICN2019", "ICN2169+ICN2019"],
      ["Module Size (mm)", "250×250×15", "250×250×15", "250×250×15", "250×250×15"],
      ["Module Weight (g)", "650±10g", "650±10g", "650±10g", "650±10g"],
      ["Module Flatness", "≤0.1 mm", "≤0.1 mm", "≤0.1 mm", "≤0.1 mm"],
      ["Structural Features", "LED and Driver IC all-in-one", "LED and Driver IC all-in-one", "LED and Driver IC all-in-one", "LED and Driver IC all-in-one"],
      ["Input Voltage (DC)", "5V", "5V", "3.2V+4.2V", "3.2V+4.2V"],
      ["Max. Rated Current", "9A", "9A", "4A+5A", "4A+5A"],
      ["Module Max. Power Consumption", "45W", "45W", "34W", "34W"],
      ["MTBF", "≥10000 hours", "≥10000 hours", "≥10000 hours", "≥10000 hours"],
      ["Life Time", "≥50000 hours", "≥50000 hours", "≥50000 hours", "≥50000 hours"],
      ["Malfunction Dot Rate", "<1/100000", "<1/100000", "<1/100000", "<1/100000"],
      ["Interface Definition", "HUB320", "HUB320", "HUB320", "HUB320"],
      ["Working Temperature", "-20°C~+50°C", "-20°C~+50°C", "-20°C~+50°C", "-20°C~+50°C"],
    ],
    related: ['z-series', 'e-pro-rental', 'cv-series'],
  },

  'all-in-one': {
    id: 'all-in-one',
    name: 'C Series',
    series: 'Creative Display',
    tech: 'COB',
    category: 'allinone',
    headline: 'Creative Conference All-in-One LED Display',
    pitch: '4.00 / 5.00 / 5.70 / 8.00 / 10.00mm',
    cabinetSize: 'customized',
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
      ['Cabinet Resolution (W×H)', '240×240', '192×192', '168×168', '120×120', '96×96'],
      ['Physical Density (dot/m²)', '62500', '50000', '30625', '15625', '10000'],
      ['Brightness', '5000~5500', '5000~5500', '5500~6000', '5500~6000', '5500~6000'],
      ['Max. Power Consumption', '600W', '600W', '600W', '600W', '600W'],
      ['Average Power Consumption', '200W', '200W', '200W', '200W', '200W'],
      ['Weight', '30KG', '30KG', '30KG', '30KG', '30KG'],
      ['Cabinet Material', 'colspan', 'Aluminum magnesium (iron/aluminum Cabinet)', 'colspan', 'colspan', 'colspan'],
      ['Protection Level', 'IP65', 'IP65', 'IP65', 'IP65', 'IP65'],
      ['Contrast Ratio', '≥5000:1', '≥5000:1', '≥5000:1', '≥5000:1', '≥5000:1'],
      ['Grey Scale (Bit)', '14bit', '14bit', '14bit', '14bit', '14bit'],
      ['Refresh Rate', '1920Hz', '1920Hz', '1920Hz', '1920Hz', '1920Hz'],
      ['Refresh Frame Frequency', '50/60Hz', '50/60Hz', '50/60Hz', '50/60Hz', '50/60Hz'],
      ['Horizontal View Angle', '≥140°', '≥140°', '≥140°', '≥140°', '≥140°'],
      ['Vertical View Angle', '≥120°', '≥120°', '≥120°', '≥120°', '≥120°'],
      ['Optimal Viewing Distance', '4', '5', '6', '8', '10'],
      ['Input Voltage (V)', 'AC110V~AC220V', 'AC110V~AC220V', 'AC110V~AC220V', 'AC110V~AC220V', 'AC110V~AC220V'],
      ['Module Max Current (A)', '3.5A+6A', '3.5A+4.5A', '3.5A+4.5A', '3.5A+4.5A', '3.5A+4.5A'],
      ['Working Temperature', '-30°C ~ +80°C', '-30°C ~ +80°C', '-30°C ~ +80°C', '-30°C ~ +80°C', '-30°C ~ +80°C'],
      ['Working Humidity', '10%RH~95%RH', '10%RH~95%RH', '10%RH~95%RH', '10%RH~95%RH', '10%RH~95%RH'],
      ['Life Time', '≥100000', '≥100000', '≥100000', '≥100000', '≥100000'],
    ],
    related: ['cv-series', 'i-board-series', 'm-series'],
  },

  'all-in-one': {
    id: 'all-in-one',
    name: 'Creative Display Series',
    series: 'Creative Display',
    tech: 'COB',
    category: 'allinone',
    headline: 'Creative Conference All-in-One LED Display',
    pitch: '0.93 / 1.25	/ 1.56	/ 1.875mm',
    cabinetSize: '81mm / 108mm / 135mm / 162mm',
    imgColor: '12223e',
    heroImg: `Assets/creative - 1.jpg`,
    thumbs: [
      `Assets/creative - 1.jpg`,
      `Assets/creative - 2.jpg`,
      `Assets/creative - 3.jpg`,
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
        title: 'Creative Display Conference All-in-One Display',
        desc: 'Designed as an all-in-one solution, this device replaces traditional projectors, whiteboards, and conventional audio systems in your professional space.',
        bullets: ['Cabinet size: 81"/108"/135"/162"', 'Supports wireless content sharing on multiple platforms, including Windows, Mac OS, iOS and Android', 'Support for document presentation, video playback and remote conference', 'Support Bluetooth 4.0. Connectable with Bluetooth remote controls, mice, keyboards, stereos and other popular devices', 'Support for whiteboard writing and annotation', 'With the terminal APP could achieve the wireless content sharing control', 'Dual WiFi mode, support WiFi access and turn on hotspot meanwhile'],
        img: `Assets/creative - 1.jpg`,
      },
      {
        title: 'Conference All-in-One Display Applications',
        desc: 'This All-in-One Conference Display is highly versatile and ideal for a wide range of professional, educational, and corporate events.',
        bullets: ['Conference Room', 'Lecture Hall', 'Exhibition Hall', 'Smart Classroom'],
        img: `Assets/creative - 2.jpg`,
      },
    ],
    specs: [
      ['Item', '81', '108', '135', '162'],
      ["Pixel Pitch (mm)", "0.93", "1.25", "1.56", "1.875", "0.93"],
      ["Dot To Dot Resolution", "2K (1920×1080)", "2K (1920×1080)", "2K (1920×1080)", "2K (1920×1080)", "4K (3840×2160)"],
      ["Physical Density (dot/m²)", "1137778", "640000", "409600", "284444", "1137778"],
      ["Module Size (W×H×D) mm", "150×168.75", "150×168.75", "150×168.75", "150×168.75", "150×168.75"],
      ["Module Resolution (W×H)", "168×160", "120×135", "96×108", "80×90", "168×160"],
      ["Scanning Mode", "1/60", "1/60", "1/48", "1/45", "1/60"],
      ["Technology", "COB Full-flip Chip", "COB Full-flip Chip / SMD Optional", "COB Full-flip Chip / SMD Optional", "COB Full-flip Chip / SMD Optional", "COB Full-flip Chip"],
      ["Maintenance Method", "Front service", "Front service", "Front service", "Front service", "Front service"],
      ["Installation Method", "Front or back installation", "Front or back installation", "Front or back installation", "Front or back installation", "Front or back installation"],
      ["Cabinet Size (W×H×D)", "600×337.5×32.5mm", "600×337.5×32.5/39mm", "600×337.5×32.5/39mm", "600×337.5×32.5/39mm", "600×337.5×32.5mm"],
      ["Cabinet Resolution (W×H) dot", "640×360", "480×270", "384×216", "320×180", "640×360"],
      ["Brightness", "500~800", "500~800", "500~800", "500~800", "500~800"],
      ["Max. Power Consumption", "300W", "300/600W", "300/600W", "300/600W", "300W"],
      ["Average Power Consumption", "100W", "100/200W", "100/200W", "100/200W", "100W"],
      ["Cabinet Material", "Die Casting Aluminum", "Die Casting Aluminum", "Die Casting Aluminum", "Die Casting Aluminum", "Die Casting Aluminum"],
      ["LED Lamp Protection Level", "IP65", "IP65/IP54", "IP65/IP54", "IP65/IP54", "IP65"],
      ["Contrast Ratio", "10000:1", "10000:1 / 5000:1", "10000:1 / 5000:1", "10000:1 / 5000:1", "10000:1"],
      ["Gray Level (Bit)", "16", "16/14", "16/14", "16/14", "16"],
      ["Refresh Rate", "2880", "3840", "3840", "3840", "2880"],
      ["Refresh Frame Frequency", "50/60", "50/60", "50/60", "50/60", "50/60"],
      ["Horizontal View Angle", "≥170°", "≥170° / ≥140°", "≥170° / ≥140°", "≥170° / ≥140°", "≥170°"],
      ["Vertical View Angle", "≥170°", "≥170° / ≥120°", "≥170° / ≥120°", "≥170° / ≥120°", "≥170°"],
      ["Optimal Viewing Distance", "1", "1.3", "1.6", "1.9", "1"],
      ["Input Voltage AC", "AC110V~AC220V", "AC110V~AC220V", "AC110V~AC220V", "AC110V~AC220V", "AC110V~AC220V"],
      ["Module Max Current", "2.8V+3.8V / 0.5A+1.5A", "4", "4", "4", "2.8V+3.8V / 0.5A+1.5A"],
      ["Working Temperature", "-20°C~+80°C", "-20°C~+80°C", "-20°C~+80°C", "-20°C~+80°C", "-20°C~+80°C"],
      ["Working Humidity", "10%RH~95%RH", "10%RH~95%RH", "10%RH~95%RH", "10%RH~95%RH", "10%RH~95%RH"],
      ["Life Time", "≥100000", "≥100000", "≥100000", "≥100000", "≥100000"],
      ["MTBF", "≥10000", "≥10000", "≥10000", "≥10000", "≥10000"],
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
