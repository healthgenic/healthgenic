const list =[
    {
        id: 1,
        title: "PACTOL 650mg Tablet 10's",
        Mkt: "West Coast Pharmaceutical Works Ltd",
        Price:  15.00,
        img: "https://www.netmeds.com/images/product-v1/600x600/905484/pactol_650mg_tablet_10s_0_0.jpg",
        
    
    
    },
    {
        id: 2,
        title: "Saridon Headache Relief Tablet 10's",
        Mkt: "Piramal Healthcare Ltd",
        Price:  30.80,
        img: "https://www.netmeds.com/images/product-v1/600x600/109486/saridon_tablet_10s_0_2.jpg",
    },
    {
        id: 3,
        title: "Similia Feverid Syrup 60 ml",
        Mkt: "Omron Healthcare Co Ltd",
        Price: 1864.00,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlcvQIvDUIE0TscOqneXMhlg-LEY6kHEuzqw&usqp=CAU",
    },
    {
        id: 4,
        title: "MaxioCel Chitson Wound Dressing (5 cm X 10 cm) (Box of 10)",
        Mkt: " Similia Homoeo Laboratory",
        Price: 70.00,
        img: "data:image/jpeg;base64,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",
        
    },
    {
        id: 5,
        title: "WIN BP H 20/12.5mg Tablet 10'S",
        Mkt: "Abbott Healthcare Pvt Ltd",
        Price: 126.60,
        img: "https://www.netmeds.com/images/product-v1/600x600/formulation_based/tablets.jpg",
        
    },
    {
        id: 6,
        title: "Dr. Vaidya's Herbo24Turbo Capsule (Pack of 2 x 30's)",
        Mkt: "Herbolab India Pvt Ltd",
        Price:  1000.80,
        img: "https://www.netmeds.com/images/product-v1/600x600/953776/dr_vaidyas_herbo24turbo_capsule_pack_of_2_x_30s_0_0.jpg",
    },
    {
        id: 7,
        title: "Wokadine 2% with Menthol Gargle 100ml",
        Mkt: " Dr Reddy'S Laboratories Ltd",
        Price: 144.00,
        img: "https://www.netmeds.com/images/product-v1/600x600/112579/wokadine_gargle_100ml_0.jpg",
       
    },
    {
        id: 8,
        title: "Zincovit Tablet 15's",
        Mkt: " Apex Laboratories Pvt. Ltd.",
        Price: 89.25,
        img: "https://www.practostatic.com/practopedia-images/v3/res-150/zincovit-tablet-15-s_b65a0677-01fc-4490-aa89-d357ecab7166.JPG",
    },
    {
        id: 9,
        title: "Paracip 650 MG Tablet",
        Mkt: "Cipla Ltd.",
        Price: 17.51,
        img: "https://www.netmeds.com/images/product-v1/600x600/369512/paracip_650mg_tablet_10_s_0.jpg",
    },
    {
        id: 10,
        title: "DICLO (MORPHEN LABS) 50MG TABLET 10`S",
        Mkt: "MOREPEN LABORATORIES LIMITED",
        Price:  87.80,
        img: "https://www.practostatic.com/ecommerce-assets/static/media/placeholder_product.39dd65c8.png",
    },

];
export default list;


