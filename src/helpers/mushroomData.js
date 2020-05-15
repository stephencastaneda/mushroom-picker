const mushrooms = [
  {
    id: 'mushroom1',
    name: 'Button',
    description: 'Common type of mushroom found in grocery stores. Great toppings on pizza!',
    imgUrl: 'https://bloximages.newyork1.vip.townnews.com/hoosiertimes.com/content/tncms/assets/v3/editorial/5/d2/5d2940e4-26a6-5559-be4a-c0800bad3846/5ba3ddead6426.image.jpg?resize=400%2C288',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom2',
    name: 'Cremini',
    description: 'Cremini mushrooms, also called crimini mushrooms, are actually part of the same ​species as button mushrooms (Agaricus bisporus), but are a brown variation with a slightly deeper flavour',
    imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/51JP1XQScAL._SX679_.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom3',
    name: 'Portobello',
    description: 'Portobellos are large enough to be used as vegetarian burgers or stuffed with other ingredients, and are often baked instead of fried.',
    imgUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/portobello-mushroom-pizza-1573760586.jpg?crop=1.00xw:1.00xh;0,0.00116xh&resize=480:*',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom4',
    name: 'Oyster',
    description: 'They offer a mild and sweet flavor and make a great transition from portobellos into more adventurous types of mushrooms.',
    imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/51-mSv--sgL._SX425_.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom5',
    name: 'King',
    description: 'A large mushroom, and normally come 4 or 5 to a tray. They have a very firm meaty texture compared to regular oyster mushrooms.',
    imgUrl: 'https://www.mikuniwildharvest.com/app/uploads/cultivated-mushroom-king-oyster.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom6',
    name: 'Chanterelle',
    description: 'Chanterelle mushrooms have a distinctive bright yellow color. They have a sweet and peppery flavor that goes well with eggs.',
    imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/91z-hEZtFqL._AC_SX450_.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom7',
    name: 'Porcini',
    description: 'Porcini, also known as Cep mushrooms,  are most commonly used in Italian cooking.',
    imgUrl: 'https://i.ebayimg.com/images/g/7w4AAOSwKaBcsFIb/s-l400.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom8',
    name: 'Hedgehog',
    description: 'Hedgehog or sweet tooth mushrooms get their name from the gills underneath their cap.',
    imgUrl: 'https://media.mnn.com/assets/images/2018/02/hedgehog-mushroom.jpg.1440x960_q100_crop-scale_upscale.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom9',
    name: 'Chicken Of The Woods',
    description: 'This mushroom grows in clusters on the side of trees and is a beautiful orange color. ',
    imgUrl: 'https://www.backyardforager.com/wp-content/uploads/2017/10/MG_2175.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom10',
    name: 'Black Trumpet',
    description: 'Not a very attractive mushroom to look at, but their flavor is quite sought after. People describe the flavor as rich and smoky. ',
    imgUrl: 'https://i.ytimg.com/vi/4rjrGEXCIsU/hqdefault.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom11',
    name: 'Morel',
    description: 'Morels are some of the most sought after wild mushrooms. They are not farmed or sold in stores.',
    imgUrl: 'https://www.thespruce.com/thmb/JnZjVsa--3xkff-im4IAVJI7QW8=/2121x1414/filters:fill(auto,1)/GettyImages-681903292-f709e7ad12c34a03bc3489b64acaa289.jpg',
    isMagic: true,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom12',
    name: 'Spot Enoki',
    description: 'These mushrooms are most commonly used in Asian cooking. They come in large clusters of tiny mushrooms with very long stems and small caps.',
    imgUrl: 'https://pickledplum.com/wp-content/uploads/2018/08/enoki-mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom13',
    name: 'Shimeji',
    description: 'These mushrooms are most commonly used in Asian cooking. They come in large clusters of tiny mushrooms with very long stems and small caps.',
    imgUrl: 'https://cdn2.hearmeraw.uk/wp-content/uploads/2019/04/Buna-Shimeji-Mushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom14',
    name: 'Destroying Angels',
    description: ' These incredibly toxic fungi are very similar in appearance to edible button mushrooms and the meadow mushrooms, and have been collected by mistake on numerous occassions. ',
    imgUrl: 'https://westboroughlandtrust.org/nn/nn192.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom15',
    name: 'Shiitake',
    description: '​Shiitake mushrooms have a meaty texture much like portobellos. They have a more smoky, earthy flavor when cooked.',
    imgUrl: 'https://www.frontiercoop.com/media/catalog/product/cache/1/image/1600x/9df78eab33525d08d6e5fb8d27136e95/F/r/Frontier-Co-op-Bulk-Mushrooms-Shitake-Whole-2127.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom16',
    name: 'Maitake',
    description: 'These mushrooms are too tough to eat once they reach any reasonable size. However, they are used for their medicinal properties.',
    imgUrl: 'https://i1.wp.com/theherbalacademy.com/wp-content/uploads/2017/10/mushroom.jpg?fit=960%2C640&ssl=1',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom17',
    name: 'Reishi',
    description: 'A polypore, which means it is a tough cork-like mushroom that grows on the side of trees and is to tough to eat. ',
    imgUrl: 'https://i.etsystatic.com/9969248/r/il/65fe89/1286105127/il_570xN.1286105127_6e4y.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom18',
    name: 'Lions Mane',
    description: 'It has a stringy meat texture and a sweet savory flavor that is compared to lobster or crab meat.',
    imgUrl: 'https://static1.squarespace.com/static/55d9e933e4b004326c39c4f9/584450f4d2b857fe88220e52/5844541ad1758e37a12a0aed/1497041646084/?format=1500w',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom19',
    name: 'Matsutake',
    description: 'Matsutake mushrooms can be hard to find since they grow under specific trees and are normally hidden by leaves and other brush on the forest floor.',
    imgUrl: 'https://i1.wp.com/foragerchef.com/wp-content/uploads/2020/02/Matsutake-Hunt-2019-How-to-Hunt-Matsutake-in-the-Midwest-3-2.jpg?fit=1000%2C667&ssl=1',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom20',
    name: 'Death Cap',
    description: 'Within 6 to 12 hours after consumption, violent abdominal pain, vomiting, and bloody diarrhea appear, causing rapid loss of fluid from the tissues and intense thirst.',
    imgUrl: 'https://bayareamushrooms.org/images/pictures/phalloides5.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: true,
  },
];

