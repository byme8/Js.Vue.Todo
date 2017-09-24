import Rx from 'rxjs'
import Cookie from 'js-cookie'
import axios from 'axios'
import { AUTHORIZATION_API } from '../configs/webservice.config'

const USER = 'user'

export class User {
    constructor(id, login) {
        this.id = id
        this.login = login
    }
}

export class AuthorizationService {

    constructor() {
        let user = Cookie.getJSON(USER)

        this.currentUser = new Rx.BehaviorSubject(user);
        this.currentUser.subscribe(o => Cookie.set(USER, o))
    }

    async authorize(login, password) {
        let response = await axios.post(AUTHORIZATION_API, { login: login, password: password })
        
        let user = new User(response.data.id, response.data.login)
        this.currentUser.next(user)

        return user
    }

    logout() {
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