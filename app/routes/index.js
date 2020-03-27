import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
    model() {
        const requests = this.store.findAll('request')
        const images = this.store.findAll('image')
        const users = this.store.query('user', {
            filter: {
                isArtist: true
            }
        })

        const data = {
            requests: requests,
            users: users,
            images: images
        }

        return data
    }
}
