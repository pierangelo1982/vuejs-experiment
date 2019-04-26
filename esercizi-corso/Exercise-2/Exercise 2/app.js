new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            alertClick: function () {
                alert("Hello! Ciao!");
            },
            listenNow: function (event) {
                this.value = event.target.value;
            }
        }
    });