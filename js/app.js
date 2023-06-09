console.log("Componente Vue")
console.log(Vue)


//Options API
const app=Vue.createApp({
    //Opcion 1
    //template:`
    //<h1>Hola mundo</h1>
    //<p>Desde Vue js</p>
    //<p>{{1+1}}</p>
    //`
    

    data(   ){
        return {
            nombre: 'David',
            apellido:'Marks',
            mensaje:'Hola mundo'
        }
    },

    methods:{
        cambiarNombre(){
            console.log("Cambiar nombre")
            this.nombre='Valeria'
        },
        cambiarApellido(){
            console.log("Cambiar apellido")
            this.apellido='Ordoñez'
        }

    }
    //Opcion 1

    //Opcion n ......


})

app.mount('#myAplicacion')