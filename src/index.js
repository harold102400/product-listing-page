const productAPI = "https://rickandmortyapi.com/api/character";
const tooltipTexts = document.querySelectorAll('.tooltip-text')
const favoriteButtons = document.querySelectorAll('.btn-favorite')
const productsContainers = document.querySelectorAll('.product-img-container');

/* 
favoriteButtons.forEach((favoriteButton) =>{
    console.log(favoriteButton)
    favoriteButton.addEventListener('mouseover', () =>{
        tooltipTexts.style.display = 'block'
    })

    favoriteButton.addEventListener('mouseleave', ()=>{
        tooltipTexts.style.display = 'none';
    })
})

const tooltipStyle = () => {
    tooltipTexts.forEach((tooltipText) => {
        if(tooltipText.classList.contains('tooltip-text')){
            tooltipText.style.display = 'block'
        } else {
            tooltipText.style.display = 'none'
        }
        console.log(tooltipText)
    })
} */


const getURL = async (url) => {
    const res = await fetch(url)
    const data = await res.json();
    return data;
}
getURL(productAPI)
.then(data => {
    //console.log(data)
    products(data)
})

const products = (product) =>{
    product.results.forEach((productPrice) =>{
        //console.log(productPrice.image)
        productImg(productPrice.image)
    })
}

const productImg = (url) =>{
    const img = document.createElement('img')
    img.src = url;
    img.classList = 'product__img'
    return img
}


