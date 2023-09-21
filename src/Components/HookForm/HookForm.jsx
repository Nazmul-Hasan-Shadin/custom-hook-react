import React from 'react';
import useInputState from '../../Hooks/useInputState';

const HookForm = () => {
//  const [name,handleNameChange]= useInputState('rojoni hooked')
const nameState=  useInputState('shadin@gmail.com')
console.log(nameState,'hi');

  const handleSubmit= e=>{
    console.log('form data',nameState.value);
     e.preventDefault();
  }


    return (
        <div>
             <form onSubmit={handleSubmit} >
             {/* <input value={name} onChange={handleNameChange} type="text" name='name' /> <br /> */}
             <input {...nameState} type="email" name='email' /> <br />
             <input type="password" name='password' />
             <br />
          
          <input type="submit" value="Submit" />
            
            
            </form>  
        </div>
    );
};

export default HookForm;