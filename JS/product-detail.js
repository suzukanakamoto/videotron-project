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
    name: 'G Series',
    series: 'Fine Pitch Series',
    tech: 'SMD/GOB',
    category: 'fine',
    headline: 'Indoor Full Color Small Pitch Display',
    pitch: '1.25 / 1.53 / 1.66 / 1.86 / 2 / 2.5 / 3 / 4mm',
    cabinetSize: '640x480x74mm',
    imgColor: '102060',
    heroImg: `Assets/g series - 1.jpg`,
    thumbs: [
      `Assets/g series - 1.jpg`,
      `Assets/g series - 2.jpg`,
      `Assets/g series - 3.jpg`,
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
        img: `Assets/g series - 5.jpg `,
      },
      {
        title: 'High Refresh Rate for Broadcast Environments',
        desc: 'Up to 3840Hz refresh rate ensures zero flickering when captured by cameras, making the M Series ideal for broadcast studios, conference rooms, and TV productions.',
        bullets: ['3840Hz ultra-high refresh rate', 'Zero flicker for camera capture', 'Broadcast-ready quality'],
        img: `Assets/g series - 1.jpg`,
      },
      {
        title: 'Modular Front & Rear Maintenance',
        desc: 'Magnetic module design allows quick individual module replacement from both front and rear, minimizing downtime and simplifying long-term maintenance.',
        bullets: ['Magnetic quick-release modules', 'Front or rear access', 'Zero-tool module replacement'],
        img: `Assets/g series - 4.jpg`,
      },
    ],
    specs: [
      ["Module Size (W×H×D) mm", "320×160×15", "320×160×15", "320×160×15", "320×160×15", "320×160×15", "320×160×15", "320×160×18", "320×160×18"],
      ["Module Resolution (W×H)", "256×128", "208×104", "192×96", "172×86", "160×80", "128×64", "96×48", "80×40"],
      ["Scanning Mode", "1/64", "1/52", "1/48", "1/43", "1/40", "1/32", "1/24", "1/20"],
      ["LED Configuration", "1R1G1B", "1R1G1B", "1R1G1B", "1R1G1B", "1R1G1B", "1R1G1B", "1R1G1B", "1R1G1B"],
      ["LED Type", "SMD1010", "SMD1212", "SMD1212", "SMD1515", "SMD1515", "SMD1515", "SMD2121", "SMD2121"],
      ["Maintenance Method", "Front service", "Front service", "Front service", "Front service", "Front service", "Front service", "Front service", "Front service"],
      ["Installation Method", "Front or back installation", "Front or back installation", "Front or back installation", "Front or back installation", "Front or back installation", "Front or back installation", "Front or back installation", "Front or back installation"],
      ["Cabinet Size", "640×480×74", "640×480×74", "640×480×74", "640×480×74", "640×480×74", "640×480×74", "640×480×74", "640×480×74"],
      ["Cabinet Resolution", "512×384", "416×312", "384×288", "344×258", "320×240", "256×192", "192×144", "160×120"],
      ["Physical Density (dot/m²)", "640000", "422500", "360000", "288906", "250000", "160000", "90000", "62500"],
      ["Brightness", "900–1200", "900–1200", "900–1200", "900–1200", "600–1200", "600–1200", "600–1200", "600–1200"],
      ["Max Power Consumption", "600W", "600W", "600W", "580W", "580W", "600W", "450W", "450W"],
      ["Average Power Consumption", "200W", "200W", "200W", "180W", "180W", "200W", "160W", "160W"],
      ["Weight", "7KG", "7KG/8KG", "7KG/8KG", "7KG/8KG", "7KG/8KG", "7KG/8KG", "7KG", "7KG"],
      ["Cabinet Material", "Die Casting Aluminum", "Die Casting Aluminum", "Die Casting Aluminum", "Die Casting Aluminum", "Die Casting Aluminum", "Die Casting Aluminum", "Die Casting Aluminum", "Die Casting Aluminum"],
      ["Protection Level", "IP54", "IP54/IP65", "IP54/IP65", "IP54/IP65", "IP54/IP65", "IP54/IP65", "IP54", "IP54"],
      ["Contrast Ratio", "≥5000:1", "≥5000:1", "≥5000:1", "≥5000:1", "≥5000:1", "≥5000:1", "≥5000:1", "≥5000:1"],
      ["Grey Scale (Bit)", "16bit", "16bit", "16bit", "16bit", "16bit", "16bit", "16bit", "16bit"],
      ["Max Refresh Rate", "≥7680Hz", "≥7680Hz", "≥7680Hz", "≥7680Hz", "≥7680Hz", "≥7680Hz", "7680Hz", "7680Hz"],
      ["Frame Rate", "120 FPS", "120 FPS", "120 FPS", "120 FPS", "120 FPS", "120 FPS", "120 FPS", "120 FPS"],
      ["Horizontal View Angle", "≥140°", "≥140°", "≥140°", "≥140°", "≥140°", "≥140°", "≥140°", "≥140°"],
      ["Vertical View Angle", "≥120°", "≥120°", "≥120°", "≥120°", "≥120°", "≥120°", "≥120°", "≥120°"],
      ["Optimal Viewing Distance", "1.5M", "1.6M", "1.8M", "1.9M", "2M", "2.5M", "3.5M", "4M"],
      ["Power Input Voltage", "AC110V~AC220V", "AC110V~AC220V", "AC110V~AC220V", "AC110V~AC220V", "AC110V~AC220V", "AC110V~AC220V", "AC110V~AC220V", "AC110V~AC220V"],
      ["Module Max Current", "8A", "6A", "6A", "6A", "5A", "4.5A", "4.5A", "4.5A"],
      ["Working Temperature", "-20℃~+80℃", "-20℃~+80℃", "-20℃~+80℃", "-20℃~+80℃", "-20℃~+80℃", "-20℃~+80℃", "-20℃~+80℃", "-20℃~+80℃"],
      ["Working Humidity", "10%RH~95%RH", "10%RH~95%RH", "10%RH~95%RH", "10%RH~95%RH", "10%RH~95%RH", "10%RH~95%RH", "10%RH~95%RH", "10%RH~95%RH"],
      ["Life Time", "≥100000", "≥100000", "≥100000", "≥100000", "≥100000", "≥100000", "≥100000", "≥100000"],
    ],
    related: ['cv-series', 'i-board-series', 'r-pro-series'],
  },

  'k-series': {
    id: 'k-series',
    name: 'K Series',
    series: 'Fine Pitch Series',
    tech: 'SMD/GOB/COB',
    category: 'fine',
    headline: 'Indoor Full Color Small Pitch Display',
    pitch: 'K1.5 / K1.87 /K2 / K2.5 / K3',
    cabinetSize: '240×180×18mm',
    imgColor: '153070',
    heroImg: `Assets/k series - 1.jpg`,
    thumbs: [
      `Assets/k series - 1.jpg`,
      `Assets/k series - 2.jpg`,
      `Assets/k series - 3.jpg`,
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
        title: 'Videotron Indoor Digilight K Series - Small Pitch HD LED Screen',
        desc: 'The Digilight K Series is a premium indoor full-color small-pitch (fine-pitch) videotron specifically designed to produce high-resolution visuals with superior visual performance.',
        bullets: ['Pitch:K1.5 /K1.87/K2/K2.5/K3', 'Cabinet size: 480*540*67mm,high precision die-casting aluminum cabinet', '16:9 HD and 2K/4K/8K pixel-to-pixel resolution, bring you better viewing experience', 'High Performance Plastic Fiber Kit. Effectively keeps out moistu, dust, etc', 'Optional front and rear maintenance according to different application scenarios'],
        img: `Assets/k series - 2.jpg`,
      },
      {
        title: 'Digilight K Series: 16:9 Ultra HD Indoor Small Pitch LED Screen',
        desc: 'Featuring a high-precision die-cast aluminum cabinet, this series is ideal for indoor settings that require sharp image detail at close range, such as conference rooms, hotels, performance venues, government offices, and live broadcast studios.',
        bullets: ['Performance centers', 'Hotels', 'Government departments', 'Live studio'],
        img: `Assets/k series - 3.jpg`,
      },
    ],
    specs: [
        ["Item", "K1.25", "K1.56", "K1.87", "K2.6", "K2.97"],
        ["Module Size (W×H×D) mm", "240×180×18", "240×180×18", "240×180×18", "240×180×18", "240×180×18"],
        ["Module Resolution (W×H)", "160×120", "128×96", "120×90", "96×72", "80×60"],
        ["Scanning Mode", "1/40", "1/32", "1/30", "1/24", "1/30"],
        ["LED Configuration", "1R1G1B", "1R1G1B", "1R1G1B", "1R1G1B", "1R1G1B"],
        ["LED Type", "SMD1212", "SMD1515", "SMD1515", "SMD1515", "SMD1515"],
        ["Maintenance Method", "Front or back installation", "Front or back installation", "Front or back installation", "Front or back installation", "Front or back installation"],
        ["Installation Method", "Front service", "Front service", "Front service", "Front service", "Front service"],
        ["Cabinet Size (W×H×D) mm", "480×540×67", "480×540×67", "480×540×67", "480×540×67", "480×540×67"],
        ["Cabinet Resolution (W×H)", "320×360", "256×288", "240×270", "192×216", "160×180"],
        ["Physical Density (dot/m²)", "444444", "284444", "250000", "160000", "111111"],
        ["Brightness", "600~900", "600~900", "600~900", "600~900", "600~900"],
        ["Max. Power Consumption", "700W", "700W", "700W", "600W", "600W"],
        ["Average Power Consumption", "230W", "230W", "230W", "200W", "200W"],
        ["Weight", "6KG", "6KG", "6KG", "6KG", "6KG"],
        ["Cabinet Material", "Die Casting Aluminum", "Die Casting Aluminum", "Die Casting Aluminum", "Die Casting Aluminum", "Die Casting Aluminum"],
        ["Protection Level", "IP54", "IP54", "IP54", "IP54", "IP54"],
        ["Contrast Ratio", "≥5000:1", "≥5000:1", "≥5000:1", "≥5000:1", "≥5000:1"],
        ["Grey Scale (Bit)", "14bit/16bit", "14bit/16bit", "14bit/16bit", "14bit/16bit", "14bit/16bit"],
        ["Refresh Rate", "3840Hz", "3840Hz", "3840Hz", "1920Hz", "1920Hz"],
        ["Refresh Frame Frequency", "50/60Hz", "50/60Hz", "50/60Hz", "50/60Hz", "50/60Hz"],
        ["Horizontal View Angle", "≥140°", "≥140°", "≥140°", "≥140°", "≥140°"],
        ["Vertical View Angle", "≥120°", "≥120°", "≥120°", "≥120°", "≥120°"],
        ["Optimal Viewing Distance", "1.5M", "1.9M", "2M", "2.5M", "3M"],
        ["Power Input Voltage", "AC110V~AC220V", "AC110V~AC220V", "AC110V~AC220V", "AC110V~AC220V", "AC110V~AC220V"],
        ["Module Max Current", "6A", "6A", "6A", "5A", "6A"],
        ["Working Temperature", "-20℃~+80℃", "-20℃~+80℃", "-20℃~+80℃", "-20℃~+80℃", "-20℃~+80℃"],
        ["Working Humidity", "10%RH~95%RH", "10%RH~95%RH", "10%RH~95%RH", "10%RH~95%RH", "10%RH~95%RH"],
        ["Life Time", "≥100000", "≥100000", "≥100000", "≥100000", "≥100000"],
    ],
    related: ['cv-series', 'm-series', 'x-series'],
  },

  'm-series': {
    id: 'm-series',
    name: 'M Series',
    series: 'Fine Pitch Series',
    tech: 'SMD/GOB/COB',
    category: 'fine',
    headline: 'M Series - SMD/GOB Indoor Small Pitch LED Display',
    pitch: 'M0.93 / M1.25 / M1.56 / M1.87 / M2.5',
    cabinetSize: '600×337.5×39mm',
    imgColor: '153070',
    heroImg: `Assets/m series - 1.jpg`,
    thumbs: [
      `Assets/m series - 1.jpg`,
      `Assets/m series - 2.jpg`,
      `Assets/m series - 3.jpg`,
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
        title: 'Perfect 16:9 display ratio cabinet and support SMD/GOB technology',
        desc: 'The Digilight K Series is a premium indoor full-color small-pitch (fine-pitch) videotron specifically designed to produce high-resolution visuals with superior visual performance.',
        bullets: ['Pitch: M0.93/M1.25/M1.56/M1.87/M2.5', 'One cabinet for two uses, compatible with SMD or GOB module mounting', 'Cabinet size: 27 inches (600*337.5*39mm)', 'Support network/power/signal backup', 'Ultra light & thin panel with fast front installation and maintenance', 'Using floating connectors between modules and cabinets, support module fine-tuned with better flatness'],
        img: `Assets/m series - 3.jpg`,
      },
      {
        title: 'Digilight M Series - 16:9 Ultra HD Indoor Small Pitch LED Screen',
        desc: 'The M Series is a premium line of indoor small-pitch (fine-pitch) videotrons that offers cutting-edge technological flexibility by supporting both SMD and GOB (Glue-on-Board) modules within a single cabinet.',
        bullets: ['Conference Room', 'Control Center', 'Class Room', 'Exhibition Halls'],
        img: `Assets/m series - 4.jpg`,
      },
    ],
    specs: [
        ["Item", "M1.25 Common-cathode", "M1.25", "M1.56", "M1.87", "M2.5"],
        ["Module Size (W×H×D) mm", "150×168.75", "150×168.75", "150×168.75", "150×168.75", "150×337.5"],
        ["Module Resolution (W×H)", "120×135", "120×135", "96×108", "80×90", "60×135"],
        ["Scanning Mode", "1/45", "1/45", "1/48", "1/30", "1/30"],
        ["LED Configuration", "1R1G1B", "1R1G1B", "1R1G1B", "1R1G1B", "1R1G1B"],
        ["LED Type", "SMD1010 Common-cathode", "SMD1010", "SMD1212", "SMD1515", "SMD1515"],
        ["Maintenance Method", "Front service", "Front service", "Front service", "Front service", "Front service"],
        ["Installation Method", "Front or back installation", "Front or back installation", "Front or back installation", "Front or back installation", "Front or back installation"],
        ["Cabinet Size (W×H×D) mm", "600×337.5×39", "600×337.5×39", "600×337.5×39", "600×337.5×39", "600×337.5×39"],
        ["Cabinet Resolution (W×H)", "480×270", "480×270", "384×216", "320×180", "240×135"],
        ["Physical Density (dot/m²)", "640000", "640000", "409600", "284444", "160000"],
        ["Brightness", "2500~3000", "500~900", "500~900", "500~900", "500~900"],
        ["Max. Power Consumption", "600W", "600W", "600W", "600W", "500W"],
        ["Average Power Consumption", "200W", "200W", "200W", "200W", "170W"],
        ["Weight", "5.3KG", "5.3KG", "5.3KG", "5.3KG", "5.3KG"],
        ["Cabinet Material", "Die Casting Aluminum", "Die Casting Aluminum", "Die Casting Aluminum", "Die Casting Aluminum", "Die Casting Aluminum"],
        ["Protection Level", "IP45", "IP45", "IP45", "IP45", "IP45"],
        ["Contrast Ratio", "≥8000:1", "≥8000:1", "≥8000:1", "≥8000:1", "≥8000:1"],
        ["Grey Scale (Bit)", "14bit/16bit", "14bit/16bit", "14bit/16bit", "14bit/16bit", "14bit/16bit"],
        ["Refresh Rate", "≥3840Hz", "≥3840Hz", "≥3840Hz", "≥3840Hz", "≥3840Hz"],
        ["Refresh Frame Frequency", "50/60Hz", "50/60Hz", "50/60Hz", "50/60Hz", "50/60Hz"],
        ["Horizontal View Angle", "≥140°", "≥140°", "≥140°", "≥160°", "≥140°"],
        ["Vertical View Angle", "≥120°", "≥120°", "≥120°", "≥140°", "≥120°"],
        ["Optimal Viewing Distance", "1.3M", "1.3M", "1.6M", "1.9M", "2.5M"],
        ["Power Input Voltage", "AC110V~AC220V", "AC110V~AC220V", "AC110V~AC220V", "AC110V~AC220V", "AC110V~AC220V"],
        ["Module Max Current", "1.8A 2.8A+2.8A 3.8V", "4A 4.2V", "4A 4.2V", "4A 4.2V", "6.8A 4.2V"],
        ["Working Temperature", "-20℃~+80℃", "-20℃~+80℃", "-20℃~+80℃", "-20℃~+80℃", "-20℃~+80℃"],
        ["Working Humidity", "10%RH~95%RH", "10%RH~95%RH", "10%RH~95%RH", "10%RH~95%RH", "10%RH~95%RH"],
        ["Life Time", "≥100000", "≥100000", "≥100000", "≥100000", "≥100000"],
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
    cabinetSize: '150x56.25mm / 300x56.25mm',
    imgColor: '1c3355',
    heroImg: `Assets/i tag - 1.jpg`,
    thumbs: [
      `Assets/i tag - 1.jpg`,
      `Assets/i tag - 2.jpg`,
      `Assets/i tag - 3.jpg`,
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
        img: `Assets/i tag - 3.jpg`,
      },
      {
        title: 'Ultra-Compact COB Design',
        desc: 'At only 25mm depth, the I-TAG fits into existing retail shelving systems without modification, while the COB technology ensures excellent image quality in bright retail environments.',
        bullets: ['Only 25mm depth profile', 'No shelf modification needed', 'Bright retail-optimized display'],
        img: `Assets/i tag - 4.jpg`,
      },
    ],
    specs: [
        ["Item", "COB1.25", "SMD1.87", "GOB1.87"],
        ["Module Size (W×H×D) mm", "150×56.25", "300×56.25", "300×56.25"],
        ["Module Resolution (W×H)", "120×45", "160×30", "160×30"],
        ["Scanning Mode", "1/45", "1/30", "1/30"],
        ["LED Configuration", "1R1G1B", "1R1G1B", "1R1G1B"],
        ["Technology", "-", "Synchronous / Asynchronous (Optional)", "Synchronous / Asynchronous (Optional)"],
        ["Installation Method", "Mounted / Fixed", "Mounted / Fixed", "Mounted / Fixed"],
        ["Cabinet Size (W×H×D) mm", "300×60×23", "300×60×23", "300×60×23"],
        ["Cabinet Resolution (W×H) dot", "240×45", "180×30", "180×30"],
        ["Physical Density (dot/m²)", "640000", "284444", "284444"],
        ["Brightness", "50–600 cd/m² adjustable", "50–600 cd/m² adjustable", "50–600 cd/m² adjustable"],
        ["Max. Power Consumption", "15W", "15W", "15W"],
        ["Average Power Consumption", "5W", "5W", "5W"],
        ["Weight", "0.35KG", "0.35KG", "0.35KG"],
        ["Cabinet Material", "Aluminium profile", "Aluminium profile", "Aluminium profile"],
        ["Protection Level", "IP65", "IP65", "IP65"],
        ["Contrast Ratio", "10000:1", "10000:1", "10000:1"],
        ["Grey Scale (Bit)", "14bit", "14bit", "14bit"],
        ["Max Refresh Rate", "3840Hz", "3840Hz", "3840Hz"],
        ["Refresh Frame Frequency", "50/60Hz", "50/60Hz", "50/60Hz"],
        ["Horizontal View Angle", "≥170°", "≥140°", "≥140°"],
        ["Vertical View Angle", "≥170°", "≥120°", "≥120°"],
        ["Optimal Viewing Distance", "1.3M", "1.9M", "1.9M"],
        ["Input Signal", "RJ45 (Optional USB)", "RJ45 (Optional USB)", "RJ45 (Optional USB)"],
        ["Max Cascade", "4.8M", "4.8M", "4.8M"],
        ["Power Input Voltage", "24V", "24V", "24V"],
        ["Module Max Current", "0.6A", "0.6A", "0.6A"],
        ["Working Temperature", "-20℃ ~ +80℃", "-20℃ ~ +80℃", "-20℃ ~ +80℃"],
        ["Working Humidity", "10%RH–95%RH", "10%RH–95%RH", "10%RH–95%RH"],
        ["Life Time", "≥100000", "≥100000", "≥100000"],
        ["MTBF", "≥10000", "≥10000", "≥10000"],
    ],
    related: ['x-series', 'r-pro-series', 'cv-series'],
  },

  'z-series': {
    id: 'z-series',
    name: 'E Series',
    series: 'Rental & Stage',
    tech: 'COB',
    category: 'rental',
    headline: 'High Stability COB Rental LED Display',
    pitch: ' E2.60 / E2.97 / E3.91 / EH3.91 / EH4.81',
    cabinetSize: 'Customized',
    imgColor: '1e2d50',
    heroImg: `Assets/e series - 1.jpg`,
    thumbs: [
      `Assets/e series - 1.jpg`,
      `Assets/e series - 2.jpg`,
      `Assets/e series - 3.jpg`,
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
        title: 'E-Series High-end Rental Display',
        desc: 'Pluggable power box which can be quickly disassembled and replaced on site, greatly saving time',
        bullets: ['Pitch: E2.60/E2.97/E3.91/EH3.91/EH4.81', 'Cabinet customized curved designs and 90°  splicing', 'Pluggable power box', 'TUV-certified multifunctional hanging bars and four anti-collision corners perfect protect lamps'],
        img: `Assets/e series - 3.jpg`,
      },
      {
        title: 'Fast Tool-Free Assembly System',
        desc: 'Precision die-cast aluminum cabinets with integrated quick-lock mechanism allow a single technician to assemble large rental stages in minimal time.',
        bullets: ['Curved lock option to support concave and convex freely', '500x500mm/500x1000mm cabinets can be mixed and spliced and freely to meets the needs of different application scenarios'],
        img: `Assets/e series - 4.jpg`,
      },
    ],
    specs: [
      ['Item', 'E2.60', 'E2.97', 'E3.91', 'EH3.91', 'EH4.81'],
      ["Module Size (W×H×D) mm", "250×250×16", "250×250×15.5", "250×250×15.5", "250×250×16.5", "250×250×16.5"],
      ["Module Resolution (W×H)", "96×96", "84×84", "64×64", "64×64", "52×52"],
      ["Scanning Mode", "1/32", "1/28", "1/16", "1/16", "1/13"],
      ["LED Configuration", "1R1G1B", "1R1G1B", "1R1G1B", "1R1G1B", "1R1G1B"],
      ["LED Type", "SMD1515", "SMD1515", "SMD2121", "SMD1921", "SMD1921"],
      ["Maintenance Method", "Front or back service", "Front or back service", "Front or back service", "Back service", "Back service"],
      ["Installation Method", "Back installation", "Back installation", "Back installation", "Back installation", "Back installation"],
      ["Cabinet Size (W×H×D) mm", "500×500×90", "500×500×90", "500×500 / 1000×90", "500×500 / 1000×90", "500×500 / 1000×90"],
      ["Cabinet Resolution (W×H)", "192×192", "168×168", "128×128 / 128×256", "128×128 / 128×256", "104×104 / 104×208"],
      ["Physical Density (dot/m²)", "147456", "112896", "65536", "65536", "43264"],
      ["Brightness", "700–900", "700–900", "700–1000", "3300 / 5500", "3300 / 5500"],
      ["Max. Power Consumption", "650W", "650W", "650W", "800W", "800W"],
      ["Average Power Consumption", "200W", "200W", "200W", "260W", "260W"],
      ["Weight", "7.3KG", "7.3KG", "7.3KG / 11KG", "7.3KG / 11KG", "7.3KG / 11KG"],
      ["Cabinet Material", "Die Casting Aluminum", "Die Casting Aluminum", "Die Casting Aluminum", "Die Casting Aluminum", "Die Casting Aluminum"],
      ["Protection Level", "IP54", "IP54", "IP54", "IP65", "IP65"],
      ["Contrast Ratio", "≥5000:1", "≥5000:1", "≥5000:1", "≥5000:1", "≥5000:1"],
      ["Grey Scale (Bit)", "14bit", "14bit", "14bit", "14bit", "14bit"],
      ["Refresh Rate", "3840Hz", "3840Hz", "3840Hz", "3840Hz", "3840Hz"],
      ["Refresh Frame Frequency", "50/60Hz", "50/60Hz", "50/60Hz", "50/60Hz", "50/60Hz"],
      ["Horizontal View Angle", "≥140°", "≥140°", "≥140°", "≥140°", "≥140°"],
      ["Vertical View Angle", "≥120°", "≥120°", "≥120°", "≥120°", "≥120°"],
      ["Optimal Viewing Distance", "3M", "3M", "4M", "4M", "5M"],
      ["Power Input Voltage", "AC110V~AC220V", "AC110V~AC220V", "AC110V~AC220V", "AC110V~AC220V", "AC110V~AC220V"],
      ["Module Max Current", "8.5A", "8.5A", "8.5A", "12A", "12A"],
      ["Working Temperature", "-20°C~+80°C", "-20°C~+80°C", "-20°C~+80°C", "-20°C~+80°C", "-20°C~+80°C"],
      ["Working Humidity", "10%RH~95%RH", "10%RH~95%RH", "10%RH~95%RH", "10%RH~95%RH", "10%RH~95%RH"],
      ["Life Time", "≥100000", "≥100000", "≥100000", "≥100000", "≥100000"],
      ["MTBF", "≥10000", "≥10000", "≥10000", "≥10000", "≥10000"],
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
    cabinetSize: '500 × 1000mm',
    imgColor: '26354c',
    heroImg: `Assets/e pro - 1.jpg`,
    thumbs: [
      `Assets/e pro - 1.jpg`,
      `Assets/e pro - 2.jpg`,
      `Assets/e pro - 3.jpg`,
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
        bullets: ['Indoor and outdoor：500x500mm/ 500x1000mm cabinet size, compatible pitches: 1.95 / 2.60 / 3.12 / 3.91 / 4.81mm', 'One cabinet for various applications, supporting customized 90° splicing, customized radian lock and staggered splicing', 'Support front/ rear installation, front/ rear maintenance', 'Cabinets with powerful magnet, quick positioning, automatic match', 'Pluggable power box, quick plug in and out', '500 / 1000mm cabinets, support mix splicing'],
        img: `Assets/e pro - 3.jpg`,
      },
      {
        title: 'Advanced Signal Management',
        desc: 'Dual receiving card backup and redundant power supply ensure zero signal loss during live events. Remote monitoring capability allows proactive management of large display arrays.',
        bullets: ['XR Film & Video', 'Concerts', 'Children activities'],
        img: `Assets/e pro - 4.jpg`,
      },
    ],
    specs: [
      ["Item", "E-PRO 1.95", "E-PRO 2.6", "E-PRO 3.125", "E-PRO 3.91", "E-PRO 2.6", "E-PRO 3.125", "E-PRO 3.91", "E-PRO 4.81"],
      ["Pitch (mm)", "1.953", "2.6", "3.125", "3.91", "2.6", "3.125", "3.91", "4.81"],
      ["LED Configuration", "1R1G1B", "1R1G1B", "1R1G1B", "1R1G1B", "1R1G1B", "1R1G1B", "1R1G1B", "1R1G1B"],
      ["LED Type", "SMD1515", "SMD1515", "SMD2020", "SMD2020", "SMD1516", "SMD1516", "SMD1820", "SMD1820"],
      ["Physical Density (dot/m²)", "262144", "147456", "102400", "65536", "147456", "102400", "65536", "43264"],
      ["Module Size (mm)", "250×250", "250×500", "250×500", "250×500", "250×250", "250×250", "250×500", "250×500"],
      ["Module Resolution", "128×128", "96×192", "80×160", "64×128", "96×96", "80×80", "64×128", "52×104"],
      ["Cabinet Size (mm)", "500×500×90", "500×500 / 1000×90", "500×500 / 1000×90", "500×500 / 1000×90", "500×500×90", "500×500×90", "500×500 / 1000×90", "500×500 / 1000×90"],
      ["Cabinet Material", "Die Casting Aluminum", "Die Casting Aluminum", "Die Casting Aluminum", "Die Casting Aluminum", "Die Casting Aluminum", "Die Casting Aluminum", "Die Casting Aluminum", "Die Casting Aluminum"],
      ["Scanning Mode", "1/32", "1/32", "1/27", "1/16", "1/16", "1/20", "1/16", "1/13"],
      ["Cabinet Flatness (mm)", "≤0.10", "≤0.10", "≤0.10", "≤0.10", "≤0.10", "≤0.10", "≤0.10", "≤0.10"],
      ["Grey Scale (Bit)", "14", "14", "14", "14", "14", "14", "14", "14"],
      ["LED Lamp Protection Degree", "IP45", "IP45", "IP45", "IP45", "IP65", "IP65", "IP65", "IP65"],
      ["Installation / Service Method", "Front or back service / Front or back installation", "Front or back service / Front or back installation", "Front or back service / Front or back installation", "Front or back service / Front or back installation", "Front or back service / Front or back installation", "Front or back service / Front or back installation", "Front or back service / Front or back installation", "Front or back service / Front or back installation"],
      ["Brightness", "600–800", "600–800", "800–1000", "800–1000", "5000–5500", "5000–5500", "5000–5500", "5000–5500"],
      ["Color Temperature", "3200–12000", "3200–12000", "3200–12000", "3200–12000", "3200–12000", "3200–12000", "3200–12000", "3200–12000"],
      ["Brightness Uniformity", "≥98%", "≥98%", "≥98%", "≥98%", "≥98%", "≥98%", "≥98%", "≥98%"],
      ["Horizontal / Vertical View Angle", "≥140°/≥120°", "≥140°/≥120°", "≥140°/≥120°", "≥140°/≥120°", "≥140°/≥120°", "≥140°/≥120°", "≥140°/≥120°", "≥140°/≥120°"],
      ["Contrast Ratio", "≥5000:1", "≥5000:1", "≥5000:1", "≥5000:1", "≥5000:1", "≥5000:1", "≥5000:1", "≥5000:1"],
      ["Drive Mode", "Constant Current Drive", "Constant Current Drive", "Constant Current Drive", "Constant Current Drive", "Constant Current Drive", "Constant Current Drive", "Constant Current Drive", "Constant Current Drive"],
      ["Module Input Voltage DC", "8.5A", "16A", "16A", "16A", "10A", "10A", "20A", "20A"],
      ["Module Max Current DC", "5V", "5V", "5V", "5V", "5V", "5V", "5V", "5V"],
      ["Refresh Frame Frequency", "50/60Hz", "50/60Hz", "50/60Hz", "50/60Hz", "50/60Hz", "50/60Hz", "50/60Hz", "50/60Hz"],
      ["Max Refresh Rate", "2880–3840Hz", "2880–3840Hz", "2880–3840Hz", "2880–3840Hz", "2880–3840Hz", "2880–3840Hz", "2880–3840Hz", "2880–3840Hz"],
      ["Network Connection Port", "Custom Interface", "Custom Interface", "Custom Interface", "Custom Interface", "Custom Interface", "Custom Interface", "Custom Interface", "Custom Interface"],
      ["Input Voltage AC", "110–220V", "110–220V", "110–220V", "110–220V", "110–220V", "110–220V", "110–220V", "110–220V"],
      ["Max. Power Consumption", "≤650W", "≤650W", "≤650W", "≤650W", "≤800W", "≤800W", "≤800W", "≤800W"],
      ["Average Power Consumption", "≤200W", "≤200W", "≤200W", "≤200W", "≤250W", "≤250W", "≤250W", "≤250W"],
      ["Working Temperature", "-20°C~+80°C", "-20°C~+80°C", "-20°C~+80°C", "-20°C~+80°C", "-20°C~+80°C", "-20°C~+80°C", "-20°C~+80°C", "-20°C~+80°C"],
      ["Working Humidity", "10%~95%RH", "10%~95%RH", "10%~95%RH", "10%~95%RH", "10%~95%RH", "10%~95%RH", "10%~95%RH", "10%~95%RH"],
    ],
    related: ['z-series', 's-series', 'cob198-epro'],
  },

  'd-pro-series': {
    id: 'd-pro-series',
    name: 'D Series',
    series: 'DDOH Outdoor',
    tech: 'SMD',
    category: 'dooh',
    headline: 'High Performance Outdoor Display With Front Maintenance',
    pitch: 'DH 4 / DH 5 / DH 8 / DH 10',
    cabinetSize: '960x960mm / 960x1280mm / 1280x960mm / 1280x1280mm',
    imgColor: '1a2d48',
    heroImg: `Assets/d series - 1.jpg`,
    thumbs: [
      `Assets/d series - 1.jpg`,
      `Assets/d series - 2.jpg`,
      `Assets/d series - 3.jpg`,
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
        bullets: ['Pitch:DH4/DH5/DH8/DH10', 'Customized cabinet size:960*960 / 960*1280 / 1280*960 / 1280*1280mm', 'High precision aluminum profile cabinet with fully sealed module kit, IP65 ingress protection', 'Gathering power supply and receiver card into 1 box, support front and rear installation/ maintenance' ],
        img: `Assets/d series - 2.jpg`,
      },
      {
        title: 'IP65 Weatherproof for All Climates',
        desc: 'Rated IP65 for complete dust protection and water jet resistance. Operating temperature range from -30°C to +60°C ensures reliable performance in all weather conditions worldwide.',
        bullets: ['IP65 full weatherproof protection', '-30°C to +60°C operating range', 'Lightning & surge protection'],
        img: `Assets/d series - 3.jpg`,
      },
    ],
    specs: [
      ["Item", "DH 4", "DH 5", "DH 8", "DH 10"],
      ["Module Size (W×H×D) mm", "320×320×42", "320×320×42", "320×320×42", "320×320×42"],
      ["Module Resolution (W×H)", "80×80", "64×64", "40×40", "32×32"],
      ["Scanning Mode", "1/9", "1/7", "1/5", "1/2"],
      ["LED Configuration", "SMD1415", "SMD1921", "SMD2727", "SMD3535"],
      ["LED Type", "1R1G1B", "1R1G1B", "1R1G1B", "1R1G1B"],
      ["Maintenance Method", "Front or back service", "Front or back service", "Front or back service", "Front or back service"],
      ["Installation Method", "Front or back installation", "Front or back installation", "Front or back installation", "Front or back installation"],
      ["Cabinet Size (W×H×D) mm", "960×960×108", "960×960×108", "960×960×108", "960×960×108"],
      ["Cabinet Resolution (W×H)", "240×240", "192×192", "120×120", "96×96"],
      ["Physical Density (dot/m²)", "62500", "40000", "15625", "10000"],
      ["Brightness", "5000–5500", "5000–5500", "5500–5800", "5800–6000"],
      ["Max. Power Consumption", "800W", "800W", "800W", "800W"],
      ["Average Power Consumption", "260W", "260W", "260W", "260W"],
      ["Weight", "29KG", "29KG", "29KG", "29KG"],
      ["Cabinet Material", "Profile Cabinet", "Profile Cabinet", "Profile Cabinet", "Profile Cabinet"],
      ["Protection Level", "IP65", "IP65", "IP65", "IP65"],
      ["Contrast Ratio", "≥5000:1", "≥5000:1", "≥5000:1", "≥5000:1"],
      ["Grey Scale (Bit)", "14bit", "14bit", "14bit", "14bit"],
      ["Refresh Rate", "1920/3840", "1920/3840", "1920/3840", "1920/3840"],
      ["Refresh Frame Frequency", "50/60Hz", "50/60Hz", "50/60Hz", "50/60Hz"],
      ["Horizontal View Angle", "≥140°", "≥140°", "≥140°", "≥140°"],
      ["Vertical View Angle", "≥120°", "≥120°", "≥120°", "≥120°"],
      ["Optimal Viewing Distance", "4", "5", "8", "10"],
      ["Power Input Voltage", "AC110V~AC220V", "AC110V~AC220V", "AC110V~AC220V", "AC110V~AC220V"],
      ["Module Max Current", "16A", "16A", "16A", "16A"],
      ["Working Temperature", "-30°C~+80°C", "-30°C~+80°C", "-30°C~+80°C", "-30°C~+80°C"],
      ["Working Humidity", "10%RH~95%RH", "10%RH~95%RH", "10%RH~95%RH", "10%RH~95%RH"],
      ["Life Time", "≥100000", "≥100000", "≥100000", "≥100000"],
      ["MTBF", "≥10000", "≥10000", "≥10000", "≥10000"],
    ],
    related: ['a-series', 'b-series', 's-series'],
  },

  'a-series': {
    id: 'a-series',
    name: 'F Series',
    series: 'DDOH Outdoor',
    tech: 'SMD',
    category: 'dooh',
    headline: 'Outdoor Standard Waterproof LED Display',
    pitch: '5.92 / 8mm',
    cabinetSize: '640×960×80mm',
    imgColor: '1e3244',
    heroImg: `Assets/f series - 1.jpg`,
    thumbs: [
      `Assets/f series - 1.jpg`,
      `Assets/f series - 2.jpg`,
      `Assets/f series - 3.jpg`,
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
        desc: 'The F Series provides comprehensive IP65 weatherproof protection suitable for all outdoor environments, from roadside billboards to building facades and sports venues.',
        bullets: ['IP65 front & rear protection', 'Corrosion-resistant housing', 'UV-stabilized module surface'],
        img: `Assets/f series - 1.jpg`,
      },
      {
        title: 'Auto Brightness for Day & Night',
        desc: 'Built-in light sensors automatically adjust display brightness from 500 nits (night mode) to 7500 nits (full sunlight) for optimal visibility and energy efficiency around the clock.',
        bullets: ['500–7500 nit auto adjustment', 'Built-in ambient light sensor', 'Energy saving in low-light'],
        img: `Assets/f series - 4.jpg`,
      },
    ],
    specs: [
      ["Item", "FH5.92", "FH8"],
      ["Module Size (W×H×D) mm", "320×320", "320×320"],
      ["Module Resolution (W×H)", "54×54", "40×40"],
      ["Scanning Mode", "1/7", "1/3"],
      ["LED Configuration", "1R1G1B", "1R1G1B"],
      ["LED Type", "SMD2727", "SMD2727"],
      ["Maintenance Method", "Front or back service", "Front or back"],
      ["Installation Method", "Front or back installation", "Front or back installation"],
      ["Cabinet Size (W×H×D) mm", "640×960×80", "640×960×80"],
      ["Cabinet Resolution (W×H)", "108×162", "80×120"],
      ["Physical Density (dot/m²)", "28476", "15625"],
      ["Brightness", "5800–6000 (Customizable 8500–9000)", "5800–6000 (Customizable 8500–9000)"],
      ["Max. Power Consumption", "600W", "600W"],
      ["Average Power Consumption", "200W", "200W"],
      ["Weight", "27KG", "27KG"],
      ["Cabinet Material", "Die Casting Aluminum", "Die Casting Aluminum"],
      ["Protection Level", "IP65", "IP65"],
      ["Contrast Ratio", "≥5000:1", "≥5000:1"],
      ["Grey Scale (Bit)", "14bit", "14bit"],
      ["Refresh Rate", "1920Hz/3840Hz", "1920Hz/3840Hz"],
      ["Refresh Frame Frequency", "50/60Hz", "50/60Hz"],
      ["Horizontal View Angle", "≥140°", "≥140°"],
      ["Vertical View Angle", "≥120°", "≥120°"],
      ["Optimal Viewing Distance", "6M", "8M"],
      ["Input Voltage (V)", "AC110V~AC220V", "AC110V~AC220V"],
      ["Module Max Current (A)", "7A+9A", "7A+9A"],
      ["Working Temperature", "-40℃~+80℃", "-40℃~+80℃"],
      ["Working Humidity", "10%RH~80%RH", "10%RH~80%RH"],
      ["Life Time", "≥100000", "≥100000"],
    ],
    related: ['d-pro-series', 'b-series', 'cob198-epro'],
  },

  '3d-series': {
    id: '3d-series',
    name: 'Outdoor Creative Display 3D Screen Series',
    series: 'DDOH Outdoor',
    tech: 'SMD',
    category: 'dooh',
    headline: 'Creative Outdoor Advertising LED Display',
    pitch: '2.5 / 4 / 5 / 6.6 / 10mm',
    cabinetSize: 'Customized',
    imgColor: '223442',
    heroImg: `Assets/3d series - 1.jpg`,
    thumbs: [
      `Assets/3d series - 1.jpg`,
      `Assets/3d series - 2.jpg`,
      `Assets/3d series - 3.jpg`,
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
        desc: 'Using seamless stitching technology with precisely adjustable module alignment, this series can transform the facades of buildings or shopping centers into iconic public landmarks.',
        bullets: ['Exclusive customized 3D display to meet diverse needs. Customize right-angle or curved 3D display according to different buildings', 'Seamless stitching and splicing with perfect flatness, module could be fine-tuned', 'Protection IP65. All-round waterproof, adapt to a variety of awful weather', 'Ultra-wide viewing angle, new experience', 'Using high-precision equipment and advanced technology to produce higher stability, wider horizontal and vertical viewing angles', 'HD picture, bright color The ultra-high contrast and high-quality display effect makes the vivid picture'],
        img: `Assets/3d series - 4.jpg`,
      },
    ],
    specs: [
        ["Item", "AH4-3D", "AH5-3D", "AH6.66-3D", "AH10-3D"],
        ["Module Size (W×H×D) mm", "80×320×21", "320×160×21", "80×320×21", "320×160×21", "80×320×18", "320×160×18", "320×160×21"],
        ["Module Resolution (W×H)", "20×80", "80×40", "16×64", "64×32", "12×48", "48×24", "32×16"],
        ["Scanning Mode", "1/10", "1/10", "1/8", "1/8", "1/6", "1/6", "1/2"],
        ["LED Configuration", "1R1G1B", "1R1G1B", "1R1G1B", "1R1G1B", "1R1G1B", "1R1G1B", "1R1G1B"],
        ["LED Type", "1921", "1921", "2727", "2727", "2727", "2727", "3535"],
        ["Maintenance Method", "Back service", "Back service", "Back service", "Back service", "Back service", "Back service", "Back service"],
        ["Installation Method", "Back installation", "Back installation", "Back installation", "Back installation", "Back installation", "Back installation", "Back installation"],
        ["Cabinet Size (W×H×D) mm", "Customized", "Customized", "Customized", "Customized", "Customized", "Customized", "Customized"],
        ["Physical Density (dot/m²)", "62500", "62500", "40000", "40000", "22500", "22500", "10000"],
        ["Brightness", "6000-6500", "6000-6500", "6000-7000", "6000-7000", "6000-7000", "6000-7000", "6000-10000"],
        ["Max. Power Consumption", "800W", "800W", "800W", "800W", "800W", "800W", "800W"],
        ["Average Power Consumption", "260W", "260W", "260W", "260W", "260W", "260W", "260W"],
        ["Cabinet Material", "Iron / Aluminum Cabinet", "Iron / Aluminum Cabinet", "Iron / Aluminum Cabinet", "Iron / Aluminum Cabinet", "Iron / Aluminum Cabinet", "Iron / Aluminum Cabinet", "Iron / Aluminum Cabinet"],
        ["Protection Level", "IP65", "IP65", "IP65", "IP65", "IP65", "IP65", "IP65"],
        ["Contrast Ratio", "5000:1", "5000:1", "5000:1", "5000:1", "5000:1", "5000:1", "5000:1"],
        ["Gray Scale (Bit)", "14bit", "14bit", "14bit", "14bit", "14bit", "14bit", "14bit"],
        ["Refresh Rate", "3840Hz", "3840Hz", "3840Hz", "3840Hz", "3840Hz", "3840Hz", "3840Hz"],
        ["Refresh Frame Frequency", "50/60Hz", "50/60Hz", "50/60Hz", "50/60Hz", "50/60Hz", "50/60Hz", "50/60Hz"],
        ["Horizontal View Angle", "≥140°", "≥140°", "≥140°", "≥140°", "≥140°", "≥140°", "≥140°"],
        ["Vertical View Angle", "≥120°", "≥120°", "≥120°", "≥120°", "≥120°", "≥120°", "≥120°"],
        ["Optimal Viewing Distance", "4m", "4m", "5m", "5m", "7m", "7m", "10m"],
        ["Input Voltage AC", "AC110V~AC220V", "AC110V~AC220V", "AC110V~AC220V", "AC110V~AC220V", "AC110V~AC220V", "AC110V~AC220V", "AC110V~AC220V"],
        ["Module Max Current (A)", "4A", "8A", "4A", "8A", "4A", "8A", "8.5A"],
        ["Working Temperature", "-20℃~+80℃", "-20℃~+80℃", "-20℃~+80℃", "-20℃~+80℃", "-20℃~+80℃", "-20℃~+80℃", "-20℃~+80℃"],
        ["Working Humidity", "10%RH~95%RH", "10%RH~95%RH", "10%RH~95%RH", "10%RH~95%RH", "10%RH~95%RH", "10%RH~95%RH", "10%RH~95%RH"],
        ["Life Time", "≥100000", "≥100000", "≥100000", "≥100000", "≥100000", "≥100000", "≥100000"],
        ["MTBF", "≥10000", "≥10000", "≥10000", "≥10000", "≥10000", "≥10000", "≥10000"],
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

  'c-series': {
    id: 'c-series',
    name: 'C Series',
    series: 'Creative Display',
    tech: 'COB',
    category: 'allinone',
    headline: 'Creative Conference All-in-One LED Display',
    pitch: '4.00 / 5.00 / 5.70 / 8.00 / 10.00mm',
    cabinetSize: 'customized',
    imgColor: '12223e',
    heroImg: `Assets/c series - 1.jpg`,
    thumbs: [
      `Assets/c series - 1.jpg`,
      `Assets/c series - 2.jpg`,
      `Assets/c series - 3.jpg`,
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
        img: `Assets/c series - 2.jpg`,
      },
      {
        title: 'Advantages of common-cathode screen',
        desc: 'Adopt dual channel power supply tech. based on different optical characteristics of RGB LED. With smart IC control system, it distributes precise voltage to LED and driving IC saving 20 to 30% energy. (Comparing that with common-athode LED)',
        bullets: ['Separate power supply with R/GB, accurate current distribution to lamp beads to reduce power loss.', 'Reduce temperature rise, no need for air conditioning, highly reduce input cost.', 'Uniform heat distribution with good consistency, constant color temperature, no color cast, no color blocks.'],
        img: `Assets/c series - 3.jpg`,
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
    cabinetSize: '600×337.5×32.5mm',
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

  'i-board': {
    id: 'i-board',
    name: 'I-Board Series',
    series: 'Creative Display',
    tech: 'COB',
    category: 'allinone',
    headline: 'I-BOARD Series 55" LED Display',
    pitch: '1.26 / 1.57 / 1.89 / 2.52mm',
    cabinetSize: '1209.6x680.4x70.5mm',
    imgColor: '12223e',
    heroImg: `Assets/i board - 1.jpg`,
    thumbs: [
      `Assets/i board - 1.jpg`,
      `Assets/i board - 2.jpg`,
      `Assets/i board - 3.jpg`,
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
        title: 'Perfectly Match and Replace LCD Display',
        desc: 'The I-BOARD Series 55" LED Display is a high-quality indoor LED video wall with a 3840Hz refresh rate, front maintenance, an aluminum cabinet, and is compatible as a replacement for LCD video walls.',
        bullets: ['Picth: IB1.26/ IB1.57/ IB1.89/ IB2.52', 'Cabinet size: 1209.6*680.4*70.5mm (55")', 'Prefectly replace traditional LCD screen', 'Profile aluminum cabinet, light weight, simple inner wiring', 'Front maintenance and installation, easy to assemble'],
        img: `Assets/i board - 2.jpg`,
      },
      {
        title: 'Functional characteristics',
        desc: '55 inch cabinet,which perfect matches the installation holes of the LCD screen.',
        bullets: ['Corporate Lobby', 'Shopping Mall', 'Retail Store', 'Digital Signage'],
        img: `Assets/i board - 3.jpg`,
      },
    ],
    specs: [
      ["Item", "IB 1.26", "IB 1.57", "IB 1.89", "IB 2.52"],
      ["Pixel Pitch (mm)", "1.26", "1.57", "1.89", "2.52"],
      ["LED Configuration", "1R1G1B", "1R1G1B", "1R1G1B", "1R1G1B"],
      ["LED Type", "1010", "1212", "1515", "2121"],
      ["Physical Density (dot/m²)", "629882", "403124", "279947", "157470"],
      ["Module Size (W×H×D) mm", "151.2×340.2×15", "151.2×340.2×15", "151.2×340.2×15", "151.2×340.2×15"],
      ["Module Resolution (W×H)", "120×270", "96×216", "80×180", "60×135"],
      ["Scanning Mode", "60S", "48S", "40S", "30S"],
      ["Cabinet Resolution (W×H)", "960×540", "768×432", "640×360", "480×270"],
      ["Cabinet Size (W×H×D) mm", "1209.6×680.4×70.5", "1209.6×680.4×70.5", "1209.6×680.4×70.5", "1209.6×680.4×70.5"],
      ["Module Kit Material", "Plastic", "Plastic", "Plastic", "Plastic"],
      ["Cabinet Material", "Aluminum profile cabinet", "Aluminum profile cabinet", "Aluminum profile cabinet", "Aluminum profile cabinet"],
      ["Cabinet Flatness", "≤0.1 mm", "≤0.1 mm", "≤0.1 mm", "≤0.1 mm"],
      ["Grey Scale (Bit)", "14", "14", "14", "14"],
      ["Protection Level", "IP54", "IP54", "IP54", "IP54"],
      ["Installation/Service Method", "Front or back installation / Front service", "Front or back installation / Front service", "Front or back installation / Front service", "Front or back installation / Front service"],
      ["Brightness", "600–900", "600–900", "600–900", "600–900"],
      ["Color Temperature", "3000–12000K (3000-adjustable)", "3000–12000K (3000-adjustable)", "3000–12000K (3000-adjustable)", "3000–12000K (3000-adjustable)"],
      ["Brightness Uniformity", "≥98%", "≥98%", "≥98%", "≥98%"],
      ["Horizontal/Vertical View Angle", "≥140° / ≥120°", "≥140° / ≥120°", "≥140° / ≥120°", "≥140° / ≥120°"],
      ["Contrast Ratio", "5000:1", "5000:1", "5000:1", "5000:1"],
      ["Drive Mode", "Constant Current Drive", "Constant Current Drive", "Constant Current Drive", "Constant Current Drive"],
      ["Module Input Voltage DC", "5V", "5V", "5V", "5V"],
      ["Module Max Current DC", "6.5A", "6.5A", "6.5A", "6.5A"],
      ["Max Refresh Rate", "3840", "3840", "3840", "3840"],
      ["Input Voltage AC", "110–220V", "110–220V", "110–220V", "110–220V"],
      ["Max. Power Consumption", "650W/m²", "650W/m²", "650W/m²", "650W/m²"],
      ["Average Power Consumption", "200W/m²", "200W/m²", "200W/m²", "200W/m²"],
      ["Working Temperature", "-20℃~+50℃", "-20℃~+50℃", "-20℃~+50℃", "-20℃~+50℃"],
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
