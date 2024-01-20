
import './App.css';
import {useState} from "react";

function App() {

  const [formData,setformData] = useState({firstname:"",lastname:"",email:"",isVisible:true,mode:"",car:""});

  //  console.log(formData);

    function SubmitHandler(event) {
      event.preventDefault();
      console.log("final printing data");
      console.log(formData);
    }

    function changeHandler(event) {
      const {name,type,value,checked} = event.target;
      setformData(prevState => {
        return {
          ...prevState,
           [name] : type === "checkbox" ? checked : value
        }
      })
    }

  return (
    <>
    
      <form className='form-details' onSubmit={SubmitHandler}>
        <input type="text" placeholder = "first Name" onChange={changeHandler} name='firstname' value={formData.firstname}/>
        <br></br>
        <input type="text" placeholder="lastname" onChange={changeHandler} name='lastname' value={formData.lastname} />
        <br/>
        <input type="email" placeholder="Enter your email here" onChange={changeHandler} name='email' value={formData.email} />
        <br/>
        <br/>
        <input type='checkbox' id='isVisible' name='isVisible' onClick={changeHandler} checked = {formData.isVisible} />
        <label htmlFor='isVisible'>Am I visible ?</label>
        <br/>
        <br/>
        <input type='radio' name='mode' value="Online-mode" checked={formData.mode === "Online-mode"} onClick={changeHandler} />
        <label>Online-mode</label>
        <input type='radio' name='mode' value="Offline-mode" checked={formData.mode === "Offline-mode"}  onClick={changeHandler} />
        <label>Offline-mode</label>
        <br/>
        <br/>
        <label>Choose your fav Car </label>
        <select name='car' value={formData.car} onChange={changeHandler} >
        <option  value="Scarpio">Scarpio</option>
        <option value="Laembergini">Laembergini</option>
        <option value="Mercedes">Mercedes</option>
        <option value="Thar">Thar</option>
        </select>
        <br/>
        <br/>
        <button>Submit</button>
      </form>
    
    </>
  );
}

export default App;
