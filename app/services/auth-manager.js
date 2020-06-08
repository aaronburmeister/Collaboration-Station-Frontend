import Service from '@ember/service';
import { tracked } from '@glimmer/tracking'
import { bool } from '@ember/object/computed'

export default class AuthManagerService extends Service {

    @tracked token = window.localStorage.token ? window.localStorage.token : null;

    authenticate(username, password) {
        return fetch('http://localhost:3000/login',{
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({user: {username, password}})
        }).then(response => response.json())
        .then( result => window.localStorage.token = this.token = result.token)
    }
    
    invalidate() {
        delete window.localStorage.token;
        this.token = null;
    }
    
    @bool('token') isAuthenticated
}
