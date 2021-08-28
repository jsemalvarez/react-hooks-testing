

export const todoReducer = ( state = [], action ) => {
    
    switch( action.type ){
        case 'add':
            return [ ...state, action.payload ];

        case 'delete':
            return state.filter( todo => todo.id !== action.payload )

        case 'toggle-old': // este codigo se megora en el case 'toggle'
            return state.map( todo => {
                if( todo.id === action.payload ){
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }else{
                    return todo
                }
            })

        case 'toggle':
            return state.map( todo => 
                ( todo.id )
                    ? { ...todo, done: !todo.done}
                    : todo
            )

        default:
            return state;
    }
}