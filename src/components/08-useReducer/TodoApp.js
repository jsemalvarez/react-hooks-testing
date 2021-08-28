import React, { useEffect, useReducer } from 'react'
import { useForm } from '../../hooks/useForm'
import './styles.css'
import { TodoList } from './TodoList'
import { todoReducer } from './todoReducer'


/**
 *  useReducer( todoReducer, [] , init )
 *  primer parametro: reducer que maneja el estado
 *  segundo parametro : estao con el que se inicializa
 *  tercer parametro: es uan funcion opcional que computa el estado inicial y no se ejecuta cada vez que hay cambios
 */
const init = () => {
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }] 

    return JSON.parse( localStorage.getItem('todos') ) || []
}

export const TodoApp = () => {

    const [ todos , dispatch ] = useReducer(todoReducer, [] , init )
    const [ { description } , handleInputChange, reset ] = useForm({
        description: ''
    })

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify( todos ) )
    }, [todos] )

    const handleSubmit = (e) => {
        e.preventDefault()

        if( description.trim().length < 1 ){
            return
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch( action )
        reset()
    }

    const handleDelete = ( todoId = 99 ) => {


        console.log( todoId )

        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch( action )
    }

    const handleToggle = ( todoId ) => {

        dispatch({
            type:'toggle',
            payload: todoId
        })
    }

    return (
        <div>

            <h2>TodoApp ( { todos.length } )</h2>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={ todos }
                        handleDelete ={ handleDelete }
                        handleToggle={ handleToggle }
                    />
                </div>
                <div className="col-5">

                        <h4>Agregar TODO</h4>
                        <hr />

                        <form onSubmit={ handleSubmit }>

                            <input 
                                type="text"
                                name="description"
                                placeholder="Aprender..."
                                autoComplete="off"
                                className="form-control"
                                value={ description }
                                onChange={ handleInputChange }
                            />

                            <button
                                type="submit"
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
