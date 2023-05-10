'use strict'
import './router.js'




const criarCard = (produto) => {

    console.log(produto);

    const card = document.createElement("div");
    card.classList.add("container_product");
    const img = document.createElement("img");
    img.classList.add("image_product");
    img.src = produto.image_link;
    const name = document.createElement("span");
    name.classList.add("name_product", "text_info_product");
    name.textContent = produto.name;
    const category = document.createElement("span");
    category.classList.add("category_product", "text_info_product");
    category.textContent = produto.category;
    const price = document.createElement("span");
    price.classList.add("price_product", "text_info_product");
    price.textContent = `$${produto.price}`;
    const container = document.createElement("div");
    container.classList.add("container_info_product");
    container.append(name, category, price);
    card.append(img, container);
    return card;
};

const getWeatherData = async(product) => {
    const url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=${product}`

    const res = await fetch(url);
    const data = await res.json();
    // console.log(data)
    return data

}

// getWeatherData()

const carregarProdutos = async(product) => {
    console.log(product)
    const container = document.getElementById('container_products')
    const cards = await product.map(criarCard)



    container.replaceChildren(...cards)
}




// const typeProduct = document.querySelector("type")

const typeProducts = document.querySelectorAll(".container_type_product");
let selectedType = "";
typeProducts.forEach(typeProduct => {
    typeProduct.addEventListener("click", async() => {
        selectedType = typeProduct.querySelector(".text_type_product").textContent;
        // console.log(selectedType);


        getWeatherData(selectedType)
            .then(data => {
                // do something with the data
                console.log(data);
                carregarProdutos(data)
            })
            .catch(error => {
                // console.error(error);
            });
    });
});

const getBrand = async() => {
    const url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl`

    const res = await fetch(url);
    const data = await res.json();
     console.log(data)
    return data

}

getBrand()
const criarCards = (produto) => {

  
    const card = document.createElement("div");
    card.classList.add("container_all_products");
  
    const product = document.createElement("div");
    product.classList.add("product");
  
    const imgInfo = document.createElement("div");
    imgInfo.classList.add("img_info");
  
    const img = document.createElement("img");
    img.classList.add("img_product");
    img.src = produto.image_link;
    img.alt = "";
  
    const info = document.createElement("div");
    info.classList.add("info");
  
    const name = document.createElement("span");
    name.classList.add("name");
    name.textContent = produto.name;
  
    const price = document.createElement("span");
    price.classList.add("price");
    price.textContent = `preço: $${produto.price}`;
  
    const description = document.createElement("div");
    description.classList.add("description");
    description.textContent = produto.description;
  
    info.append(name, price);
    imgInfo.append(img, info);
    product.append(imgInfo, description);
    card.appendChild(product);
  
    return card;
  };
  const carregarTodosProdutos = async(product) => {
    console.log(product)
    const container = document.getElementById('container_all_products')
    const cards = await product.map(criarCards)



    container.replaceChildren(...cards)

}

getBrand().then(carregarTodosProdutos);

