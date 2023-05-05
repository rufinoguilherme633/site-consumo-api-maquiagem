// 'use strict'

// const routes = { // função para mudar de páginas
//     '/products': '/pages/products.html',
//     '/home': '/home.html',
//     // '/product': '/pages/product.html',
// }

// const route = async() => {
//     window.event.preventDefault()
//         // pegar a resposta do link
//     window.history.pushState({}, "", window.event.target.href) //pegando a URL
//         // console.log(window.event.target.href)
//         //target -> elemento

//     const path = window.location.pathname

//     // console.log(path)
//     const route = routes[path]

//     const respose = await fetch(route)

//     const html = await respose.text()

//     document.getElementById('root').innerHTML = html

//     // console.log(routes[path])
//     console.log(html)
// }

// const containers = document.querySelectorAll('.container_type_product')

// containers.forEach(container => {
//     container.addEventListener('click', () => {
//         const href = '/products'
//         window.history.pushState({}, "", href)
//         route()
//     })
// })

// window.route = route



'use strict'
const routes = { // função para mudar de páginas

    '/products': '/pages/products.html',
    '/home': '/home.html',
}
const route = async() => {
    window.event.preventDefault()
    window.history.pushState({}, "", window.event.target.href)
    const path = window.location.pathname
    const route = routes[path]
    const respose = await fetch(route)
    const html = await respose.text()
    const root = document.getElementsByTagName('html')[0];
    const newRoot = document.createElement('html');
    newRoot.innerHTML = html;
    root.parentNode.replaceChild(newRoot, root);
    // console.log(html)
    // remova os event listeners dos elementos antigos aqui
}
const containers = document.querySelectorAll('.container_type_product')
containers.forEach(container => {
    container.addEventListener('click', () => {
        const href = '/products'
        window.history.pushState({}, "", href)
        route()
    })


})




window.route = route





//     'use strict'
// const routes = { // função para mudar de páginas
//     '/products': '/pages/products.html',
//     '/product': '/pages/product.html',
// }
// const route = async() => {
//     window.event.preventDefault()
//     window.history.pushState({}, "", window.event.target.href)
//     const path = window.location.pathname
//     const route = routes[path]
//     const respose = await fetch(route)
//     const html = await respose.text()
//     const root = document.getElementsByTagName('html')[0];
//     const newRoot = document.createElement('html');
//     newRoot.innerHTML = html;
//     root.parentNode.replaceChild(newRoot, root);
//     console.log(html)
//         // remova os event listeners dos elementos antigos aqui
// }
// const containers = document.querySelectorAll('.container_type_product')
// containers.forEach(container => {
//     container.addEventListener('click', () => {
//         const href = '/products'
//         window.history.pushState({}, "", href)
//         route()
//     })
// })

// window.route = route