import React, {useEffect, useState} from "react";
import {auth,provider} from "./config";
import {signInWithPopup} from "firebase/auth";
import LogIn from "./logIn";

function SignIn() {
    const [value, setValue] = useState('')
    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email)
            localStorage.setItem("email", data.user.email)
        })
    }

    useEffect(() => {
        setValue(localStorage.getItem('email'))
    })
    return (
        <div>
            {value ? <LogIn/> :
                <button className="Loginbutton" onClick={handleClick}>Login</button>
            }
        </div>
    )
}
export default SignIn;
