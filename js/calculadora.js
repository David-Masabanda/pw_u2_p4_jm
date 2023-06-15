
const app = Vue.createApp({
    data() {
        return {
            num1: 0,
            num2: 0,
            operacion: undefined,
            resultado: ''
        }
    },

    methods:{
        num(numero) {
            this.resultado += numero;
        },

        op(funcion) {
            this.operacion = funcion;
            this.num1 = parseInt(this.resultado);
            console.log(this.num1);
            this.resultado = '';
        },

        igual() {
            this.num2 = parseInt(this.resultado);
            console.log(this.num2);
            this.resolver(this.num1, this.num2);
        },

        resolver(numero1, numero2) {
            var result = this.operacion(numero1, numero2);
            this.resultado = result;
        },

        resetear() {
            this.num1 = 0;
            this.num2 = 0;
            this.operacion = undefined;
            this.resultado = '';
        }


    }

})

app.mount('#myCalculadora')





