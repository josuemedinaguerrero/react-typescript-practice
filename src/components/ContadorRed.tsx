
import React, { useReducer } from 'react';

const initialState = {
   contador: 0
}

type ActionType =
   | { type: 'incrementar' | 'decrementar' }
   | { type: 'custom', payload: number }

const contadorReducer = ( state: typeof initialState, action: ActionType ) => {
   switch ( action.type ) {
      case 'incrementar':
         return { contador: state.contador + 1 }

      case 'decrementar':
         return { contador: state.contador - 1 }

      case 'custom':
         return { contador: action.payload }

      default:
         return state;
   }
}

const ContadorRed = () => {

   const [contadorState, dispatch] = useReducer(contadorReducer, initialState);

   return (
      <div>
         <h3>Contador: { contadorState.contador }</h3>
         <button
            className='btn btn-outline-primary'
            onClick={() => dispatch({ type: 'incrementar' })}
         >+1</button>
         <button
            className='btn btn-outline-primary'
            onClick={() => dispatch({ type: 'decrementar' })}
         >-1</button>
         <button
            className='btn btn-outline-danger'
            onClick={() => dispatch({ type: 'custom', payload: 500 })}
         >Reset value</button>
      </div>
   )
}

export default ContadorRed;

