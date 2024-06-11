const cont = document.querySelector('.container')
const head = document.querySelector('header')

for (let i = 0; i < 12; i++) {
    tot()
}

function tot() {
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
    img.setAttribute('src', './images/bag.webp')
    h1.innerText = 'MEN`S CLOTHING (120)'
    p.innerText = 'Your perfect pack for every body use and walksin the forest. Stash your laptop fup to 15 inchasi in the padded sleave, your everybody'
    h1.classList.add('topText')
    p.classList.add('midText')
    block.classList.add('block')
    blockmid.classList.add('item')
    span.innerText = '109'
    spantwo.innerText = '3.9'
    spanthree.innerText = '120'
    span.classList.add('spaText')
    spantwo.classList.add('spaText')
    spanthree.classList.add('spaText')
    imgOne.setAttribute('src', './images/dollar.png')
    imgOne.style.width = '20px'
    imgTwo.setAttribute('src', './images/star.png')
    imgTwo.style.width = '20px'
    imgThree.setAttribute('src', './images/box.png')
    imgThree.style.width = '20px'
    box.classList.add('it')
    boxTwo.classList.add('it')
    boxThree.classList.add('it')
    butn.classList.add('but')
    butn.innerHTML = 'В избранное'
    
    butn.onclick = () => {
        butn.classList.toggle('acctive')
        if (butn.className == 'but') {
            butn.innerHTML = 'В избранное'
        } else {
            butn.innerHTML = 'Добавлено'
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