let basket = [];

const getMushrooms = () => mushrooms;

const getBasket = () => basket;

const getAllRegularMushrooms = () => {
  const regularMushrooms = [];
  const shrooms = getMushrooms();
  shrooms.forEach((shroom) => {
    if (shroom.isDeadly === false && shroom.isMagic === false && shroom.isPoisonous === false) {
      regularMushrooms.push(shroom);
    }
  });
  return regularMushrooms;
};

const basketCheck = () => {
  basket = getBasket();
  const regularMushrooms = getAllRegularMushrooms();
  console.log('in the basket check function', regularMushrooms);
  const checkBasket = regularMushrooms.map((item) => {
    const isIncluded = basket.includes((item));
    return isIncluded;
  });
  const isWinner = checkBasket.every((x) => x === true);
  if (isWinner) {
    console.log('we won this thang!!!!!!!!!!!!!!!!!!!!');
  }
};

const removeTwoMushrooms = () => {
  basket = getBasket();
  const removedMushrooms = basket.splice(0, 2);
  console.log('picked a poisonous', removedMushrooms);
  return basket;
};

const emptyBasket = () => {
  basket = getBasket();
  basket = [];
  console.log('picked a deadly', basket);
  return basket;
};

const fillBasketMagically = () => {
  mushrooms.forEach((mushroom) => {
    if (mushroom.isDeadly === false && mushroom.isMagic === false && mushroom.isPoisonous === false) {
      console.error('dis my shroom', mushroom);
      basket.push(mushroom);
    }
    return basket;
  });
};


const pickAMushroom = () => {
  const randomMushroom = mushrooms[Math.floor(Math.random() * mushrooms.length)];
  if (randomMushroom.isPoisonous === true) {
    removeTwoMushrooms();
  } else if (randomMushroom.isDeadly === true) {
    emptyBasket();
  } else if (randomMushroom.isMagic === true) {
    fillBasketMagically();
  } else {
    basket.push(randomMushroom);
  }
  basketCheck();
  getAllRegularMushrooms();
};


// selectedMushroom = randomMushroom;
// randomMushrooms.forEach((randomMushroom) => {
//   if (randomMushroom.isPoisonous === true) {
//     basket.shift();
//   } else {


export default { getMushrooms, getBasket, pickAMushroom };
