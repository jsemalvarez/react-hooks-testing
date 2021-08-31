# React Hooks and Testing


 - useState
 - useCounter - Personalizado
 - useEffect y sus precauciones
 - useRef
 - useFetch - Personalizado + optimizaciones
 - useLayoutEffect
 - Memo
 - useMemo
 - useCallback


 ## useReducer
 - Reducers: [doc](https://es.reactjs.org/docs/hooks-reference.html#usereducer)
 - Teoría de un reducer:
    - Es una funcion comun y corriente, no puede ser asincrona
    - Debe deser una funcion pura que resuelve todo de forma interna 
    - Siempre debe de retornar un nuevo estado
    - Usualmente solo reciben dos argumentos: estado inicial y la accion a ejecutar
 - Aplicación de TODOs
 - CRUD local

 ```javascript

 export const todoReducer = ( state = [], action ) => {
    
    switch( action.type ){
        case 'add':
            return [ ...state, action.payload ];

        case 'delete':
            return state.filter( todo => todo.id !== action.payload )
       
        case 'toggle':
            return state.map( todo => 
                ( todo.id === action.payload )
                    ? { ...todo, done: !todo.done}
                    : todo
            )

        default:
            return state;
    }
}

```

```javascript

/**
 *  primer parametro: funcion reducer que maneja el estado
 *  segundo parametro : estado con el que se inicializa
 *  tercer parametro: es uan funcion opcional que computa el estado inicial y no se ejecuta cada vez que hay cambios
 */

const init = () => {
   return JSON.parse( localStorage.getItem('todos') ) || []
}

const [ todos , dispatch ] = useReducer( todoReducer, [] , init )    

dispatch( {
   type: 'add',
   payload: newTodo
} )
    
 ```

## React Router and useContext

   - React Router
   - Links y NavLinks
   - Provider
   - CreateContext