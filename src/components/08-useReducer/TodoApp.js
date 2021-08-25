import React from 'react'
import './styles.css'

const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
}]

export const TodoApp = () => {

    const [state, dispatch] = useReducer(reducer, initialState )
    return (
        <div>

            <h2>TodoApp</h2>
            <hr />

            <ul>
                <li>Hola</li>
                <li>Mundo</li>
                <li>Reducer</li>
            </ul>

        </div>
    )
}
