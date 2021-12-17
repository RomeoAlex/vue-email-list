Vue.config.devtools = true;
const app =  new Vue ({
    el:'#root',
    data: {
        // dichiaro un array vuoto per riempirlo con i get di axios
        mails: [],
    },
    created:function() {
        for(let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            // utilizzo arrow function
            .then((risposta) =>{
                // creo variabile per allocare il dato ricevuto dal server già ridotto all'informazione desiderata dall'array di oggetti ricevuto inizialmente
                const newMail = risposta.data.response;
                // pusho il dato nell'array dichiarato nel data di VUe
                this.mails.push(newMail);

});
        }
    }
});
// se la lunghezza di mails è inferiore a 10 faccio una richiesta axios
// Utilizzo axios per avere una risposta dal server
// let mails = [];
// let addMAil = axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(function(risposta){
//     // in questo modo ho in console la singola email estrapolata dalla richiesta e ricevuta del server
// // console.log(risposta.data.response);
// mails.push(risposta.data.response);
// });



