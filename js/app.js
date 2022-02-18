window.onload = function(){
    //Abro y cierro el menu para que no evite la transicion la primera vez  que se abre
    abrirMenu();
    abrirMenu();
};
let products = [
    {
        productNumber: '01',
        productAuthor: 'Michael W. Dreeben',
        productName: 'Shell Dining Chair',
        productDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget pretium tortor. Ut vel convallis lectus. Vestibulum tristique enim sit amet lacus luctus, id varius',
        productImg: '../recursos/shell-dining-chair.png'

    },
    {
        productNumber: '02',
        productAuthor: 'Jeaper K. Thomas',
        productName: 'Dunes Anthrazite',
        productDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget pretium tortor. Ut vel convallis lectus. Vestibulum tristique enim sit amet lacus luctus, id varius',
        productImg: '../recursos/dunes-anthrazite.png'
    }
];

//Se crean scroll helpers dependiendo de la cantidad de productos
let scrollHelperContainer = document.getElementById('scroll-helper-container');
let idScroll = 0;
products.forEach((e)=>{
    let scrollHelper = document.createElement('DIV');
    scrollHelper.classList.add('scroll-helper');
    scrollHelper.id = `sh${idScroll}`
    scrollHelper.style.height = '100vh';
    scrollHelperContainer.appendChild(scrollHelper)
    idScroll ++;
})

//Funcion para modificar los componentes del main
function modificarComponentes(id, lastPos){
    document.getElementById(id).classList.add('active');
    document.getElementById(lastPos).classList.remove('active');
    
    if(lastPos > id){
        //Scroll hacia arriba
        author.style.animation = 'textDown 2s linear';
        namePro.style.animation = 'textDown 2s linear';
        desc.style.animation = 'textDown 2s linear';
        image.style.animation = 'imgDown 2s linear';
        
        setTimeout(()=>{
            author.innerHTML = products[id].productAuthor;
            namePro.innerHTML = products[id].productName;
            desc.innerHTML = products[id].productDesc;
            image.src = products[id].productImg;
        }, 1000);
    } else{
        //Scroll es hacia abajo
        // author.style.animation = 'up 3s linear';
        author.style.animation = 'textUp 2s linear';
        namePro.style.animation = 'textUp 2s linear';
        desc.style.animation = 'textUp 2s linear';
        image.style.animation = 'imgUp 2s linear';
        
        setTimeout(()=>{
            author.innerHTML = products[id].productAuthor;
            namePro.innerHTML = products[id].productName;
            desc.innerHTML = products[id].productDesc;
            image.src = products[id].productImg;
        }, 1000);
    }

}


//Funcion para crear los elementos HTML del footer de forma dinamica
function createPageSelector(product, idsFooter){
    //Declaracion de los componentes de cada page-selector
    let pageSelector = document.createElement('a');
    let borderTop = document.createElement('DIV');
    let pageNumber = document.createElement('p');
    let productName = document.createElement('p');

    //Se le da valor a los parrafos
    pageNumber.innerHTML = product.productNumber;
    productName.innerHTML = product.productName;

    //Colocacion de parrafos dentro del div pageSelector
    pageSelector.appendChild(borderTop);
    pageSelector.appendChild(pageNumber);
    pageSelector.appendChild(productName);

    //Se le da clases a los elementos para que adopten los estilos
    pageSelector.classList.add('page-selector');
    borderTop.classList.add('page-selector__border');
    pageNumber.classList.add('page-number');
    productName.classList.add('page-selector__product');

    pageSelector.href = `../index.html#sh${idsFooter}`

    borderTop.id = idsFooter;

    return pageSelector;
}


const footer = document.getElementById('footer-content');
let idsFooter = 0;
//Funcion autoejecutable
(()=>{
    products.forEach(product =>{
        footer.appendChild(createPageSelector(product, idsFooter));
        idsFooter++;
    })
})()




