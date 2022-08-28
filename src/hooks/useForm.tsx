
import React, { ChangeEvent, useState } from 'react';

export const useForm = <T extends Object>( initState: T ) => {

   const [formulario, setFormulario] = useState( initState );

   const handleChange = ( ev: ChangeEvent<HTMLInputElement> ) => {
      setFormulario({
         ...formulario,
         [ ev.target.name ]: ev.target.value
      })
   }

   return { formulario, handleChange }
}

