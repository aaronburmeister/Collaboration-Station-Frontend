import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking'
import { inject as service } from '@ember/service'

export default class NavBarComponent extends Component {
    @service authManager
    @tracked username = window.localStorage.username

    @action
    logout() {
        this.authManager.invalidate()
    }
}