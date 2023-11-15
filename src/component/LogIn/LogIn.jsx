import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const LogIn = () => {
    const {singInUser}= useContext(AuthContext)
    const [showPassword,SetShowPassword]= useState(false)

    const handleLogIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);

        singInUser(email,password)
        .then(result=>{
            console.log(result.user);
            
        })
        .catch(error=>{
            console.error(error);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">
                
                <div className="card  shadow-2xl bg-base-100">
                    <form onSubmit={handleLogIn} className="card-body w-[500px]">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type=  {showPassword ? "text" : "password" }
                            placeholder="password"
                            name="password"
                            className="input input-bordered"
                             required />
                            <span onClick={()=> SetShowPassword(!showPassword)} className="absolute right-0 top-14 mr-4">{ showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="max-w-xs mx-auto flex justify-center items-center">
                        <p className="text-center">Are you new to React Auth Private Route Project ? Please<Link to="/registration"><button className="btn btn-link">Register</button></Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;