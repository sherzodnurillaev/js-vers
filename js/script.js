import { arr } from "./main.js"

const cont = document.querySelector('.container')
const total = document.querySelector('.header_block span')
const btons = document.querySelectorAll('.but_block button')

btons.forEach((bton, b) => {
    bton.onclick = () => {
        cont.innerHTML = '';
        total.innerHTML = 0
        if (bton.classList.contains('all')) {
            all()
        } else {
            five()
        }
    }
})

function  five() {
    for (let i = 0; i < 5; i++) {
        const item = arr[i];
        let div = document.createElement('div')
        let text = document.createElement('div')
        let img = document.createElement('img')
        let h1 = document.createElement('h1')
        let p = document.createElement('p')
        let block = document.createElement('div')
        let blockmid = document.createElement('div')
        let span = document.createElement('span')
        let spantwo = document.createElement('span')
        let spanthree = document.createElement('span')
        let box = document.createElement('div')
        let boxTwo = document.createElement('div')
        let boxThree = document.createElement('div')
        let imgOne = document.createElement('img')
        let imgTwo = document.createElement('img')
        let imgThree = document.createElement('img')
        let butn = document.createElement('button')
        
        div.classList.add('elem')
        text.classList.add('text')
        img.classList.add('imag')
        h1.classList.add('topText')
        p.classList.add('midText')
        block.classList.add('block')
        blockmid.classList.add('item')
        span.classList.add('spaText')
        spantwo.classList.add('spaText')
        spanthree.classList.add('spaText')
        box.classList.add('it')
        boxTwo.classList.add('it')
        boxThree.classList.add('it')
        butn.classList.add('but')
        img.setAttribute('src', item.image)
        imgOne.setAttribute('src', './images/dollar.png')
        imgTwo.setAttribute('src', './images/star.png')
        imgThree.setAttribute('src', './images/box.png')
        h1.innerText = item.category
        p.innerText = item.description
        span.innerText = item.price
        spantwo.innerText = item.rating.rate
        spanthree.innerText = item.rating.count
        butn.innerHTML = 'В избранное'
        imgOne.style.width = '20px'
        imgTwo.style.width = '20px'
        imgThree.style.width = '20px'
        
        butn.onclick = () => {
            butn.classList.toggle('acctive')
            if (butn.className == 'but') {
                butn.innerHTML = 'В избранное'
                total.innerHTML--
            } else {
                butn.innerHTML = 'Добавлено'
                total.innerHTML++
            }
        }
        
        cont.append(div)
        div.append(img,text, block, butn)
        text.append(h1, p,)
        block.append(blockmid)
        blockmid.append(box, boxTwo, boxThree)
        box.append(imgOne, span)
        boxTwo.append(imgTwo, spantwo)
        boxThree.append(imgThree, spanthree)
        
    }
}
  
function all() {
    for (const item of arr) {
        let div = document.createElement('div')
        let text = document.createElement('div')
        let img = document.createElement('img')
        let h1 = document.createElement('h1')
        let p = document.createElement('p')
        let block = document.createElement('div')
        let blockmid = document.createElement('div')
        let span = document.createElement('span')
        let spantwo = document.createElement('span')
        let spanthree = document.createElement('span')
        let box = document.createElement('div')
        let boxTwo = document.createElement('div')
        let boxThree = document.createElement('div')
        let imgOne = document.createElement('img')
        let imgTwo = document.createElement('img')
        let imgThree = document.createElement('img')
        let butn = document.createElement('button')
        
        div.classList.add('elem')
        text.classList.add('text')
        img.classList.add('imag')
        h1.classList.add('topText')
        p.classList.add('midText')
        block.classList.add('block')
        blockmid.classList.add('item')
        span.classList.add('spaText')
        spantwo.classList.add('spaText')
        spanthree.classList.add('spaText')
        box.classList.add('it')
        boxTwo.classList.add('it')
        boxThree.classList.add('it')
        butn.classList.add('but')
        img.setAttribute('src', item.image)
        imgOne.setAttribute('src', './images/dollar.png')
        imgTwo.setAttribute('src', './images/star.png')
        imgThree.setAttribute('src', './images/box.png')
        h1.innerText = item.category
        p.innerText = item.description
        span.innerText = item.price
        spantwo.innerText = item.rating.rate
        spanthree.innerText = item.rating.count
        butn.innerHTML = 'В избранное'
        imgOne.style.width = '20px'
        imgTwo.style.width = '20px'
        imgThree.style.width = '20px'
        
        butn.onclick = () => {
            butn.classList.toggle('acctive')
            if (butn.className == 'but') {
                butn.innerHTML = 'В избранное'
                total.innerHTML--
            } else {
                butn.innerHTML = 'Добавлено'
                total.innerHTML++
            }
        }
        
        cont.append(div)
        div.append(img,text, block, butn)
        text.append(h1, p,)
        block.append(blockmid)
        blockmid.append(box, boxTwo, boxThree)
        box.append(imgOne, span)
        boxTwo.append(imgTwo, spantwo)
        boxThree.append(imgThree, spanthree)
    }
    
}
