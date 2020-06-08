import Controller from '@ember/controller';
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { inject as service } from "@ember/service"

export default class LoginController extends Controller {
    @service authManager

    @tracked username
    @tracked password

    @action
    async login(e) {
        e.preventDefault()
        await this.authManager.authenticate(this.username, this.password)
        if (this.authManager.isAuthenticated) {
            this.transitionToRoute('index');
        }
    }
}
