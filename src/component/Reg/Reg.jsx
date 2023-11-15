import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
// import { createUserWithEmailAndPassword } from 'firebase/auth';


const Reg = () => {
    const [showPassword,SetShowPassword]= useState(false)

    const {createUser} = useContext(AuthContext)
    // console.log(authInfo);

    const handelReg = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,email,password);

        // create user in firebase
        createUser(email,password)
        .then(result=>{
            console.log(result.us);
        })
        .catch(error=>{
            console.error(error);
        })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
            
            <div className="card  shadow-2xl bg-base-100">
                <form onSubmit={handelReg} className="card-body w-[500px]">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="email" className="input input-bordered" required />
                    </div>
                    {/* Email   */}
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
                    <p className="text-center">Already have a account  ? Please<Link to="/login"><button className="btn btn-link">Log In</button></Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Reg;