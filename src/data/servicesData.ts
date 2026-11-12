import { ServiceItem, MenuItem } from '../types';

export const BUSINESS_INFO = {
  name: 'PKR Online Services',
  tagline: 'Your Trusted Partner for Online Services, Loans, Insurance, E-Commerce & Food.',
  phone: '9043151680',
  whatsapp: '9043151680',
  email: 'pkronlineservice@gmail.com',
  address: 'Main Road, Kundrathur, Chennai, Tamil Nadu - 600069',
  city: 'Kundrathur, Chennai',
  state: 'Tamil Nadu',
  timing: 'Mon - Sat: 9:00 AM – 8:30 PM | Sun: 10:00 AM – 4:00 PM',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kundrathur+Chennai+Tamil+Nadu'
};

export const LOAN_SERVICES: ServiceItem[] = [
  {
    id: 'personal-loan',
    title: 'Personal Loan',
    description: 'Quick personal loans with minimal documentation and attractive interest rates for emergency needs, medical expenses, weddings, or personal plans.',
    features: ['Up to ₹25 Lakhs', 'Instant in-principle approval', 'Tenure 12 to 60 months', 'Low processing fees'],
    category: 'loans',
    ctaText: 'Apply Now',
    badge: 'Fast Disbursal'
  },
  {
    id: 'business-loan',
    title: 'Business Loan',
    description: 'Collateral-free and secured business loans to expand operations, stock inventory, purchase equipment, or manage seasonal cash flows.',
    features: ['Collateral-free options', 'Working capital & term loans', 'Flexible repayment', 'Customized for small enterprises'],
    category: 'loans',
    ctaText: 'Apply Now',
    badge: 'For Traders & MSMEs'
  },
  {
    id: 'home-loan',
    title: 'Home Loan',
    description: 'Fulfill your dream of owning a home in Chennai and suburbs with maximum loan-to-value ratio, transparent fees, and doorstep guidance.',
    features: ['Interest rates from 8.40%*', 'Up to 30 years repayment', 'Assistance for plots & villas', 'PMAY subsidy guidance'],
    category: 'loans',
    ctaText: 'Apply Now'
  },
  {
    id: 'home-loan-balance-transfer',
    title: 'Home Loan Balance Transfer',
    description: 'Transfer your high-interest existing home loan to partner banks with lower interest rates and get top-up loan eligibility.',
    features: ['Save thousands on EMIs', 'High top-up loan facility', 'Zero hassle documentation', 'End-to-end liaison support'],
    category: 'loans',
    ctaText: 'Apply Now',
    badge: 'Save on EMI'
  },
  {
    id: 'mortgage-loan',
    title: 'Mortgage Loan (LAP)',
    description: 'Loan Against Property for commercial or residential property owners to unlock maximum funds for large personal or business investments.',
    features: ['Up to 70% property valuation', 'Longer repayment tenure', 'Retain property ownership', 'Multi-bank comparisons'],
    category: 'loans',
    ctaText: 'Apply Now'
  },
  {
    id: 'vehicle-loan',
    title: 'Vehicle Loan',
    description: 'Affordable two-wheeler and commercial/private car financing with customized EMI structures and fast approval.',
    features: ['New & used car loans', 'Two-wheeler easy financing', 'Up to 90% on-road funding', 'Quick sanction in 48 hours'],
    category: 'loans',
    ctaText: 'Apply Now'
  },
  {
    id: 'msme-loan',
    title: 'MSME Loan',
    description: 'Government scheme loans (CGTMSE, MUDRA) and structured credit lines designed specifically for manufacturing and service MSMEs in Kundrathur & Chennai.',
    features: ['Mudra Yojana assistance', 'Machinery & equipment purchase', 'Competitive rates', 'GST-linked credit assessment'],
    category: 'loans',
    ctaText: 'Apply Now',
    badge: 'Govt Schemes'
  },
  {
    id: 'loan-eligibility-enquiry',
    title: 'Loan Eligibility Enquiry',
    description: 'Free credit check and eligibility calculation across leading private, public banks and NBFCs before you apply, protecting your CIBIL score.',
    features: ['Free multi-bank check', 'Zero impact on CIBIL', 'Eligibility optimization tips', 'Expert advice from advisor'],
    category: 'loans',
    ctaText: 'Check Eligibility',
    badge: 'Free Consultation'
  }
];

