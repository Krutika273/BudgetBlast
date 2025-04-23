// Products Data Module

// Helper function to generate a product image from brand name
function generateProductImage(brand) {
    // In a real app, we would use actual product images
    // For this demo, we'll generate a colored rectangle with the brand name
    const colors = {
        'COSRX': '#f8bbd0',
        'Plum': '#e1bee7',
        'Cetaphil': '#bbdefb',
        'Dr. Sheth\'s': '#c8e6c9',
        'Laneige': '#ffecb3',
        'The Ordinary': '#d7ccc8',
        'Neutrogena': '#b2ebf2',
        'Clinique': '#b2dfdb',
        'Innisfree': '#c5e1a5',
        'Kiehl\'s': '#ffe0b2',
        'default': '#f5f5f5'
    };
    
    const brandColor = colors[brand] || colors['default'];
    
    return `https://via.placeholder.com/300/${brandColor.replace('#', '')}?text=${encodeURIComponent(brand)}`;
}

// Product data with 25 products in each category
const products = [
    // SKINCARE CATEGORY (25 products)
    {
        id: 1,
        name: "COSRX Advanced Snail 96 Mucin Power Essence",
        category: "Skincare",
        description: "A hydrating essence that helps repair and rejuvenate the skin.",
        priceNykaa: 1160,
        priceTira: 1150,
        image: "https://tse1.mm.bing.net/th?id=OIP.QhoWwRC0B3CRBOOMmPouLwHaHa&pid=Api"
    },
    {
        id: 2,
        name: "Plum 3% Niacinamide Alcohol-Free Toner",
        category: "Skincare",
        description: "A toner that reduces pores and blemishes, promoting bright skin.",
        priceNykaa: 382,
        priceTira: 375,
        image: "https://tse2.mm.bing.net/th?id=OIP.v1ixcHYolsH4vX-6PH_KCwHaHa&pid=Api"
    },
    {
        id: 3,
        name: "Cetaphil Gentle Skin Cleanser",
        category: "Skincare",
        description: "A gentle cleanser that keeps the skin moisturized and clean.",
        priceNykaa: 375,
        priceTira: 370,
        image: "https://tse2.mm.bing.net/th?id=OIP.2lfDyZ0E1WFvRl0gKGmfPwAAAA&pid=Api"
    },
    {
        id: 4,
        name: "Dr. Sheth's Ceramide & Vitamin C Sunscreen",
        category: "Skincare",
        description: "A lightweight sunscreen with ceramides and Vitamin C for glowing skin.",
        priceNykaa: 499,
        priceTira: 495,
        image: "https://tse2.mm.bing.net/th?id=OIP.cthC2Hk2cCAGzzmFfmJZ-QHaEl&pid=Api"
    },
    {
        id: 5,
        name: "Laneige Lip Sleeping Mask Berry",
        category: "Skincare",
        description: "A leave-on lip mask that soothes and moisturizes overnight.",
        priceNykaa: 540,
        priceTira: 530,
        image: "https://tse3.mm.bing.net/th?id=OIP.TeQKbmu-WTjUvf9I86ol4gHaFM&pid=Api"
    },
    {
        id: 6,
        name: "The Ordinary Niacinamide 10% + Zinc 1%",
        category: "Skincare",
        description: "A serum that reduces sebum production and minimizes pores.",
        priceNykaa: 750,
        priceTira: 740,
        image: generateProductImage("The Ordinary")
    },
    {
        id: 7,
        name: "Neutrogena Hydro Boost Water Gel",
        category: "Skincare",
        description: "A lightweight gel moisturizer with hyaluronic acid.",
        priceNykaa: 499,
        priceTira: 485,
        image: generateProductImage("Neutrogena")
    },
    {
        id: 8,
        name: "Clinique Moisture Surge 100H Auto-Replenishing Hydrator",
        category: "Skincare",
        description: "A gel-cream that provides long-lasting hydration.",
        priceNykaa: 1200,
        priceTira: 1150,
        image: generateProductImage("Clinique")
    },
    {
        id: 9,
        name: "Innisfree Green Tea Seed Serum",
        category: "Skincare",
        description: "A hydrating serum with green tea extract to nourish the skin.",
        priceNykaa: 950,
        priceTira: 920,
        image: generateProductImage("Innisfree")
    },
    {
        id: 10,
        name: "Kiehl's Ultra Facial Cream",
        category: "Skincare",
        description: "A daily moisturizer that provides 24-hour hydration.",
        priceNykaa: 1350,
        priceTira: 1320,
        image: generateProductImage("Kiehl's")
    },
    {
        id: 11,
        name: "La Roche-Posay Effaclar Duo+ Acne Treatment",
        category: "Skincare",
        description: "A corrective anti-acne treatment for oily, blemish-prone skin.",
        priceNykaa: 1499,
        priceTira: 1450,
        image: generateProductImage("La Roche-Posay")
    },
    {
        id: 12,
        name: "Bioderma Sensibio H2O Micellar Water",
        category: "Skincare",
        description: "A gentle micellar water that removes makeup and cleanses skin.",
        priceNykaa: 850,
        priceTira: 830,
        image: generateProductImage("Bioderma")
    },
    {
        id: 13,
        name: "SK-II Facial Treatment Essence",
        category: "Skincare",
        description: "A luxury essence that improves skin texture and radiance.",
        priceNykaa: 8500,
        priceTira: 8200,
        image: generateProductImage("SK-II")
    },
    {
        id: 14,
        name: "Paula's Choice 2% BHA Liquid Exfoliant",
        category: "Skincare",
        description: "A leave-on exfoliant that unclogs and diminishes enlarged pores.",
        priceNykaa: 2990,
        priceTira: 2950,
        image: generateProductImage("Paula's Choice")
    },
    {
        id: 15,
        name: "Drunk Elephant T.L.C. Sukari Babyfacial",
        category: "Skincare",
        description: "An AHA/BHA facial that reveals clearer, smoother skin.",
        priceNykaa: 6500,
        priceTira: 6300,
        image: generateProductImage("Drunk Elephant")
    },
    {
        id: 16,
        name: "Tatcha The Rice Wash Skin-Softening Cleanser",
        category: "Skincare",
        description: "A cream cleanser that gently washes away impurities without stripping.",
        priceNykaa: 3500,
        priceTira: 3400,
        image: generateProductImage("Tatcha")
    },
    {
        id: 17,
        name: "Fresh Rose Deep Hydration Face Cream",
        category: "Skincare",
        description: "A moisturizing face cream with rosewater and rose flower oil.",
        priceNykaa: 4200,
        priceTira: 4100,
        image: generateProductImage("Fresh")
    },
    {
        id: 18,
        name: "Sunday Riley Good Genes All-In-One Lactic Acid Treatment",
        category: "Skincare",
        description: "A treatment that exfoliates and plumps the look of fine lines.",
        priceNykaa: 6000,
        priceTira: 5900,
        image: generateProductImage("Sunday Riley")
    },
    {
        id: 19,
        name: "Avène Thermal Spring Water",
        category: "Skincare",
        description: "A mist that soothes and softens sensitive skin.",
        priceNykaa: 750,
        priceTira: 740,
        image: generateProductImage("Avène")
    },
    {
        id: 20,
        name: "Estée Lauder Advanced Night Repair Serum",
        category: "Skincare",
        description: "A serum that reduces multiple signs of aging.",
        priceNykaa: 6500,
        priceTira: 6400,
        image: generateProductImage("Estée Lauder")
    },
    {
        id: 21,
        name: "CeraVe Moisturizing Cream",
        category: "Skincare",
        description: "A rich cream with ceramides for long-lasting hydration.",
        priceNykaa: 1250,
        priceTira: 1200,
        image: generateProductImage("CeraVe")
    },
    {
        id: 22,
        name: "Dermalogica Daily Microfoliant",
        category: "Skincare",
        description: "A powder exfoliant that smoothes and brightens skin.",
        priceNykaa: 3200,
        priceTira: 3100,
        image: generateProductImage("Dermalogica")
    },
    {
        id: 23,
        name: "Origins Clear Improvement Active Charcoal Mask",
        category: "Skincare",
        description: "A charcoal mask that draws out impurities and detoxifies skin.",
        priceNykaa: 2100,
        priceTira: 2050,
        image: generateProductImage("Origins")
    },
    {
        id: 24,
        name: "Glow Recipe Watermelon Glow Sleeping Mask",
        category: "Skincare",
        description: "An overnight mask that hydrates, smoothes, and perfects skin.",
        priceNykaa: 3800,
        priceTira: 3700,
        image: generateProductImage("Glow Recipe")
    },
    {
        id: 25,
        name: "First Aid Beauty Ultra Repair Cream",
        category: "Skincare",
        description: "A rich, whipped moisturizer for dry, distressed skin.",
        priceNykaa: 2800,
        priceTira: 2750,
        image: generateProductImage("First Aid Beauty")
    },
    
    // MAKEUP CATEGORY (25 products)
    {
        id: 26,
        name: "Maybelline New York Fit Me Matte + Poreless Foundation",
        category: "Makeup",
        description: "A foundation for normal to oily skin with a matte finish.",
        priceNykaa: 299,
        priceTira: 310,
        image: "https://tse3.mm.bing.net/th?id=OIP.TQavIMqpWZjzkgMDO4l36AHaHa&pid=Api"
    },
    {
        id: 27,
        name: "L'Oreal Paris Voluminous Lash Paradise Mascara",
        category: "Makeup",
        description: "A volumizing mascara for bold, dramatic lashes.",
        priceNykaa: 799,
        priceTira: 780,
        image: "https://tse1.mm.bing.net/th?id=OIP.2Zb5UpZ_YUPj4zT56NtPFgHaHb&pid=Api"
    },
    {
        id: 28,
        name: "Lakme 9 to 5 Primer + Matte Lip Color",
        category: "Makeup",
        description: "A matte lipstick with a built-in primer for smooth application.",
        priceNykaa: 550,
        priceTira: 540,
        image: "https://tse1.mm.bing.net/th?id=OIP.SRRPZcqzFZ1L-RSGNLF46wHaHa&pid=Api"
    },
    {
        id: 29,
        name: "Maybelline New York Fit Me Concealer",
        category: "Makeup",
        description: "A lightweight concealer for natural coverage.",
        priceNykaa: 475,
        priceTira: 470,
        image: "https://tse3.mm.bing.net/th?id=OIP.dvoR0Rs_kGNhOheKh_ngVQHaIe&pid=Api"
    },
    {
        id: 30,
        name: "L'Oreal Paris Infallible Pro-Matte Powder",
        category: "Makeup",
        description: "A long-lasting powder for shine-free skin.",
        priceNykaa: 699,
        priceTira: 690,
        image: "https://tse3.mm.bing.net/th?id=OIP.NstWOKBTN8iJaQIdVlx2MAHaHa&pid=Api"
    },
    // Add 20 more makeup products here (31-50)
    {
        id: 31,
        name: "MAC Studio Fix Fluid Foundation",
        category: "Makeup",
        description: "A medium to full coverage matte foundation with SPF 15.",
        priceNykaa: 3100,
        priceTira: 3050,
        image: generateProductImage("MAC")
    },
    {
        id: 32,
        name: "Anastasia Beverly Hills Dipbrow Pomade",
        category: "Makeup",
        description: "A waterproof brow pomade for defined brows.",
        priceNykaa: 2600,
        priceTira: 2550,
        image: generateProductImage("Anastasia")
    },
    {
        id: 33,
        name: "Too Faced Better Than Sex Mascara",
        category: "Makeup",
        description: "A volumizing and lengthening mascara for dramatic lashes.",
        priceNykaa: 2450,
        priceTira: 2400,
        image: generateProductImage("Too Faced")
    },
    {
        id: 34,
        name: "NARS Radiant Creamy Concealer",
        category: "Makeup",
        description: "A medium to full coverage concealer with a radiant finish.",
        priceNykaa: 3150,
        priceTira: 3100,
        image: generateProductImage("NARS")
    },
    {
        id: 35,
        name: "Urban Decay Naked3 Eyeshadow Palette",
        category: "Makeup",
        description: "A palette with 12 rose-hued neutral eyeshadows.",
        priceNykaa: 4400,
        priceTira: 4350,
        image: generateProductImage("Urban Decay")
    },
    {
        id: 36,
        name: "Huda Beauty The New Nude Eyeshadow Palette",
        category: "Makeup",
        description: "A versatile eyeshadow palette with 18 shades.",
        priceNykaa: 4950,
        priceTira: 4900,
        image: generateProductImage("Huda Beauty")
    },
    {
        id: 37,
        name: "Charlotte Tilbury Pillow Talk Lipstick",
        category: "Makeup",
        description: "A nude-pink lipstick with a matte finish.",
        priceNykaa: 3200,
        priceTira: 3150,
        image: generateProductImage("Charlotte Tilbury")
    },
    {
        id: 38,
        name: "Fenty Beauty Pro Filt'r Soft Matte Foundation",
        category: "Makeup",
        description: "A long-wearing, light-as-air foundation with buildable coverage.",
        priceNykaa: 3350,
        priceTira: 3300,
        image: generateProductImage("Fenty Beauty")
    },
    {
        id: 39,
        name: "Benefit Cosmetics Hoola Bronzer",
        category: "Makeup",
        description: "A matte bronzer for contouring and all-over warmth.",
        priceNykaa: 2750,
        priceTira: 2700,
        image: generateProductImage("Benefit")
    },
    {
        id: 40,
        name: "Dior Backstage Face & Body Foundation",
        category: "Makeup",
        description: "A water-resistant foundation with buildable coverage.",
        priceNykaa: 3950,
        priceTira: 3900,
        image: generateProductImage("Dior")
    },
    {
        id: 41,
        name: "Tarte Shape Tape Concealer",
        category: "Makeup",
        description: "A full-coverage concealer that brightens and sculpts.",
        priceNykaa: 2800,
        priceTira: 2750,
        image: generateProductImage("Tarte")
    },
    {
        id: 42,
        name: "Laura Mercier Translucent Loose Setting Powder",
        category: "Makeup",
        description: "A finely milled powder that sets makeup for up to 16 hours.",
        priceNykaa: 3850,
        priceTira: 3800,
        image: generateProductImage("Laura Mercier")
    },
    {
        id: 43,
        name: "Rare Beauty Soft Pinch Liquid Blush",
        category: "Makeup",
        description: "A long-lasting liquid blush that blends seamlessly.",
        priceNykaa: 2100,
        priceTira: 2050,
        image: generateProductImage("Rare Beauty")
    },
    {
        id: 44,
        name: "Glossier Boy Brow",
        category: "Makeup",
        description: "A grooming pomade that thickens, fills, and shapes brows.",
        priceNykaa: 1950,
        priceTira: 1900,
        image: generateProductImage("Glossier")
    },
    {
        id: 45,
        name: "Pat McGrath Labs Mothership Eyeshadow Palette",
        category: "Makeup",
        description: "A luxury eyeshadow palette with richly pigmented shades.",
        priceNykaa: 12500,
        priceTira: 12400,
        image: generateProductImage("Pat McGrath")
    },
    {
        id: 46,
        name: "Stila Stay All Day Waterproof Liquid Eyeliner",
        category: "Makeup",
        description: "A waterproof eyeliner with a fine tip for precise application.",
        priceNykaa: 2200,
        priceTira: 2150,
        image: generateProductImage("Stila")
    },
    {
        id: 47,
        name: "Bobbi Brown Vitamin Enriched Face Base",
        category: "Makeup",
        description: "A moisturizer and primer in one with vitamins B, C, and E.",
        priceNykaa: 5800,
        priceTira: 5750,
        image: generateProductImage("Bobbi Brown")
    },
    {
        id: 48,
        name: "Clinique Even Better Foundation",
        category: "Makeup",
        description: "A foundation that improves skin tone with continued use.",
        priceNykaa: 3450,
        priceTira: 3400,
        image: generateProductImage("Clinique Foundation")
    },
    {
        id: 49,
        name: "Make Up For Ever Ultra HD Foundation",
        category: "Makeup",
        description: "A medium-coverage foundation that looks natural on camera.",
        priceNykaa: 4350,
        priceTira: 4300,
        image: generateProductImage("Make Up For Ever")
    },
    {
        id: 50,
        name: "YSL Rouge Volupté Shine Lipstick",
        category: "Makeup",
        description: "A hydrating lipstick with medium coverage and a shiny finish.",
        priceNykaa: 3650,
        priceTira: 3600,
        image: generateProductImage("YSL")
    },

    // HAIRCARE CATEGORY (25 products)
    {
        id: 51,
        name: "Tresemme Keratin Smooth Shampoo",
        category: "Haircare",
        description: "A shampoo that tames frizz and adds shine.",
        priceNykaa: 199,
        priceTira: 195,
        image: "https://tse3.mm.bing.net/th?id=OIP.-ZT3nMcrykGqc8_Sxpu9LQHaHa&pid=Api"
    },
    {
        id: 52,
        name: "L'Oreal Paris Total Repair 5 Conditioner",
        category: "Haircare",
        description: "A conditioner that repairs and nourishes damaged hair.",
        priceNykaa: 180,
        priceTira: 175,
        image: "https://tse1.mm.bing.net/th?id=OIP.LeDXDcCT6ag0sAVkrmebYQHaHa&pid=Api"
    },
    {
        id: 53,
        name: "Dove Intense Repair Shampoo",
        category: "Haircare",
        description: "A shampoo that strengthens and repairs hair.",
        priceNykaa: 180,
        priceTira: 175,
        image: "https://tse4.mm.bing.net/th?id=OIP.V_fZZy46_4rNNBXJDf9dFwHaHa&pid=Api"
    },
    {
        id: 54,
        name: "Pantene Pro-V Hair Fall Control Conditioner",
        category: "Haircare",
        description: "A conditioner that reduces hair fall and nourishes hair.",
        priceNykaa: 180,
        priceTira: 175,
        image: "https://tse4.mm.bing.net/th?id=OIP.ypWBqaNE5vcLDPS_uIu1sQHaId&pid=Api"
    },
    {
        id: 55,
        name: "L'Oreal Paris Extraordinary Oil Serum",
        category: "Haircare",
        description: "A serum that transforms dull, dry hair to silky and shiny.",
        priceNykaa: 399,
        priceTira: 390,
        image: "https://tse4.mm.bing.net/th?id=OIP.J3K8BJ4C2AcTBEFYDqmMIAHaJ4&pid=Api"
    },
    // Add 20 more haircare products here (56-75)
    {
        id: 56,
        name: "Olaplex No. 3 Hair Perfector",
        category: "Haircare",
        description: "A treatment that reduces breakage and strengthens hair structure.",
        priceNykaa: 2800,
        priceTira: 2750,
        image: generateProductImage("Olaplex")
    },
    {
        id: 57,
        name: "Moroccanoil Treatment Original",
        category: "Haircare",
        description: "An argan oil-infused treatment that adds shine and detangles.",
        priceNykaa: 3500,
        priceTira: 3450,
        image: generateProductImage("Moroccanoil")
    },
    {
        id: 58,
        name: "Briogeo Don't Despair, Repair! Deep Conditioning Mask",
        category: "Haircare",
        description: "A weekly deep conditioning treatment for damaged hair.",
        priceNykaa: 3600,
        priceTira: 3550,
        image: generateProductImage("Briogeo")
    },
    {
        id: 59,
        name: "Kerastase Nutritive Bain Satin 1 Shampoo",
        category: "Haircare",
        description: "A nourishing shampoo for normal to slightly dry hair.",
        priceNykaa: 2300,
        priceTira: 2250,
        image: generateProductImage("Kerastase")
    },
    {
        id: 60,
        name: "Ouai Leave In Conditioner",
        category: "Haircare",
        description: "A lightweight leave-in conditioner that detangles and adds shine.",
        priceNykaa: 2600,
        priceTira: 2550,
        image: generateProductImage("Ouai")
    },
    {
        id: 61,
        name: "Matrix Biolage SmoothProof Shampoo",
        category: "Haircare",
        description: "A shampoo that controls frizz even in high humidity.",
        priceNykaa: 550,
        priceTira: 540,
        image: generateProductImage("Matrix")
    },
    {
        id: 62,
        name: "Living Proof Perfect Hair Day Dry Shampoo",
        category: "Haircare",
        description: "A dry shampoo that absorbs oil and sweat.",
        priceNykaa: 2400,
        priceTira: 2350,
        image: generateProductImage("Living Proof")
    },
    {
        id: 63,
        name: "Schwarzkopf BC Bonacure Repair Rescue Shampoo",
        category: "Haircare",
        description: "A shampoo that repairs damaged, brittle hair.",
        priceNykaa: 850,
        priceTira: 830,
        image: generateProductImage("Schwarzkopf")
    },
    {
        id: 64,
        name: "Paul Mitchell Tea Tree Special Shampoo",
        category: "Haircare",
        description: "An invigorating shampoo with tea tree oil, peppermint, and lavender.",
        priceNykaa: 1350,
        priceTira: 1320,
        image: generateProductImage("Paul Mitchell")
    },
    {
        id: 65,
        name: "Wella Professionals INVIGO Color Brilliance Mask",
        category: "Haircare",
        description: "A color-protecting mask for fine to normal hair.",
        priceNykaa: 950,
        priceTira: 930,
        image: generateProductImage("Wella")
    },
    {
        id: 66,
        name: "Aveda Damage Remedy Intensive Restructuring Treatment",
        category: "Haircare",
        description: "A weekly treatment that repairs and strengthens damaged hair.",
        priceNykaa: 3200,
        priceTira: 3150,
        image: generateProductImage("Aveda")
    },
    {
        id: 67,
        name: "BBlunt Anti Frizz Leave-In Cream",
        category: "Haircare",
        description: "A leave-in cream for smooth, frizz-free, manageable hair.",
        priceNykaa: 550,
        priceTira: 540,
        image: generateProductImage("BBlunt")
    },
    {
        id: 68,
        name: "Sebastian Professional Twisted Elastic Detangler",
        category: "Haircare",
        description: "A leave-in spray conditioner for curly hair.",
        priceNykaa: 1950,
        priceTira: 1900,
        image: generateProductImage("Sebastian")
    },
    {
        id: 69,
        name: "Kevin Murphy Hydrate Me Wash Shampoo",
        category: "Haircare",
        description: "A moisturizing shampoo with Kakadu plum and olive leaf extract.",
        priceNykaa: 2100,
        priceTira: 2050,
        image: generateProductImage("Kevin Murphy")
    },
    {
        id: 70,
        name: "Bumble and Bumble Surf Spray",
        category: "Haircare",
        description: "A salt spray for beachy, windswept styles.",
        priceNykaa: 2750,
        priceTira: 2700,
        image: generateProductImage("Bumble and Bumble")
    },
    {
        id: 71,
        name: "KMS Hair Play Dry Wax",
        category: "Haircare",
        description: "A dry wax spray for instant texture and definition.",
        priceNykaa: 1950,
        priceTira: 1900,
        image: generateProductImage("KMS")
    },
    {
        id: 72,
        name: "Joico K-PAK Reconstructor",
        category: "Haircare",
        description: "A deep-penetrating reconstructor for damaged hair.",
        priceNykaa: 1800,
        priceTira: 1770,
        image: generateProductImage("Joico")
    },
    {
        id: 73,
        name: "Pureology Hydrate Shampoo",
        category: "Haircare",
        description: "A moisturizing, sulfate-free shampoo for color-treated hair.",
        priceNykaa: 2500,
        priceTira: 2450,
        image: generateProductImage("Pureology")
    },
    {
        id: 74,
        name: "TIGI Bed Head After Party Smoothing Cream",
        category: "Haircare",
        description: "A smoothing cream that tames frizz and adds shine.",
        priceNykaa: 1150,
        priceTira: 1120,
        image: generateProductImage("TIGI")
    },
    {
        id: 75,
        name: "Redken All Soft Shampoo",
        category: "Haircare",
        description: "A moisturizing shampoo for dry, brittle hair.",
        priceNykaa: 1750,
        priceTira: 1720,
        image: generateProductImage("Redken")
    },

    // FRAGRANCE CATEGORY (25 products)
    {
        id: 76,
        name: "Chanel No. 5 Eau de Parfum",
        category: "Fragrance",
        description: "A classic fragrance with a blend of florals and aldehydes.",
        priceNykaa: 8500,
        priceTira: 8400,
        image: "https://tse2.mm.bing.net/th?id=OIP.k9u5L28ZbprIl_O2uh7YZwHaHa&pid=Api"
    },
    {
        id: 77,
        name: "Dior Sauvage Eau de Toilette",
        category: "Fragrance",
        description: "A fresh and spicy fragrance with a masculine allure.",
        priceNykaa: 7500,
        priceTira: 7400,
        image: "https://tse4.mm.bing.net/th?id=OIP.56TKoeji3BGRBSE_iJruBQHaHa&pid=Api"
    },
    {
        id: 78,
        name: "Yves Saint Laurent Black Opium Eau de Parfum",
        category: "Fragrance",
        description: "A captivating fragrance with notes of coffee and vanilla.",
        priceNykaa: 6500,
        priceTira: 6450,
        image: "https://tse2.mm.bing.net/th?id=OIP.X2sLedTzzxjPqj9UXpsn4AAAAA&pid=Api"
    },
    {
        id: 79,
        name: "Gucci Bloom Eau de Parfum",
        category: "Fragrance",
        description: "A rich, white floral fragrance inspired by gardens.",
        priceNykaa: 7000,
        priceTira: 6900,
        image: "https://tse3.mm.bing.net/th?id=OIP.jG4wbbKzDTdJSB7EQReN_gHaHa&pid=Api"
    },
    {
        id: 80,
        name: "Tom Ford Black Orchid Eau de Parfum",
        category: "Fragrance",
        description: "A luxurious and sensual fragrance with dark accords.",
        priceNykaa: 10000,
        priceTira: 9800,
        image: "https://tse2.mm.bing.net/th?id=OIP._luPJpBSdQAwTQzHTZsD8QHaKX&pid=Api"
    },
    // Add 20 more fragrance products here (81-100)
    {
        id: 81,
        name: "Jo Malone London Lime Basil & Mandarin Cologne",
        category: "Fragrance",
        description: "A signature scent with peppery basil and aromatic white thyme.",
        priceNykaa: 13500,
        priceTira: 13400,
        image: generateProductImage("Jo Malone")
    },
    {
        id: 82,
        name: "Viktor&Rolf Flowerbomb Eau de Parfum",
        category: "Fragrance",
        description: "A floral explosion with notes of jasmine, rose, and patchouli.",
        priceNykaa: 8900,
        priceTira: 8800,
        image: generateProductImage("Viktor&Rolf")
    },
    {
        id: 83,
        name: "Armani Beauty Acqua di Giò Pour Homme",
        category: "Fragrance",
        description: "A fresh aquatic fragrance inspired by the Mediterranean sea.",
        priceNykaa: 7200,
        priceTira: 7100,
        image: generateProductImage("Armani")
    },
    {
        id: 84,
        name: "Marc Jacobs Daisy Eau de Toilette",
        category: "Fragrance",
        description: "A fresh, feminine fragrance with wild berries and white violet.",
        priceNykaa: 6800,
        priceTira: 6700,
        image: generateProductImage("Marc Jacobs")
    },
    {
        id: 85,
        name: "Versace Eros Eau de Toilette",
        category: "Fragrance",
        description: "A vibrant fragrance with mint, lemon, and vanilla notes.",
        priceNykaa: 5900,
        priceTira: 5850,
        image: generateProductImage("Versace")
    },
    {
        id: 86,
        name: "Creed Aventus Eau de Parfum",
        category: "Fragrance",
        description: "A sophisticated fragrance with notes of blackcurrant and birch.",
        priceNykaa: 28000,
        priceTira: 27800,
        image: generateProductImage("Creed")
    },
    {
        id: 87,
        name: "Burberry Her Eau de Parfum",
        category: "Fragrance",
        description: "A vibrant, fruity fragrance with blackberry, jasmine, and musk.",
        priceNykaa: 8500,
        priceTira: 8400,
        image: generateProductImage("Burberry")
    },
    {
        id: 88,
        name: "Dolce & Gabbana Light Blue Eau de Toilette",
        category: "Fragrance",
        description: "A fresh citrus scent inspired by the Mediterranean lifestyle.",
        priceNykaa: 6900,
        priceTira: 6800,
        image: generateProductImage("Dolce & Gabbana")
    },
    {
        id: 89,
        name: "Byredo Gypsy Water Eau de Parfum",
        category: "Fragrance",
        description: "A woody aromatic fragrance with notes of bergamot and juniper berries.",
        priceNykaa: 18500,
        priceTira: 18400,
        image: generateProductImage("Byredo")
    },
    {
        id: 90,
        name: "Diptyque Eau Rose Eau de Toilette",
        category: "Fragrance",
        description: "A fresh, floral fragrance with damascena and centifolia roses.",
        priceNykaa: 15500,
        priceTira: 15400,
        image: generateProductImage("Diptyque")
    },
    {
        id: 91,
        name: "Maison Francis Kurkdjian Baccarat Rouge 540",
        category: "Fragrance",
        description: "A luxurious amber floral fragrance with jasmine and saffron.",
        priceNykaa: 22000,
        priceTira: 21800,
        image: generateProductImage("Maison Francis Kurkdjian")
    },
    {
        id: 92,
        name: "Le Labo Santal 33 Eau de Parfum",
        category: "Fragrance",
        description: "A unisex fragrance with notes of cardamom, iris, and sandalwood.",
        priceNykaa: 20500,
        priceTira: 20400,
        image: generateProductImage("Le Labo")
    },
    {
        id: 93,
        name: "Hermès Terre d'Hermès Eau de Toilette",
        category: "Fragrance",
        description: "A woody, mineral fragrance with citrus and pepper notes.",
        priceNykaa: 9500,
        priceTira: 9400,
        image: generateProductImage("Hermès")
    },
    {
        id: 94,
        name: "Prada Luna Rossa Carbon Eau de Toilette",
        category: "Fragrance",
        description: "A modern fougère with metallic notes of lavender.",
        priceNykaa: 7800,
        priceTira: 7700,
        image: generateProductImage("Prada")
    },
    {
        id: 95,
        name: "Guerlain Shalimar Eau de Parfum",
        category: "Fragrance",
        description: "A legendary oriental fragrance with vanilla and iris.",
        priceNykaa: 12500,
        priceTira: 12400,
        image: generateProductImage("Guerlain")
    },
    {
        id: 96,
        name: "Acqua di Parma Colonia Eau de Cologne",
        category: "Fragrance",
        description: "A classic Italian cologne with citrus and woody notes.",
        priceNykaa: 14500,
        priceTira: 14400,
        image: generateProductImage("Acqua di Parma")
    },
    {
        id: 97,
        name: "Maison Margiela Replica Jazz Club Eau de Toilette",
        category: "Fragrance",
        description: "A warm fragrance evoking the atmosphere of a Brooklyn jazz club.",
        priceNykaa: 13800,
        priceTira: 13700,
        image: generateProductImage("Maison Margiela")
    },
    {
        id: 98,
        name: "Kilian Love, Don't Be Shy Eau de Parfum",
        category: "Fragrance",
        description: "A sweet gourmand fragrance with notes of orange blossom and marshmallow.",
        priceNykaa: 24500,
        priceTira: 24400,
        image: generateProductImage("Kilian")
    },
    {
        id: 99,
        name: "Penhaligon's The Tragedy of Lord George Eau de Parfum",
        category: "Fragrance",
        description: "A sophisticated masculine fragrance with brandy and tonka bean.",
        priceNykaa: 26500,
        priceTira: 26400,
        image: generateProductImage("Penhaligon's")
    },
    {
        id: 100,
        name: "Frederic Malle Portrait of a Lady Eau de Parfum",
        category: "Fragrance",
        description: "An elegant oriental fragrance with Turkish rose and patchouli.",
        priceNykaa: 29500,
        priceTira: 29400,
        image: generateProductImage("Frederic Malle")
    }
];

