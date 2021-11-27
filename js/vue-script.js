// Descrizione:
// Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
// Bonus:
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
// Consigli del giorno:
// - regola d'oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css dell'esercizio svolto qualche giorno fa: è già tutto pronto!
// - il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe ;)
// - oltre a Vue, ora abbiamo diversi strumenti in più nelle nostre tasche, che possono tornarci utili per svolgere l'esercizio in una versione più evoluta ed efficace, soprattutto per quando riguarda la struttura dei dati. Forse questa volta possiamo fare qualcosa di meglio di 3 array separati... sì, ma cosa? :faccia_pensosa:


// trasformo i 3 array in un array di oggetti

// const elementi = [
//     {
//         titolo : 'Svezia',
//         immgaine : 'img/01.jpg',
//         testo : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.' 
//     },
//     {
//         titolo : 'Svizzera',
//         immgaine : 'img/02.jpg',
//         testo : 'Lorem ipsum' 
//     },
//     {
//         titolo : 'Gran Bretagna',
//         immgaine : 'img/03.jpg',
//         testo : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' 
//     },
//     {
//         titolo : 'Germania',
//         immgaine : 'img/04.jpg',
//         testo : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,' 
//     },
//     {
//         titolo : 'Paradise',
//         immgaine : 'img/01.jpg',
//         testo : 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,' 
//     }
// ];

const app = new Vue({
    el: '#root',
    data: {
        elementi: [
            {
                titolo : 'Svezia',
                immagine : 'img/01.jpg',
                testo : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.' 
            },
            {
                titolo : 'Svizzera',
                immagine : 'img/02.jpg',
                testo : 'Lorem ipsum' 
            },
            {
                titolo : 'Gran Bretagna',
                immagine : 'img/03.jpg',
                testo : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' 
            },
            {
                titolo : 'Germania',
                immagine : 'img/04.jpg',
                testo : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,' 
            },
            {
                titolo : 'Paradise',
                immagine : 'img/01.jpg',
                testo : 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,' 
            }
        ],
        currentImage: 0,
            
    },
    methods: {
        nextImage: function(){
            if(this.currentImage == this.elementi.length-1){
                this.currentImage = 0;
            }else{
                this.currentImage++;
            }
        },
        prevImage: function(){
            if(this.currentImage == 0){
                this.currentImage = this.elementi.length -1;
            }else{
                this.currentImage--;
            }
        }
    }
});