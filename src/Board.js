import React, { Component } from 'react'

import { Subscribe } from 'unstated'
import AppContainer from './provider/container/AppContainer'

class Board extends Component {
    render() {
        return (
        <Subscribe to={[AppContainer]}>
            {
                app => {

                    console.log('board', app, app._listeners.length)

                    return (
                    <div className='Board'>

                        { app.state.tick }

                        <button onClick={ _ => app.addTick() }>
                            Add
                        </button>

                    </div>
                    )
                }
            }
        </Subscribe>
        )
    }
}

export default Board
