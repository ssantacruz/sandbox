const products = [
  {
    src: '../images/alin-surdu-em89au_3qx8-unsplash.jpg',
    name: 'Basketball 1', 
    price: '150',
    category: 'men'
  },
  {
    src: '../images/artem-bondarchuk-XPBYi4K8vFI-unsplash.jpg',
    name: 'Casual 1',
    price: '85',
    category: 'women'
  },
  {
    src: '../images/christian-lucas-vraH9m7hfHU-unsplash.jpg',
    name: 'AF1 Yellow',
    price: '140',
    category: 'men'
  },
  {
    src: '../images/daniel-storek-JM-qKEd1GMI-unsplash.jpg',
    name: 'Casual White Leather',
    price: '75',
    category: 'women'
  },
  {
    src: '../images/ervan-m-wirawan-6r280_Z7Efc-unsplash.jpg',
    name: 'Hi-top Vintage',
    price: '70',
    category: 'women'
  },
  {
    src: '../images/ervan-m-wirawan-tgdgb6yb0Qo-unsplash.jpg',
    name: 'Classic Running',
    price: '90',
    category: 'men'
  },
  {
    src: '../images/hipkicks-HcqA34-uWo4-unsplash.jpg',
    name: 'Grey Casual',
    price: '80',
    category: 'men'
  },
  {
    src: '../images/jeff-tumale-SD9Jyl1xNQ4-unsplash.jpg',
    name: 'AF1 White',
    price: '150',
    category: 'women'
  },
  {
    src: '../images/kris-gerhard-0BKZfcamvGg-unsplash.jpg',
    name: 'Red Suede',
    price: '65',
    category: 'women'
  },
  {
    src: '../images/lefteris-kallergis-j1GiPlvSGWI-unsplash.jpg',
    name: 'Air Max',
    price: '120',
    category: 'men'
  }
]

function productHtml(itemObj) {
  return `<div class="prod" data-name="${itemObj.name}" data-price="${itemObj.price}" data-src="${itemObj.src}" data-category="${itemObj.category}">
    <img class="prod-img" src="${itemObj.src}" alt="${itemObj.name}">
    <p class="prod-name">${itemObj.name}</p>
    <p class="prod-price">$${itemObj.price}</p>
    <a class="add-to-cart" href="#">Add to cart</a>
  </div>`
}

products.forEach(itemObj => {
  if (!!document.querySelector('.products-all')) {
    document.querySelector('.products-all').insertAdjacentHTML('beforeend', productHtml(itemObj));
  } else if (!!document.querySelector('.products-women') && itemObj.category === 'women') {
    document.querySelector('.products-women').insertAdjacentHTML('beforeend', productHtml(itemObj));
  } else if (!!document.querySelector('.products-men') && itemObj.category === 'men') {
    document.querySelector('.products-men').insertAdjacentHTML('beforeend', productHtml(itemObj));
  }
});