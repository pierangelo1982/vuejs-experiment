new Vue({
        el: '#exercise',
        data: {
            value: 0
        },
        computed: {
          result: function() {
            return this.value == 37 ? 'done!' : 'not there yet'
          }
        },
        watch: {
          // guarda il result in computed, finche non sarò 37 non parte
          result: function () {
            // passo il this il valore di data e computed in una variabile
            var vm = this;
            // resetto a zero dopo 5 secondi che ha raggiunto 37
            setTimeout(function() {
              vm.value = 0
            },5000);
          }
        }
    });