export const INSURANCE_SERVICES: ServiceItem[] = [
  {
    id: 'life-insurance',
    title: 'Life Insurance',
    description: 'Term life plans, child education plans, and guaranteed return endowment policies to secure your family\'s financial future.',
    features: ['High sum assured at low premium', 'Critical illness rider support', 'Tax benefits under Sec 80C & 10(10D)', 'Leading insurer comparisons'],
    category: 'insurance',
    ctaText: 'Get Insurance Quote'
  },
  {
    id: 'health-insurance',
    title: 'Health Insurance',
    description: 'Comprehensive family floater and individual health covers with cashless treatment across top Chennai hospitals.',
    features: ['Cashless in 10,000+ hospitals', 'No room-rent sublimits options', 'Pre & post hospitalization cover', 'Instant digital policy'],
    category: 'insurance',
    ctaText: 'Get Insurance Quote',
    badge: 'Cashless Network'
  },
  {
    id: 'vehicle-insurance',
    title: 'Vehicle Insurance',
    description: 'Comprehensive and third-party motor insurance coverage with zero depreciation, engine protect, and 24x7 roadside assistance.',
    features: ['Instant policy generation', 'Cashless garage claims', 'No Claim Bonus (NCB) transfer', 'Zero inspection renewals'],
    category: 'insurance',
    ctaText: 'Get Insurance Quote'
  },
  {
    id: 'two-wheeler-insurance',
    title: 'Two-Wheeler Insurance',
    description: 'Fast and affordable bike/scooter insurance renewal within 5 minutes. Protection against accidents, theft, and third-party liabilities.',
    features: ['Starts from just ₹538/yr*', 'Instant PDF policy on WhatsApp', 'Long term 1-3 year plans', 'Zero documentation needed'],
    category: 'insurance',
    ctaText: 'Get Insurance Quote',
    badge: '5-Min Issuance'
  },
  {
    id: 'car-insurance',
    title: 'Car Insurance',
    description: 'Shield your four-wheeler with zero-depreciation, return-to-invoice, roadside assistance, and seamless claim support in Tamil Nadu.',
    features: ['Zero Dep & Key Replacement', 'Doorstep claim assistance', 'Up to 50% NCB discount', 'Fast settlement support'],
    category: 'insurance',
    ctaText: 'Get Insurance Quote'
  },
  {
    id: 'business-insurance',
    title: 'Business Insurance',
    description: 'Shopkeeper insurance, fire and burglary policies, marine transit cover, and employee group health insurance for your company.',
    features: ['Fire & peril protection', 'Stock & machinery cover', 'Public liability & transit', 'Customized commercial quotes'],
    category: 'insurance',
    ctaText: 'Get Insurance Quote'
  }
];

