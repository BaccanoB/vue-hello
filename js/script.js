// Descrizione:
// Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.

var app = new Vue (
    {
        el:"#root",
        data: {
            title:"Benevenuto nel fantastico mondo di Vue!!",
            color:"blueviolet",
            image:"img"
        },
        methods: {
            changeImg: function () {
                if (this.image == "img"){
                    this.image = "img_two"
                }else {
                    this.image = "img"
                    
                }
            }
        }
});

// Bonus:
// Aggiungere alla pagina un'immagine, presa anch'essa da un data.
