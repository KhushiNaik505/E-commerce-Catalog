function router(){
    const hash=window.location.hash;
    if (hash.startsWith("#/product/")){
        const id=Number(hash.split("/")[2]);
        renderProductDetail(id);
    }
    else {
        renderProductList();
    }
}
window.addEventListener("hashchange",router);
window.addEventListener("DOMContentLoaded",router);