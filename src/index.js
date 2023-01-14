//const productAPI ="https://api.themoviedb.org/3/movie/550?api_key=e122cf97e82f5359788f6cc0b17aa4df";
const productAPI ="https://api.themoviedb.org/3/movie/top_rated?api_key=e122cf97e82f5359788f6cc0b17aa4df";

const getURL = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
getURL(productAPI).then((data) => {
  console.log(data);
  products(data);
});

const products = (product) => {
    const productContainer = document.querySelector('.products')
    productContainer.innerHTML = '';
  product.production_companies.forEach((productData) => {
    productContainer.innerHTML += showProductsOnHTML(productData)
  });
};

const showProductsOnHTML = (data) => {
  let html = 
  `<div class="card-product">
    <div class="product-offer"></div>
    <div class="tooltip-container">
        <p class="tooltip-text">Add to favorite</p>
        <button type="button" class="btn-favorite icon-heart"></button>
        </div>
    <a href="#" class="product-img-container">
        <img src='https://image.tmdb.org/t/p/w500/${data.logo_path}' class="product__img">
    </a>                    
    <div class="product-content">
        <h2 class="product-title"><a href="#">${data.name}</a></h2>
        <p class="product-price">
            <small>$3,495.00</small>
            <strong>$2,795.00</strong>
        </p>
    </div>
    <div class="product-container">
        <div class="product-quantity-select">
            <select class="product-selection">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
            </select>
        </div>
        <div class="product-btn">
            <button class="primary-button icon-cart"></button>
        </div>
    </div>
</div>`;
  return html;
};
