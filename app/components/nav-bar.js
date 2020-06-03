import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class NavBarComponent extends Component {
    @tracked loggedIn = window.localStorage.token ? true : false

    @action
    login() {
        this.loggedIn = true;
    }

    @action
    logout() {
        delete window.localStorage.token
        this.loggedIn = false;
    }
}