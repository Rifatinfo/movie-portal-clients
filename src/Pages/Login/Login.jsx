import { Link, useNavigate } from "react-router-dom";
import { AiFillGoogleSquare } from "react-icons/ai";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {signInUser} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value; 
        const password = e.target.password.value;
        const loginUser = { email, password };
        console.log(loginUser);
        
        signInUser(email, password)
        .then(result => {
           console.log(result.user)
           e.target.reset();
           navigate('/');
        })
        .catch(error => {
            console.log(error);
        })

        // const regularExpression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,16}$/;

        // if (!regularExpression.test(password)) {
        //     alert('Password must contain at least one uppercase, one lowercase, one number, and one special character.');
        //     return;
        // }

    };

    return (
        <div className="backdrop-blur-md  mt-10 min-h-[calc(100vh-64px-300px)] ">
            <div className="flex justify-center items-center text-white ">
                <div className="w-full max-w-md p-8 space-y-3 rounded-xl border bg-black">
                    <h1 className="text-2xl font-bold text-center">Sign In</h1>
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block font-semibold">email</label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                className="w-full px-4 py-3  border-2  focus:border-red-600 focus:outline-none"
                            />
                        </div>

                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block font-semibold">Password</label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="Password"
                                className="relative w-full px-4 py-3  border-2  focus:border-red-600 focus:outline-none"
                            />
                            <button onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEye className="absolute -mt-4 -ml-8 text-xl" /> : <FaEyeSlash className="absolute -mt-4 -ml-8 text-xl"/>}</button>
                            <div className="flex justify-end font-semibold text-xs dark:text-gray-600">
                                <a rel="noopener noreferrer" href="">Forgot Password?</a>
                            </div>

                            <div className="md:flex md:items-center md:justify-center md:gap-3 grid gap-3 mt-6">
                                <div className="w-full ">
                                    <button className="w-full bg-red-600 btn btn-neutral">Register</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                        <p className="px-3 text-lg dark:text-gray-600 font-semibold">Login with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                    </div>
                    <div className="flex items-center justify-center space-x-4 ">
                        <AiFillGoogleSquare className="text-[33px] " />
                        <FaSquareGithub className="text-3xl" />
                        <FaSquareXTwitter className="text-[30px]" />
                    </div>

                    <p className="text-xs text-center sm:px-6 dark:text-gray-600 font-semibold">Don't have an account?
                        <Link to="/register"><div rel="noopener noreferrer" href="#" className="underline dark:text-gray-800"> Sign up</div></Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
