import './Formhw.css';
import {useState} from 'react';
function Formhw() {

    const [formData,setformData] = useState({
       firstName : "", lastName:"",email:"",country:"",street:"",city:"",state:"",postal:"",comment:false,cand:false,offers:false,SMS:""
    })

     function changeHandler(event) {
        const {name,type,value,checked} = event.target;
         setformData(prevData => {
            return {
                ...prevData,
                [name]: type==="checkbox" ? checked : value
            }
        })
     }

     function SubmitHandler(event) {
        event.preventDefault();
        console.log("final formData");
        console.log(formData);
     }
     

    return(
        <>
         <form onSubmit={SubmitHandler}>
            <div className="form-to">
            <label className="label-tag">First Name :</label> 
            <input className="input-tag" type="text" name='firstName' value={formData.firstName} onChange={changeHandler} placeholder = "Harshit" />

            <label className="label-tag">Last Name :</label> 
            <input className="input-tag" type="text" name='lastName' onChange={changeHandler} value={formData.lastName } placeholder = "Pachauri" />

            <label className="label-tag">Email Address :</label> 
            <input className="input-tag" type="email" name='email' onChange={changeHandler} value={formData.email} placeholder = "harshitpachauri76@gmail.com" />

            <label className="label-tag">Country :</label>
           <select className="input-tag" name='country' value={formData.country} onChange={changeHandler}>
            <option value="India">India</option>
            <option value="Germany">Germany</option>
            <option value="USA">USA</option>
            <option value="China">China</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Newzeland">Newzeland</option>
           </select>

            <label className="label-tag">Street Address :</label> 
            <input className="input-tag" type="text" name='street' value={formData.street} onChange={changeHandler} placeholder = "1234 street xyz" />

            <label className="label-tag">City :</label> 
            <input className="input-tag" type="text" name='city' onChange={changeHandler} value={formData.city} placeholder = "Ahmedabad" />

            <label className="label-tag">State/Province :</label> 
            <input className="input-tag" type="text" name='state' onChange={changeHandler} value={formData.state} placeholder = "West Bengal" />

            <label className="label-tag">ZIP/Postal:code :</label> 
            <input className="input-tag" type="text" name='postal' onChange={changeHandler} value={formData.postal} placeholder = "713310" />

            </div>
           
            <div className="check-prep">
            <h4>By Email</h4>
            <input id="comm-id" className='form-row' name='comment' onChange={changeHandler} checked={formData.comment} type = "checkbox" />
            <label className='form-row' htmlFor="comm-id">Comments</label>
            <br/>
            <span>Get notified when someone posts comments on posting</span>
            <br/>
            <br/>

            <input id="cand-id" className='form-row' name='cand' onChange={changeHandler} checked={formData.cand} type = "checkbox" />
            <label className='form-row' htmlFor="cand-id">Candidates</label>
            <br/>
            <span>Get notified when a candidate applies for a job</span>
            <br/>
            <br/>

            <input id="off-id" className='form-row' name='Offers' onChange={changeHandler} checked={formData.offers} type = "checkbox" />
            <label className='form-row' htmlFor="off-id">Offers</label>
            <br/>
            <span>Get notified when a candidate accepts or rejects an offer</span>
            <br/>
            <br/>

            <h4>Push Notifications </h4>
            <span>These are delievered vis SMS to your mobile phone</span>
            <br/>

             <input type="radio" name="SMS" onChange={changeHandler} value="Everything" checked={formData.SMS ==="Everything"} />
             <label>Everything</label>
             <br/>

             <input type="radio" name="SMS" onChange={changeHandler} value="same as email" checked={formData.SMS ==="same as email"}/>
             <label>Same as email</label>
             <br/>
             <input type="radio" name="SMS" onChange={changeHandler} value="No push notifications" checked={formData.SMS ==="No push notifications"} />
             <label>No push notifications</label>
             <br/>
             <button className='sub-btn'>Submit</button>
            </div>
         </form>
        </>
    )
}

export default Formhw;