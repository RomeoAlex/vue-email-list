Vue.config.devtools = true;
const app =  new Vue ({
    el:'#root',
    data: {
        message: 'Ciao sono un messsaggio'
    },
});
// Utilizzo axios per avere una risposta dal server
axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(function(risposta){
    console.log(risposta);
});