const main = document.getElementById('products');
//Main por defecto (con ID 0)

    //Declaracion de los componentes de cada producto
    let product = document.createElement('DIV');
    let productContent = document.createElement('DIV');
    let productImage = document.createElement('DIV');
    let image = document.createElement('img');
    let productInfo = document.createElement('DIV');
    let author = document.createElement('p');
    let namePro = document.createElement('h2');
    let desc = document.createElement('p');
    let detailsButton = document.createElement('button');

    //Se le da valor a los parrafos, titulos y al boton
    author.innerHTML = products[0].productAuthor;
    namePro.innerHTML = products[0].productName;
    desc.innerHTML = products[0].productDesc;
    detailsButton.textContent = 'Product Details';
    image.alt = 'Mueble';

    //Src de la imagen
    image.src = products[0].productImg;

    //AppendChilds  
    product.appendChild(productContent);
    productContent.appendChild(productImage);
    productContent.appendChild(productInfo);
    productImage.appendChild(image);
    productInfo.appendChild(author);
    productInfo.appendChild(namePro);
    productInfo.appendChild(desc);
    productInfo.appendChild(detailsButton);

    //Clases
    product.classList.add('product');
    productContent.classList.add('product-content');
    productImage.classList.add('product-img');
    productInfo.classList.add('product-info');
    author.classList.add('soft-letter');
    namePro.classList.add('product__product-name');
    desc.classList.add('soft-letter');
    desc.classList.add('product-desc');

    main.appendChild(product)

/*  MODELO HTML A SEGUIR
        <div class="product">
            <div class="product-content">
                <div class="product-img">
                    <img src="recursos/dunes-anthrazite.png" alt="">
                </div>
                <div class="product-info">
                    <p class="soft-letter">Autor asdasdasd</p>
                    <h2 class="product__product-name">Nombre del producto fachero</h2>
                    <p class="soft-letter product-desc">Esta es la descripcion del producto la cual va a tener que ser lo suficientemente extensa para poder llegar a los tres renglones</p>
                    <button>Product Details</button>
                </div>
            </div>
        </div>
*/

let productPositioned;
let lastPos = 0;
document.getElementById(lastPos).classList.add('active');
document.addEventListener('scroll', ()=>{
    productPositioned = window.scrollY / window.innerHeight;
    if(productPositioned % 1 == 0){
        modificarComponentes(productPositioned, lastPos);
        lastPos = productPositioned;
    }  
})

//INTERFAZ 2

let menu = document.getElementById('menu-container');
let menuIsOpen = false;
let iconoModificar = document.getElementById('open-close-menu');
let tituloModificar = document.getElementById('header-logo');
let footerMenu = document.getElementById('menu-footer__options');
let optionMenu = document.getElementById('mi0');
let itemsMenu = document.getElementById('menu-items');
function abrirMenu(){
    if(menuIsOpen){
        menu.style.width = '0';
        menuIsOpen = false;
        iconoModificar.style.stroke = '#000';
        tituloModificar.style.color = '#000';
        itemsMenu.style.animation = 'itemsDisappear 1s';
        footerMenu.style.animation = 'footerMenuCerrar 1s linear';
    } else{
        menu.style.width = '100%';
        menuIsOpen = true;
        iconoModificar.style.stroke = '#fff';
        tituloModificar.style.color = '#fff';
        setTimeout(()=>{
        }, 5000)
        itemsMenu.style.animation = 'itemsAppear 2.4s linear';
        footerMenu.style.animation = 'footerMenu 2.8s linear';
    }
}

//Item desplegable
let submenu = document.getElementById('submenu');
let itemMenu = document.getElementById('menu-desplegable');
itemMenu.addEventListener('mouseover',function(){
    submenu.classList.remove('cerrado');
});
itemMenu.addEventListener('mouseout',function(){
    submenu.classList.add('cerrado');
});

//Mostrar imagen con el submenu desplegable
let itemSubmenu = document.getElementById('mostrar-imagen');
let imagenMenu = document.getElementById('imagen-menu');
itemSubmenu.addEventListener('mouseover',()=>{
    imagenMenu.style.animation = 'entradaImagen 1.5s'
    imagenMenu.src = '../recursos/Sofá blanco.png'
});
itemSubmenu.addEventListener('mouseout',()=>{
    imagenMenu.style.animation = 'salidaImagen 1.5s'
    setTimeout(()=>{
        imagenMenu.src = '';
    },1500)
});