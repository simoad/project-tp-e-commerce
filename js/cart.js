/* Our Products */
T = new Array;
T[0]={
    "id": 0,
    "title": "Apple iPhone 11",
    "image": "./images/products/iphone/iphone3.jpeg",
    "price": 990,
    "category": "phones"
};
T[1]={
    "id": 1,
    "title": "Samsung Galaxy S10",
    "image": "./images/products/sumsung/samsung6.jpeg",
    "price": 899,
    "category": "phones"
};
T[2]={
    "id": 2,
    "title": "Apple iPhone X",
    "image": "./images/products/iphone/iphone4.jpeg",
    "price": 720,
    "category": "phones"
};
T[3]={
    "id": 3,
    "title": "Apple iPhone 11",
    "image": "./images/products/iphone/iphone5.jpeg",
    "price": 769,
    "category": "phones"
};
T[4]={
    "id": 4,
    "title": "Samsung Smart TV",
    "image": "./images/products/sumsung/tv.png",
    "price": 900,
    "category": "tvs"
};
T[5]={
    "id": 5,
    "title": "Apple Smart TV",
    "image": "./images/products/sumsung/tv2.png",
    "price": 1099,
    "category": "tvs"
};
T[6]={
    "id": 6,
    "title": "LG Smart TV",
    "image": "./images/products/sumsung/tv3.png",
    "price": 899,
    "category": "tvs"
};
T[7]={
    "id": 7,
    "title": "Samsung Smart TV",
    "image": "./images/products/sumsung/tv4.png",
    "price": 789,
    "category": "tvs"
};
T[8]={
    "id": 8,
    "title": "Sony WH-CH510",
    "image": "./images/products/headphone/headphone9.jpeg",
    "price": 760,
    "category": "casques"
};
T[9]={
    "id": 9,
    "title": "Sony WH-CH510",
    "image": "./images/products/headphone/headphone4.jpeg",
    "price": 799,
    "category": "casques"
};
T[10]={
    "id": 10,
    "title": "Sony WH-CH510",
    "image": "./images/products/headphone/headphone7.jpeg",
    "price": 499,
    "category": "casques"
};
T[11]={
    "id": 11,
    "title": "Sony WH-CH510",
    "image": "./images/products/headphone/headphone2.jpeg",
    "price": 239,
    "category": "casques"
};

var newPrice = document.querySelector('.new__price');
    var select = document.querySelector('.cart_products');
	var button = document.querySelectorAll('.product__btn');
    var product__subtotal = document.querySelector('.product__subtotal');

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}


    function ready() {
        var removeCartItemButtons = document.getElementsByClassName('remove-btn');
        for (var i = 0; i < removeCartItemButtons.length; i++) {
            var button = removeCartItemButtons[i];
            button.addEventListener('click', removeCartItem);
        }
    
        var quantityInputs = document.getElementsByClassName('cart-quantity-input')
        for (var i = 0; i < quantityInputs.length; i++) {
            var input = quantityInputs[i];
            input.addEventListener('change', quantityChanged);
        }
    
        document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
    }

    function removeCartItem(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove();
        updateCartTotal();
    }
    
    function quantityChanged(event) {
        var input = event.target
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1
        }
        updateCartTotal()
    }
    
    function purchaseClicked() {
        alert('Thank you for your purchase');
        var cartItems = document.getElementsByClassName('cart-items')[0];
        while (cartItems.hasChildNodes()) {
            cartItems.removeChild(cartItems.firstChild);
        }
        updateCartTotal();
    }
    
    function updateCartTotal() {
        var cartItemContainer = document.getElementsByClassName('cart-items')[0];
        var cartRows = cartItemContainer.getElementsByClassName('cart-row');
        var total = 0;
        for (var i = 0; i < cartRows.length; i++) {
            var cartRow = cartRows[i]
            var priceElement = cartRow.getElementsByClassName('cart-price')[0]
            var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
            var price = parseFloat(priceElement.innerText.replace('$', ''))
            var quantity = quantityElement.value;

            total = total + (price * quantity);
        }
        total = Math.round(total * 100) / 100
        document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
    }

	for(var but of button){
		but.addEventListener('click', (e)=>{

			// copy and paste //
            var id = e.target.id;
            console.log(e.target.id);
            html = `<tr class="cart-row" id="%id%">
            <td class="product__thumbnail">
                <a href="#">
                    <img src="%image%" alt="">
                </a>
            </td>
            <td class="product__name">
                <a href="#">%title%</a>
                <br><br>
            </td>
            <td class="product__price">
                <div class="price">
                    <span class="price cart-price">$%price%</span>
                </div>
            </td>
            <td class="product__quantity">
                <div class="input-counter">
                    <div>
                        
                        <input type="number" min="1" value="1" class="counter-btn cart-quantity-input">
                        
                    </div>
                </div>
            </td>
            <td class="product__subtotal">
                
                    
                
                <button class="btn btn-danger remove-btn" type="button">REMOVE</button>
            </td>
        </tr>`
            
            for(var i= 0 ; i<T.length; i++){
                if(id == T[i].id){ 

                    var newHtml = html.replace('%id%', T[i].id);
                    newHtml = newHtml.replace('%image%', T[i].image);
                    newHtml = newHtml.replace('%title%', T[i].title);
                    newHtml = newHtml.replace('%price%', T[i].price); 
                    }
            }

			select.insertAdjacentHTML('beforeend', newHtml);
            updateCartTotal();

            var cartItemContainer = document.getElementsByClassName('cart-items')[0];
            var cartRows = cartItemContainer.getElementsByClassName('cart-row');
            for (var i = 0; i < cartRows.length; i++) {
                var cartRow = cartRows[i];
                cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
                cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
            }
            
		})
        
	};
  
    
        