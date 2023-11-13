import { useState } from "react";
import "./from.css"
import { FaToggleOn } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
const ReactFrom = () => {
    const [userValue,setUserValue] = useState({
        userName : "",
        password : ""
    })
    const [togglePassword,setTogglePassword] = useState(true)
    const togglepass = () =>{
        setTogglePassword(!togglePassword)
    }
    const {userName,password} = userValue;
    const inputHandleChange = (key,value) =>{
        setUserValue({
            ...userValue,
            [key] : value
        })
    }
    const submitValue = (e) =>{
        e.preventDefault()
    }
    return (
        <div className="from" onSubmit={submitValue} >
            <div className="userFrom" >  
            <form action="">
                <div>
                    <label htmlFor="username">UserName : </label>
                    <input value={userName}
                    onChange = {(e)=>{inputHandleChange("userName",e.target.value)}}
                    type="text" name="" id="username" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input value={password}
                    onChange={(e)=>{inputHandleChange("password",e.target.value)}}
                    type= {togglePassword? "password" : "text" } name="" id="password" />
                    <span onClick={togglepass}>
                        {
                            togglePassword ? <FaToggleOn/> : <FaTimes/>
                        }
                    </span>
                </div>
                <div>
                    <button type="submit" >Submit</button>
                </div>
            </form>
            </div>
        </div>
    );
};

export default ReactFrom;