export const ECOMMERCE_SERVICES: ServiceItem[] = [
  {
    id: 'flipkart-seller-registration',
    title: 'Flipkart Seller Registration Assistance',
    description: 'Complete hands-on assistance to register and verify your seller account on Flipkart, including brand approval and category authorization.',
    features: ['GST & bank verification', 'Category un-gating', 'Brand authorization filing', 'FBF / Flipkart fulfillment onboarding'],
    category: 'ecommerce',
    ctaText: 'Start Your Online Business',
    badge: 'Turnkey Setup'
  },
  {
    id: 'amazon-seller-registration',
    title: 'Amazon Seller Registration Assistance',
    description: 'Professional setup for Amazon India marketplace. We handle company profile, tax settings, shipping templates, and Amazon FBA enrollment.',
    features: ['Amazon Seller Central setup', 'Brand Registry guidance', 'GTIN exemption assistance', 'Shipping & Easy Ship config'],
    category: 'ecommerce',
    ctaText: 'Start Your Online Business'
  },
  {
    id: 'product-listing',
    title: 'Product Listing',
    description: 'SEO-optimized product catalog creation with high-converting titles, bullet points, backend keywords, and variation mapping.',
    features: ['Keyword research for ranking', 'Single & bulk parent-child listings', 'Category attributes compliance', 'Competitor keyword targeting'],
    category: 'ecommerce',
    ctaText: 'Start Your Online Business'
  },
  {
    id: 'product-image-editing',
    title: 'Product Image Editing',
    description: 'Marketplace-compliant white background editing, shadow enhancement, infographic badges, and lifestyle dimensions for high clicks.',
    features: ['Pure white background (RGB 255)', 'Infographics & size charts', 'High-res zoom compatibility', 'Amazon/Flipkart guidelines ready'],
    category: 'ecommerce',
    ctaText: 'Start Your Online Business'
  },
  {
    id: 'online-business-setup',
    title: 'Online Business Setup',
    description: 'End-to-end guidance for entrepreneurs in Kundrathur & Chennai to launch direct-to-consumer stores, digital payment gateways, and social selling.',
    features: ['GST / MSME Udyam guidance', 'Payment gateway integration', 'Courier partner integration', 'Packaging & barcoding support'],
    category: 'ecommerce',
    ctaText: 'Start Your Online Business',
    badge: 'Full Launch'
  },
  {
    id: 'seller-account-support',
    title: 'Seller Account Support',
    description: 'Ongoing seller management, order processing support, buyer message handling, return management, and account health monitoring.',
    features: ['Maintain 100% account health', 'Claims & SAFE-T dispute filing', 'Inventory replenishment alerts', 'Prevent suspension & penalties'],
    category: 'ecommerce',
    ctaText: 'Start Your Online Business'
  },
  {
    id: 'digital-marketing-support',
    title: 'Digital Marketing Support',
    description: 'PPC advertising management on Amazon Ads, Flipkart Ads, Meta, and Google to drive qualified buyers and maximize ROI.',
    features: ['Amazon Sponsored Products/Brands', 'Flipkart PLA & PCA ads', 'Targeted local Chennai marketing', 'ACOS optimization strategies'],
    category: 'ecommerce',
    ctaText: 'Start Your Online Business',
    badge: 'Boost Sales'
  }
];

