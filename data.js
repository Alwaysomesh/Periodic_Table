const elements = [
    // Period 1
    {
      number: 1,
      symbol: 'H',
      name: 'Hydrogen',
      weight: 1.008,
      category: 'other-nonmetal',
      config: '1s¹',
      discovery: '1766',
      gridRow: 1,
      gridColumn: 1,
      molecule: null
    },
    {
      number: 2,
      symbol: 'He',
      name: 'Helium',
      weight: 4.0026,
      category: 'noble-gas',
      config: '1s²',
      discovery: '1868',
      gridRow: 1,
      gridColumn: 18,
      molecule: null
    },
  
    // Period 2
    {
      number: 3,
      symbol: 'Li',
      name: 'Lithium',
      weight: 6.94,
      category: 'alkali-metal',
      config: '[He] 2s¹',
      discovery: '1817',
      gridRow: 2,
      gridColumn: 1,
      molecule: /* Li structure */ null
    },
    {
      number: 4,
      symbol: 'Be',
      name: 'Beryllium',
      weight: 9.0122,
      category: 'alkaline-earth',
      config: '[He] 2s²',
      discovery: '1798',
      gridRow: 2,
      gridColumn: 2,
      molecule: null
    },
    {
      number: 5,
      symbol: 'B',
      name: 'Boron',
      weight: 10.81,
      category: 'metalloid',
      config: '[He] 2s² 2p¹',
      discovery: '1808',
      gridRow: 2,
      gridColumn: 13,
      molecule: null
    },
    {
      number: 6,
      symbol: 'C',
      name: 'Carbon',
      weight: 12.011,
      category: 'other-nonmetal',
      config: '[He] 2s² 2p²',
      discovery: 'Ancient',
      gridRow: 2,
      gridColumn: 14,
      molecule: null
    },
    {
      number: 7,
      symbol: 'N',
      name: 'Nitrogen',
      weight: 14.007,
      category: 'other-nonmetal',
      config: '[He] 2s² 2p³',
      discovery: '1772',
      gridRow: 2,
      gridColumn: 15,
      molecule: null
    },
    {
      number: 8,
      symbol: 'O',
      name: 'Oxygen',
      weight: 15.999,
      category: 'other-nonmetal',
      config: '[He] 2s² 2p⁴',
      discovery: '1774',
      gridRow: 2,
      gridColumn: 16,
      molecule: null
    },
    {
      number: 9,
      symbol: 'F',
      name: 'Fluorine',
      weight: 18.998,
      category: 'halogen',
      config: '[He] 2s² 2p⁵',
      discovery: '1886',
      gridRow: 2,
      gridColumn: 17,
      molecule: null
    },
    {
      number: 10,
      symbol: 'Ne',
      name: 'Neon',
      weight: 20.180,
      category: 'noble-gas',
      config: '[He] 2s² 2p⁶',
      discovery: '1898',
      gridRow: 2,
      gridColumn: 18,
      molecule: null
    },
  
    // Period 3
    {
      number: 11,
      symbol: 'Na',
      name: 'Sodium',
      weight: 22.990,
      category: 'alkali-metal',
      config: '[Ne] 3s¹',
      discovery: '1807',
      gridRow: 3,
      gridColumn: 1,
      molecule: null
    },
    {
      number: 12,
      symbol: 'Mg',
      name: 'Magnesium',
      weight: 24.305,
      category: 'alkaline-earth',
      config: '[Ne] 3s²',
      discovery: '1755',
      gridRow: 3,
      gridColumn: 2,
      molecule: null
    },
    {
      number: 13,
      symbol: 'Al',
      name: 'Aluminium',
      weight: 26.982,
      category: 'post-transition-metal',
      config: '[Ne] 3s² 3p¹',
      discovery: '1825',
      gridRow: 3,
      gridColumn: 13,
      molecule: null
    },
    {
      number: 14,
      symbol: 'Si',
      name: 'Silicon',
      weight: 28.085,
      category: 'metalloid',
      config: '[Ne] 3s² 3p²',
      discovery: '1824',
      gridRow: 3,
      gridColumn: 14,
      molecule: null
    },
    {
      number: 15,
      symbol: 'P',
      name: 'Phosphorus',
      weight: 30.974,
      category: 'other-nonmetal',
      config: '[Ne] 3s² 3p³',
      discovery: '1669',
      gridRow: 3,
      gridColumn: 15,
      molecule: null
    },
    {
      number: 16,
      symbol: 'S',
      name: 'Sulfur',
      weight: 32.06,
      category: 'other-nonmetal',
      config: '[Ne] 3s² 3p⁴',
      discovery: 'Ancient',
      gridRow: 3,
      gridColumn: 16,
      molecule: null
    },
    {
      number: 17,
      symbol: 'Cl',
      name: 'Chlorine',
      weight: 35.45,
      category: 'halogen',
      config: '[Ne] 3s² 3p⁵',
      discovery: '1774',
      gridRow: 3,
      gridColumn: 17,
      molecule: null
    },
    {
      number: 18,
      symbol: 'Ar',
      name: 'Argon',
      weight: 39.948,
      category: 'noble-gas',
      config: '[Ne] 3s² 3p⁶',
      discovery: '1894',
      gridRow: 3,
      gridColumn: 18,
      molecule: null
    },
  
    // Period 4
    {
      number: 19,
      symbol: 'K',
      name: 'Potassium',
      weight: 39.098,
      category: 'alkali-metal',
      config: '[Ar] 4s¹',
      discovery: '1807',
      gridRow: 4,
      gridColumn: 1,
      molecule: null
    },
    {
      number: 20,
      symbol: 'Ca',
      name: 'Calcium',
      weight: 40.078,
      category: 'alkaline-earth',
      config: '[Ar] 4s²',
      discovery: '1808',
      gridRow: 4,
      gridColumn: 2,
      molecule: null
    },
    {
      number: 21,
      symbol: 'Sc',
      name: 'Scandium',
      weight: 44.956,
      category: 'transition-metal',
      config: '[Ar] 3d¹ 4s²',
      discovery: '1879',
      gridRow: 4,
      gridColumn: 3,
      molecule: null
    },
    {
      number: 22,
      symbol: 'Ti',
      name: 'Titanium',
      weight: 47.867,
      category: 'transition-metal',
      config: '[Ar] 3d² 4s²',
      discovery: '1791',
      gridRow: 4,
      gridColumn: 4,
      molecule: null
    },
    {
      number: 23,
      symbol: 'V',
      name: 'Vanadium',
      weight: 50.942,
      category: 'transition-metal',
      config: '[Ar] 3d³ 4s²',
      discovery: '1801',
      gridRow: 4,
      gridColumn: 5,
      molecule: null
    },
    {
      number: 24,
      symbol: 'Cr',
      name: 'Chromium',
      weight: 51.996,
      category: 'transition-metal',
      config: '[Ar] 3d⁵ 4s¹',
      discovery: '1797',
      gridRow: 4,
      gridColumn: 6,
      molecule: null
    },
    {
      number: 25,
      symbol: 'Mn',
      name: 'Manganese',
      weight: 54.938,
      category: 'transition-metal',
      config: '[Ar] 3d⁵ 4s²',
      discovery: '1774',
      gridRow: 4,
      gridColumn: 7,
      molecule: null
    },
    {
      number: 26,
      symbol: 'Fe',
      name: 'Iron',
      weight: 55.845,
      category: 'transition-metal',
      config: '[Ar] 3d⁶ 4s²',
      discovery: 'Ancient',
      gridRow: 4,
      gridColumn: 8,
      molecule: /* Fe structure */ null
    },
    {
      number: 27,
      symbol: 'Co',
      name: 'Cobalt',
      weight: 58.933,
      category: 'transition-metal',
      config: '[Ar] 3d⁷ 4s²',
      discovery: 'Ancient',
      gridRow: 4,
      gridColumn: 9,
      molecule: null
    },
    {
      number: 28,
      symbol: 'Ni',
      name: 'Nickel',
      weight: 58.693,
      category: 'transition-metal',
      config: '[Ar] 3d⁸ 4s²',
      discovery: 'Ancient',
      gridRow: 4,
      gridColumn: 10,
      molecule: null
    },
    {
      number: 29,
      symbol: 'Cu',
      name: 'Copper',
      weight: 63.546,
      category: 'transition-metal',
      config: '[Ar] 3d¹⁰ 4s¹',
      discovery: 'Ancient',
      gridRow: 4,
      gridColumn: 11,
      molecule: null
    },
    {
      number: 30,
      symbol: 'Zn',
      name: 'Zinc',
      weight: 65.38,
      category: 'transition-metal',
      config: '[Ar] 3d¹⁰ 4s²',
      discovery: 'Ancient',
      gridRow: 4,
      gridColumn: 12,
      molecule: null
    },
    {
      number: 31,
      symbol: 'Ga',
      name: 'Gallium',
      weight: 69.723,
      category: 'post-transition-metal',
      config: '[Ar] 3d¹⁰ 4s² 4p¹',
      discovery: '1875',
      gridRow: 4,
      gridColumn: 13,
      molecule: null
    },
    {
      number: 32,
      symbol: 'Ge',
      name: 'Germanium',
      weight: 72.630,
      category: 'metalloid',
      config: '[Ar] 3d¹⁰ 4s² 4p²',
      discovery: '1886',
      gridRow: 4,
      gridColumn: 14,
      molecule: null
    },
    {
      number: 33,
      symbol: 'As',
      name: 'Arsenic',
      weight: 74.922,
      category: 'metalloid',
      config: '[Ar] 3d¹⁰ 4s² 4p³',
      discovery: 'Ancient',
      gridRow: 4,
      gridColumn: 15,
      molecule: null
    },
    {
      number: 34,
      symbol: 'Se',
      name: 'Selenium',
      weight: 78.971,
      category: 'other-nonmetal',
      config: '[Ar] 3d¹⁰ 4s² 4p⁴',
      discovery: '1817',
      gridRow: 4,
      gridColumn: 16,
      molecule: null
    },
    {
      number: 35,
      symbol: 'Br',
      name: 'Bromine',
      weight: 79.904,
      category: 'halogen',
      config: '[Ar] 3d¹⁰ 4s² 4p⁵',
      discovery: '1826',
      gridRow: 4,
      gridColumn: 17,
      molecule: null
    },
    {
      number: 36,
      symbol: 'Kr',
      name: 'Krypton',
      weight: 83.798,
      category: 'noble-gas',
      config: '[Ar] 3d¹⁰ 4s² 4p⁶',
      discovery: '1898',
      gridRow: 4,
      gridColumn: 18,
      molecule: null
    },
  
    // Period 5
    {
      number: 37,
      symbol: 'Rb',
      name: 'Rubidium',
      weight: 85.468,
      category: 'alkali-metal',
      config: '[Kr] 5s¹',
      discovery: '1861',
      gridRow: 5,
      gridColumn: 1,
      molecule: null
    },
    {
      number: 38,
      symbol: 'Sr',
      name: 'Strontium',
      weight: 87.62,
      category: 'alkaline-earth',
      config: '[Kr] 5s²',
      discovery: '1790',
      gridRow: 5,
      gridColumn: 2,
      molecule: null
    },
    {
      number: 39,
      symbol: 'Y',
      name: 'Yttrium',
      weight: 88.906,
      category: 'transition-metal',
      config: '[Kr] 4d¹ 5s²',
      discovery: '1794',
      gridRow: 5,
      gridColumn: 3,
      molecule: null
    },
    {
      number: 40,
      symbol: 'Zr',
      name: 'Zirconium',
      weight: 91.224,
      category: 'transition-metal',
      config: '[Kr] 4d² 5s²',
      discovery: '1789',
      gridRow: 5,
      gridColumn: 4,
      molecule: null
    },
    {
      number: 41,
      symbol: 'Nb',
      name: 'Niobium',
      weight: 92.906,
      category: 'transition-metal',
      config: '[Kr] 4d⁴ 5s¹',
      discovery: '1801',
      gridRow: 5,
      gridColumn: 5,
      molecule: null
    },
    {
      number: 42,
      symbol: 'Mo',
      name: 'Molybdenum',
      weight: 95.95,
      category: 'transition-metal',
      config: '[Kr] 4d⁵ 5s¹',
      discovery: '1778',
      gridRow: 5,
      gridColumn: 6,
      molecule: null
    },
    {
      number: 43,
      symbol: 'Tc',
      name: 'Technetium',
      weight: 98,
      category: 'transition-metal',
      config: '[Kr] 4d⁵ 5s²',
      discovery: '1937',
      gridRow: 5,
      gridColumn: 7,
      molecule: null
    },
    {
      number: 44,
      symbol: 'Ru',
      name: 'Ruthenium',
      weight: 101.07,
      category: 'transition-metal',
      config: '[Kr] 4d⁷ 5s¹',
      discovery: '1844',
      gridRow: 5,
      gridColumn: 8,
      molecule: null
    },
    {
      number: 45,
      symbol: 'Rh',
      name: 'Rhodium',
      weight: 102.91,
      category: 'transition-metal',
      config: '[Kr] 4d⁸ 5s¹',
      discovery: '1803',
      gridRow: 5,
      gridColumn: 9,
      molecule: null
    },
    {
      number: 46,
      symbol: 'Pd',
      name: 'Palladium',
      weight: 106.42,
      category: 'transition-metal',
      config: '[Kr] 4d¹⁰',
      discovery: '1803',
      gridRow: 5,
      gridColumn: 10,
      molecule: null
    },
    {
      number: 47,
      symbol: 'Ag',
      name: 'Silver',
      weight: 107.87,
      category: 'transition-metal',
      config: '[Kr] 4d¹⁰ 5s¹',
      discovery: 'Ancient',
      gridRow: 5,
      gridColumn: 11,
      molecule: null
    },
    {
      number: 48,
      symbol: 'Cd',
      name: 'Cadmium',
      weight: 112.41,
      category: 'transition-metal',
      config: '[Kr] 4d¹⁰ 5s²',
      discovery: '1817',
      gridRow: 5,
      gridColumn: 12,
      molecule: null
    },
    {
      number: 49,
      symbol: 'In',
      name: 'Indium',
      weight: 114.82,
      category: 'post-transition-metal',
      config: '[Kr] 4d¹⁰ 5s² 5p¹',
      discovery: '1863',
      gridRow: 5,
      gridColumn: 13,
      molecule: null
    },
    {
      number: 50,
      symbol: 'Sn',
      name: 'Tin',
      weight: 118.71,
      category: 'post-transition-metal',
      config: '[Kr] 4d¹⁰ 5s² 5p²',
      discovery: 'Ancient',
      gridRow: 5,
      gridColumn: 14,
      molecule: null
    },
    {
      number: 51,
      symbol: 'Sb',
      name: 'Antimony',
      weight: 121.76,
      category: 'metalloid',
      config: '[Kr] 4d¹⁰ 5s² 5p³',
      discovery: 'Ancient',
      gridRow: 5,
      gridColumn: 15,
      molecule: null
    },
    {
      number: 52,
      symbol: 'Te',
      name: 'Tellurium',
      weight: 127.60,
      category: 'metalloid',
      config: '[Kr] 4d¹⁰ 5s² 5p⁴',
      discovery: '1782',
      gridRow: 5,
      gridColumn: 16,
      molecule: null
    },
    {
      number: 53,
      symbol: 'I',
      name: 'Iodine',
      weight: 126.90,
      category: 'halogen',
      config: '[Kr] 4d¹⁰ 5s² 5p⁵',
      discovery: '1811',
      gridRow: 5,
      gridColumn: 17,
      molecule: null
    },
    {
      number: 54,
      symbol: 'Xe',
      name: 'Xenon',
      weight: 131.29,
      category: 'noble-gas',
      config: '[Kr] 4d¹⁰ 5s² 5p⁶',
      discovery: '1898',
      gridRow: 5,
      gridColumn: 18,
      molecule: null
    },
  
    // Period 6
    {
      number: 55,
      symbol: 'Cs',
      name: 'Caesium',
      weight: 132.91,
      category: 'alkali-metal',
      config: '[Xe] 6s¹',
      discovery: '1860',
      gridRow: 6,
      gridColumn: 1,
      molecule: null
    },
    {
      number: 56,
      symbol: 'Ba',
      name: 'Barium',
      weight: 137.33,
      category: 'alkaline-earth',
      config: '[Xe] 6s²',
      discovery: '1808',
      gridRow: 6,
      gridColumn: 2,
      molecule: null
    },
    {
      number: 57,
      symbol: 'La',
      name: 'Lanthanum',
      weight: 138.91,
      category: 'lanthanide',
      config: '[Xe] 5d¹ 6s²',
      discovery: '1839',
      gridRow: 6,
      gridColumn: 3,
      molecule: null
    },
    // Lanthanides (separated to row 8)
    {
      number: 58,
      symbol: 'Ce',
      name: 'Cerium',
      weight: 140.116,
      category: 'lanthanide',
      config: '[Xe] 4f¹ 5d¹ 6s²',
      discovery: '1803',
      gridRow: 8,
      gridColumn: 4,
      molecule: null
    },
    {
      number: 59,
      symbol: 'Pr',
      name: 'Praseodymium',
      weight: 140.908,
      category: 'lanthanide',
      config: '[Xe] 4f³ 6s²',
      discovery: '1885',
      gridRow: 8,
      gridColumn: 5,
      molecule: null
    },
    {
      number: 60,
      symbol: 'Nd',
      name: 'Neodymium',
      weight: 144.242,
      category: 'lanthanide',
      config: '[Xe] 4f⁴ 6s²',
      discovery: '1885',
      gridRow: 8,
      gridColumn: 6,
      molecule: null
    },
    {
      number: 61,
      symbol: 'Pm',
      name: 'Promethium',
      weight: 145,
      category: 'lanthanide',
      config: '[Xe] 4f⁵ 6s²',
      discovery: '1945',
      gridRow: 8,
      gridColumn: 7,
      molecule: null
    },
    {
      number: 62,
      symbol: 'Sm',
      name: 'Samarium',
      weight: 150.36,
      category: 'lanthanide',
      config: '[Xe] 4f⁶ 6s²',
      discovery: '1879',
      gridRow: 8,
      gridColumn: 8,
      molecule: null
    },
    {
      number: 63,
      symbol: 'Eu',
      name: 'Europium',
      weight: 151.964,
      category: 'lanthanide',
      config: '[Xe] 4f⁷ 6s²',
      discovery: '1901',
      gridRow: 8,
      gridColumn: 9,
      molecule: null
    },
    {
      number: 64,
      symbol: 'Gd',
      name: 'Gadolinium',
      weight: 157.25,
      category: 'lanthanide',
      config: '[Xe] 4f⁷ 5d¹ 6s²',
      discovery: '1880',
      gridRow: 8,
      gridColumn: 10,
      molecule: null
    },
    {
      number: 65,
      symbol: 'Tb',
      name: 'Terbium',
      weight: 158.925,
      category: 'lanthanide',
      config: '[Xe] 4f⁹ 6s²',
      discovery: '1843',
      gridRow: 8,
      gridColumn: 11,
      molecule: null
    },
    {
      number: 66,
      symbol: 'Dy',
      name: 'Dysprosium',
      weight: 162.500,
      category: 'lanthanide',
      config: '[Xe] 4f¹⁰ 6s²',
      discovery: '1886',
      gridRow: 8,
      gridColumn: 12,
      molecule: null
    },
    {
      number: 67,
      symbol: 'Ho',
      name: 'Holmium',
      weight: 164.930,
      category: 'lanthanide',
      config: '[Xe] 4f¹¹ 6s²',
      discovery: '1878',
      gridRow: 8,
      gridColumn: 13,
      molecule: null
    },
    {
      number: 68,
      symbol: 'Er',
      name: 'Erbium',
      weight: 167.259,
      category: 'lanthanide',
      config: '[Xe] 4f¹² 6s²',
      discovery: '1843',
      gridRow: 8,
      gridColumn: 14,
      molecule: null
    },
    {
      number: 69,
      symbol: 'Tm',
      name: 'Thulium',
      weight: 168.934,
      category: 'lanthanide',
      config: '[Xe] 4f¹³ 6s²',
      discovery: '1879',
      gridRow: 8,
      gridColumn: 15,
      molecule: null
    },
    {
      number: 70,
      symbol: 'Yb',
      name: 'Ytterbium',
      weight: 173.054,
      category: 'lanthanide',
      config: '[Xe] 4f¹⁴ 6s²',
      discovery: '1878',
      gridRow: 8,
      gridColumn: 16,
      molecule: null
    },
    {
      number: 71,
      symbol: 'Lu',
      name: 'Lutetium',
      weight: 174.966,
      category: 'lanthanide',
      config: '[Xe] 4f¹⁴ 5d¹ 6s²',
      discovery: '1907',
      gridRow: 8,
      gridColumn: 17,
      molecule: null
    },
    {
      number: 72,
      symbol: 'Hf',
      name: 'Hafnium',
      weight: 178.49,
      category: 'transition-metal',
      config: '[Xe] 4f¹⁴ 5d² 6s²',
      discovery: '1923',
      gridRow: 6,
      gridColumn: 4,
      molecule: null
    },
    {
      number: 73,
      symbol: 'Ta',
      name: 'Tantalum',
      weight: 180.948,
      category: 'transition-metal',
      config: '[Xe] 4f¹⁴ 5d³ 6s²',
      discovery: '1802',
      gridRow: 6,
      gridColumn: 5,
      molecule: null
    },
    {
      number: 74,
      symbol: 'W',
      name: 'Tungsten',
      weight: 183.84,
      category: 'transition-metal',
      config: '[Xe] 4f¹⁴ 5d⁴ 6s²',
      discovery: '1783',
      gridRow: 6,
      gridColumn: 6,
      molecule: null
    },
    {
      number: 75,
      symbol: 'Re',
      name: 'Rhenium',
      weight: 186.207,
      category: 'transition-metal',
      config: '[Xe] 4f¹⁴ 5d⁵ 6s²',
      discovery: '1925',
      gridRow: 6,
      gridColumn: 7,
      molecule: null
    },
    {
      number: 76,
      symbol: 'Os',
      name: 'Osmium',
      weight: 190.23,
      category: 'transition-metal',
      config: '[Xe] 4f¹⁴ 5d⁶ 6s²',
      discovery: '1803',
      gridRow: 6,
      gridColumn: 8,
      molecule: null
    },
    {
      number: 77,
      symbol: 'Ir',
      name: 'Iridium',
      weight: 192.217,
      category: 'transition-metal',
      config: '[Xe] 4f¹⁴ 5d⁷ 6s²',
      discovery: '1803',
      gridRow: 6,
      gridColumn: 9,
      molecule: null
    },
    {
      number: 78,
      symbol: 'Pt',
      name: 'Platinum',
      weight: 195.084,
      category: 'transition-metal',
      config: '[Xe] 4f¹⁴ 5d⁹ 6s¹',
      discovery: 'Ancient',
      gridRow: 6,
      gridColumn: 10,
      molecule: null
    },
    {
      number: 79,
      symbol: 'Au',
      name: 'Gold',
      weight: 196.967,
      category: 'transition-metal',
      config: '[Xe] 4f¹⁴ 5d¹⁰ 6s¹',
      discovery: 'Ancient',
      gridRow: 6,
      gridColumn: 11,
      molecule: null
    },
    {
      number: 80,
      symbol: 'Hg',
      name: 'Mercury',
      weight: 200.592,
      category: 'transition-metal',
      config: '[Xe] 4f¹⁴ 5d¹⁰ 6s²',
      discovery: 'Ancient',
      gridRow: 6,
      gridColumn: 12,
      molecule: null
    },
    {
      number: 81,
      symbol: 'Tl',
      name: 'Thallium',
      weight: 204.38,
      category: 'post-transition-metal',
      config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹',
      discovery: '1861',
      gridRow: 6,
      gridColumn: 13,
      molecule: null
    },
    {
      number: 82,
      symbol: 'Pb',
      name: 'Lead',
      weight: 207.2,
      category: 'post-transition-metal',
      config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²',
      discovery: 'Ancient',
      gridRow: 6,
      gridColumn: 14,
      molecule: null
    },
    {
      number: 83,
      symbol: 'Bi',
      name: 'Bismuth',
      weight: 208.980,
      category: 'post-transition-metal',
      config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³',
      discovery: 'Ancient',
      gridRow: 6,
      gridColumn: 15,
      molecule: null
    },
    {
      number: 84,
      symbol: 'Po',
      name: 'Polonium',
      weight: 209,
      category: 'metalloid',
      config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴',
      discovery: '1898',
      gridRow: 6,
      gridColumn: 16,
      molecule: null
    },
    {
      number: 85,
      symbol: 'At',
      name: 'Astatine',
      weight: 210,
      category: 'halogen',
      config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵',
      discovery: '1940',
      gridRow: 6,
      gridColumn: 17,
      molecule: null
    },
    {
      number: 86,
      symbol: 'Rn',
      name: 'Radon',
      weight: 222,
      category: 'noble-gas',
      config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶',
      discovery: '1900',
      gridRow: 6,
      gridColumn: 18,
      molecule: null
    },
  
    // Period 7
    {
      number: 87,
      symbol: 'Fr',
      name: 'Francium',
      weight: 223,
      category: 'alkali-metal',
      config: '[Rn] 7s¹',
      discovery: '1939',
      gridRow: 7,
      gridColumn: 1,
      molecule: null
    },
    {
      number: 88,
      symbol: 'Ra',
      name: 'Radium',
      weight: 226,
      category: 'alkaline-earth',
      config: '[Rn] 7s²',
      discovery: '1898',
      gridRow: 7,
      gridColumn: 2,
      molecule: null
    },
    {
      number: 89,
      symbol: 'Ac',
      name: 'Actinium',
      weight: 227,
      category: 'actinide',
      config: '[Rn] 6d¹ 7s²',
      discovery: '1899',
      gridRow: 7,
      gridColumn: 3,
      molecule: null
    },
    // In the main table, Ac remains at (7,3). The remaining actinides are drawn in a separate row:
    {
      number: 90,
      symbol: 'Th',
      name: 'Thorium',
      weight: 232.038,
      category: 'actinide',
      config: '[Rn] 6d² 7s²',
      discovery: '1828',
      gridRow: 9,
      gridColumn: 4,
      molecule: null
    },
    {
      number: 91,
      symbol: 'Pa',
      name: 'Protactinium',
      weight: 231.036,
      category: 'actinide',
      config: '[Rn] 5f² 6d¹ 7s²',
      discovery: '1913',
      gridRow: 9,
      gridColumn: 5,
      molecule: null
    },
    {
      number: 92,
      symbol: 'U',
      name: 'Uranium',
      weight: 238.029,
      category: 'actinide',
      config: '[Rn] 5f³ 6d¹ 7s²',
      discovery: '1789',
      gridRow: 9,
      gridColumn: 6,
      molecule: null
    },
    {
      number: 93,
      symbol: 'Np',
      name: 'Neptunium',
      weight: 237,
      category: 'actinide',
      config: '[Rn] 5f⁴ 6d¹ 7s²',
      discovery: '1940',
      gridRow: 9,
      gridColumn: 7,
      molecule: null
    },
    {
      number: 94,
      symbol: 'Pu',
      name: 'Plutonium',
      weight: 244,
      category: 'actinide',
      config: '[Rn] 5f⁶ 7s²',
      discovery: '1940',
      gridRow: 9,
      gridColumn: 8,
      molecule: null
    },
    {
      number: 95,
      symbol: 'Am',
      name: 'Americium',
      weight: 243,
      category: 'actinide',
      config: '[Rn] 5f⁷ 7s²',
      discovery: '1944',
      gridRow: 9,
      gridColumn: 9,
      molecule: null
    },
    {
      number: 96,
      symbol: 'Cm',
      name: 'Curium',
      weight: 247,
      category: 'actinide',
      config: '[Rn] 5f⁷ 6d¹ 7s²',
      discovery: '1944',
      gridRow: 9,
      gridColumn: 10,
      molecule: null
    },
    {
      number: 97,
      symbol: 'Bk',
      name: 'Berkelium',
      weight: 247,
      category: 'actinide',
      config: '[Rn] 5f⁹ 7s²',
      discovery: '1949',
      gridRow: 9,
      gridColumn: 11,
      molecule: null
    },
    {
      number: 98,
      symbol: 'Cf',
      name: 'Californium',
      weight: 251,
      category: 'actinide',
      config: '[Rn] 5f¹⁰ 7s²',
      discovery: '1950',
      gridRow: 9,
      gridColumn: 12,
      molecule: null
    },
    {
      number: 99,
      symbol: 'Es',
      name: 'Einsteinium',
      weight: 252,
      category: 'actinide',
      config: '[Rn] 5f¹¹ 7s²',
      discovery: '1952',
      gridRow: 9,
      gridColumn: 13,
      molecule: null
    },
    {
      number: 100,
      symbol: 'Fm',
      name: 'Fermium',
      weight: 257,
      category: 'actinide',
      config: '[Rn] 5f¹² 7s²',
      discovery: '1952',
      gridRow: 9,
      gridColumn: 14,
      molecule: null
    },
    {
      number: 101,
      symbol: 'Md',
      name: 'Mendelevium',
      weight: 258,
      category: 'actinide',
      config: '[Rn] 5f¹³ 7s²',
      discovery: '1955',
      gridRow: 9,
      gridColumn: 15,
      molecule: null
    },
    {
      number: 102,
      symbol: 'No',
      name: 'Nobelium',
      weight: 259,
      category: 'actinide',
      config: '[Rn] 5f¹⁴ 7s²',
      discovery: '1958',
      gridRow: 9,
      gridColumn: 16,
      molecule: null
    },
    {
      number: 103,
      symbol: 'Lr',
      name: 'Lawrencium',
      weight: 266,
      category: 'actinide',
      config: '[Rn] 5f¹⁴ 7s² 7p¹',
      discovery: '1961',
      gridRow: 9,
      gridColumn: 17,
      molecule: null
    },
    // Back to main Period 7 (row 7)
    {
      number: 104,
      symbol: 'Rf',
      name: 'Rutherfordium',
      weight: 267,
      category: 'transition-metal',
      config: '[Rn] 5f¹⁴ 6d² 7s²',
      discovery: '1969',
      gridRow: 7,
      gridColumn: 4,
      molecule: null
    },
    {
      number: 105,
      symbol: 'Db',
      name: 'Dubnium',
      weight: 268,
      category: 'transition-metal',
      config: '[Rn] 5f¹⁴ 6d³ 7s²',
      discovery: '1968',
      gridRow: 7,
      gridColumn: 5,
      molecule: null
    },
    {
      number: 106,
      symbol: 'Sg',
      name: 'Seaborgium',
      weight: 271,
      category: 'transition-metal',
      config: '[Rn] 5f¹⁴ 6d⁴ 7s²',
      discovery: '1974',
      gridRow: 7,
      gridColumn: 6,
      molecule: null
    },
    {
      number: 107,
      symbol: 'Bh',
      name: 'Bohrium',
      weight: 270,
      category: 'transition-metal',
      config: '[Rn] 5f¹⁴ 6d⁵ 7s²',
      discovery: '1981',
      gridRow: 7,
      gridColumn: 7,
      molecule: null
    },
    {
      number: 108,
      symbol: 'Hs',
      name: 'Hassium',
      weight: 277,
      category: 'transition-metal',
      config: '[Rn] 5f¹⁴ 6d⁶ 7s²',
      discovery: '1984',
      gridRow: 7,
      gridColumn: 8,
      molecule: null
    },
    {
      number: 109,
      symbol: 'Mt',
      name: 'Meitnerium',
      weight: 278,
      category: 'transition-metal',
      config: '[Rn] 5f¹⁴ 6d⁷ 7s²',
      discovery: '1982',
      gridRow: 7,
      gridColumn: 9,
      molecule: null
    },
    {
      number: 110,
      symbol: 'Ds',
      name: 'Darmstadtium',
      weight: 281,
      category: 'transition-metal',
      config: '[Rn] 5f¹⁴ 6d⁸ 7s²',
      discovery: '1994',
      gridRow: 7,
      gridColumn: 10,
      molecule: null
    },
    {
      number: 111,
      symbol: 'Rg',
      name: 'Roentgenium',
      weight: 282,
      category: 'transition-metal',
      config: '[Rn] 5f¹⁴ 6d⁹ 7s²',
      discovery: '1994',
      gridRow: 7,
      gridColumn: 11,
      molecule: null
    },
    {
      number: 112,
      symbol: 'Cn',
      name: 'Copernicium',
      weight: 285,
      category: 'transition-metal',
      config: '[Rn] 5f¹⁴ 6d¹⁰ 7s²',
      discovery: '1996',
      gridRow: 7,
      gridColumn: 12,
      molecule: null
    },
    {
      number: 113,
      symbol: 'Nh',
      name: 'Nihonium',
      weight: 286,
      category: 'post-transition-metal',
      config: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹',
      discovery: '2004',
      gridRow: 7,
      gridColumn: 13,
      molecule: null
    },
    {
      number: 114,
      symbol: 'Fl',
      name: 'Flerovium',
      weight: 289,
      category: 'post-transition-metal',
      config: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²',
      discovery: '1999',
      gridRow: 7,
      gridColumn: 14,
      molecule: null
    },
    {
      number: 115,
      symbol: 'Mc',
      name: 'Moscovium',
      weight: 290,
      category: 'post-transition-metal',
      config: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³',
      discovery: '2003',
      gridRow: 7,
      gridColumn: 15,
      molecule: null
    },
    {
      number: 116,
      symbol: 'Lv',
      name: 'Livermorium',
      weight: 293,
      category: 'post-transition-metal',
      config: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴',
      discovery: '2000',
      gridRow: 7,
      gridColumn: 16,
      molecule: null
    },
    {
      number: 117,
      symbol: 'Ts',
      name: 'Tennessine',
      weight: 294,
      category: 'halogen',
      config: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵',
      discovery: '2010',
      gridRow: 7,
      gridColumn: 17,
      molecule: null
    },
    {
      number: 118,
      symbol: 'Og',
      name: 'Oganesson',
      weight: 294,
      category: 'noble-gas',
      config: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶',
      discovery: '2006',
      gridRow: 7,
      gridColumn: 18,
      molecule: null
    }
  ];
  
  console.log(elements);
  

