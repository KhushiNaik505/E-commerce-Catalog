function renderProductList(filteredProducts){
    const app=document.getElementById("app");
    const list=filteredProducts || products;

    if (list.length===0){
        app.innerHTML=`<p class="no-results">No Products Found</p>`;
        return;
    }
    const cardsHTML=list.map(product =>`
        <a class="product-card" href="#/product/${product.id}" >
        <img src="${product.image}"  height="300" loading="lazy">
        <h4 class="product-card-name">${product.name}</h4>
        <p style="color:black;">Rs.${product.price}</p>
        </a>
        `).join("");
        app.innerHTML=`
        <div class="product-grid" >${cardsHTML}</div>`;
}

function handleSearch(){
    const input=document.getElementById("product-search");
    const query=input.value.toLowerCase();

    const filtered=products.filter(product =>
        product.name.toLowerCase().includes(query)
    );
    renderProductList(filtered);
}

function initSearch(){
    const button=document.getElementById("search");
    const input=document.getElementById("product-search");
 

    button.addEventListener("click", handleSearch);
    input.addEventListener("input", handleSearch);
     input.addEventListener("keydown", function(event){
        if (event.key=="Enter"){
            handleSearch();
        }
     });
   
}

function renderProductDetail(id){
    const app=document.getElementById("app");
    const product=products.find(p => p.id===id);
    if (!product){
        renderNotFound();
        return;
    }
    app.innerHTML=`<div class="Product-Detail">
    <a href="#/" class="back-link" style="color:black; ">&larr;</a><br><br>
    <div class="product-detail"><img src="${product.image}" height="300" class="product-image">
    <div class="product-info"><h2 class="product-name">${product.name}</h2>
    <p class="price">Rs.${product.price}</p>
     <button class="add-to-cart" onclick="addToCart(${product.id})">🛒</button>
    <p>${product.description}</p></div>
    </div>
    
    </div>
    `;
}

function renderNotFound(){
    const app=document.getElementById("app");
    app.innerHTML=`<p>Page Not Found<a href="#/">Go back to Catalog</a></p>`;
}
