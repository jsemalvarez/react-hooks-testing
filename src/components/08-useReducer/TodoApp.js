import React, { useReducer } from 'react'
import './styles.css'
import { todoReducer } from './todoReducer'

const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
}]

export const TodoApp = () => {

    const [ todos , dispatch] = useReducer(todoReducer, initialState )
    return (
        <div>

            <h2>TodoApp ( { todos.length } )</h2>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ul className="list-group-flush">
                    {
                        todos.map( (todo, i) => (
                            <li 
                                key={ todo.id }
                                className="list-group-item"
                            > 
                                <p className="text-center"> { i + 1 }. { todo.desc } </p> 
                                <button
                                    className="btn btn-danger"
                                >
                                    Borrar
                                </button>
                            </li>
                        ))
                    }
                    </ul>
                </div>
                <div className="col-5">

                        <h4>Agregar TODO</h4>
                        <hr />

                        <form>

                            <input 
                                type="text"
                                name="description"
                                placeholder="Aprender..."
                                autoComplete="off"
                                className="form-control"
                            />

                            <button
                                className="btn btn-primary btn-block mt-1"
                            >
                                Agregar
                            </button>
                        </form>
                </div>
            </div>

        </div>
    )
}