const categories = {
    // Nonmetals / other-nonmetal
    'H': 'other-nonmetal',
    'C': 'other-nonmetal',
    'N': 'other-nonmetal',
    'O': 'other-nonmetal',
    'P': 'other-nonmetal',
    'S': 'other-nonmetal',
    'Se': 'other-nonmetal',
  
    // Noble gases
    'He': 'noble-gas',
    'Ne': 'noble-gas',
    'Ar': 'noble-gas',
    'Kr': 'noble-gas',
    'Xe': 'noble-gas',
    'Rn': 'noble-gas',
    'Og': 'noble-gas',
  
    // Alkali metals
    'Li': 'alkali-metal',
    'Na': 'alkali-metal',
    'K': 'alkali-metal',
    'Rb': 'alkali-metal',
    'Cs': 'alkali-metal',
    'Fr': 'alkali-metal',
  
    // Alkaline earth metals
    'Be': 'alkaline-earth',
    'Mg': 'alkaline-earth',
    'Ca': 'alkaline-earth',
    'Sr': 'alkaline-earth',
    'Ba': 'alkaline-earth',
    'Ra': 'alkaline-earth',
  
    // Transition metals
    'Sc': 'transition-metal',
    'Ti': 'transition-metal',
    'V': 'transition-metal',
    'Cr': 'transition-metal',
    'Mn': 'transition-metal',
    'Fe': 'transition-metal',
    'Co': 'transition-metal',
    'Ni': 'transition-metal',
    'Cu': 'transition-metal',
    'Zn': 'transition-metal',
    'Y': 'transition-metal',
    'Zr': 'transition-metal',
    'Nb': 'transition-metal',
    'Mo': 'transition-metal',
    'Tc': 'transition-metal',
    'Ru': 'transition-metal',
    'Rh': 'transition-metal',
    'Pd': 'transition-metal',
    'Ag': 'transition-metal',
    'Cd': 'transition-metal',
    'Hf': 'transition-metal',
    'Ta': 'transition-metal',
    'W': 'transition-metal',
    'Re': 'transition-metal',
    'Os': 'transition-metal',
    'Ir': 'transition-metal',
    'Pt': 'transition-metal',
    'Au': 'transition-metal',
    'Hg': 'transition-metal',
    'Rf': 'transition-metal',
    'Db': 'transition-metal',
    'Sg': 'transition-metal',
    'Bh': 'transition-metal',
    'Hs': 'transition-metal',
    'Mt': 'transition-metal',
    'Ds': 'transition-metal',
    'Rg': 'transition-metal',
    'Cn': 'transition-metal',
  
    // Post-transition metals
    'Al': 'post-transition',
    'Ga': 'post-transition',
    'In': 'post-transition',
    'Sn': 'post-transition',
    'Tl': 'post-transition',
    'Pb': 'post-transition',
    'Bi': 'post-transition',
    'Nh': 'post-transition',
    'Fl': 'post-transition',
    'Mc': 'post-transition',
    'Lv': 'post-transition',
  
    // Metalloids
    'B': 'metalloid',
    'Si': 'metalloid',
    'Ge': 'metalloid',
    'As': 'metalloid',
    'Sb': 'metalloid',
    'Te': 'metalloid',
    'Po': 'metalloid',
  
    // Halogens
    'F': 'halogen',
    'Cl': 'halogen',
    'Br': 'halogen',
    'I': 'halogen',
    'At': 'halogen',
    'Ts': 'halogen',
  
    // Lanthanides
    'La': 'lanthanide',
    'Ce': 'lanthanide',
    'Pr': 'lanthanide',
    'Nd': 'lanthanide',
    'Pm': 'lanthanide',
    'Sm': 'lanthanide',
    'Eu': 'lanthanide',
    'Gd': 'lanthanide',
    'Tb': 'lanthanide',
    'Dy': 'lanthanide',
    'Ho': 'lanthanide',
    'Er': 'lanthanide',
    'Tm': 'lanthanide',
    'Yb': 'lanthanide',
    'Lu': 'lanthanide',
  
    // Actinides
    'Ac': 'actinide',
    'Th': 'actinide',
    'Pa': 'actinide',
    'U': 'actinide',
    'Np': 'actinide',
    'Pu': 'actinide',
    'Am': 'actinide',
    'Cm': 'actinide',
    'Bk': 'actinide',
    'Cf': 'actinide',
    'Es': 'actinide',
    'Fm': 'actinide',
    'Md': 'actinide',
    'No': 'actinide',
    'Lr': 'actinide'
  };
  
  console.log(categories);
  