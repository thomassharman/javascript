//document.body.innerHTML='<button> New Button </button>'

const buttonOne = document.querySelector('.btn1')

buttonOne.textContent = 'changed'



const subscribeButtonHTML = document.querySelector('.subscribeButton')

function subscribe(subscribeButtonHTML){
    if (subscribeButtonHTML.textContent === 'Subscribe') {
        subscribeButtonHTML.textContent = 'Subscribed'
    }
    else{
        subscribeButtonHTML.textContent = 'Subscribe'
    } 
}

//AMAZON JAVASCRIPT

const AmazonShippingBtn = document.querySelector('#calculateShippingButton')

const amazonShipping = document.querySelector('.orderPrice')

function ExecuteFunction() {
    if (event.key === 'Enter') {
        calculateShipping()
    }
}

//make an onkey event for inputs to execute another function. pretty cool!

function calculateShipping (WithShippingCosts) {
    let price = document.querySelector('.priceInput').value
    console.log(price)
    
    if (price <= 20) {
       let WithShippingCosts = addShippingCosts(price)
       console.log (`With Shipping cost: ${WithShippingCosts}`)
      
    amazonShipping.textContent = 
      `  
      With Shipping cost: ${WithShippingCosts}

      ` 
    }
    else if (price >= 21) {
        let WithShippingCosts = price
        console.log(`No added cost: ${WithShippingCosts}`)

        amazonShipping.textContent = 
        `  
        Total Cost (FREE shipping): ${WithShippingCosts}
  
        `
    }
    return price
    


}

function addShippingCosts(price) {
    if (price) {
        const shipping = price * 0.25 
        let priceWithShipping = parseInt(price) + parseInt(shipping)
        return priceWithShipping
    } 
    return 0;
} 





