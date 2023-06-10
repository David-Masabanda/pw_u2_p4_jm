var estudiantes = [
    { nombre: "David", apellido: "Masabanda" },
    { nombre: "Valeria", apellido: "Ordoñez" },
    { nombre: "Samara", apellido: "Vizcaino" },
    { nombre: "Sebitas", apellido: "Arguello" },
    { nombre: "Jaime", apellido: "Jimenez" },
    { nombre: "Fernanda", apellido: "Mosquera" },
    { nombre: "Axel", apellido: "Lopez" },
    { nombre: "David", apellido: "Obando" },
    { nombre: "Lucia", apellido: "Paez" },
    { nombre: "Sara", apellido: "Martinez" }
];



console.log(estudiantes)

//Options API
const app = Vue.createApp({
    data() {
        return {
            estudiantes,
            nombre:'Samara'
        }
    },

    methods:{
        agregarEstudiante(event){
            console.log("Vamos a agregar")
            console.log(this.nombre)
            console.log(event)
            console.log(event.charCode)
            if (event.charCode==13) {
                console.log("Presiono enter")
                const nuevoEstudiante={
                    nombre:this.nombre,
                    apellido:"Marks",
                }
                //Agrega al inicio
                //this.estudiantes.unshift(nuevoEstudiante)
                //Agrega al final
                this.estudiantes.push(nuevoEstudiante)
            }else{
                console.log("No presiono enter")
            }
            console.log(estudiantes)
            //estudiantes.push(this.nombre)
        },

        agregarEstudiante2(){
            console.log("Vamos a agregar")
            console.log(this.nombre)
            const nuevoEstudiante={
                nombre:this.nombre,
                apellido:"Marks",
            }
            //Agrega al inicio
            //this.estudiantes.unshift(nuevoEstudiante)
            //Agrega al final
            this.estudiantes.push(nuevoEstudiante)
            console.log(estudiantes)
        }
    }


})

app.mount('#myAplicacion2')