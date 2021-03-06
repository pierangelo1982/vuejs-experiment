// first
var app = new Vue({
    el: '#app',
    data: {
        message: 'Prova Vue',
    }
});

// second
var app2 = new Vue({
    el: '#app2',
    data: {
        title: 'Seconda Prova',
        subtitle: 'proviamo con due variabili'
    }
});

// third
// when you go over with mouse on the elemeent it show a flag with the message
var app3 = new Vue({
    el: '#app3',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
});

// four & five
// you see four because is true
// you don't see five becouse is false
var app4 = new Vue({
    el: '#app4',
    data: {
        seen: true
    }
});
var app5 = new Vue({
    el: '#app5',
    data: {
        seen: false
    }
});

// six
/*
In the console, enter app6.todos.push({ text: 'New item' }).
You should see a new item appended to the list.
*/
var app6 = new Vue({
    el: '#app6',
    data: {
        todos: [
            {text: 'Learn JS!'},
            {text: 'Learn Vue.js'},
            {text: 'Build Something!'}
        ]
    }
});

// seven
var app7 = new Vue({
    el: '#app7',
    data: {
        heroes: [
            {name: 'Bruce Wayne', alias: 'Batman'},
            {name: 'Tony Stark', alias: 'Iron Man'},
            {name: 'Barry Allen', alias: 'The Flash'},
        ]
    }
});

// otto - reverse message
var app8 = new Vue({
    el: '#app8',
    data: {
        message: 'Hello Vue.JS'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

// nove input model
var app9 = new Vue({
    el: '#app9',
    data: {
        message: 'scrivi qualcosa nel form'
    }
});

// dieci nome cognome
var app10 = new Vue({
    el: '#app10',
    data: {
        valore: 0,
        valoredue: 0,
        totale: 0
    },
    methods: {
        calculateTotal: function() {
            this.totale = parseInt(this.valore) + parseInt(this.valoredue)
        }
    }
});