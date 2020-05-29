import Controller from '@ember/controller';
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";


export default class SignupController extends Controller {
    @tracked username
    @tracked password
    @tracked email
    @tracked isArtist = false

    @action
    async signup() {
        const user = {
            user: {
                username: this.username,
                password: this.password,
                email: this.email,
                isArtist: this.isArtist
            }
        }
        
        await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(user)
        }).then(response => response.json())
        .then(result => console.log(result))
        .catch(console.log)
    }
}