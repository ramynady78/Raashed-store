function goToShopCart(){
    const getShoppingIcon = document.querySelector("#shopping-cart");
    
    getShoppingIcon.addEventListener("click", () =>{
        window.location.href = "shoppingCart.html";

    });
        

    const addButtons = document.querySelectorAll(".add-to-car-shopping");
    addButtons.forEach(button => {
        button.addEventListener("click", () => {
            button.innerHTML = `<span class="material-symbols-outlined">shopping_cart_checkout</span>`;
            button.style.backgroundColor = "green";

            const productDiv = button.closest('.product');   
            const productImg = document.querySelector(`#${productDiv.id} img`);
            const productlive = document.querySelector(`#${productDiv.id} #live-product`);
            const priceNow = document.querySelector(`#${productDiv.id} .price-now`);
            const priceBefor = document.querySelector(`#${productDiv.id} .price-befor`);
            const discraption = document.querySelector(`#${productDiv.id} .discraption`);
           


            const product ={
                id : productDiv.id,
                img : productImg.src,
                live : productlive.textContent,
                priceNow: priceNow.innerHTML,
                priceBefor:priceBefor.innerHTML,
                discraption : discraption.innerHTML,
            }

            localStorage.setItem(`${productDiv.id}`, JSON.stringify(product));
            window.location.reload() ;
            
        });
    });
}

goToShopCart();

function updateButtonAddToCart() {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        const productData = JSON.parse(localStorage.getItem(`${product.id}`));
        if (productData) {
            const addButtons = product.querySelector(".add-to-car-shopping");
            addButtons.innerHTML = `<span class="material-symbols-outlined">shopping_cart_checkout</span>`;
            addButtons.style.backgroundColor = "green";
        }
    });
}

updateButtonAddToCart()

function goToFavorite(){
    const getFavoriteIcon = document.querySelector("#favorite");
    getFavoriteIcon.addEventListener("click", () =>{
        window.location.href = "favoriteProduct.html";

    });

}

goToFavorite()



function addToFavorite(){
    const favoritBtn = document.querySelectorAll("#live-product")
    favoritBtn.forEach(favorit => {
        favorit.addEventListener("click", () => {
            favorit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#EA3323"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
            
            const productDiv = favorit.closest('.product');   
            const productImg = document.querySelector(`#${productDiv.id} img`);
            const productlive = document.querySelector(`#${productDiv.id} #live-product`);
            const priceNow = document.querySelector(`#${productDiv.id} .price-now`);
            const priceBefor = document.querySelector(`#${productDiv.id} .price-befor`);
            const discraption = document.querySelector(`#${productDiv.id} .discraption`);
           
            const product ={
                id : productDiv.id,
                img : productImg.src,
                live : productlive.textContent,
                priceNow: priceNow.innerHTML,
                priceBefor:priceBefor.innerHTML,
                discraption : discraption.innerHTML,
            }
            localStorage.setItem(`live ${productDiv.id}`, JSON.stringify(product));   
            window.location.reload() ;
        });
    });
}
addToFavorite()

function updateFavoriteIcons() {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        const productData = JSON.parse(localStorage.getItem(`live ${product.id}`));
        if (productData) {
            const favorit = product.querySelector("#live-product");
            favorit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#EA3323"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
            
        }
    });
}

updateFavoriteIcons();


function removeLive(){
    const products = document.querySelectorAll(".product");
        products.forEach(icon => {
            const getitem = localStorage.getItem(`live ${icon.id}`);
            if(getitem !== null){
                const favoriteIcon = icon.querySelector("#live-product");
                    favoriteIcon.addEventListener("click" , ()=> {
                            localStorage.removeItem(`live ${icon.id}`)
                            window.location.reload()   

                        })

            }
            

            

        })

}
removeLive()


function removeShopping(){
    const products = document.querySelectorAll(".product");
        products.forEach(icon => {
            const getitem = localStorage.getItem(`${icon.id}`);
            if(getitem !== null){
                const favoriteIcon = icon.querySelector(".add-to-car-shopping");
                    favoriteIcon.addEventListener("click" , ()=> {
                            localStorage.removeItem(`${icon.id}`)
                            window.location.reload()   

                        })
            }
        })

}

removeShopping();



function calcNumberProduct (){
    let numInShopping = 0;
    for(let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i);
        if(key.startsWith("product")){
            numInShopping++
            
        }

    }


    const numberIShoppingCart = document.querySelector("#circle-shopping");
    numberIShoppingCart.style.color = "green";

    if (numInShopping === 0){
        numberIShoppingCart.style.opacity = 0;

    } else {
        if (numInShopping <= 5){
            numberIShoppingCart.innerHTML = `${numInShopping}`;

        } else{
            numberIShoppingCart.innerHTML = `+5`;

        }
    }

    // # get number product lives
    let numInLive = 0;
    for(let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i);
        if(key.startsWith("live")){
            numInLive++
            
        }

    }


    const numberInLive = document.querySelector("#circle-live");
    numberInLive.style.color = "red";

    if (numInLive === 0){
        numberInLive.style.opacity = 0;

    } else {
        if (numInLive <= 5){
            numberInLive.innerHTML = `${numInLive}`;

        } else{
            numberInLive.innerHTML = `+5`;

        }
    }
}

calcNumberProduct();





























