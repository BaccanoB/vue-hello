// Descrizione:
// Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.

var app = new Vue (
    {
        el:"#root",
        data: {
            title:"Benvenuti sul lago di Braies!!",
            color:"blueviolet",
            image:"img",
            btnColor:"bg_orange",
            message:"Raggiungi la Baita Segantini",
            toggle: true
        },
        methods: {
            changeImg: function () {
                this.toggle = !this.toggle;
                if  (this.toggle == true) {
                    this.image = "img_two"
                    this.color = "orange"
                    this.btnColor = "bg_blueviolet"
                    this.message = "Fai un giro sul lago di Braies"
                    this.title = "Benvenuti alla Baita Segantini!!"
                }else {
                    this.image = "img"
                    this.color = "blueviolet"
                    this.btnColor = "bg_orange"
                    this.message = "Raggiungi la Baita Segantini"
                    this.title = "Benvenuti sul lago di Braies!!"
                }
            }
        }
});

// Bonus:
// Aggiungere alla pagina un'immagine, presa anch'essa da un data.
