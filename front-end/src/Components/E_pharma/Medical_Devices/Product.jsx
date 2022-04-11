const list =[
    {
        id: 21,
        title: "Sahyog Wellness Hot Water Bottle/Bag - Red",
        Mkt: "Sahyog Wellness",
        Price:  249.00,
        img: "https://m.media-amazon.com/images/I/61Hvqg+2g0L._SL1000_.jpg",
    },
    {
        id: 22,
        title: "Omron Compressor Nebulizer (NE-C101)",
        Mkt: " Omron Healthcare Co Ltd",
        Price:  1904.00,
        img: "https://m.media-amazon.com/images/I/6148q470FVL._SX679_.jpg",
    },
    {
        id: 23,
        title: "Omron Automatic Blood Pressure Monitor (HEM-7120)",
        Mkt: "Omron Healthcare Co Ltd",
        Price: 1864.00,
        img: "https://m.media-amazon.com/images/I/81eIfnfHiIL._SL1500_.jpg",
    },
    {
        id: 24,
        title: "MaxioCel Chitson Wound Dressing (5 cm X 10 cm) (Box of 10)",
        Mkt: " Axio Biosolutions Pvt.Ltd.",
        Price: 2490.00,
        img: "data:image/jpeg;base64,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",
    },
    {
        id: 25,
        title: "Vandelay Electric Handheld Full Body Massager - White",
        Mkt: "SFT Technologies Private Limited",
        Price: 1999.60,
        img: "data:image/jpeg;base64,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",
    },
    {
        id: 26,
        title: "MaxioCel Chitson Wound Dressing (5 cm X 10 cm) (10 cm X 10 cm) (2.5 cm X 30 cm) 1's each",
        Mkt: "Axio Biosolutions Pvt.Ltd.",
        Price:  999.70,
        img: "https://www.netmeds.com/images/product-v1/600x600/980371/maxiocel_chitson_wound_dressing_50_gm_0_0.jpg",
    },
    {
        id: 27,
        title: "OneTouch Select Plus Simple Blood Glucose Monitoring System (Free 10 Test Strips + Lancing Device + 10 Lancets)",
        Mkt: "  Lifescan Medical Device India Pvt Ltd",
        Price:  875.16,
        img: "https://www.netmeds.com/images/product-v1/600x600/854053/onetouch_select_plus_simple_blood_glucose_monitoring_system_10_test_strips_0_4.jpg",
    },
    {
        id: 28,
        title: "Sahyog Wellness 3 in 1 Steam Vaporizer Kit",
        Mkt: "Sahyog Wellness",
        Price: 395.56,
        img: "https://www.netmeds.com/images/product-v1/600x600/915644/sahyog_wellness_3_in_1_steam_vaporizer_kit_0_2.jpg",
   
    },
    {
        id: 29,
        title: "Dr. Odin Smart - Foldable Walking Stick (GB-819)",
        Mkt: "PASSIM MEDICHEM AGENCIES",
        Price: 2350.00,
        img: "https://www.netmeds.com/images/product-v1/600x600/965304/dr_odin_smart_foldable_walking_stick_gb_819_0_0.jpg",
    },
    {
        id: 30,
        title: "VIAGGI U Shape Memory Foam Printed Travel Neck Pillow - Sky Blue",
        Mkt: "VIAGGI Travel World",
        Price: 1499.60,
        img: "https://www.netmeds.com/images/product-v1/600x600/906742/viaggi_u_shape_memory_foam_printed_travel_neck_pillow_sky_blue_0_2.jpg",
    },

];
export default list;


