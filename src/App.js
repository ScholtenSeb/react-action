import React from 'react'
import { ActionButton , ActionOption } from './action'

export default React.createClass({
  one(){alert('action 1')},
  two(){alert('action 2')},
  three(){alert('action 3')},
  render(){
    return (
      <div>
        <ActionButton>
          <ActionOption action={this.one}>
            <svg fill="#fff" width="18" height="18"><path d="M9 10c-2.33 0-7 1.17-7 3.5V16h14v-2.5c0-2.33-4.67-3.5-7-3.5zm5.29 4.29H3.71v-.79c.1-.49 2.59-1.79 5.29-1.79s5.19 1.3 5.29 1.79v.79zM9 9c2.22 0 4-1.79 4-4s-1.78-4-4-4C6.79 1 5.01 2.79 5.01 5S6.79 9 9 9zm0-6.29c1.26 0 2.28 1.03 2.28 2.29S10.26 7.29 9 7.29C7.75 7.29 6.72 6.26 6.72 5S7.75 2.71 9 2.71z"/></svg>
          </ActionOption>
          <ActionOption action={this.two}>
            <svg fill="#fff" width="18" height="18"><path d="M10.19 1.5s.49 1.99.49 3.6c0 1.55-1.01 2.8-2.56 2.8S5.4 6.65 5.4 5.1l.02-.27C3.91 6.64 3 8.96 3 11.5c0 3.31 2.69 6 6 6s6-2.69 6-6c0-4.05-1.88-7.65-4.81-10zM8.91 15c-1.34 0-2.42-1.05-2.42-2.35 0-1.22.78-2.07 2.11-2.34 1.33-.27 2.7-.91 3.46-1.93.29.97.45 1.99.45 3.03 0 1.98-1.62 3.59-3.6 3.59z"/></svg>
          </ActionOption>
          <ActionOption action={this.three}>
            <svg fill="#fff" width="18" height="18"><path d="M5.5 10H2v5c0 .55.45 1 1 1h5v-3.5l-3.5 1 1-3.5zM2 3v5h3.5l-1-3.5 3.5 1V2H3c-.55 0-1 .45-1 1zm13-1h-5v3.5l3.5-1-1 3.5H16V3c0-.55-.45-1-1-1zm-1.5 11.5l-3.5-1V16h5c.55 0 1-.45 1-1v-5h-3.5l1 3.5z"/></svg>
          </ActionOption>
        </ActionButton>
      </div>
    )
  }
})
