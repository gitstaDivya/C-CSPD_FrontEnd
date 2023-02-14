import React from "react";

function LogIn(){
    const logout =()=>{
        localStorage.clear()
        window.location.reload()
    }
    return (
        <div id="logDiv">
            <button className="Loginbutton" onClick={logout}>Logout</button>
        </div>
    );
}
export default LogIn;