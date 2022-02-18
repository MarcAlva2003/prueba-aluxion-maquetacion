let products = [
    {
        productNumber: 01,
        productAuthor: 'Michael W. Dreeben',
        productName: 'Shell Dining Chair',
        productDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget pretium tortor. Ut vel convallis lectus. Vestibulum tristique enim sit amet lacus luctus, id varius magna sodales. Aenean varius ut justo id dapibus',
        productImg: ''

    },
    {
        productNumber: 02,
        productAuthor: 'Jeaper K. Thomas',
        productName: 'Dunes Anthrazite',
        productDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget pretium tortor. Ut vel convallis lectus. Vestibulum tristique enim sit amet lacus luctus, id varius magna sodales. Aenean varius ut justo id dapibus',
        productImg: ''
    }
];
let test = document.getElementById('test');
function cambiarClase(){
    if (test.classList.contains('active')) {
        test.classList.remove('active')
    } else{
        test.classList.add('active')
    }
}