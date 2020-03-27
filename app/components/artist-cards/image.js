import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ArtistCardsImageComponent extends Component {
    @tracked isOverlay = false;
    
    @action toggleSize() {
        this.isOverlay = !this.isOverlay
    }

}
