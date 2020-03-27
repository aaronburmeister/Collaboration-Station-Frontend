import Model, { attr } from '@ember-data/model';

export default class RequestModel extends Model {
    @attr user_id;
    @attr title;
    @attr description;
    @attr status;
}
