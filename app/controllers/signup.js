import Controller from '@ember/controller';
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";


export default class SignupController extends Controller {
    @tracked username
    @tracked password
    @tracked email
    @tracked isArtist = false

    @action
    signup() {
        const user = {
            username: this.username,
            password: this.password,
            email: this.email,
            isArtist: this.isArtist
        }
        this.store.createRecord('user', user).save()
        this.transitionToRoute('login')
    }
}