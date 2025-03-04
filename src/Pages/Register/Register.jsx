import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const firstName = form.firstName?.value;
        const lastName = form.lastName?.value;
        const username = form.username?.value;
        const email = form.email?.value;
        const password = form.password?.value;
        const confirmPassword = form.confirmPassword?.value;
       
        const registerUser = {firstName,lastName,username,email,password,confirmPassword}
        console.log(registerUser);
        
        // if (!firstName || !lastName || !username || !email || !password || !confirmPassword) {
        //     alert("All fields are required!");
        //     return;
        // }

        // if (password !== confirmPassword) {
        //     alert("Passwords do not match!");
        //     return;
        // }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        if (!passwordRegex.test(password)) {
            alert("Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one number, and one special character.");
            return;
        }

        createUser(email, password)
            .then((result) => {
                console.log("User Created:", result.user);
                alert("Registration Successful!");
            })
            .catch((error) => {
                console.error("Error:", error);
                alert(error.message);
            });
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <form onSubmit={handleRegister} className="bg-black text-white max-w-6xl mx-auto p-8 rounded-md">
                <h1 className="text-2xl font-bold text-center mb-6">Create Your Account</h1>

                <div className="grid md:grid-cols-2 gap-4">
                    {/* First Name */}
                    <div className="space-y-1">
                        <label className="block font-semibold">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            className="w-full px-4 py-3 border-2 border-gray-300 focus:border-red-600 focus:outline-none "
                            required
                        />
                    </div>
                    {/* Last Name */}
                    <div className="space-y-1">
                        <label className="block font-semibold">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            className="w-full px-4 py-3 border-2 border-gray-300 focus:border-red-600 focus:outline-none "
                            required
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                    {/* Username */}
                    <div className="space-y-1">
                        <label className="block font-semibold">Username*</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            className="w-full px-4 py-3 border-2 border-gray-300 focus:border-red-600 focus:outline-none "
                            required
                        />
                    </div>
                    {/* Email */}
                    <div className="space-y-1">
                        <label className="block font-semibold">Email*</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="w-full px-4 py-3 border-2 border-gray-300 focus:border-red-600 focus:outline-none "
                            required
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                    {/* Password */}
                    <div className="space-y-1">
                        <label className="block font-semibold">Password*</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="w-full px-4 py-3 border-2 border-gray-300 focus:border-red-600 focus:outline-none "
                            required
                        />
                    </div>
                    {/* Confirm Password */}
                    <div className="space-y-1">
                        <label className="block font-semibold">Confirm Password*</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            className="w-full px-4 py-3 border-2 border-gray-300 focus:border-red-600 focus:outline-none"
                            required
                        />
                    </div>
                </div>

                {/* Register Button */}
                <div className="mt-6">
                    <button type="submit" className="w-full bg-red-600 py-3 text-white font-semibold rounded-md hover:bg-red-700 transition">
                        Register
                    </button>
                </div>

                {/* Sign In Link */}
                <p className="text-center text-gray-400 text-sm mt-4">
                    Already have an account?
                    <Link to="/sign-in" className="text-red-500 hover:underline ml-1">Sign In</Link>
                </p>
            </form>
        </div>
    );
};

export default Register;
