import { arr } from "./main.js";

const cont = document.querySelector('.container');
const total = document.querySelector('.header_block span');
const btons = document.querySelectorAll('.but_block button');
const bask = document.querySelector('.basket');
const mBox = document.querySelector('section');
const x = document.querySelector('section h1');
const sum = document.querySelector('section .spanel');
const ob = document.querySelector('.spanel span');
const mai = document.querySelector('.main')

let basket = [];

all(arr.slice(0, 5));

btons.forEach((bton, b) => {
    bton.onclick = () => {
        total.innerHTML = 0;

        if (bton.classList.contains('all')) {
            all(arr);
        } else if (bton.classList.contains('five')) {
            all(arr.slice(0, 5));
        }
    }
});

function all(arr) {
    cont.innerHTML = '';

    for (const item of arr) {
        let div = document.createElement('div');
        let text = document.createElement('div');
        let img = document.createElement('img');
        let h1 = document.createElement('h1');
        let p = document.createElement('p');
        let block = document.createElement('div');
        let blockmid = document.createElement('div');
        let span = document.createElement('span');
        let spantwo = document.createElement('span');
        let spanthree = document.createElement('span');
        let box = document.createElement('div');
        let boxTwo = document.createElement('div');
        let boxThree = document.createElement('div');
        let imgOne = document.createElement('img');
        let imgTwo = document.createElement('img');
        let imgThree = document.createElement('img');
        let butn = document.createElement('button');

        div.classList.add('elem');
        text.classList.add('text');
        img.classList.add('imag');
        h1.classList.add('topText');
        p.classList.add('midText');
        block.classList.add('block');
        blockmid.classList.add('item');
        span.classList.add('spaText');
        spantwo.classList.add('spaText');
        spanthree.classList.add('spaText');
        box.classList.add('it');
        boxTwo.classList.add('it');
        boxThree.classList.add('it');
        butn.classList.add('but');

        img.setAttribute('src', item.image);
        imgOne.setAttribute('src', './images/dollar.png');
        imgTwo.setAttribute('src', './images/star.png');
        imgThree.setAttribute('src', './images/box.png');

        h1.innerText = item.category;
        p.innerText = item.description;
        span.innerText = item.price;
        spantwo.innerText = item.rating.rate;
        spanthree.innerText = item.rating.count;
        butn.innerHTML = 'В избранное';

        imgOne.style.width = '20px';
        imgTwo.style.width = '20px';
        imgThree.style.width = '20px';

        butn.onclick = () => {
            if (!butn.classList.contains('active')) {
                butn.classList.add('active');
                butn.innerHTML = 'Добавлено';
                butn.style.backgroundColor = 'rgb(0, 166, 255)'
                butn.style.color = '#fff'
                total.innerHTML++;

                let alreadyInBasket = basket.some(basketItem => basketItem.id === item.id);
                if (!alreadyInBasket) {
                    item.count = 1
                    basket.push(item);
                }

                updateBasketUI();
                totals()
            }
        };

        cont.append(div);
        div.append(img, text, block, butn);
        text.append(h1, p);
        block.append(blockmid);
        blockmid.append(box, boxTwo, boxThree);
        box.append(imgOne, span);
        boxTwo.append(imgTwo, spantwo);
        boxThree.append(imgThree, spanthree);
    }
}

bask.onclick = () => {
    mBox.style.right = '0';
};

x.onclick = () => {
    mBox.style.right = '-100%';
};

function updateBasketUI() {
    mai.innerHTML = '';

    basket.forEach(item => {

        let ele = document.createElement('div')
        let eleBox = document.createElement('div')
        let imgBox = document.createElement('img')
        let div = document.createElement('div')
        let pOne = document.createElement('p')
        let pTwo = document.createElement('p')
        let divTwo = document.createElement('div')
        let plus = document.createElement('button')
        let tot = document.createElement('span')
        let minus = document.createElement('button')

        ele.classList.add('ele')
        eleBox.classList.add('ele__box')
        divTwo.classList.add('ele__box')
        tot.classList.add('count')

        imgBox.setAttribute('src', item.image)
        pOne.innerText = item.category
        pTwo.innerText = item.price
        plus.innerText = '+'
        tot.innerText = item.count
        minus.innerText = '-'

        plus.onclick = () => {
            tot.innerHTML++
            item.count++
            totals()
        }

        minus.onclick = () => {
            if (tot.innerHTML > 1) {
                tot.innerHTML--   
                item.count--
                totals()
            }
        }

        mBox.append(x, mai)
        mai.append(ele)
        ele.append(eleBox, divTwo)
        eleBox.append(imgBox, div)
        div.append(pOne, pTwo)
        divTwo.append(plus, tot, minus)

    });
}


function totals() {
    let total = 0
    basket.forEach(item => {
        let itemCount = item.count 
        let itemPrice = item.price
        let t = itemCount * itemPrice 
        total += t

    })

    ob.innerHTML = Math.floor(total)

}
