// document.querySelectorAll('.add-to-cart').forEach(atcBtn => {
//   atcBtn.addEventListener('click', (e) => {
//     const prodParentEl = e.currentTarget.parentElement;
//     console.log(prodParentEl)
//     console.log(prodParentEl.dataset.name);
//     if (!localStorage.cart) {
//       localStorage.cart = [];
//     }
//     localStorage.cart = localStorage.cart.push(
//       {
//         src: prodParentEl.dataset.src,
//         name: prodParentEl.dataset.name,
//         price: prodParentEl.dataset.price,
//         category: prodParentEl.dataset.category
//       }
//     );
//   });
// })