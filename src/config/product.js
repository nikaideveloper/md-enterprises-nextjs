export const productsPageData = {
  hero: {
    label: "INDUSTRIAL PACKAGING MACHINES",
    title: "Advanced Packaging Machines For Modern Industries",
    description:
      "High-performance packaging machinery solutions designed for efficiency, durability, and industrial productivity.",

    buttons: {
      primary: {
        text: "Explore Machines",
        link: "#all-products",
      },
      secondary: {
        text: "Get Quotation",
        link: "/contact",
      },
    },
    // Featured products shown on the right side of the hero
    featuredProducts: [
      {
        id: 1,
        title: "Maxi heavy duty standard sealing machine-vartical type",
        image: "/images/maxi-heavy-duty-sealing.png",
        alt: "Maxi heavy duty standard sealing machine",
      },
      {
        id: 2,
        title: "Cap sealing machine",
        image: "/images/cap-sealing-machine.png",
        alt: "Cap sealing machine",
      },
      {
        id: 3,
        title: "Foot Operator Impuls sealing machine",
        image: "/images/foot-operator-sealing.png",
        alt: "Foot Operator Impulse sealing machine",
      },
    ],
  },
  categories: {
    label: "MACHINE CATEGORIES",
    title: "Browse By Machine Type",
    items: [
       {
        id: 1,
        title: "Baby Band Sealing Machine",
        image: "/images/machines/baby-band-vertical-nitrogen.jpeg",
        alt: "Baby band vertical",
      },
      {
        id: 2,
        title: "Maxi Band Sealing Machine",
        image: "/images/machines/maxi-band-vertical.jpeg",
        alt: "Maxi band vertical",
        
      },
        {
        id: 3,
        title: "Maxi Heavy Duty Band Sealing Machine",
        image: "/images/machines/maxi-heavy-vertical.jpeg",
        alt: "Maxi heavy duty vertical",
      },
       {
        id: 4,
        title: "Auto Impulse Sealing Machine",
        image: "/images/machines/auto-impulse-vertical.jpeg",
        alt: "Auto Impulse vertical",
      },
        {
        id: 5,
        title:
          "Foot Operated Impulse Sealing Machine",
        image: "/images/machines/foot-operated-impulse.jpeg",
        alt: "Foot operated impulse",
      },
{
        id: 6,
        title:
          "Foot Operated Direct Heat Sealing Machine",
        image: "/images/machines/oot-operated-direct-heat.jpeg",
        alt: "Foot Operated Direct Heat Sealing Machine",
      },

{
        id: 7,
        title:
          "Auto Direct Heat Sealing Machine",
        image: " /images/machines/auto-impulse-horizontal.jpeg",
        alt: "Auto Direct Heat Sealing Machine",
      },
 
    ],
  },
  productDetails: {
       1: {
      id: 1,
      title: "Baby Band Sealing Machine",
      description:
        "This Vertical Baby Band Sealing Machine comes equipped with an integrated Nitrogen Gas flushing system. Designed specifically for vertical pouch orientation, it prevents spillage of powders, liquids, and grains while simultaneously replacing oxygen with nitrogen. This ensures an airtight seal that significantly extends the shelf life of perishable items like snacks, coffee, and dry fruits.",
      images: [
                  { id: 1, url: "/images/machines/baby-band-vertical-nitrogen.jpeg", alt: "View 1" },
        { id: 2, url: "/images/baby-band-horizontal.png", alt: "View 2" },
        { id: 3, url: "/images/machines/baby-band-vertical-standard.jpeg", alt: "View 3" },
        { id: 4, url: "/images/machines/baby-band-vertical-heavy.jpeg", alt: "View 4" },
         { id: 5, url: "/images/machines/baby-band-horizontal-nitrogen.jpeg", alt: "View 5" },
              { id: 6, url: "/images/machines/baby-band-vertical.jpeg", alt: "View 6" },
      ],
      specifications: {
        type: "Vertical Continuous Band Sealer",
        model: "BB-V-N2",
        body: "Standard",
        fabrication: "MS/SS body options available",
        power: "230V AC Single Phase, 50Hz",
        machineWeight: "35 KG",
        sealingWidth: "8-10 mm",
        conveyorLoadCapacity: "Up to 3 KG",
        temperatureControl: "Digital PID Controller (0-300°C)",
        nitrogenGasFlushing: "Built-in / Standard",
        productionSealingSpeed: "0 - 12 M/min (Variable)",
        printingSystem: "Embossing / Solid Ink Printing (Optional)",
      },
      buttons: {
        primary: { text: "Send Inquiry" },
        secondary: { text: "Get Quotation" },
      },
    },
    2: {
      id: 2,
      title: "Maxi Band Sealing Machine",
      description:
        "The Maxy Continuous Band Sealing Machine is specially designed for heavy-duty industrial packaging applications. It provides continuous, efficient, and reliable sealing for medium and large-sized pouches. With a robust MS fabricated body, precision mechanical parts, and adjustable conveyor system, it delivers excellent sealing performance for food, chemical, pharmaceutical, and manufacturing industries.",
      images: [
        { id: 1, url: "/images/machines/maxi-band-vertical.jpeg", alt: "View 1" },
      ],
      specifications: {
        type: "Vertical",
        model: "MD-MBS-501",
        body: "Heavy Duty",
        fabrication: "MS body fabrication with powder coating",
        mechanicalParts: "MS Grade Steel Mechanical Parts",
        power: "230V AC Single Phase, 50Hz",
        machineWeight: "75 KG",
        sealingWidth: "10-15 mm",
        conveyorLoadCapacity: "100g - 5kg",
        conveyorHeightAdjustment: "4 inch - 18 inch",
        variableSpeed: "Available (Optional)",
        nitrogenGasFlushing: "Available (Optional)",
        productionSealingSpeed: "8 M/min",
        counterSystem: "Available (Optional)",
      },
      buttons: {
        primary: { text: "Send Inquiry" },
        secondary: { text: "Get Quotation" },
      },
    },

3: {
      id: 3,
      title: "Maxi Heavy Duty Band Sealing Machine", 
      description:
        "The Maxy Continuous Band Sealing Machine is specially designed for heavy-duty industrial packaging applications. It provides continuous, efficient, and reliable sealing for medium and large-sized pouches. With a robust MS fabricated body, precision mechanical parts, and adjustable conveyor system, it delivers excellent sealing performance for food, chemical, pharmaceutical, and manufacturing industries.",
      images: [
          { id: 1, url: "/images/machines/maxi-heavy-vertical.jpeg", alt : "View 1" },
        { id: 2, url: "/images/machines/maxi-heavy-horizontal.jpeg", alt: "View 2" },
        { id: 3, url: "/images/machines/maxi-heavy-jambo.jpeg", alt: "View 3" },
      ],
      specifications: {
        type: "Horizontal",
        model: "MD-MBS-501",
        body: "Heavy Duty",
        fabrication: "MS body fabrication with powder coating",
        mechanicalParts: "MS Grade Steel Mechanical Parts",
        power: "230V AC Single Phase, 50Hz",
        machineWeight: "75 KG",
        sealingWidth: "10-15 mm",
        conveyorLoadCapacity: "100g - 5kg",
        conveyorHeightAdjustment: "4 inch - 18 inch",
        variableSpeed: "Available (Optional)",
        nitrogenGasFlushing: "Available (Optional)",
        productionSealingSpeed: "8 M/min",
        counterSystem: "Available (Optional)",
      },
      buttons: {
        primary: { text: "Send Inquiry" },
        secondary: { text: "Get Quotation" },
      },
    },
  4: {
      id: 4,
      title: "Auto Impulse Sealing Machine",
      description:
        "The Vertical Auto Impulse Sealing Machine is designed for high-precision heat sealing of thermoplastic bags. By operating vertically, it safely seals bags filled with free-flowing liquids or powders. It features an automated timer-controlled electromagnet that closes the sealing jaws, reducing operator fatigue and increasing packaging uniformity.",
      images: [
             { id: 1, url: "/images/machines/auto-impulse-vertical.jpeg", alt: "View 1" },

   
      
      ],
      specifications: {
        type: "Vertical Auto Impulse",
        model: "AIS-V-400",
        operationMode: "Auto / Manual (Foot Pedal)",
        power: "230V AC Single Phase, 50Hz",
        machineWeight: "25 KG",
        sealingLength: "Up to 400 mm",
        sealingWidth: "3-5 mm",
        heatingTime: "0.2 - 2.5 Seconds (Adjustable)",
        coolingTime: "Adjustable",
        suitableMaterials: "PE, PP, LDPE, Laminated Films",
      },
      buttons: {
        primary: { text: "Send Inquiry" },
        secondary: { text: "Get Quotation" },
      },
    },

   5: {
      id: 5,
      title: "Foot Operated Impulse Sealing Machine",
      description:
        "The Foot Operated Impulse Sealing Machine is designed for efficient manual sealing of plastic and laminated pouches. Operated using a foot pedal, it provides strong, uniform seals with adjustable sealing time. It is suitable for food, pharmaceutical, textile, and industrial packaging applications.",
      images: [
        { id: 1, url: "/images/machines/foot-operated-impulse.jpeg", alt: "View 1" },
        // { id: 2, url: "/images/machines/foot-operated-impulse.jpeg", alt: "View 2" },
      ],
      specifications: {
        model: "MD-FS-400",
        sealingLength: "400 mm",
        sealingWidth: "5 mm",
        power: "500W",
        voltage: "230V AC Single Phase",
        operation: "Foot Operated",
        body: "Heavy Duty MS Body",
        machineWeight: "25 KG",
      },
      buttons: {
        primary: { text: "Send Inquiry" },
        secondary: { text: "Get Quotation" },
      },
    },

    6: {
  id: 6,
  title: "Foot Operated Direct Heat Sealing Machine",
  description:
    "The Foot Operated Direct Heat Sealing Machine is built for sealing thick and laminated packaging materials with strong, consistent results. Featuring hands-free foot pedal operation and a heavy-duty MS fabricated body, it ensures reliable performance, durability, and ease of use. It is ideal for food, pharmaceutical, chemical, textile, and industrial packaging applications requiring secure and long-lasting seals.",
  images: [
    {
      id: 1,
      url: "/images/machines/oot-operated-direct-heat.jpeg",
      alt: "Foot Operated Direct Heat Sealing Machine",
    },
    // {
    //   id: 2,
    //   url: "/images/machines/foot-operated-direct-heat.jpeg",
    //   alt: "View 2",
    // },
  ],
  specifications: {
    model: "MD-FDS-102",
    availableSizes: "8 Inch / 12 Inch / 16 Inch / 20 Inch",
    sealingWidth: "15 mm",
    productionSpeed: "10-15 Pouch/min",
    body: "Heavy Duty MS Body with Powder Coating",
    mechanicalParts: "MS Grade Steel Mechanical Parts",
    power: "230V AC Single Phase, 50 Hz",
    operation: "Foot Operated",
    machineWeight: "20 KG",
  },
  buttons: {
    primary: { text: "Send Inquiry" },
    secondary: { text: "Get Quotation" },
  },
},
7: {
  id: 7,
  title: "Auto Direct Heat Sealing Machine",
  description:
    "The Auto Direct Heat Sealing Machine delivers automatic, high-quality sealing for thick and laminated packaging materials. Featuring a durable powder-coated MS body and precision-engineered mechanical components, it ensures consistent performance, reliable operation, and strong seals. It is an ideal solution for food, pharmaceutical, chemical, textile, and industrial packaging applications, helping improve productivity and packaging efficiency.",
  images: [
 
            { id: 1, url: "/images/machines/auto-impulse-horizontal.jpeg", alt: "View 1" },
    // {
    //   id: 2,
    //   url: "/images/machines/auto-direct-heat.jpeg",
    //   alt: "View 2",
    // },
  ],
  specifications: {
    model: "MD-ADS-104",
    availableSizes: "8 Inch / 12 Inch / 16 Inch / 20 Inch",
    sealingWidth: "15 mm",
    productionSpeed: "10-20 Pouch/min",
    body: "Heavy Duty MS Body with Powder Coating",
    mechanicalParts: "MS Grade Steel Mechanical Parts",
    power: "230V AC Single Phase, 50 Hz",
    operation: "Automatic",
    machineWeight: "20-35 KG (Depending on Size)",
  },
  buttons: {
    primary: { text: "Send Inquiry" },
    secondary: { text: "Get Quotation" },
  },
},
  },

  faqs: {
    header: {
      label: "FAQS",
      title: "Frequently Asked Questions",
      description:
        "Find answers to common questions about our packaging machines and services.",
    },
    sideContent: {
      image: "/image/Untitled design.jpg",
      alt: "Industrial packaging machine showcase",
      features: [
        { id: 1, title: "High Performance", icon: "performance" },
        { id: 2, title: "Durable Build", icon: "durable" },
        { id: 3, title: "Low Maintenance", icon: "maintenance" },
        { id: 4, title: "Quality Assurance", icon: "quality" },
      ],
    },
    questions: [
      {
        id: 1,
        question: "What types of packaging machines do you offer?",
        answer:
          "We offer a wide range of industrial packaging machines including band sealing machines, nitrogen gas flushing machines, cap sealing machines, foot operated impulse sealers, continuous sealing machines, and customized packaging solutions designed for different industrial applications.",
      },
      {
        id: 2,
        question: "Can machines be customized according to our requirements?",
        answer:
          "Yes, we provide customized packaging machine solutions based on your production needs, product type, packaging size, and operational requirements to ensure maximum efficiency and performance.",
      },
      {
        id: 3,
        question: "Do you provide installation and training?",
        answer:
          "Yes, our team provides complete machine installation, setup assistance, operational guidance, and basic training to ensure smooth and efficient machine usage at your facility.",
      },
      {
        id: 4,
        question: "What is the warranty period for your machines?",
        answer:
          "Our machines come with a standard warranty against manufacturing defects. Warranty duration may vary depending on the machine model and specifications.",
      },
      {
        id: 5,
        question: "Do you provide after-sales support and spare parts?",
        answer:
          "Yes, we provide reliable after-sales service support, machine maintenance assistance, troubleshooting guidance, and genuine spare parts for smooth long-term operation.",
      },
      {
        id: 6,
        question: "How long does delivery take?",
        answer:
          "Delivery timelines depend on machine type, customization requirements, and order quantity. Standard machines are usually delivered within the committed business schedule after order confirmation.",
      },
      {
        id: 7,
        question: "Which industries do you serve?",
        answer:
          "We serve multiple industries including food packaging, pharmaceutical, chemical, agriculture, FMCG, cosmetics, industrial manufacturing, and other packaging-related sectors.",
      },
    ],
  },

  videoDemo: {
    label: "MACHINE DEMONSTRATION",
    title: "Precision Sealing In Action",
    description:
      "Watch how our automated packaging solutions streamline production lines with high-speed accuracy.",

    // YouTube Data
    videoUrl: "https://www.youtube.com/embed/pilA_j0qL0c",
    videoThumbnail: "https://img.youtube.com/vi/pilA_j0qL0c/maxresdefault.jpg",

    button: {
      text: "Get Technical Specs",
      link: "/contact",
    },
  },

    otherSolutions: {
    title: "WE ALSO MANUFACTURE",
    description: "Explore our wide range of high-performance packaging machines built for every industry.",
    // Using icon names from Lucide React
    badgeIcon: "Award", 
    
    items: [
      {
        id: 1,
        title: "Hand Operate Machine",
        subTitle: "Size 8/12/16 inch",
        link: "/products/hand-operated",
        iconName: "Hand", 
      },
      {
        id: 2,
        title: "Pneumatic Heavy Duty",
        subTitle: "Size 4-50 inch | 3-10mm width",
        link: "/products/pneumatic-heavy-duty",
        iconName: "Zap", 
      },
      {
        id: 3,
        title: "Vacuum Pack Machine",
        subTitle: "Industrial Grade Sealing",
        link: "/products/vacuum-pack",
        iconName: "Wind", 
      },
      
    ],
  },
};
