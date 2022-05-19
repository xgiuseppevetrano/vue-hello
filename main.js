// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

// 1. Dichiaro dove utilizzare Vue
const app = new Vue (
    {
        el: '#app',
        data: {
            // 2. Dichiaro cosa scrivere all'interno dell'h1
            message: "Vue è bellissimo!",
            // 3. Dichiaro l'src dell'immagine che voglio inserire
            image: "vuejs.jpg",
        }
    }
);