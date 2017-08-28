
export class User {
    constructor(login, password) {
        this.login = login
        this.password = password
    }
}

var users = [
    new User('test1', 'test1'),
    new User('test2', 'test2')
]

export class AuthorizationService {
    authorize(login, password) {
        this.user = users.find(o =>
            o.login == login &&
            o.password == password);

        return this.user
    }

    loggedIn() {
        if (this.user) {
            return true
        }
        return false;
    }
}

const auth = new AuthorizationService();

export default auth