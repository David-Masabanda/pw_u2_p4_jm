var estudiantes = [
];

console.log(estudiantes)

const app = Vue.createApp({

    data() {
        return {
            estudiantes,
            
            nombre: '',
            apellido: '',
            telefono: '',
            direccion: '',

        }
    },

    methods: {
        agregarPersona() {
            console.log("Vamos a agregar al Estudiante")
            console.log(this.nombre)
            console.log(this.apellido)
            console.log(this.telefono)
            console.log(this.direccion)
            const nuevoEstudiante = {
                nombre: this.nombre,
                apellido: this.apellido,
                telefono: this.telefono,
                direccion: this.direccion,
            }
            this.estudiantes.push(nuevoEstudiante)
            console.log(estudiantes)
            this.resetear()
        },

        resetear() {    
            this.nombre = "";
            this.apellido = "";
            this.telefono = "";
            this.direccion = "";
          }
    }

})

app.mount('#aplicacionVue')