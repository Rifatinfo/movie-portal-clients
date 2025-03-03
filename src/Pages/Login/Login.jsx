import { Link } from "react-router-dom";
import { AiFillGoogleSquare } from "react-icons/ai";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";


const Login = () => {
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.name.value;
        const password = e.target.password.value;
        const loginUser = { email, password };
        console.log(loginUser);

        const regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if (!regularExpression.test(password)) {
            alert('At Least one uppercase, one lowercase , one number , one special character')
            return;
        }

    }
    return (
        <div className="backdrop-blur-md bg-white/30 mt-10 ">
            <div className="flex justify-center items-center text-white ">
                <div className="w-full max-w-md p-8 space-y-3 rounded-xl border bg-black">
                    <h1 className="text-2xl font-bold text-center">Sign In</h1>
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block font-semibold">Username</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Username"
                                className="w-full px-4 py-3  border-2  focus:border-red-600 focus:outline-none"
                            />
                        </div>

                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block font-semibold">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="username"
                                placeholder="Password"
                                className="w-full px-4 py-3  border-2  focus:border-red-600 focus:outline-none"
                            />
                            <button><FaEye /></button>
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
                        <Link to="/register"><a rel="noopener noreferrer" href="#" className="underline dark:text-gray-800"> Sign up</a></Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