export const CLOUD_KITCHEN_MENU: MenuItem[] = [
  {
    id: 'ck-bf-1',
    name: 'Idli & Sambar Plate (4 Pcs)',
    tamilName: 'இட்லி சாம்பார்',
    category: 'breakfast',
    description: 'Soft, fluffy steamed rice cakes served with aromatic Madras drumstick sambar and fresh coconut chutney.',
    price: '₹50',
    timing: '7:00 AM – 11:00 AM',
    isSpecial: true
  },
  {
    id: 'ck-bf-2',
    name: 'Ghee Ven Pongal with Medu Vada',
    tamilName: 'நெய் பொங்கல் & வடை',
    category: 'breakfast',
    description: 'Rich, melt-in-mouth rice & lentil pongal tempered with pure cow ghee, black pepper, cashews, served with crispy medu vada.',
    price: '₹70',
    timing: '7:00 AM – 11:00 AM',
    isSpecial: true
  },
  {
    id: 'ck-bf-3',
    name: 'Crispy Plain / Masala Dosa',
    tamilName: 'மசால் தோசை',
    category: 'breads',
    description: 'Golden fermented batter dosa roasted with gingelly oil/butter, served with spiced potato masala and trio chutneys.',
    price: '₹60',
    timing: 'All Day'
  },
  {
    id: 'ck-bf-4',
    name: 'Soft Whole Wheat Chapati (3 Pcs)',
    tamilName: 'சப்பாத்தி & குருமா',
    category: 'breads',
    description: '100% wholesome chakki fresh atta soft chapatis served with homestyle mixed vegetable kurma or dal.',
    price: '₹60',
    timing: 'Lunch & Dinner'
  },
  {
    id: 'ck-lunch-1',
    name: 'Homestyle South Indian Lunch Meals',
    tamilName: 'தென்னிந்திய மதிய உணவு',
    category: 'lunch',
    description: 'Ponni boiled rice, arachuvitta sambar, traditional rasam, vegetable poriyal, kootu, appalam, curd, and homemade pickle.',
    price: '₹100',
    timing: '12:00 PM – 3:30 PM',
    isSpecial: true
  },
  {
    id: 'ck-rice-1',
    name: 'Special Sambar Rice & Potato Fry',
    tamilName: 'சாம்பார் சாதம் & உருளை வறுவல்',
    category: 'rice',
    description: 'Aromatic bisibele/sambar sadham cooked with ghee and seasonal country vegetables, paired with crispy roasted potato fry.',
    price: '₹80',
    timing: 'Lunch'
  },
  {
    id: 'ck-rice-2',
    name: 'Tangy Lemon Rice / Curd Rice',
    tamilName: 'எலுமிச்சை / தயிர் சாதம்',
    category: 'rice',
    description: 'Tempered lemon rice with roasted peanuts, or creamy South Indian curd rice with pomegranate and mustard tadka.',
    price: '₹60',
    timing: 'Lunch'
  },
  {
    id: 'ck-dinner-1',
    name: 'Dinner Tiffin Box Combo',
    tamilName: 'இரவு டிபன் காம்போ',
    category: 'dinner',
    description: '2 Soft Idlis + 1 Chapati with Kurma + Mini Onion Uttapam with two varieties of chutneys.',
    price: '₹90',
    timing: '6:30 PM – 10:00 PM',
    isSpecial: true
  },
  {
    id: 'ck-juice-1',
    name: 'Cold Pressed Fresh Fruit Juices',
    tamilName: 'பழச்சாறுகள்',
    category: 'juices',
    description: '100% pure fresh juices made to order: Orange, Sweet Lime (Mosambi), Pomegranate, Watermelon, or Lemon Mint cooler.',
    price: '₹50 – ₹80',
    timing: 'All Day'
  },
  {
    id: 'ck-healthy-1',
    name: 'Traditional Health Mix / Sathu Maavu Kanji',
    tamilName: 'சத்து மாவு கஞ்சி',
    category: 'healthy',
    description: 'Nutritious multigrain mix of sprouted ragi, millets, pulses, and nuts. Cooked fresh with country jaggery/milk or buttermilk.',
    price: '₹40',
    timing: 'Morning & Evening'
  },
  {
    id: 'ck-pickle-1',
    name: 'Authentic Homemade Pickles (250g Jar)',
    tamilName: 'வீட்டு ஊறுகாய்',
    category: 'pickles',
    description: 'Traditional grandma recipe pickles made with cold-pressed sesame oil: Avakkai Mango, Lemon, Gongura, and Garlic.',
    price: '₹120',
    timing: 'Available Daily',
    isSpecial: true
  },
  {
    id: 'ck-pickle-2',
    name: 'Nutritious Idli Podi / Paruppu Podi (200g)',
    tamilName: 'இட்லி பொடி / பருப்பு பொடி',
    category: 'pickles',
    description: 'Freshly roasted lentils, red chilies, garlic, and curry leaves ground to perfection. Ideal with gingelly oil or hot ghee.',
    price: '₹110',
    timing: 'Available Daily'
  }
];

export const TRUST_METRICS = [
  { value: '1,200+', label: 'Satisfied Customers', sub: 'In Kundrathur & Chennai' },
  { value: '₹15+ Cr', label: 'Loan Sanctions Assisted', sub: 'Across 20+ Banks & NBFCs' },
  { value: '150+', label: 'Sellers Onboarded', sub: 'On Amazon & Flipkart' },
  { value: '100%', label: 'Hygiene & Quality', sub: 'Fresh PKR Cloud Kitchen' }
];

export const TESTIMONIALS = [
  {
    name: 'R. Rajesh Kannan',
    role: 'Homeowner, Kundrathur',
    text: 'PKR Online Services helped me transfer my home loan from a private NBFC to a nationalised bank at a much lower interest rate. Their local team in Kundrathur handled all the paperwork seamlessly.',
    service: 'Home Loan Balance Transfer'
  },
  {
    name: 'Deepa Lakshmi',
    role: 'Textile Entrepreneur, Chennai',
    text: 'Starting my online store on Amazon and Flipkart felt overwhelming until I consulted PKR Online Services. They helped me with GST registration, catalog photography, and first sales within 2 weeks!',
    service: 'E-Commerce Seller Setup'
  },
  {
    name: 'K. Senthil Kumar',
    role: 'Event Organizer, Mangadu',
    text: 'We regularly order breakfast and lunch meal packets from PKR Cloud Kitchen for family functions and meetings. Hot, hygienic, homestyle taste, and always on time at our doorstep.',
    service: 'PKR Cloud Kitchen'
  }
];
