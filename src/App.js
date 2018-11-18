import React, { Component } from 'react'
import './App.css'

import { Subscribe } from 'unstated'
import AppContainer from './provider/container/AppContainer'

import Board from './Board'

class App extends Component {

    state = {
        pending : false
    }

    render() {
        return (
        <Subscribe to={[AppContainer]}>
            {
                app => {

                    console.log('app', app, app._listeners.length)

                    return (
                    <div className='App'>

                        { app.state.tick }

                        <button onClick={ _ => app.addTick() }>
                            Add
                        </button>

                        <Board />

                        <Board />

                        <Board />



                        <button onClick={ _ =>
                            !this.state.pending && (this.setState({ pending : true }),
                                                    app.fetchData()
                                                        .then(e => (
                                                            alert(e),
                                                            this.setState({ pending : false }))))
                        }>
                            { this.state.pending ? 'Loading..' : 'fetchData' }
                        </button>


                        { app.state.data.map(e => <p key={ e.key }> { e.content }</p>) }


                    </div>
                    )
                }
            }
        </Subscribe>
        )
    }
}

export default App
