import { Container } from 'unstated'

const mock = [
    { key : '1', content : 'Content A' },
    { key : '2', content : 'Content B' },
    { key : '3', content : 'Content C' }
]

export default class AppContainer extends Container {

    state = {
        data : [],
        tick : 1
    }

    addTick() {

        this.setState( { tick : ++this.state.tick })

    }

    async fetchData() {

        const data = await new Promise(resolve =>
            setTimeout(_ => resolve(mock), 2000))

        this.setState( { data : data })

        return '성공적으로 로드하였습니다.'

    }

}