
import { useForm } from '../hooks/useForm';

interface FormData {
   email: string,
   nombre: string,
   edad: number
}

const Formulario = () => {

   const { formulario, handleChange } = useForm<FormData>({
      email: 'josue@gmail.com',
      nombre: 'Josué Medina Guerrero',
      edad: 15
   });

   return (
      <form autoComplete='off'>
         <div className='mb-3'>
            <label htmlFor='email'>Email:</label>
            <input
               type='email'
               className='form-control'
               name='email'
               id='email'
               value={ formulario.email }
               onChange={ handleChange }
            />
         </div>
         <div className='mb-3'>
            <label htmlFor='nombre'>Nombre:</label>
            <input
               type='text'
               className='form-control'
               name='nombre'
               id='nombre'
               value={ formulario.nombre }
               onChange={ handleChange }
            />
         </div>
         <div className='mb-3'>
            <label htmlFor='edad'>Edad:</label>
            <input
               type='number'
               className='form-control'
               name='edad'
               id='edad'
               value={ formulario.edad }
               onChange={ handleChange }
            />
         </div>
         <pre>{ JSON.stringify( formulario ) }</pre>
      </form>
   )
}

export default Formulario;

