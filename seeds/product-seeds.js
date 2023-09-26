const { Product } = require('../models');

const productData = [
  {
    product_name: 'Basketball',
    price: 35.99,
    description: 'Standard 29.5" basketball perfect for your everyday use. Can be used both indoors and outdoors. In good condition, only used 3 times.',
    condition: '★★★★☆',
    category_id: 1,
    image: 'https://apim.canadiantire.ca/v1/product/api/v1/product/image/1840838p?baseStoreId=CTR&lang=en_CA&subscription-key=c01ef3612328420c9f5cd9277e815a0e&imwidth=640'
  },
  {
    product_name: 'Basketball Sleeves',
    price: 12.00,
    description: 'New in the box basketball sleeves. Dial in your shot with these excellent sleeves. Size Medium.',
    condition: '★★★★★',
    category_id: 1,
    image: 'https://nbacavsdotcom.files.wordpress.com/2012/11/carmelo-anthony.jpg?w=640'
  },
  {
    product_name: 'Basketball Shoes',
    price: 87.99,
    description: 'High top basketball shoes. Decently worn but still feeling like new! Great ankle support for those who need it! Size 12.',
    condition: '★★☆☆☆',
    category_id: 1,
    image: 'https://cyclonefanatic.com/wp-content/uploads/2019/03/USATSI_11710071.jpg'
  },
  {
    product_name: 'Jersey',
    price: 69.99,
    description: 'Standard training jersey. Brand new never worn. Great for practice sessions, very breathable. Size Extra Large.',
    condition: '★★★★★',
    category_id: 1,
    image: 'https://img.mlbstatic.com/mlb-images/image/upload/t_16x9/t_w1024/mlb/f2mwqzet1xmyzmjvityh'
  },
  {
    product_name: 'Soccer Cleats',
    price: 79.99,
    description: 'Rare soccer cleats. Collectors item. Have been worn quite a bit but still look great on a shelf! Size 8.',
    condition: '★★☆☆☆',
    category_id: 2,
    image: 'https://m.media-amazon.com/images/I/613t9lGd91L._AC_UY780_.jpg'
  },
  {
    product_name: 'Soccer Shinpads',
    price: 15.99,
    description: 'Brand new shin pads never worn. Great protection for the full shin as well as ankle. Size Large.',
    condition: '★★★★★',
    category_id: 2,
    image: 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt2635849169bb4add/62fb7872f59b2f3358adc45d/nike-charge-junior-shin-guards.png?auto=webp&format=pjpg&width=3840&quality=60'
  },
  {
    product_name: 'Soccer ball',
    price: 15.99,
    description: 'Lightly used ball. Still in great condition. Perfect for practice sessions. Size 5.',
    condition: '★★★★☆',
    category_id: 2,
    image: 'https://www.likasports.com/cdn/shop/products/SB-Pista2_grande.png?v=1478889441'
  },
  {
    product_name: 'Goalkeeper Gloves',
    price: 12.99,
    description: 'Great grip and protection against tough shots. Slightly worn but no damage on the glove themselves. Size 9.',
    condition: '★★★★☆',
    category_id: 2,
    image: 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltc7b38495b11c6234/63c920cd9ecafa4d368d03aa/Nike_Mercurial_Goalkeeper_Touch_Elite_.png'
  },
  {
    product_name: 'Volleyball',
    price: 34.99,
    description: 'Brand new volleyball. Made for indoor court play. Official matchball replica. Very durable.',
    condition: '★★★★★',
    category_id: 3,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5I0QA2qU7ZZxUgtusruzwc92Nf5on95OL3g&usqp=CAU'
  },
  {
    product_name: 'Volleyball Kneepads',
    price: 24.99,
    description: 'Worn once. Great condition. Lightweight padding to allow more movement. Size medium.',
    condition: '★★★★☆',
    category_id: 3,
    image: 'https://m.media-amazon.com/images/I/71pMXjVQ5bL.jpg'
  },
  {
    product_name: 'Volleyball Net',
    price: 39.99,
    description: 'Fairly used net. Used mainly for outdoor play. Small rip in net has been repaired.',
    condition: '★★★☆☆',
    category_id: 3,
    image: 'https://rukminim2.flixcart.com/image/850/1000/ken59jk0/net/g/k/v/cotton-volleyball-net-volleyball-net-cotton-fit-city-volleyball-original-imafvabxztk5rg7p.jpeg?q=90'
  },
  {
    product_name: 'Volleyball Shoes',
    price: 49.99,
    description: 'Brand new court shoes. Great ankle support and strong sole. Size 10.',
    condition: '★★★★★',
    category_id: 3,
    image: 'https://m.media-amazon.com/images/I/61SEqeYDIDL._AC_UF894,1000_QL80_.jpg'
  },
  {
    product_name: 'Shuttlecocks',
    price: 11.99,
    description: 'Lightly used shuttlecocks. Medium speed for the intermediate-advanced player.',
    condition: '★★★★☆',
    category_id: 4,
    image: 'https://ovalsportstore.ca/cdn/shop/products/G_51096_BiG_G_G_ieBirdie-4_580x.jpg?v=1649267645'
  },
  {
    product_name: 'Badminton Racquet',
    price: 64.99,
    description: 'High quality badminton racquet. Never used, newly strung. Perfect for beginners.',
    condition: '★★★★★',
    category_id: 4,
    image: 'https://tadssportinggoods.ca/cdn/shop/products/2016061511300592377_1024x1024.jpg?v=1495433480'
  },
  {
    product_name: 'Badminton Net',
    price: 44.99,
    description: 'Used indoors only. No rips or tears on the net. Great for small pick up games.',
    condition: '★★★★☆',
    category_id: 4,
    image: 'https://m.media-amazon.com/images/I/51ZZnVI9quS._AC_UF894,1000_QL80_.jpg'
  },
  {
    product_name: 'Badminton Shoe',
    price: 33.99,
    description: 'This is a test description',
    condition: '★★★★★',
    category_id: 4,
    image: 'https://pro-shop.leesbadminton.ca/cdn/shop/products/image_6b8c6f81-c96b-4397-a1e2-23907e9b4186_1200x1200.jpg?v=1651510618'
  },
  {
    product_name: 'Golf Clubs',
    price: 125.99,
    description: 'This is a test description',
    condition: '★★★☆☆',
    category_id: 5,
    image: 'https://imageio.forbes.com/specials-images/imageserve/5f5982d6ff463680bd1a32ac/0x0.jpg?format=jpg&width=1200'
  },
  {
    product_name: 'Golf Bag',
    price: 80.99,
    description: 'This is a test description',
    condition: '★★★★☆',
    category_id: 5,
    image: 'https://www.si.com/.image/t_share/MTkwNjgzNDI1MjA2NzA4MDky/callaway-fairway-c-double-strap-stand-bag.png'
  },
  {
    product_name: 'Golf Shoe',
    price: 47.99,
    description: 'This is a test description',
    condition: '★★★★★',
    category_id: 5,
    image: 'https://m.media-amazon.com/images/I/71oBS7wA7CL._AC_UY780_.jpg'
  },
  {
    product_name: 'Golf Balls',
    price: 18.99,
    description: 'This is a test description',
    condition: '★★★☆☆',
    category_id: 5,
    image: 'https://img.uline.com/is/image/uline/HD_946?$Mobile_Zoom$'
  },
  {
    product_name: 'Football Padding',
    price: 18.99,
    description: 'This is a test description',
    condition: '★★★★☆',
    category_id: 6,
    image: 'https://media-www.canadiantire.ca/product/playing/hockey/hockey-equipment/0838831/vic-cx2-hockey-shoulder-pads-junior-large-860ab8e9-2456-4e0d-9cd1-3a9e7c522e76-jpgrendition.jpg'
  },
  {
    product_name: 'Football Helmet',
    price: 21.99,
    description: 'This is a test description',
    condition: '★★★★★',
    category_id: 6,
    image: 'https://www.masslive.com/resizer/8UHDobx6BWfcl_YmnNIbw_KEm2Y=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/33HPZQUVDBD7RCBOGAEOFD7Y6Y.png'
  },
  {
    product_name: 'Football Cleats',
    price: 21.99,
    description: 'This is a test description',
    condition: '★★★★☆',
    category_id: 6,
    image: 'https://ernies.ca/cdn/shop/products/3022776-001_DEFAULT_1024x1024.jpg?v=1624296909'
  },
  {
    product_name: 'Football',
    price: 21.99,
    description: 'This is a test description',
    condition: '★★★★★',
    category_id: 6,
    image: 'https://media-www.canadiantire.ca/product/playing/team-sports-and-golf/sports-equipment-accessories/0844712/wilson-cfl-mini-replica-football-c46bb3fd-9715-4cb5-9102-3320ffd33730.png'
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
