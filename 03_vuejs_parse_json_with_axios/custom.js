// simple parse
var app = new Vue({
    el: '#app',
    data () {
        return {
            info: null
        }
    },
    mounted () {
        axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => (this.info = response))
    }
});

// more complex into the object
var app2 = new Vue({
    el: '#app-2',
    data () {
        return {
            info: null
        }
    },
    mounted () {
        axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => this.info = response.data.bpi)
    }
});

// improving and loop currency in frontend
var app3 = new Vue({
    el: '#app-3',
    data () {
        return {
            info: null
        }
    },
    mounted () {
        axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => this.info = response.data.bpi)
            .catch(error => console.log(error))
    },
    filters: {
        currencydecimal (value) {
          return value.toFixed(2)
        }
      }
});


// error handler
var app4 = new Vue({
    el: '#app-4',
    data () {
        return {
            info: null,
            loading: true,
            errored: false
        }
    },
    filters: {
        currencydecimal (value) {
          return value.toFixed(2)
        }
    },
    mounted () {
        axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response =>  {
                this.info = response.data.bpi
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => this.loading = false)
        }
});