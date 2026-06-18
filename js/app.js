function renderProductList(){
    const app=document.getElementById("app");
    const cardsHTML=products.map(product =>`
        <a class="product-card" href="#/product/${product.id}" >
        <img src="${product.image}" width="300" height="300" loading="lazy">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        </a>
        `).join("");
        app.innerHTML=`
        <div class="product-grid" >${cardsHTML}</div>`;
}

function renderProductDetail(id){
    const app=document.getElementById("app");
    const product=products.find(p => p.id===id);
    if (!product){
        renderNotFound();
        return;
    }
    app.innerHTML=`<div class="product-detail">
    <a href="#/" class="back-link">&larr; Back to Catalog</a>
    <img src="${product.image}" width="500" height="300">
    <h2>${product.name}></h2>
    <p>${product.price}</p>
    <p>${product.description}</p>
    </div>
    `;
}

function renderNotFound(){
    const app=document.getElementById("app");
    app.innerHTML=`<p>Page Not Found<a href="#/">Go back to Catalog</a></p>`;
}
