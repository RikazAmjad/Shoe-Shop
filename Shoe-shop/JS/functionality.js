

function changeMode(){
    // on clicking button the background color of body will be changes to white and the text color to black
    document.body.style.backgroundColor = "white"; 
    var elements = document.getElementsByTagName("*");    
        for (var i=0, n=elements.length;i<n;i++) {           
            elements[i].style.color = "Grey";          
        }                     

}



window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});





// Initialize cart count
let cartCount = localStorage.getItem('cartCount') ? parseInt(localStorage.getItem('cartCount')) : 0;

// Update cart count in navbar
updateCartCount(cartCount);

// Add event listener for add to cart buttons
let addToCartButtons = document.querySelectorAll('.addtocart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        // Prevent default button behavior
        event.preventDefault();

        // Increment cart count
        cartCount++;

        // Update cart count in navbar
        updateCartCount(cartCount);

        // Retrieve item details from the button's attributes
        let itemId = button.id;
        // let itemName = button.parentElement.parentElement.querySelector('.img img').alt;
        let itemPrice = button.parentElement.querySelector('p').textContent;
        let itemImg = button.parentElement.parentElement.querySelector('.img img').src;

        // Add the item to the cart
        addToCart(itemId, itemPrice, itemImg);
    });
});

// Function to update cart count in navbar and localStorage
function updateCartCount(count) {
    let cartIconSup = document.querySelector('.fa-cart-shopping + sup');
    if (cartIconSup) {
        cartIconSup.textContent = count;
    } else {
        // Create sup element for cart icon if it doesn't exist
        let supElement = document.createElement('sup');
        supElement.textContent = count;
        document.querySelector('.fa-cart-shopping').insertAdjacentElement('afterend', supElement);
    }
    // Update cart count in localStorage
    localStorage.setItem('cartCount', count);
}

// Function to add item to cart
function addToCart(itemId, itemName, itemPrice, itemImg) {
    // Retrieve existing cart items from localStorage
    let cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

    // Add the new item to the cart
    cartItems.push({
        id: itemId,
        name: itemName,
        price: itemPrice,
        img: itemImg
    });

    // Update localStorage with the new cart items
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Increment cart count (optional)
    let cartCount = cartItems.length;
    updateCartCount(cartCount);

    // Log confirmation message
    console.log('Item added to cart:', { id: itemId, price: itemPrice, img: itemImg });
}






// Function to add item to cart
function addToCart(itemId, itemName, itemPrice, itemImg) {
    // Retrieve existing cart items from localStorage
    let cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

    // Add the new item to the cart
    cartItems.push({
        id: itemId,
        name: itemName,
        price: itemPrice,
        img: itemImg
    });

    // Update localStorage with the new cart items
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Increment cart count
    cartCount++;
    updateCartCount(cartCount);

}
