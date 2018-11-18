import { Container } from 'unstated'

export default class AppContainer extends Container {

    state = {
        tick : 1
    }

    addTick() {

        this.setState( { tick : ++this.state.tick })

    }

}