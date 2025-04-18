let cartItems = []
let cartCount = 0
let cartCountMessageDisplay = false
const cartCountMessageDiv = document.querySelector('.cartCountMessage')

function addToCart() {
increaseCartCount()
cartCountMessage()
}

function increaseCartCount() {
    cartCount ++
    console.log(cartCount)
}

function cartCountMessage() {
    if (!cartCountMessageDisplay && cartCountMessageDiv ) {
        let cartMessageText = `Item added to Cart`
        cartCountMessageDiv.append(cartMessageText)
        setTimeout(clearMessage, 2000)
        cartCountMessageDisplay = false
    }
    else {
        console.log ("no items in cart")
        cartCountMessageDisplay = false
    }
}

function clearMessage() {
    setTimeout(function () {
        let emptyMessage = " "
        cartCountMessageDiv.textContent = emptyMessage

        console.log("Two seconds have passed. The Cart Message Should Now be Clear"), 2000
       
    }) 
}
//When add to cart is clicked, add an item to the cart count and as an item to the array.

//Display 'Added' message in the DOM for two seconds

//After two seconds of the button being clicked, display how many items are in the cart e.g "Added to cart: X"

