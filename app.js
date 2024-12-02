document.addEventListener('DOMDontentLoaded',()=>{
    const addPoroductBtn = document.getElementById('addProductBtn');
    const productFormPopup = document.getElementById('productFormPopup');
    const closeFormBtn = document.getElementById('closeFormBtn');
    const productForm = document.getElementById('productForm');
    const productList = document.getElementById('productList');


    let Products = [];
    addPoroductBtn.addEventListener('click',()=>{
        productFormPopup.style.display = 'block';
    });
    productForm.addEventListener('submit',(e)=>{
            e.preventDefault();

         const title = document.getElementById('title').value;
         const description = document.getElementById('description').value;
         const image = document.getElementById('image').value;

         const newProduct = {
            title,
            description,
            image,
         };
         Products.push(newProduct);
         
         localStorage.setItem('products',JSON.stringify(products));

         productForm.rest();
         productFormPopup.style.display = 'none';

         displayProducts();
    });
function displayProducts() {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    productList.innerHTML = "";
    storedProducts.forEach(product => {
     const productCard = document.createElement('div');
     productCard.classList.add('product');
     productCard.innerHTML = `<img src="${product.image}" alt="${product.title}">
    <h3>${product.title}</h3>
    <p>${product.description}</p>`;
    productList.appendChild(productCard);
    });
   displayProducts();
}
    
})