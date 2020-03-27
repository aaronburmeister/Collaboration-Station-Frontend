import Route from '@ember/routing/route';

export default class SignupRoute extends Route {
    signup() {
        let user = store.createRecord('user', {
            username: this.get('username'),
            password: this.get('password')
        })

        user.save()
    }
}
