import React, { useEffect, useReducer } from 'react'
import './styles.css'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'
import { todoReducer } from './todoReducer'


/**
 *  useReducer( todoReducer, [] , init )
 *  primer parametro: reducer que maneja el estado
 *  segundo parametro : estado con el que se inicializa
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
    

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify( todos ) )
    }, [todos] )

    const handleAdd = ( newTodo ) => {

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch( action )
    }

    const handleDelete = ( todoId ) => {

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

                    <TodoAdd 
                        handleAdd={ handleAdd }
                    />
                        
                </div>
            </div>

        </div>
    )
}
