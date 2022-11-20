import React from "react";
import "./styles/SignUp.scss";

const SignUp = () => {
    return (
        <div className="sign-upPage">
            <form action="" className="signup-form">
                <label htmlFor="">email</label>
                <input type="text" name="" id="" placeholder="e-mail" />
                <label htmlFor="">password</label>
                <input type="password" name="" id="" placeholder="password" />
                <label htmlFor="">Phone</label>
                <input
                    type="number"
                    name=""
                    id=""
                    placeholder="insert phone here"
                />
                <label htmlFor="">Are you a human ? </label>
                <input type="checkbox" name="" id="" />
                <button>Register</button>
            </form>
        </div>
    );
};

export default SignUp;
