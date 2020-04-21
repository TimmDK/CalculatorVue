var app = new Vue({
    el: '#app',

    data: {
        number1: 0,
        number2: 0,
        operator: null,
        result: 0
    },

    methods: {
        
        calculate: function()
        {
            if(this.operator == "+")
            this.result = ((this.number1) + (this.number2))

            else if(this.operator == "-")
            this.result = ((this.number1) - (this.number2))

            else if(this.operator == "*")
            this.result = ((this.number1) * (this.number2))

            else if(this.operator == "/")
            this.result = ((this.number1) / (this.number2))
        }
    }
})