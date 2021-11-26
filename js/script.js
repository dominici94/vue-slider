
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

const mainCont = document.querySelector('.main-cont');
const slider = document.querySelector('.slider');
 
let itemsContent = '';
let sliderContent = ''; 

for(let i=0; i < items.length; i++){

    itemsContent += `
    <div class="item">
        <img src="${items[i]}" alt="${title[i]}">
        <div class="img-text">
            <h1>${title[i]}</h1>
            <p>${text[i]}</p>
        </div>
    </div>`;

    sliderContent += `
    <div class="img-container">
        <div class="overlay">
        </div>
        <img src="${items[i]}" alt="${title[i]}">
    </div>`;

}


mainCont.innerHTML = itemsContent;

slider.innerHTML = sliderContent + `
<button type = button class="arrow up"><i class="fas fa-chevron-up"></i></button>
<button type = button class="arrow down"><i class="fas fa-chevron-down"></i></button>`;

const item = document.querySelector('.item');
item.classList.add('active');

const selected = document.querySelector('.overlay');
selected.classList.add('selected');


const btnDown = document.querySelector('.down')
const btnUp = document.querySelector('.up')
let elementi = document.getElementsByClassName('item');
console.log(elementi);
let overlays = document.getElementsByClassName('overlay');
console.log(overlays);

let activeItem = 0;

btnDown.addEventListener('click', function(){
    elementi[activeItem].classList.remove('active');
    overlays[activeItem].classList.remove('selected');
    if(activeItem == elementi.length-1){
        activeItem = -1;
    }
    elementi[activeItem+1].classList.add('active');
    overlays[activeItem+1].classList.add('selected');
    activeItem++;
    
});

btnUp.addEventListener('click', function(){
    elementi[activeItem].classList.remove('active');
    overlays[activeItem].classList.remove('selected');
    if(activeItem == 0){
        activeItem = elementi.length;
    }
    elementi[activeItem-1].classList.add('active');
    overlays[activeItem-1].classList.add('selected');
    activeItem--;
});
