export type ProductVariant = {
  name: string;
  price: string;
};

export const products = [
  {
    id: 'versatile',
    name: 'VERSATILE',
    price: 650.00,
    image: 'https://shop.mabati.com/media/catalog/product/v/e/versatile_m_in_sm.png?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700',
    description: 'High-quality versatile roofing sheets, suitable for various architectural styles. Offers a modern and aesthetic appeal.',
    features: [
      'Durable and long-lasting',
      'Available in multiple gauges',
      'Weather resistant',
      'Modern aesthetic',
    ],
    priceVariants: [
      { name: 'Versatile gauge 28', price: 'KSh 650 / meter' },
      { name: 'Versatile gauge 30', price: 'KSh 555 / meter' }
    ],
    availableColors: 'Multiple colors available',
    specifications: {
      gaugeOptions: ['28', '30'],
      finishOptions: ['Multiple finishes available']
    }
  },
  {
    id: 'box-profile',
    name: 'BOX PROFILE',
    price: 530.00,
    image: 'https://www.wegogroup.co.ke/wp-content/uploads/2023/10/Box-Profile-914-Charcoal-Grey-Matt-1.jpg',
    description: 'Economical and strong box profile sheets, ideal for roofing and cladding in residential and commercial buildings.',
    features: [
      'Economical choice',
      'Strong and rigid profile',
      'Suitable for roofing and cladding',
      'Available in different gauges',
    ],
    priceVariants: [
      { name: 'Box profile gauge 28', price: 'KSh 530 / meter' },
      { name: 'Box profile gauge 30', price: 'KSh 470 / meter' }
    ],
    availableColors: 'Multiple colors available',
    specifications: {
      gaugeOptions: ['28', '30'],
      finishOptions: ['Multiple finishes available']
    }
  },
  {
    id: 'romantile',
    name: 'ROMANTILE',
    price: 640.00,
    image: 'https://www.roofingmabati.co.ke/images/Bamboo2.jpg',
    description: 'Elegant Romantile roofing sheets that mimic the classic look of Roman clay tiles, offering beauty without the heavy weight.',
    features: [
      'Classic clay tile appearance',
      'Lightweight yet durable',
      'Enhances building aesthetics',
      'Available in different gauges',
    ],
    priceVariants: [
      { name: 'Romantile gauge 28', price: 'KSh 640 / meter' },
      { name: 'Romantile gauge 30', price: 'KSh 550 / meter' }
    ],
    availableColors: 'Multiple colors available',
    specifications: {
      gaugeOptions: ['28', '30'],
      finishOptions: ['Multiple finishes available']
    }
  },
  {
    id: 'corrugated-iron-sheet',
    name: 'CORRUGATED IRON SHEET',
    price: 440.00,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRW7rFCcm_5dm8wA7UPS6TKXeAXPOr-ulVWw&s',
    description: 'Traditional and cost-effective corrugated iron sheets, widely used for various roofing and cladding applications.',
    features: [
      'Cost-effective solution',
      'Widely used and versatile',
      'Easy to install',
      'Available in colored options',
    ],
    priceVariants: [
      { name: 'Corrugated iron sheet gauge 28', price: 'KSh 440 / meter' },
      { name: 'Corrugated iron sheet gauge 30', price: 'KSh 390 / meter' }
    ],
    availableColors: 'Multiple colors available',
    specifications: {
      gaugeOptions: ['28', '30'],
      finishOptions: ['Multiple finishes available']
    }
  },
  {
    id: 'ordinary-mabati',
    name: 'ORDINARY MABATI',
    price: 320.00,
    image: 'https://goldenroofmabati.co.ke/wp-content/uploads/2024/11/WhatsApp-Image-2024-11-15-at-15.02.24_8012efc6.jpg',
    description: 'Standard galvanized roofing sheets, offering a basic and durable roofing solution at an affordable price.',
    features: [
      'Most affordable option',
      'Durable galvanized steel',
      'Basic and functional',
      'Suitable for various utility purposes',
    ],
    priceVariants: [
      { name: 'Ordinary mabati gauge 30', price: 'KSh 320 / meter' },
      { name: 'Ordinary mabati gauge 28', price: 'KSh 345 / meter' }
    ],
    availableColors: 'Galvanized finish only',
    specifications: {
      gaugeOptions: ['28', '30'],
      finishOptions: ['GALVANIZED']
    }
  },
  {
    id: 'orientile-mabati',
    name: 'ORIENTILE MABATI',
    price: 720.00,
    image: 'https://www.wegogroup.co.ke/wp-content/uploads/2023/10/Star-Tile-Maroon-Matt-1.jpg',
    description: 'Premium Orientile mabati sheets with a distinctive design, offering a unique and stylish roofing solution.',
    features: [
      'Unique and stylish design',
      'Premium roofing profile',
      'Enhances property value',
      'Durable and weather-resistant',
    ],
    priceVariants: [
      { name: 'Orientile mabati gauge 28', price: 'KSh 720 / meter' },
      { name: 'Orientile mabati gauge 30', price: 'KSh 655 / meter' }
    ],
    availableColors: 'Multiple colors available',
    specifications: {
      gaugeOptions: ['28', '30'],
      finishOptions: ['Multiple finishes available']
    }
  },
  {
    id: 'reject-box-profile',
    name: 'REJECT BOX PROFILE',
    price: 230.00,
    image: 'https://assets.zurini.co.ke/construction-tools-materials/373_16757891442.jpg',
    description: 'Affordable reject grade box profile sheets, gauge 30.',
    features: [
      'Budget-friendly',
      'Gauge 30',
      'Suitable for temporary structures',
      'Lightweight',
    ],
    priceVariants: [
      { name: 'Reject mabati gauge 30 box profile', price: 'KSh 230 / meter' }
    ],
    availableColors: 'No color options',
    specifications: {
      gaugeOptions: ['30'],
      finishOptions: ['GALVANIZED']
    }
  },
  {
    id: 'reject-ordinary',
    name: 'REJECT ORDINARY',
    price: 170.00,
    image: 'https://assets.zurini.co.ke/construction-tools-materials/373_16757891442.jpg',
    description: 'Affordable reject grade ordinary corrugated sheets, gauge 30.',
    features: [
      'Budget-friendly',
      'Gauge 30',
      'Ideal for utility structures',
      'Lightweight',
    ],
    priceVariants: [
      { name: 'Reject mabati gauge 30 ordinary', price: 'KSh 170 / meter' }
    ],
    availableColors: 'No color options',
    specifications: {
      gaugeOptions: ['30'],
      finishOptions: ['GALVANIZED']
    }
  },
  {
    id: 'roofing-accessories',
    name: 'ROOFING ACCESSORIES',
    price: 150.00,
    image: 'https://www.royalmabati.com/cdn/shop/files/roofing-nails.png?v=1718190051&width=1445',
    description: 'Essential roofing accessories including roofing nails, ridges, and valleys to complete your roofing installation.',
    features: [
      'High-quality accessories',
      'Durable and reliable',
      'Compatible with all Ruiru Mabati sheets',
      'Competitive pricing'
    ],
    priceVariants: [
      { name: 'Roofing nails (per kg)', price: 'KSh 150' },
      { name: 'Ridge (each)', price: 'KSh 540' },
      { name: 'Valley (each)', price: 'KSh 450' }
    ],
    availableColors: 'Galvanized finish',
    specifications: {
      gaugeOptions: ['N/A'],
      finishOptions: ['GALVANIZED']
    }
  }
];