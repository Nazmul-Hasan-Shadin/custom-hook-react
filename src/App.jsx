
import './App.css'
import HookForm from './Components/HookForm/HookForm'
import RefForm from './Components/RefForm/RefForm'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import ReuseAbleForm from './ReUseableForm/ReuseAbleForm'

function App() {
  const handleSignUpSubmit=data=>{
      console.log(data,'sign up data');
}
const handleUpdateProfile=data=> {
  console.log(data,' update profile data');
}

  return (
    <>

      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReuseAbleForm formTitle={'signup'} handleSubmit={handleSignUpSubmit}>

          <div>
            <h2>sign up</h2>
            <p>please sign up right now</p>
          </div>
      </ReuseAbleForm>
      <ReuseAbleForm submitBtnText='update' handleSubmit={handleUpdateProfile} formTitle={'profile update'}>
      <div>
        <h2> always keep your profile update</h2>
      </div>

      </ReuseAbleForm>
   
   
    </>
  )
}

export default App
