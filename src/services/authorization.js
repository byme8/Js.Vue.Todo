var data = [
    {
        login: 'test1',
        password: 'test1'
    },
    {
        login: 'test2',
        password: 'test2'
    }
]

export default {
    user: null,
    authorize: function (login, password) {
        this.user = data.find(o =>
            o.login == login &&
            o.password == password);

        return this.user
    },
    loggedIn: function () {
        if (this.user) {
            return true
        }
        return false;
    }
}