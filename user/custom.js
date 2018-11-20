// error handler
var appusers = new Vue({
    el: '#list',
    data () {
        return {
            users: null,
            count: null,
            loading: true,
            errored: false
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
        }
});