// 'use strict'

// class card extends HTMLElement {
//     constructor(){
//         super()
//         this.shadow = this.attachShadow({mode:'open'})
//         this.imagem = null
//         this.titulo = 'Titulo Produto'

//     }

//     static get observedAttributes(){
//         return [
//             'imagem',
//             'titulo', 

//         ]
//     }


//     attributeChangedCallback(nameAttr, oldValue, newValue){
//         this[nameAttr] = newValue
//     }

//     connectedCallback(){
//         this.shadow.appendChild(this.component())
//         this.shadow.appendChild(this.styles())
//     }

//     styles(){
//         const css = document.createElement('style')
//         css.textContent = `

//         *{
//             padding: 0;
//             margin: 0;
//             box-sizing: border-box;
//         }
//         .container_types_products{
//             display:flex;	
//         align-items:center;
//         flex-direction:row;
//         flex-wrap:wrap;
//         gap: 30px;


//     }

//     .container_type_product{
//         display:flex;	
//         align-items:center;
//         flex-direction:column;
//         margin:10px;
//     }

//     .container_type_product:hover{
//             transform:scale(1.2);
//         cursor:pointer;
//     }

//     .image_type_product{
//         height:80px;
//         width:80px;
//     }

//     .text_type_product{

//         font-size:2vw;
//     }
//         `

//         return css
//     }

//     component(){
//         const card = document.createElement('div')
//         card.classList.add('container_type_product')

//         const card__image = document.createElement('img')
//         card__image.classList.add('image_type_product')
//         card__image.src = this.imagem

//         const card__title = document.createElement('span')
//         card__title.classList.add('text_type_product')
//         card__title.textContent = this.titulo



//         card.append(card__image, card__title)


//         return card
//     }
// }

// customElements.define('card-produto', card)