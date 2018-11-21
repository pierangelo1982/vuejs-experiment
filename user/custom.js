// error handler
var appusers = new Vue({
    el: '#list',
    data () {
        return {
            users: null,
            totale: null,
            loading: true,
            errored: false,
            deleted: false // function userDelete
        }
    },
    mounted () {
        axios.get('http://127.0.0.1:3000/api/users')
            .then(response =>  {
                console.log(response)
                this.users = response.data.users,
                this.totale = response.data.count
            })
            .catch(error => {
                console.log(error)
                this.errored = true
            })
            .finally(() => this.loading = false)
        },
        methods: {
            // classe che riprende il mounted per refreshare dopo cancellazione
            // potrei metterla in una function anche in mounted, ma per ora lascio cosi.
            userList: function() {
                axios.get('http://127.0.0.1:3000/api/users')
                    .then(response =>  {
                        console.log(response)
                        this.users = response.data.users,
                        this.totale = response.data.count
                    })
                    .catch(error => {
                        console.log(error)
                        this.errored = true
                    })
                    .finally(() => this.loading = false)
            },
            // cancella utente
            deleteUser: function(userID) {
                axios.delete('http://127.0.0.1:3000/api/delete/' + userID)
                    .then(response => {
                        console.log(response.data.message)
                        this.message = response.data.message,
                        // refresho lista dopo cancellazione
                        this.userList()
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => this.deleted = true)
            }
        }
});