
import React, { useState } from 'react';

const Counter = () => {

   const [counter, setCounter] = useState<number>(0);

   const incrementar = ( numero:number ):void => {
      setCounter( counter + numero );
   }

  	return (
    	<div className='mt-5'>
       	<h3>Counter: useState</h3>
       	<p>Valor: { counter }</p>
       	<button
         	className='btn btn-outline-primary'
				onClick={ () => incrementar(1) }
			>+1</button>
       	<button
         	className='btn btn-outline-primary'
				onClick={ () => incrementar(2) }
			>+2</button>
       	<button
         	className='btn btn-outline-danger'
				onClick={ () => setCounter(0) }
			>Reset</button>
    	</div>
  	)
}

export default Counter;
