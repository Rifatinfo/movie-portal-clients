import { Link } from "react-router-dom";

const Register = () => {
    const handleRegister = (e) => {
        e.preventDefault();
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        const RegisterUser = { firstName, lastName, username, email, password, confirmPassword };
        console.log(RegisterUser);

        if(password.length  < 6){
           alert('Password Should be 6 character or longer')
           return;
        }
        const regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if(!regularExpression.test(password)){
           alert('At Least one uppercase, one lowercase , one number , one special character')
           return;
        }
        
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
                            id="email"
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
                        <label className="block font-semibold">Confirm Password</label>
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
