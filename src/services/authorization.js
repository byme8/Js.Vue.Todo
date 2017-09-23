import Rx from 'rxjs'

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

    constructor() {
        this.currentUser = new Rx.BehaviorSubject(null);
    }

    authorize(login, password) {
        let user = users.find(o =>
            o.login == login &&
            o.password == password)

        if (user) {
            this.currentUser.next(user);
        }

        return user
    }

    logout()
    {
        this.currentUser.next(null)
    }

    loggedIn() {
        if (this.currentUser) {
            return true
        }
        return false;
    }
}

const auth = new AuthorizationService();

export default auth