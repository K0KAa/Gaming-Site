import React from 'react'
import "./Css/contact.css"
// import AddIcon from '@material-ui/icons/Add';
const Contact = () => {
    return (
        <div className="write">
            <span className="field">Enter all the fields*</span>
            <form action="" className="writeForm">
                <div className="writeFormGroup">
                    <div className="names">
                        <input type="text" placeholder="First Name*" className="writeInput" autoFocus={true}/>
                        <input type="text" placeholder="Last Name*" className="writeInput" />
                    </div>
                   
                    <input type="email" placeholder="E-mail*" className="writeInput" />
                </div>

                <div className="writeFormGroup">
                    <textarea  type="text" cols="40" rows="10" placeholder="Comment*" style={{border:"none"}}></textarea>
                </div>
                <button className="writeSubmit">Done</button>
            </form>
        </div>
    )
}



export default Contact
