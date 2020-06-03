import Controller from '@ember/controller';
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import navBar from "../components/nav-bar"

export default class LoginController extends Controller {
    @tracked username
    @tracked password

    @action
    async login(e) {
        e.preventDefault()
        const user = {
            user: {
                username: this.username,
                password: this.password
            }
        }
        
        await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(user)
        }).then(response => response.json())
        .then(result => {
            console.log(result)
            if (result.token) {
                window.localStorage.setItem('token', result.token)
                window.localStorage.setItem('username', this.username)
            } else {
                alert(result.message)
            }
        })
        .catch(console.log)

        if (window.localStorage.token) {
            navBar.login()
            this.transitionToRoute('index');
        }
    }
}
