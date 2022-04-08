const addProductToHtml = (product) => {
    const productListHTML = document.getElementById("productColumnId");
    const productHtml = 
            `<div class="card">` +
                `<div class="contentCardWrapper">` +
                    `<img src="assets/${product.image}" alt="${product.name}" width="150" height="150" />` +
                    `<p>${product.name}</p>` +
                    `<h3>${product.price}€</h3>` +
                '</div>' +
            '</div>';
    var p = document.createElement("div");
    p.innerHTML = productHtml;
    productListHTML.appendChild(p);
};

const productListData = [
    {
        id: '0',
        name: 'Beats ANC',
        image: 'aur1.jpg',
        price: 99.99,
        category: 'ANC',
    },
    {
        id: '1',
        name: 'Blue Bluetooth',
        image: 'aur2.jpg',
        price: 27.40,
        category: 'bluetooth',
    },
    {
        id: '2',
        name: 'Salmon blue',
        image: 'aur3.jpg',
        price: 44,
        category: 'bluetooth',
    },
    {
        id: '3',
        name: 'Sony W3A004',
        image: 'aur4.jpg',
        price: 349,
        category: 'ANC',
    },
    {
        id: '4',
        name: 'Marshall ANC l',
        image: 'aur5.jpg',
        price: 99.99,
        category: 'ANC',
    },
    {
        id: '5',
        name: 'Bose soundlink ii',
        image: 'aur6.jpg',
        price: 229.99,
        category: 'ANC',
    },
    {
        id: '6',
        name: 'Marshall TWS',
        image: 'int1.jpg',
        price: 198,
        category: 'TWS',
    },
    {
        id: '7',
        name: 'Black box',
        image: 'int2.jpg',
        price: 123.55,
        category: 'TWS',
    },
    {
        id: '8',
        name: 'Black TWS',
        image: 'int3.jpg',
        price: 30.48,
        category: 'TWS',
    },
    {
        id: '9',
        name: 'Airpods',
        image: 'int4.jpg',
        price: 199,
        category: 'TWS',
    }
];

productListData.map((product) => (
    addProductToHtml(product)
));

const filterList = () => {
    const min = document.getElementById('priceMin');
    const max = document.getElementById('priceMax');
    const checkANC = document.getElementById('anc');
    const checkBlue = document.getElementById('bluetooth');
    const checkTWS = document.getElementById('TWS');

    const productListHTML = document.getElementById("productColumnId");
    productListHTML.innerHTML = '';
    
    productListData.filter((p) => {
        let showProduct = true;
        if (min.value) {
            showProduct = min.value <= p.price;
        }
        if (showProduct && max.value) {
            showProduct = max.value >= p.price;
        }
        const categoriesToFilter = [];
        if (checkANC.checked) {
            categoriesToFilter.push('ANC');
        }
        if (checkBlue.checked) {
            categoriesToFilter.push('bluetooth');
        }
        if (checkTWS.checked) {
            categoriesToFilter.push('TWS');
        }
        if (showProduct) {
            showProduct = categoriesToFilter.includes(p.category);
        }
        return showProduct;

    }).map((product) => (
        addProductToHtml(product)
    ));

}