// Wishlist functions
function getWishlist() {
    return JSON.parse(localStorage.getItem('wishlist') || '[]');
}

function setWishlist(wishlist) {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function toggleWishlist(productId) {
    const wishlist = getWishlist();
    const index = wishlist.indexOf(productId);
    
    if (index === -1) {
        wishlist.push(productId);
    } else {
        wishlist.splice(index, 1);
    }
    
    setWishlist(wishlist);
    
    // Refresh current view
    if (location.pathname.includes('wishlist')) {
        displayWishlist();
    } else {
        handleSearch();
    }
}

// Create product card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const isWishlisted = getWishlist().includes(product.id);
    const bestPrice = product.priceNykaa <= product.priceTira ? 'Nykaa' : 'Tira';
    const savings = Math.abs(product.priceNykaa - product.priceTira);
    
    card.innerHTML = `
        <div class="product-category">
            <span class="category-label">${product.category}</span>
        </div>
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="price-comparison">
                <span class="price ${bestPrice === 'Nykaa' ? 'best-price' : ''}">Nykaa: ₹${product.priceNykaa}</span>
                <span class="price ${bestPrice === 'Tira' ? 'best-price' : ''}">Tira: ₹${product.priceTira}</span>
            </div>
            <p class="savings">Savings: ₹${savings}</p>
            <button class="btn wishlist-btn" onclick="toggleWishlist(${product.id})">
                ${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
            </button>
        </div>
    `;
    return card;
}

// Find a product by ID
function findProductById(id) {
    return products.find(product => product.id === id);
}

// Calculate total wishlist savings
function calculateWishlistSavings() {
    const wishlist = getWishlist();
    let totalSavings = 0;
    
    wishlist.forEach(productId => {
        const product = findProductById(productId);
        if (product) {
            const savings = Math.abs(product.priceNykaa - product.priceTira);
            totalSavings += savings;
        }
    });
    
    return totalSavings;
}

// Get all unique categories
function getAllCategories() {
    const categories = new Set();
    products.forEach(product => categories.add(product.category));
    return Array.from(categories);
}