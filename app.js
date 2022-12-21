const newArrivals = [
  {
    src: 'images/alin-surdu-em89au_3qx8-unsplash.jpg',
    name: 'Basketball 1', 
    price: '150',
    category: 'men'
  },
  {
    src: 'images/artem-bondarchuk-XPBYi4K8vFI-unsplash.jpg',
    name: 'Casual 1',
    price: '85',
    category: 'women'
  },
  {
    src: 'images/christian-lucas-vraH9m7hfHU-unsplash.jpg',
    name: 'AF1 Yellow',
    price: '140',
    category: 'men'
  }
]

function newArrivalHtml(itemObj) {
  return `<div class="prod">
    <img class="prod-img" src="${itemObj.src}" alt="${itemObj.name}">
    <p class="prod-name">${itemObj.name}</p>
    <p class="prod-price">$${itemObj.price}</p>
    <a class="add-to-cart" href="#">Add to cart</a>
  </div>`
}

newArrivals.forEach(itemObj => {
  document.querySelector('.new-arrivals').insertAdjacentHTML('beforeend', newArrivalHtml(itemObj));
});