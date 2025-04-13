const subscribeButtonHTML = document.querySelector('.subscribeButton')

function subscribe(subscribeButtonHTML){
    if (subscribeButtonHTML.textContent === 'Subscribe') {
        subscribeButtonHTML.textContent = 'Subscribed'
    }
    else{
        subscribeButtonHTML.textContent = 'Subscribe'
    } 
}



