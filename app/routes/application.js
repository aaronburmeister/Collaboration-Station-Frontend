import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {

    model() {
        const requests = this.store.findAll('request')
        const users = this.store.query('user', {
            filter: {
                isArtist: true
            }
        })


        const data = {
            requests: requests,
            users: users
        }

        return data
    }
}
