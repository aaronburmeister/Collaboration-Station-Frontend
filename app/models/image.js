import Model, { attr } from '@ember-data/model';

export default class ImageModel extends Model {
    @attr user_id;
    @attr imageURL;
}