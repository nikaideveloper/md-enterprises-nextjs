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
        title: "Baby band sealing machine with Nitrogen gas flushing system",
        image: "/images/baby-band-nitrogen.png",
        alt: "Baby band",
      },
      {
        id: 2,
        title: "Maxi heavy duty band sealing machine vertical type",
        image: "/images/maxi-heavy-duty-vertical.png",
        alt: "Maxi heavy",
      },
      {
        id: 3,
        title: "Baby band sealing machine horizontal type",
        image: "/images/baby-band-horizontal.png",
        alt: "Baby band horizontal",
      },
      {
        id: 4,
        title: "Foot Operator impulse sealing machine",
        image: "/images/foot-operator-impulse.png",
        alt: "Foot Operator",
      },
      {
        id: 5,
        title: "Cap sealing machine",
        image: "/images/cap-sealing-machine2.png",
        alt: "Cap sealing",
      },
    ],
  },
  productDetails: {
    1: {
      id: 1,
      title: "Baby band sealing machine with Nitrogen gas flushing system",
      description:
        "Continuous band sealing machine with nitrogen gas flushing system ensures strong, air-tight sealing with extended product shelf life.",
      images: [
        { id: 1, url: "/images/baby-band-nitrogen.png", alt: "View 1" },
        { id: 2, url: "/images/baby-band-horizontal.png", alt: "View 2" },
        { id: 3, url: "/images/maxi-heavy-duty-vertical.png", alt: "View 3" },
        { id: 4, url: "/images/cap-sealing-machine2.png", alt: "View 4" },
      ],
      keyFeatures: [
        "Stainless steel body",
        "Nitrogen gas flushing",
        "Digital temperature",
        "Continuous sealing",
      ],
      specifications: {
        model: "MDE-BS-100",
        power: "750W",
        conveyorSpeed: "0-12 m/min",
        machineSize: "950×420×380mm",
        voltage: "220V",
        sealingWidth: "8-12mm",
        temperatureRange: "0-300°C",
        machineWeight: "60 KG",
      },
      buttons: {
        primary: { text: "Send Inquiry" },
        secondary: { text: "Get Quotation" },
      },
    },
    // Add dummy entries for 2, 3, 4, 5 to prevent errors
    2: {
      id: 2,
      title: "Maxi heavy duty band sealing machine",
      description: "Heavy duty version...",
      images: [
        { id: 1, url: "/images/baby-band-nitrogen.png", alt: "View 1" },
        { id: 2, url: "/images/baby-band-horizontal.png", alt: "View 2" },
        { id: 3, url: "/images/maxi-heavy-duty-vertical.png", alt: "View 3" },
        { id: 4, url: "/images/cap-sealing-machine2.png", alt: "View 4" },
      ],
      keyFeatures: ["Heavy duty"],
      specifications: { model: "MAXI-100", power: "1000W" },
      buttons: {
        primary: { text: "Send Inquiry" },
        secondary: { text: "Get Quotation" },
      },
    },
    3: {
      id: 3,
      title: "Baby band sealing machine horizontal",
      description: "Horizontal type...",
      images: [
        { id: 1, url: "/images/baby-band-nitrogen.png", alt: "View 1" },
        { id: 2, url: "/images/baby-band-horizontal.png", alt: "View 2" },
        { id: 3, url: "/images/maxi-heavy-duty-vertical.png", alt: "View 3" },
        { id: 4, url: "/images/cap-sealing-machine2.png", alt: "View 4" },
      ],
      keyFeatures: ["Horizontal"],
      specifications: { model: "HORIZ-100", power: "500W" },
      buttons: {
        primary: { text: "Send Inquiry" },
        secondary: { text: "Get Quotation" },
      },
    },
    4: {
      id: 4,
      title: "Foot Operator impulse sealing",
      description: "Manual operation...",
      images: [
        { id: 1, url: "/images/baby-band-nitrogen.png", alt: "View 1" },
        { id: 2, url: "/images/baby-band-horizontal.png", alt: "View 2" },
        { id: 3, url: "/images/maxi-heavy-duty-vertical.png", alt: "View 3" },
        { id: 4, url: "/images/cap-sealing-machine2.png", alt: "View 4" },
      ],
      keyFeatures: ["Foot pedal"],
      specifications: { model: "FOOT-100", power: "300W" },
      buttons: {
        primary: { text: "Send Inquiry" },
        secondary: { text: "Get Quotation" },
      },
    },
    5: {
      id: 5,
      title: "Cap sealing machine",
      description: "For bottles and caps...",
      images: [
        { id: 1, url: "/images/baby-band-nitrogen.png", alt: "View 1" },
        { id: 2, url: "/images/baby-band-horizontal.png", alt: "View 2" },
        { id: 3, url: "/images/maxi-heavy-duty-vertical.png", alt: "View 3" },
        { id: 4, url: "/images/cap-sealing-machine2.png", alt: "View 4" },
      ],
      keyFeatures: ["Induction sealing"],
      specifications: { model: "CAP-100", power: "400W" },
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
    description: "Watch how our automated packaging solutions streamline production lines with high-speed accuracy.",
    
    // YouTube Data
    videoUrl: "https://www.youtube.com/embed/pilA_j0qL0c", 
    videoThumbnail: "https://img.youtube.com/vi/pilA_j0qL0c/maxresdefault.jpg",
    
    button: {
      text: "Get Technical Specs",
      link: "/contact",
    },
  },

};
