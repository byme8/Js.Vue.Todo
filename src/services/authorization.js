import Rx from 'rxjs'
import Cookie from 'js-cookie'

const USER = 'user'

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
        let user = Cookie.getJSON(USER)

        this.currentUser = new Rx.BehaviorSubject(user);
        this.currentUser.subscribe(o => Cookie.set(USER, o))
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
        if (this.currentUser.value) {
            return true
        }
        return false;
    }
}

const auth = new AuthorizationService();

export default auth