const cart=[];

function addToCart(productId){
    const product=products.find(p => p.id===productId);
    const existingItem=cart.find(item => item.id === productId);

    if(existingItem){
        existingItem.quantity = existingItem.quantity + 1;
    }
    else{
        cart.push({
            id:product.id,
            name:product.name,
            price:product.price,
            image:product.image,
            quantity:1
        });
    }
    updateCartCount();
}

function updateCartCount(){
    const countDisplay=document.getElementById("cart-count");
    const totalItems=cart.reduce(function(total,item){
        return total + item.quantity;
    },0);
    countDisplay.textContent=totalItems;
}

function removeFromCart(productId){
    const index=cart.findIndex(item=> item.id===productId);
    cart.splice(index,1);
    updateCartCount();
    renderCart();
}

function renderCart(){
    const app=document.getElementById("app");

    if(cart.length===0){
        app.innerHTML=`
        <div class="cart-empty">
        <p>Your Cart is Empty</p>
        <a href="#/" class="back-link">Go back to Catalog</a>
        </div>`;
        return;
    }
const itemsHTML=cart.map(item =>`
    <div class="cart-item">
    <img src="${item.image}" class="cart-item-image">
    <div class="cart-item-info">
    <h3>${item.name}</h3><br>
    <p>Rs.${item.price} x ${item.quantity}</p><br>
    <p class="cart-item-subtotal">Subtotal: Rs.${item.price * item.quantity}</p><br>
     <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button></div>
    </div>
    `).join("");
const total=cart.reduce(function(sum, item){
    return sum+(item.price*item.quantity);
},0);

app.innerHTML=`
<div class="cart-page">
<a href="#/" class="back-link">&larr;</a>
<h2 class="cart-title">Your Cart</h2>

</div>
<div class="cart-total">
${itemsHTML}
<hr class="divider">
<p>Total: Rs. ${total}</p>
</div>

`;}