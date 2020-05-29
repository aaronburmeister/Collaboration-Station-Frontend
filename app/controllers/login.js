import Controller from '@ember/controller';
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";

export default class LoginController extends Controller {
    @tracked username = new URLSearchParams(document.location.search).get('username')
    @tracked password = new URLSearchParams(document.location.search).get('password')

    @action
    async login(e) {
        e.preventDefault()
        const user = {
            user: {
                username: this.username,
                password: this.password,
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
            window.localStorage.setItem('token', result.token)
            window.localStorage.setItem('username', this.username)
        })
        .catch(console.log)

        console.log("I potentially logged in!")
        return false;
    }
}
