var express = require("express");
var app = express();
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );  
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");   
  next();
});
var port = process.env.PORT || 2410;
app.listen(port, () => console.log(`Node app listening on port ${port}!`));

let mobile=[

  {
    id:"product1",
    category:"Sandwich Makers",
    label:"Pestige, Nova & more",
    label2:"From 99+5% Off",
    name:"Flipkart SmartBuy Sandwich 01 Grill (Black)",
    img:"https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70",
    ratingDesc:"8 rating and 1 reviews",
    price:899,
    assured:true,
    prevPrice:1499,
    discount:40,
    EMI:"No Cost EMI",
    warranty:"No Warranty",
    delivery:"Delivery by Sun May 14,2023",
    offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Get extra 20% off upto ₹50 on 1 items'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Sign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹1000'},  
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% off on ICICI Bank Credit Card EMI Transactions, up to ₹1250, on orders of ₹5,000 and above'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% off on IDBI Bank Debit and Credit Card Transactions, up to ₹500. On orders of ₹1,500 and above'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Flat ₹100 Instant Cashback on Paytm Wallet. Min Order Value ₹1000. Valid once per Paytm account'},
        ]
  },
  {
    id:"product2",
    category:"Fitness Gear",
    label:"Deal of the Day",
    label2:"Upto 70% Off",
    name:"AJRO DEAL New Adjustable Single Resistance Tube (Multicolor) Resistance Tube (Multicolor)",
    img:"https://rukminim1.flixcart.com/image/416/416/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70",
    ratingDesc:"8 rating and 1 reviews",
    price:166,
    assured:true,
    prevPrice:499,
    discount:66,
    EMI:"No Cost EMI",
    warranty:"No Warranty",
    delivery:"Delivery by Sun May 14,2023",
    offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Get extra 20% off upto ₹50 on 1 items'},
            {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Sign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹1000'},  
            {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% off on ICICI Bank Credit Card EMI Transactions, up to ₹1250, on orders of ₹5,000 and above'},
            {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% off on IDBI Bank Debit and Credit Card Transactions, up to ₹500. On orders of ₹1,500 and above'},
            {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Flat ₹100 Instant Cashback on Paytm Wallet. Min Order Value ₹1000. Valid once per Paytm account'},
    ]
  },
  {
    id:"product3",
    category:"Smart Watches",
    label:"Best Seller",
    label2:"Grab Now",
    name:"Molife Sense 500 Smartwatch (Black Strap, Freesize)",
    img:"https://rukminim1.flixcart.com/image/416/416/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70",
    ratingDesc:"8 rating and 1 reviews",
    price:4049,
    assured:true,
    prevPrice:6999,
    discount:42,
    EMI:"No Cost EMI",
    warranty:"No Warranty",
    delivery:"Delivery by Sun May 14,2023",
    offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Get extra 20% off upto ₹50 on 1 items'},
            {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Sign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹1000'},  
            {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% off on ICICI Bank Credit Card EMI Transactions, up to ₹1250, on orders of ₹5,000 and above'},
            {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% off on IDBI Bank Debit and Credit Card Transactions, up to ₹500. On orders of ₹1,500 and above'},
            {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Flat ₹100 Instant Cashback on Paytm Wallet. Min Order Value ₹1000. Valid once per Paytm account'},
    ]
  },
  {
    id:"product4",
    category:"Home & Kitchen",
    label:"Deal of the Day",
    label2:"Extra 10% Off",
    name:"Pigeon FAVOURITE Electric Kettle (1.5 L, Silver, Black)",
    img:"https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70",
    ratingDesc:"8 rating and 1 reviews",
    price:625,
    assured:true,
    prevPrice:1195,
    discount:47,
    EMI:"No Cost EMI",
    warranty:"No Warranty",
    delivery:"Delivery by Sun May 14,2023",
    offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Get extra 20% off upto ₹50 on 1 items'},
            {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Sign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹1000'},  
            {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% off on ICICI Bank Credit Card EMI Transactions, up to ₹1250, on orders of ₹5,000 and above'},
            {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% off on IDBI Bank Debit and Credit Card Transactions, up to ₹500. On orders of ₹1,500 and above'},
            {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Flat ₹100 Instant Cashback on Paytm Wallet. Min Order Value ₹1000. Valid once per Paytm account'},
    ]
  },
  {
    id:"product5",
    category:"Trimmers, Dryers & more",
    label:"Kubra, Nova & more",
    label2:"From 499",
    name:"Nova Professional NHP 8220 Hair Dryer (1800 W, Multicolor)",
    img:"https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70",
    ratingDesc:"8 rating and 1 reviews",
    price:1124,
    assured:true,
    prevPrice:1899,
    discount:40,
    EMI:"No Cost EMI",
    warranty:"No Warranty",
    delivery:"Delivery by Sun May 14,2023",
    offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Get extra 20% off upto ₹50 on 1 items'},
            {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Sign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹1000'},  
            {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% off on ICICI Bank Credit Card EMI Transactions, up to ₹1250, on orders of ₹5,000 and above'},
            {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% off on IDBI Bank Debit and Credit Card Transactions, up to ₹500. On orders of ₹1,500 and above'},
            {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Flat ₹100 Instant Cashback on Paytm Wallet. Min Order Value ₹1000. Valid once per Paytm account'},
    ]
  },
  {
    id:"product6",
    category:"Table Fans",
    label:"Top Selling",
    label2:"Minimum 40% off",
    name:"Portable 300 mm Ultra High Speed 3 Blade Table Fan (Black, Pack of 1)",
    img:"https://rukminim1.flixcart.com/image/416/416/kk01pjk0/fan/d/d/l/tiktik-quiet-portable-table-fan-zigma-original-imafzg7ftzuckpad.jpeg?q=70",
    ratingDesc:"8 rating and 1 reviews",
    price:1199,
    assured:true,
    prevPrice:2250,
    discount:46,
    EMI:"No Cost EMI",
    warranty:"No Warranty",
    delivery:"Delivery by Sun May 14,2023",
    offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Get extra 20% off upto ₹50 on 1 items'},
            {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Sign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹1000'},  
            {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% off on ICICI Bank Credit Card EMI Transactions, up to ₹1250, on orders of ₹5,000 and above'},
            {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% off on IDBI Bank Debit and Credit Card Transactions, up to ₹500. On orders of ₹1,500 and above'},
            {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Flat ₹100 Instant Cashback on Paytm Wallet. Min Order Value ₹1000. Valid once per Paytm account'},
    ]
  },
  {
    id:"product7",
    category:"Headphones",
    label:"Grab Now!",
    label2:"Minimum 50% off",
    name:"boAt Rockerz 235v2 with ASAP charging Version 5.0 Bluetooth Headset",
    img:"https://rukminim1.flixcart.com/image/416/416/kcgk1ow0/headphone/n/u/a/235v2-fast-charging-boat-original-imaftk6us4af7bca.jpeg?q=70",
    ratingDesc:"8 rating and 1 reviews",
    price:1199,
    assured:true,
    prevPrice:2990,
    discount:59,
    EMI:"No Cost EMI",
    warranty:"No Warranty",
    delivery:"Delivery by Sun May 14,2023",
    offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Get extra 20% off upto ₹50 on 1 items'},
            {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Sign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹1000'},  
            {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% off on ICICI Bank Credit Card EMI Transactions, up to ₹1250, on orders of ₹5,000 and above'},
            {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% off on IDBI Bank Debit and Credit Card Transactions, up to ₹500. On orders of ₹1,500 and above'},
            {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Flat ₹100 Instant Cashback on Paytm Wallet. Min Order Value ₹1000. Valid once per Paytm account'},
    ]
  },










    {

      id: "M1",
      category: "Mobiles",
      brand: "Mi",
      name: "Redmi 8 (Sapphire Blue, 64 GB)",
      img:
        "https://i.ibb.co/vzy2NfL/mi-redmi-8-mzb8253in-original-imafhyacjwjwxmsx.jpg",
      rating: 4.5,
      ratingDesc: "95082 Rating & 9727 Reviews",
      details: [
        "4 GB RAM | 64 GB ROM | Expandable Upto 512 GB",
        "15.8 cm (6.22 inch) HD+ Display",
        "12MP + 2MP | 8MP Front Camera",
        "5000 mAh Battery",
        "Qualcomm Snapdragon 439 Processor",
        "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories"
      ],
      price: 7999,
      assured: true,
      prevPrice: 10999,
      discount: 27,
      EMI: "No Cost EMI",
      exchange: "Upto 7700 on Exchange",
      ram: 4,
      popularity: 76670,
      offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
      {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
      {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
      ]
    }, 
    {"id":'M18',
    "category":'Mobiles',"brand":'RealMe',"name":'Realme XT (Pearl Blue, 64 GB)',"img":'https://i.ibb.co/sQg5Bqd/realme-xt-rmx1921-original-imafk8h2gbyatyyr.jpg',"rating":'4.4',"ratingDesc":'43,120 Ratings & 3,440 Reviews',"details":['4 GB RAM | 32 GB ROM | Expandable Upto 512 GB','15.8 cm (6.22 inch) HD+ Display','Qualcomm Snapdragon 439 Processor','12MP Rear Camera | 8MP Front Camera','5000 mAh Battery','Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'],"price":6499,"prevPrice":8900,"discount":26,"emi":'No Cost EMI',"assured":true,"exchange":'',"ram":4,"popularity":76670,
    offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
    {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
    {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
    ]},
    {
      id: "M2",
      category: "Mobiles",
      brand: "Mi",
      name: "Redmi 8 (Ruby Red, 64 GB)",
      img:
        "https://i.ibb.co/4W96nDZ/mi-redmi-8-mzb8251in-original-imafhyacmxaefxgw.jpg",
      rating: 4.5,
      ratingDesc: "95348 Rating & 9727 Reviews",
      details: [
        "4 GB RAM | 64 GB ROM | Expandable Upto 512 GB",
        "15.8 cm (6.22 inch) HD+ Display",
        "12MP + 2MP | 8MP Front Camera",
        "5000 mAh Battery",
        "Qualcomm Snapdragon 439 Processor",
        "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories"
      ],
      price: 7999,
      assured: true,
      prevPrice: 10999,
      discount: 27,
      EMI: "No Cost EMI",
      exchange: "Upto 7700 on Exchange",
      ram: 4,
      popularity: 76070,
      offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
      {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
      {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
      ]
    },
    {"id":'M46',"category":'Mobiles',"brand":'Apple',"name":'Apple iPhone XR (Black, 64 GB)',"img":'https://i.ibb.co/c3mDqg3/apple-iphone-xr-mryj2hn-a-original-imafa6zkm7qhv2zd.jpg',"rating":'4.6',"ratingDesc":'6,360 Ratings & 554 Reviews',"details":['15.49 cm (6.1 inch) Display','64 GB ROM |','12MP Rear Camera | 7MP Front Camera','A12 Bionic Chip Processor','Brand Warranty of 1 Year','iOS 13 Compatible'],"price":47900,"prevPrice":49900,"discount":4,"emi":'',"assured":true,"exchange":'Upto ₹10,800 Off on Exchange',"ram":64,"popularity":6360,
    offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
    {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
    {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
    ]},
    {
      id: "M3",
      category: "Mobiles",
      brand: "Mi",
      name: "Redmi 8A (Ocean Blue, 32 GB)",
      img:
        "https://i.ibb.co/BLx04L2/mi-redmi-8a-mzb8458in-original-imafkmhycvhcsrzm.jpg",
      rating: 4.5,
      ratingDesc: "95082 Rating & 9727 Reviews",
      details: [
        "3 GB RAM | 32 GB ROM | Expandable Upto 512 GB",
        "15.8 cm (6.22 inch) HD+ Display",
        "12MP Rear Camera | 8MP Front Camera",
        "5000 mAh Battery",
        "Qualcomm Snapdragon 439 Processor",
        "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories"
      ],
      price: 6999,
      assured: true,
      prevPrice: 8999,
      discount: 22,
      EMI: "No Cost EMI",
      exchange: "Upto ₹6950 on Exchange",
      ram: 3,
      popularity: 76670,
      offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
      {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
      {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
      ]
    },
    {
      id: "M4",
      category: "Mobiles",
      brand: "Mi",
      name: "Redmi 8A (Midnight Black, 32 GB)",
      img:
        "https://i.ibb.co/nQRQhJj/mi-redmi-8a-mzb8298in-original-imafkmhqztfbabww.jpg",
      rating: "4.4",
      ratingDesc: "4.443,156 Ratings & 3,440 Reviews",
      details: [
        "2 GB RAM | 32 GB ROM | Expandable Upto 512 GB",
        "15.8 cm (6.22 inch) HD+ Display",
        "Qualcomm Snapdragon 439 Processor",
        "12MP Rear Camera | 8MP Front Camera",
        "5000 mAh Battery",
        "Brand Warranty of 1 Year Available for Mobile and 6 Months"
      ],
      price: 6499,
      prevPrice: 7999,
      discount: 18,
      emi: "No Cost EMI",
      assured: true,
      exchange: "",
      ram: 2,
      popularity: 76670,
      offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
      {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
      {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
      ]
    },
    {"id":'M33',"category":'Mobiles',"brand":'Samsung',"name":'Samsung Galaxy A10 (Stainless Steel, 32 GB)',"img":'https://i.ibb.co/xF0Y2RZ/galaxy-a70s-128-c-sm-a707fzkmins-samsung-6-original-imafkx3fhzp9rz9a.jpg',"rating":'4.4',"ratingDesc":'50,597 Ratings & 5,185 Reviews',"details":['4 GB RAM | 32 GB ROM | Expandable Upto 512 GB','15.8 cm (6.22 inch) HD+ Display','Qualcomm Snapdragon 439 Processor','12MP Rear Camera | 8MP Front Camera','5000 mAh Battery','Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'],"price":9999,"prevPrice":11999,"discount":17,"emi":'No Cost EMI',"assured":true,"exchange":'',"ram":4,"popularity":76670,
    offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
    {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
    {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
    ]},
    {
      id: "M5",
      category: "Mobiles",
      brand: "Mi",
      name: "Redmi 8A (Sunset Red, 32 GB)",
      img:
        "https://i.ibb.co/27ZhMDd/mi-redmi-8a-mzb8459in-original-imafkmg2mza82yyu.jpg",
      rating: "4.4",
      ratingDesc: "4.443,156 Ratings & 3,440 Reviews",
      details: [
        "2 GB RAM | 32 GB ROM | Expandable Upto 512 GB",
        "15.8 cm (6.22 inch) HD+ Display",
        "Qualcomm Snapdragon 439 Processor",
        "12MP Rear Camera | 8MP Front Camera",
        "5000 mAh Battery",
        "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories"
      ],
      price: 6499,
      prevPrice: 7999,
      discount: 18,
      emi: "No Cost EMI",
      assured: true,
      exchange: "",
      ram: 2,
      popularity: 97083,
      offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
      {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
      {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
      ]
    },
    {
      id: "M6",
      category: "Mobiles",
      brand: "Mi",
      name: "Redmi 7A (Matte Blue, 32 GB)",
      img:
        "https://i.ibb.co/DKtd3h6/mi-redmi-7a-mzb8008in-original-imafg27hramfktfs.jpg",
      rating: "4.4",
      ratingDesc: "4.32,39,949 Ratings & 17,990 Reviews",
      details: [
        "6 GB RAM | 32 GB ROM | Expandable Upto 512 GB",
        "13.84 cm (5.45 inch) HD+ Display",
        "Qualcomm Snapdragon 439 Processor",
        "12MP Rear Camera | 8MP Front Camera",
        "5000 mAh Battery",
        "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories"
      ],
      price: 6199,
      prevPrice: 13999,
      discount: 11,
      emi: "No Cost EMI",
      assured: true,
      exchange: "",
      ram: 6,
      popularity: 97083,
      offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
      {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
      {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
      ]
    },
    {
      id: "M7",
      category: "Mobiles",
      brand: "Mi",
      name: "Redmi 8A (Sunset Red, 32 GB)",
      img:
        "https://i.ibb.co/NZN04Ss/mi-redmi-note-7s-mzb7742in-original-imafe48ru3s66sjd.jpg",
      rating: "4.3",
      ratingDesc: "4.443,156 Ratings & 3,440 Reviews",
      details: [
        "2 GB RAM | 32 GB ROM | Expandable Upto 512 GB",
        "15.8 cm (6.22 inch) HD+ Display",
        "Qualcomm Snapdragon 439 Processor",
        "12MP Rear Camera | 8MP Front Camera",
        "5000 mAh Battery",
        "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories"
      ],
      price: 12499,
      prevPrice: 13999,
      discount: 18,
      emi: "No Cost EMI",
      assured: true,
      exchange: "",
      ram: 2,
      popularity: 76670,
      offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
      {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
      {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
      ]
    },
    {
      id: "M8",
      category: "Mobiles",
      brand: "Mi",
      name: "Redmi 8A (Sunset Red, 32 GB)",
      img:
        "https://i.ibb.co/NZN04Ss/mi-redmi-note-7s-mzb7742in-original-imafe48ru3s66sjd.jpg",
      rating: "4.4",
      ratingDesc: "4.443,156 Ratings & 3,440 Reviews",
      details: [
        "2 GB RAM | 32 GB ROM | Expandable Upto 512 GB",
        "15.8 cm (6.22 inch) HD+ Display",
        "Qualcomm Snapdragon 439 Processor",
        "12MP Rear Camera | 8MP Front Camera",
        "5000 mAh Battery",
        "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories"
      ],
      price: 10499,
      prevPrice: 14999,
      discount: 18,
      emi: "No Cost EMI",
      assured: true,
      exchange: "",
      ram: 2,
      popularity: 97083,
      offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
      {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
      {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
      ]
    },
    {
      id: "M9",
      category: "Mobiles",
      brand: "Mi",
      name: "Redmi 8 (Sunset Red, 32 GB)",
      img:
        "https://i.ibb.co/J3p0Cdz/mi-redmi-note-7-pro-na-original-imafe4bddnr7n5vb.jpg",
      rating: "4.4",
      ratingDesc: "4.443,156 Ratings & 3,440 Reviews",
      details: [
        "2 GB RAM | 32 GB ROM | Expandable Upto 512 GB",
        "15.8 cm (6.22 inch) HD+ Display",
        "Qualcomm Snapdragon 439 Processor",
        "12MP Rear Camera | 8MP Front Camera",
        "5000 mAh Battery",
        "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories"
      ],
      price: 6499,
      prevPrice: 7999,
      discount: 18,
      emi: "No Cost EMI",
      assured: true,
      exchange: "",
      ram: 2,
      popularity: 97083
    },
    {
      id: "M10",
      category: "Mobiles",
      brand: "Mi",
      name: "Redmi 8 (Sunset Red, 32 GB)",
      img:
        "https://i.ibb.co/27ZhMDd/mi-redmi-8a-mzb8459in-original-imafkmg2mza82yyu.jpg",
      rating: "4.2",
      ratingDesc: "4.443,156 Ratings & 3,440 Reviews",
      details: [
        "6 GB RAM | 32 GB ROM | Expandable Upto 512 GB",
        "15.8 cm (6.22 inch) HD+ Display",
        "Qualcomm Snapdragon 439 Processor",
        "12MP Rear Camera | 8MP Front Camera",
        "5000 mAh Battery",
        "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories"
      ],
      price: 6499,
      prevPrice: 7999,
      discount: 18,
      emi: "No Cost EMI",
      assured: true,
      exchange: "",
      ram: 6,
      popularity: 97083,
      offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
      {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
      {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
      ]
    },
    {
      id: "M11",
      category: "Mobiles",
      brand: "Mi",
      name: "Redmi Note (Sunset Red, 32 GB)",
      img:
        "https://i.ibb.co/27ZhMDd/mi-redmi-8a-mzb8459in-original-imafkmg2mza82yyu.jpg",
      rating: "4.4",
      ratingDesc: "4.443,156 Ratings & 3,440 Reviews",
      details: [
        "2 GB RAM | 32 GB ROM | Expandable Upto 512 GB",
        "15.8 cm (6.22 inch) HD+ Display",
        "Qualcomm Snapdragon 439 Processor",
        "12MP Rear Camera | 8MP Front Camera",
        "5000 mAh Battery",
        "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories"
      ],
      price: 6499,
      prevPrice: 7999,
      discount: 18,
      emi: "No Cost EMI",
      assured: true,
      exchange: "",
      ram: 2,
      popularity: 97083,
      offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
      {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
      {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
      ]
    },
    {
      id: "M12",
      category: "Mobiles",
      brand: "Mi",
      name: "Redmi Note (Sunset Red, 32 GB)",
      img:
        "https://i.ibb.co/27ZhMDd/mi-redmi-8a-mzb8459in-original-imafkmg2mza82yyu.jpg",
      rating: "4.2",
      ratingDesc: "4.443,156 Ratings & 3,440 Reviews",
      details: [
        "2 GB RAM | 32 GB ROM | Expandable Upto 512 GB",
        "15.8 cm (6.22 inch) HD+ Display",
        "Qualcomm Snapdragon 439 Processor",
        "12MP Rear Camera | 8MP Front Camera",
        "5000 mAh Battery",
        "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories"
      ],
      price: 6499,
      prevPrice: 7999,
      discount: 18,
      emi: "No Cost EMI",
      assured: true,
      exchange: "",
      ram: 2,
      popularity: 76670,
      offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
      {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
      {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
      ]
    },
    {
      id: "M13",
      category: "Mobiles",
      brand: "Mi",
      name: "Redmi Poco F1 (Sunset Red, 32 GB)",
      img:
        "https://i.ibb.co/27ZhMDd/mi-redmi-8a-mzb8459in-original-imafkmg2mza82yyu.jpg",
      rating: "4",
      ratingDesc: "4.443,156 Ratings & 3,440 Reviews",
      details: [
        "2 GB RAM | 32 GB ROM | Expandable Upto 512 GB",
        "15.8 cm (6.22 inch) HD+ Display",
        "Qualcomm Snapdragon 439 Processor",
        "12MP Rear Camera | 8MP Front Camera",
        "5000 mAh Battery",
        "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories"
      ],
      price: 6499,
      prevPrice: 7999,
      discount: 18,
      emi: "No Cost EMI",
      assured: true,
      exchange: "",
      ram: 2,
      popularity: 97083,
      offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
      {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
      {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
      ]
    },
    {"id":'M14',
    offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
      {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
      {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
      {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
      ],"category":'Mobiles',"brand":'Mi',"name":'Redmi Poco F1 (Sunset Red, 32 GB)',"img":'https://i.ibb.co/27ZhMDd/mi-redmi-8a-mzb8459in-original-imafkmg2mza82yyu.jpg',"rating":'4',"ratingDesc":'4.443,156 Ratings & 3,440 Reviews',"details":['6 GB RAM | 32 GB ROM | Expandable Upto 512 GB','15.8 cm (6.22 inch) HD+ Display','Qualcomm Snapdragon 439 Processor','12MP Rear Camera | 8MP Front Camera','5000 mAh Battery','Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'],"price":6499,"prevPrice":7999,"discount":18,"emi":'No Cost EMI',"assured":true,"exchange":'',"ram":6,"popularity":97083},
    {"id":'M15',offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
    {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
    {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
    ],"category":'Mobiles',"brand":'Mi',"name":'Redmi Note 5 (Sunset Red, 32 GB)',"img":'https://i.ibb.co/27ZhMDd/mi-redmi-8a-mzb8459in-original-imafkmg2mza82yyu.jpg',"rating":'4.4',"ratingDesc":'4.443,156 Ratings & 3,440 Reviews',"details":['2 GB RAM | 32 GB ROM | Expandable Upto 512 GB','15.8 cm (6.22 inch) HD+ Display','Qualcomm Snapdragon 439 Processor','12MP Rear Camera | 8MP Front Camera','5000 mAh Battery','Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'],"price":6499,"prevPrice":7999,"discount":18,"emi":'No Cost EMI',"assured":true,"exchange":'',"ram":2,"popularity":97083},
    {"id":'M16',offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
    {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
    {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
    ],"category":'Mobiles',"brand":'Mi',"name":'Redmi Note 5 (Sunset Red, 32 GB)',"img":'https://i.ibb.co/27ZhMDd/mi-redmi-8a-mzb8459in-original-imafkmg2mza82yyu.jpg',"rating":'4.4',"ratingDesc":'43,156 Ratings & 3,440 Reviews',"details":['6 GB RAM | 32 GB ROM | Expandable Upto 512 GB','','Qualcomm Snapdragon 439 Processor','12MP Rear Camera | 8MP Front Camera','5000 mAh Battery','Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'],"price":89999,"prevPrice":10999,"discount":18,"emi":'',"assured":true,"exchange":'',"ram":6,"popularity":76670},
    {"id":'M17',offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
    {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
    {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
    ],"category":'Mobiles',"brand":'RealMe',"name":'Realme XT (Pearl White, 64 GB)',"img":'https://i.ibb.co/3sCg6NQ/realme-xt-rmx1921-original-imafk8h2dnnubezk.jpg',"rating":'3.1',"ratingDesc":'43,156 Ratings & 3,440 Reviews',"details":['4 GB RAM | 32 GB ROM | Expandable Upto 512 GB','15.8 cm (6.22 inch) HD+ Display','Qualcomm Snapdragon 439 Processor','12MP Rear Camera | 8MP Front Camera','5000 mAh Battery','Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'],"price":7499,"prevPrice":8999,"discount":16,"emi":'No Cost EMI',"assured":true,"exchange":'Upto ₹7,350 Off on Exchange',"ram":4,"popularity":76670},
    {"id":'M19',offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
    {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
    {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
    ],"category":'Mobiles',"brand":'RealMe',"name":'Realme 5 (Pearl Blue, 64 GB)',"img":'https://i.ibb.co/3sCg6NQ/realme-xt-rmx1921-original-imafk8h2dnnubezk.jpg',"rating":'4.3',"ratingDesc":'43,156 Ratings & 3,440 Reviews',"details":['3 GB RAM | 32 GB ROM | Expandable Upto 512 GB','15.8 cm (6.22 inch) HD+ Display','Qualcomm Snapdragon 439 Processor','12MP Rear Camera | 8MP Front Camera','5000 mAh Battery','Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'],"price":7099,"prevPrice":9999,"discount":29,"emi":'No Cost EMI',"assured":true,"exchange":'',"ram":3,"popularity":67700},
    {"id":'M20',offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
    {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
    {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
    ],"category":'Mobiles',"brand":'RealMe',"name":'Realme 5 (Pearl White, 64 GB)',"img":'https://i.ibb.co/sQg5Bqd/realme-xt-rmx1921-original-imafk8h2gbyatyyr.jpg',"rating":'4.4',"ratingDesc":'43,156 Ratings & 3,440 Reviews',"details":['3 GB RAM | 32 GB ROM | Expandable Upto 512 GB','15.8 cm (6.22 inch) HD+ Display','Qualcomm Snapdragon 439 Processor','12MP Rear Camera | 8MP Front Camera','5000 mAh Battery','Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'],"price":8499,"prevPrice":8999,"discount":5,"emi":'No Cost EMI',"assured":true,"exchange":'Upto ₹7,350 Off on Exchange',"ram":3,"popularity":76670},
    {"id":'M21',offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
    {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
    {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
    ],"category":'Mobiles',"brand":'RealMe',"name":'Realme C2 (Pearl Blue, 64 GB)',"img":'https://i.ibb.co/3sCg6NQ/realme-xt-rmx1921-original-imafk8h2dnnubezk.jpg',"rating":'4.4',"ratingDesc":'43,120 Ratings & 3,440 Reviews',"details":['6 GB RAM | 32 GB ROM | Expandable Upto 512 GB','15.8 cm (6.22 inch) HD+ Display','Qualcomm Snapdragon 439 Processor','12MP Rear Camera | 8MP Front Camera','5000 mAh Battery','Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'],"price":7499,"prevPrice":8499,"discount":11,"emi":'No Cost EMI',"assured":true,"exchange":'',"ram":6,"popularity":76670},
    {"id":'M22',offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
    {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
    {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
    ],"category":'Mobiles',"brand":'RealMe',"name":'Realme C2 (Pearl Blue, 64 GB)',"img":'https://i.ibb.co/sQg5Bqd/realme-xt-rmx1921-original-imafk8h2gbyatyyr.jpg',"rating":'4.5',"ratingDesc":'43,156 Ratings & 3,440 Reviews',"details":['6 GB RAM | 32 GB ROM | Expandable Upto 512 GB','15.8 cm (6.22 inch) HD+ Display','Qualcomm Snapdragon 439 Processor','12MP Rear Camera | 8MP Front Camera','5000 mAh Battery','Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'],"price":6499,"prevPrice":7299,"discount":11,"emi":'No Cost EMI',"assured":true,"exchange":'',"ram":6,"popularity":76670},
    {"id":'M23',offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
    {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
    {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
    ],"category":'Mobiles',"brand":'RealMe',"name":'Realme C2 (Pearl Blue, 64 GB)',"img":'https://i.ibb.co/3sCg6NQ/realme-xt-rmx1921-original-imafk8h2dnnubezk.jpg',"rating":'4.4',"ratingDesc":'43,120 Ratings & 3,440 Reviews',"details":['4 GB RAM | 32 GB ROM | Expandable Upto 512 GB','15.8 cm (6.22 inch) HD+ Display','Qualcomm Snapdragon 439 Processor','12MP Rear Camera | 8MP Front Camera','5000 mAh Battery','Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'],"price":7099,"prevPrice":7899,"discount":10,"emi":'No Cost EMI',"assured":true,"exchange":'Upto ₹7,350 Off on Exchange',"ram":4,"popularity":67000},
    {"id":'M24',offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
    {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
    {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
    ],"category":'Mobiles',"brand":'RealMe',"name":'Realme C2 (Pearl Blue, 64 GB)',"img":'https://i.ibb.co/sQg5Bqd/realme-xt-rmx1921-original-imafk8h2gbyatyyr.jpg',"rating":'4.6',"ratingDesc":'43,156 Ratings & 3,440 Reviews',"details":['4 GB RAM | 32 GB ROM | Expandable Upto 512 GB','15.8 cm (6.22 inch) HD+ Display','Qualcomm Snapdragon 439 Processor','12MP Rear Camera | 8MP Front Camera','5000 mAh Battery','Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'],"price":7499,"prevPrice":8999,"discount":17,"emi":'No Cost EMI',"assured":true,"exchange":'Upto ₹7,350 Off on Exchange',"ram":4,"popularity":76670},
    {"id":'M25',offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
    {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
    {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
    ],"category":'Mobiles',"brand":'Samsung',"name":'Samsung Galaxy M10S (Metallic Blue, 32 GB)',"img":'https://i.ibb.co/bLShFsJ/samsung-galaxy-m10s-sm-m107fmbdins-original-imafh8wsfsghgwav.jpg',"rating":'4.4',"ratingDesc":'83,156 Ratings & 4,440 Reviews',"details":['4 GB RAM | 32 GB ROM | Expandable Upto 512 GB','15.8 cm (6.22 inch) HD+ Display','Qualcomm Snapdragon 439 Processor','12MP Rear Camera | 8MP Front Camera','5000 mAh Battery','Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'],"price":10999,"prevPrice":14999,"discount":26,"emi":'No Cost EMI',"assured":true,"exchange":'Upto ₹8,350 Off on Exchange',"ram":4,"popularity":50597},
    {"id":'M26',offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
    {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
    {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
    ],"category":'Mobiles',"brand":'Samsung',"name":'Samsung Galaxy M10S (Stainless Steel, 32 GB)',"img":'https://i.ibb.co/9GMGvZN/galaxy-a20s-64-a-sm-a207fzkgins-samsung-4-original-imafkx2d6qnvdfgh.jpg',"rating":'4.6',"ratingDesc":'50,597 Ratings & 5,185 Reviews',"details":['6 GB RAM | 64 GB ROM | Expandable Upto 512 GB','15.8 cm (6.22 inch) HD+ Display','Qualcomm Snapdragon 439 Processor','12MP Rear Camera | 8MP Front Camera','5000 mAh Battery','Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'],"price":9799,"prevPrice":10999,"discount":11,"emi":'No Cost EMI',"assured":true,"exchange":'Upto ₹7,350 Off on Exchange',"ram":6,"popularity":67000},
    {"id":'M27',offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
    {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
    {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
    ],"category":'Mobiles',"brand":'Samsung',"name":'Samsung Galaxy A20 (Stainless Steel, 32 GB)',"img":'https://i.ibb.co/bLShFsJ/samsung-galaxy-m10s-sm-m107fmbdins-original-imafh8wsfsghgwav.jpg',"rating":'4.4',"ratingDesc":'43,120 Ratings & 3,440 Reviews',"details":['4 GB RAM | 32 GB ROM | Expandable Upto 512 GB','15.8 cm (6.22 inch) HD+ Display','Qualcomm Snapdragon 439 Processor','12MP Rear Camera | 8MP Front Camera','5000 mAh Battery','Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'],"price":8999,"prevPrice":12999,"discount":31,"emi":'No Cost EMI',"assured":true,"exchange":'Upto ₹7,350 Off on Exchange',"ram":4,"popularity":76670},
    {"id":'M28',offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
    {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
    {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
    ],"category":'Mobiles',"brand":'Samsung',"name":'Samsung Galaxy A20 (Stainless Steel, 64 GB)',"img":'https://i.ibb.co/xF0Y2RZ/galaxy-a70s-128-c-sm-a707fzkmins-samsung-6-original-imafkx3fhzp9rz9a.jpg',"rating":'4.4',"ratingDesc":'83,156 Ratings & 4,440 Reviews',"details":['6 GB RAM | 64 GB ROM | Expandable Upto 512 GB','15.8 cm (6.22 inch) HD+ Display','Qualcomm Snapdragon 439 Processor','12MP Rear Camera | 8MP Front Camera','5000 mAh Battery','Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'],"price":12999,"prevPrice":14999,"discount":13,"emi":'No Cost EMI',"assured":true,"exchange":'Upto ₹8,350 Off on Exchange',"ram":6,"popularity":50597},
    {"id":'M29',offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
    {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
    {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
    ],"category":'Mobiles',"brand":'Samsung',"name":'Samsung Galaxy A70 (Stainless Steel, 32 GB)',"img":'https://i.ibb.co/9GMGvZN/galaxy-a20s-64-a-sm-a207fzkgins-samsung-4-original-imafkx2d6qnvdfgh.jpg',"rating":'4.6',"ratingDesc":'50,597 Ratings & 5,185 Reviews',"details":['4 GB RAM | 32 GB ROM | Expandable Upto 512 GB','15.8 cm (6.22 inch) HD+ Display','Qualcomm Snapdragon 439 Processor','12MP Rear Camera | 8MP Front Camera','5000 mAh Battery','Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'],"price":11999,"prevPrice":14999,"discount":20,"emi":'',"assured":true,"exchange":'',"ram":4,"popularity":76670},
    {"id":'M30',offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
    {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
    {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
    ],"category":'Mobiles',"brand":'Samsung',"name":'Samsung Galaxy A70 (Stainless Steel, 64 GB)',"img":'https://i.ibb.co/xF0Y2RZ/galaxy-a70s-128-c-sm-a707fzkmins-samsung-6-original-imafkx3fhzp9rz9a.jpg',"rating":'4.4',"ratingDesc":'43,120 Ratings & 3,440 Reviews',"details":['6 GB RAM | 64 GB ROM | Expandable Upto 512 GB','15.8 cm (6.22 inch) HD+ Display','Qualcomm Snapdragon 439 Processor','12MP Rear Camera | 8MP Front Camera','5000 mAh Battery','Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'],"price":12999,"prevPrice":13999,"discount":7,"emi":'No Cost EMI',"assured":true,"exchange":'',"ram":6,"popularity":67000},
    {"id":'M31',offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
    {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
    {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
    ],"category":'Mobiles',"brand":'Samsung',"name":'Samsung Galaxy A40 (Stainless Steel, 32 GB)',"img":'https://i.ibb.co/9GMGvZN/galaxy-a20s-64-a-sm-a207fzkgins-samsung-4-original-imafkx2d6qnvdfgh.jpg',"rating":'4.4',"ratingDesc":'43,120 Ratings & 3,440 Reviews',"details":['4 GB RAM | 32 GB ROM | Expandable Upto 512 GB','15.8 cm (6.22 inch) HD+ Display','Qualcomm Snapdragon 439 Processor','12MP Rear Camera | 8MP Front Camera','5000 mAh Battery','Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'],"price":9999,"prevPrice":12999,"discount":23,"emi":'No Cost EMI',"assured":true,"exchange":'',"ram":4,"popularity":76670},
    {"id":'M32',offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
    {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
    {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
    ],"category":'Mobiles',"brand":'Samsung',"name":'Samsung Galaxy A40 (Stainless Steel, 64 GB)',"img":'https://i.ibb.co/bLShFsJ/samsung-galaxy-m10s-sm-m107fmbdins-original-imafh8wsfsghgwav.jpg',"rating":'4.5',"ratingDesc":'83,156 Ratings & 4,440 Reviews',"details":['6 GB RAM | 64 GB ROM | Expandable Upto 512 GB','15.8 cm (6.22 inch) HD+ Display','Qualcomm Snapdragon 439 Processor','12MP Rear Camera | 8MP Front Camera','5000 mAh Battery','Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'],"price":8999,"prevPrice":11999,"discount":25,"emi":'',"assured":true,"exchange":'',"ram":6,"popularity":67000},
    {"id":'M33',offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
    {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
    {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
    ],"category":'Mobiles',"brand":'Samsung',"name":'Samsung Galaxy A10 (Stainless Steel, 32 GB)',"img":'https://i.ibb.co/xF0Y2RZ/galaxy-a70s-128-c-sm-a707fzkmins-samsung-6-original-imafkx3fhzp9rz9a.jpg',"rating":'4.4',"ratingDesc":'50,597 Ratings & 5,185 Reviews',"details":['4 GB RAM | 32 GB ROM | Expandable Upto 512 GB','15.8 cm (6.22 inch) HD+ Display','Qualcomm Snapdragon 439 Processor','12MP Rear Camera | 8MP Front Camera','5000 mAh Battery','Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'],"price":9999,"prevPrice":11999,"discount":17,"emi":'No Cost EMI',"assured":true,"exchange":'',"ram":4,"popularity":76670},
    {"id":'M34',offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
    {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
    {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
    ],"category":'Mobiles',"brand":'Samsung',"name":'Samsung Galaxy A10 (Stainless Steel, 64 GB)',"img":'https://i.ibb.co/xF0Y2RZ/galaxy-a70s-128-c-sm-a707fzkmins-samsung-6-original-imafkx3fhzp9rz9a.jpg',"rating":'4.4',"ratingDesc":'43,120 Ratings & 3,440 Reviews',"details":['6 GB RAM | 64 GB ROM | Expandable Upto 512 GB','15.8 cm (6.22 inch) HD+ Display','Qualcomm Snapdragon 439 Processor','12MP Rear Camera | 8MP Front Camera','5000 mAh Battery','Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'],"price":8999,"prevPrice":11999,"discount":25,"emi":'No Cost EMI',"assured":true,"exchange":'',"ram":6,"popularity":67000},
    {"id":'M35',offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
    {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
    {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
    ],"category":'Mobiles',"brand":'Samsung',"name":'Samsung Galaxy A50 (Stainless Steel, 32 GB)',"img":'https://i.ibb.co/9GMGvZN/galaxy-a20s-64-a-sm-a207fzkgins-samsung-4-original-imafkx2d6qnvdfgh.jpg',"rating":'4.5',"ratingDesc":'83,156 Ratings & 4,440 Reviews',"details":['4 GB RAM | 32 GB ROM | Expandable Upto 512 GB','15.8 cm (6.22 inch) HD+ Display','Qualcomm Snapdragon 439 Processor','12MP Rear Camera | 8MP Front Camera','5000 mAh Battery','Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'],"price":10999,"prevPrice":13999,"discount":21,"emi":'',"assured":true,"exchange":'Upto ₹7,350 Off on Exchange',"ram":4,"popularity":76670},
    {"id":'M36',offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
    {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
    {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
    ],
    "category":'Mobiles',"brand":'Samsung',"name":'Samsung Galaxy A50 (Stainless Steel, 64 GB)',"img":'https://i.ibb.co/bLShFsJ/samsung-galaxy-m10s-sm-m107fmbdins-original-imafh8wsfsghgwav.jpg',"rating":'4.4',"ratingDesc":'50,597 Ratings & 5,185 Reviews',"details":['6 GB RAM | 64 GB ROM | Expandable Upto 512 GB','15.8 cm (6.22 inch) HD+ Display','Qualcomm Snapdragon 439 Processor','12MP Rear Camera | 8MP Front Camera','5000 mAh Battery','Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'],"price":7999,"prevPrice":12999,"discount":38,"emi":'',"assured":true,"exchange":'Upto ₹7,350 Off on Exchange',"ram":6,"popularity":76670},
    {"id":'M37',offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
    {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
    {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
    ],"category":'Mobiles',"brand":'OPPO',"name":'OPPO F11 (Marble Green, 128 GB)',"img":'https://i.ibb.co/6s69BZy/oppo-f11-cph1911-original-imafght4kvkhnzzg.jpg',"rating":'4.4',"ratingDesc":'50,597 Ratings & 5,185 Reviews',"details":['4 GB RAM | 128 GB ROM | Expandable Upto 256 GB','16.59 cm (6.53 inch) Display','48MP + 5MP | 16MP Front Camera','4020 mAh Battery','MTK MT6771V (P70) Processor','Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'],"price":21900,"prevPrice":22999,"discount":5,"emi":'No Cost EMI',"assured":true,"exchange":'',"ram":4,"popularity":50597},
    {"id":'M38',offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
    {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
    {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
    ],"category":'Mobiles',"brand":'OPPO',"name":'OPPO F11 (Fluorite Purple, 128 GB)',"img":'https://i.ibb.co/nmKVgN3/oppo-f11-cph1911-original-imafght4bbcxzmgc.jpg',"rating":'4.4',"ratingDesc":'50,597 Ratings & 5,185 Reviews',"details":['4 GB RAM | 128 GB ROM | Expandable Upto 256 GB','16.59 cm (6.53 inch) Display','48MP + 5MP | 16MP Front Camera','4020 mAh Battery','MTK MT6771V (P70) Processor','Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'],"price":18999,"prevPrice":20999,"discount":9,"emi":'',"assured":true,"exchange":'',"ram":4,"popularity":50597},
    {"id":'M39',offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
    {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
    {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
    ],"category":'Mobiles',"brand":'OPPO',"name":'OPPO F11 (Fluorite Purple, 128 GB)',"img":'https://i.ibb.co/nmKVgN3/oppo-f11-cph1911-original-imafght4bbcxzmgc.jpg',"rating":'4.4',"ratingDesc":'50,597 Ratings & 5,185 Reviews',"details":['6 GB RAM | 128 GB ROM | Expandable Upto 256 GB','16.59 cm (6.53 inch) Display','48MP + 5MP | 16MP Front Camera','4020 mAh Battery','MTK MT6771V (P70) Processor','Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'],"price":17999,"prevPrice":22999,"discount":22,"emi":'',"assured":true,"exchange":'Upto ₹10,800 Off on Exchange',"ram":6,"popularity":40597},
    {"id":'M40',offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
    {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
    {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
    ],"category":'Mobiles',"brand":'OPPO',"name":'OPPO F11 (Marble Green, 128 GB)',"img":'https://i.ibb.co/6s69BZy/oppo-f11-cph1911-original-imafght4kvkhnzzg.jpg',"rating":'4.4',"ratingDesc":'50,597 Ratings & 5,185 Reviews',"details":['6 GB RAM | 128 GB ROM | Expandable Upto 256 GB','16.59 cm (6.53 inch) Display','48MP + 5MP | 16MP Front Camera','4020 mAh Battery','MTK MT6771V (P70) Processor','Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories'],"price":14999,"prevPrice":16999,"discount":12,"emi":'No Cost EMI',"assured":true,"exchange":'',"ram":6,"popularity":80597},
    {"id":'M41',offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
    {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
    {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
    ],"category":'Mobiles',"brand":'Apple',"name":'Apple iPhone 8 Plus (Gold, 256 GB)',"img":'https://i.ibb.co/drVHVJZ/apple-iphone-8-plus-mq8j2hn-a-original-imaexsfmnxjcfc8t.jpg',"rating":'4.6',"ratingDesc":'3,231 Ratings & 352 Reviews',"details":['13.97 cm (5.5 inch) Retina HD Display','256 GB ROM |','12MP + 12MP | 7MP Front Camera','A11 Bionic Chip with 64-bit Architecture, Neural Engine, Embedded M11 Motion Coprocessor Processor','Brand Warranty of 1 Year',''],"price":59490,"prevPrice":86308,"discount":31,"emi":'',"assured":true,"exchange":'Upto ₹7,350 Off on Exchange',"ram":256,"popularity":3231},
    {"id":'M42',offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
    {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
    {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
    ],"category":'Mobiles',"brand":'Apple',"name":'Apple iPhone 8 Plus (Space Grey, 256 GB)',"img":'https://i.ibb.co/NT05Bfz/apple-iphone-8-plus-mq8g2hn-a-original-imaexsfhxepbngdq.jpg',"rating":'4.6',"ratingDesc":'3,231 Ratings & 352 Reviews',"details":['13.97 cm (5.5 inch) Retina HD Display','256 GB ROM |','12MP + 12MP | 7MP Front Camera','A11 Bionic Chip with 64-bit Architecture, Neural Engine, Embedded M11 Motion Coprocessor Processor','Brand Warranty of 1 Year',''],"price":64900,"prevPrice":84900,"discount":23,"emi":'',"assured":true,"exchange":'',"ram":256,"popularity":3231},
    {"id":'M44',offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
    {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
    {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
    ],"category":'Mobiles',"brand":'Apple',"name":'Apple iPhone 7 Plus (Red, 128 GB)',"img":'https://i.ibb.co/02HBg2F/apple-iphone-7-plus-mn4v2hn-a-original-imaeswuk6ecvqhb5.jpg',"rating":'4.4',"ratingDesc":'18,655 Ratings & 2,128 Reviews',"details":['13.97 cm (5.5 inch) Retina HD Display','128 GB ROM |','12MP + 12MP | 7MP Front Camera','Apple A10 Fusion 64-bit processor and Embedded M10 Motion Co-processor','Brand Warranty of 1 Year','iOS 13 Compatible'],"price":59990,"prevPrice":59990,"discount":0,"emi":'',"assured":true,"exchange":'',"ram":128,"popularity":18655},
    {"id":'M45',offers:[{img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'10% Cashback* on HDFC Bank Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Unlimited Cashback on Flipkart Axis Bank Credit Card'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'5% Instant Discount on EMI with ICICI Bank Credit and Debit Cards'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Extra 5% off* with Axis Bank Buzz Credit Card'},
    {img:'https://i.ibb.co/PgZY1JF/f3bae257-60c1-4ef5-960a-1d8170ea7a42.png',type:'Bank Offer',detail:'Get upto ₹10800 off on exchange'},
    {img:'https://i.ibb.co/zZCY6nY/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png',type:'Bank Offer',detail:'Special Price'},
    {img:'https://i.ibb.co/zVRyyTn/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png',type:'Bank Offer',detail:'No Cost EMI'}
    ],"category":'Mobiles',"brand":'Apple',"name":'Apple iPhone XR (White, 64 GB)',"img":'https://i.ibb.co/27rSms4/apple-iphone-xr-mry52hn-a-original-imafa6zkfgwpnsgz.jpg',"rating":'4.6',"ratingDesc":'6,360 Ratings & 554 Reviews',"details":['15.49 cm (6.1 inch) Display','64 GB ROM |','12MP Rear Camera | 7MP Front Camera','A12 Bionic Chip Processor','Brand Warranty of 1 Year','iOS 13 Compatible'],"price":47900,"prevPrice":49900,"discount":4,"emi":'No Cost EMI',"assured":true,"exchange":'Upto ₹10,800 Off on Exchange',"ram":64,"popularity":6360},  
  ]

  let comp=[]
  let cart=[]
  let wishlist=[]
  let user=[{firstname:"shubham",lastname:"kumar",user:"shubham",email:"test@gmail.com",password:"test",phone:"123456789"},
  {firstname:"happy",lastname:"kumar",user:"happy",email:"happy@gmail.com",password:"hap",phone:"123456789"}]

app.get("/allmobile",function(req,res){
    let {brand,ram,rating,price}=req.query;
      let mob=mobile.filter((pr)=> pr.category=='Mobiles')
    if(brand)
    {
        let brand1=brand.split(",")
        mob=mob.filter((pr)=> brand1.find((tr)=> pr.brand==tr))
    }
    if(ram)
    {
        let ram1=ram.split(",")
        mob=mob.filter((pr)=> ram1.find((tr)=> pr.ram==tr))
    }
    if(rating)
    {
        let rating1=rating.split(",")
        mob=mob.filter((pr)=> rating1.find((tr)=> pr.rating>tr))
    }
    if(price)
    {
        let price1=price.split(",")
        mob=mob.filter((pr)=> price1.find((tr)=> tr=="0-5000"?pr.price>0 && pr.price<5000:tr=="5000-10000"?pr.price>5000 && pr.price<10000:tr=="10000-20000"?pr.price>10000 && pr.price<20000:tr=="20000"?pr.price>20000:"" ))
    }
   
    res.send(mob)
})

app.get("/Mobile/:id",function(req,res){
    let {id}=req.params 
    let mob=mobile.find((pr)=> pr.id==id)
    res.send(mob)
})

app.post("/heart/:id",function(req,res){
    let body=req.body 
    if(body.assured==true)
    {
      let mob=mobile.find((pr)=> pr.id==body.id?pr.assured=false:"")
      let mob1=mobile.find((pr)=> pr.id==body.id?pr:"")
      wishlist.push(mob1)
     
    }
    else if(body.assured==false)
    {
      let index=wishlist.find((pr)=> pr.id==body.id?pr:"")
      wishlist.splice(index,1)
      mobile.find((pr)=> pr.id==body.id?pr.assured=true:"")

    }
    res.send(wishlist)
})
app.post("/compare",function(req,res){
    let {compare}=req.body 
    let mob=mobile.filter((pr)=> compare.find((tr)=> pr.id==tr))
    comp=mob
    res.send(comp)
})
app.get("/compare",function(req,res){
    res.send(comp)
})
app.post("/removecompare/:id",function(req,res){
  let {id}=req.params
  let index=comp.findIndex((pr)=> pr.id==id)
  let com=comp.splice(index,1)
  res.send(com)
})
app.post("/cart/:id",function(req,res){
    let {id}=req.params 
     
    let rep=cart.find((pr)=> pr.id==id)
    if(rep)
    {
       cart.map((pr)=> pr.id==id?pr.item=pr.item+1:pr)
    }
    else{
      let mob=mobile.find((pr)=> pr.id==id)
       mob.item=1
      cart.push(mob)
    }
    res.send(rep)
})
app.get("/cart",function(req,res){
   res.send(cart)
})
app.post("/Update/:id/:str",function(req,res){
  let {id,str}=req.params 
  
  if(str=="add")
  {
     cart.map((pr)=> pr.id==id?pr.item=pr.item+1:pr)
  }
  else if(str=="sub")
  {
    cart.map((pr)=> pr.id==id?pr.item=pr.item-1:pr)
  }
  else if(str=="remove")
  {
    let index=cart.findIndex((pr)=> pr.id==id)
     let car=cart.splice(index,1)
     res.send(car)
  }
})

app.post("/login",function(req,res){
  let body=req.body
  let found=user.find((pr)=> pr.email==body.email && pr.password==body.password)
  res.send(found)
})
app.post("/newuser",function(req,res){
  let body=req.body
   user.push(body)
   res.send(body)
})
app.get("/wishlist",function(req,res){
  res.send(wishlist)
})
app.post("/deleteWishlist/:id",function(req,res){
  let {id}=req.params
  let index=wishlist.find((pr)=> pr.id==id?pr:"")
  wishlist.splice(index,1)
  mobile.find((pr)=> pr.id==id?pr.assured=true:"")
  res.send(index)
})