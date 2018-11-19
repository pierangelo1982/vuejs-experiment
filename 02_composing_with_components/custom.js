// Define a new component called todo-item
Vue.component('todo-item', {
    template: '<li>this is a todo</li>'
});

var app = new Vue({
    el: '#app'
});

// passiamo valori
Vue.component('todo-list', {
    // The todo-item component now accepts a
    // "prop", which is like a custom attribute.
    // This prop is called todo.
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
});

var app1 = new Vue({
    el: '#app-1',
    data: {
        groceryList: [
            {id: 0, text: 'Vegeatables'},
            {id: 1, text: 'Cheese'},
            {id: 2, text: 'Chocolate'}
        ]
    }
});

// proviamo a passare valori nessa stessa componente di grocery todo-list
var app2 = new Vue({
    el: '#app-2',
    data: {
        heroesList: [
            {id: 0, text: 'Ironman'},
            {id: 1, text: 'Batman'},
            {id: 2, text: 'Flash'}
        ]
    }
});

