import { Link, useNavigate } from "react-router";
import { useActionState } from "react";

import Footer from "../footer/Footer";
import { useRegister } from "../../api/authApi";
import { useUserContext } from "../../contexts/UserContext";

export default function Register() {
    const navigate = useNavigate();
    const { register } = useRegister();
    const { userLoginHandler } = useUserContext();

    const registerHandler = async (previousValues, formData) => {
        const { email, username, password, rePassword } = Object.fromEntries(formData);

        if (password !== rePassword) {
            console.log('Password missmatch');
            return;
        }

        const authData = await register(email, username, password);

        userLoginHandler(authData);

        navigate('/');
    }

    const [values, registerAction, isPending] = useActionState(registerHandler, { email: '', username: '', password: '', rePassword: '' });

    const backgroundImage =
        "https://plus.unsplash.com/premium_photo-1661883991651-b5487771e9aa?q=80&w=1516&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

    return (
        <div
            className="min-h-screen bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="flex min-h-screen items-center justify-center py-10">
                <div className="flex flex-col items-center space-y-6">

                    {/* Register form */}
                    <div
                        className="w-80 rounded-[20px] bg-white p-8"
                        style={{
                            boxShadow: "#00000057 1px 3px 4px",
                        }}
                    >
                        <h1
                            className="mb-6 text-center text-3xl font-bold text-black"
                            style={{
                                textShadow: "#00000063 0px 3px 5px",
                            }}
                        >
                            Create Account
                        </h1>

                        <form action={registerAction}>
                            <div className="space-y-4">

                                {/* Email */}
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email address"
                                    autoComplete="email"
                                    required
                                    className="w-full rounded-md bg-[#E9EFF6] p-2.5 placeholder:text-[#000000]"
                                    style={{
                                        boxShadow:
                                            "rgb(0 0 0 / 21%) 0px 7px 5px 0px",
                                    }}
                                />

                                {/* Username */}
                                <input
                                    type="text"
                                    name="username"
                                    autoComplete=""
                                    placeholder="Username"
                                    required
                                    className="w-full rounded-md bg-[#E9EFF6] p-2.5 placeholder:text-[#000000]"
                                    style={{
                                        boxShadow:
                                            "rgb(0 0 0 / 21%) 0px 7px 5px 0px",
                                    }}
                                />

                                {/* Password */}
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    autoComplete="new-password"
                                    required
                                    className="w-full rounded-md bg-[#E9EFF6] p-2.5 placeholder:text-[#000000]"
                                    style={{
                                        boxShadow:
                                            "rgb(0 0 0 / 21%) 0px 7px 5px 0px",
                                    }}
                                />

                                {/* Confirm Password */}
                                <input
                                    type="password"
                                    name="rePassword"
                                    placeholder="Confirm Password"
                                    autoComplete="new-password"
                                    required
                                    className="w-full rounded-md bg-[#E9EFF6] p-2.5 placeholder:text-[#000000]"
                                    style={{
                                        boxShadow:
                                            "rgb(0 0 0 / 21%) 0px 7px 5px 0px",
                                    }}
                                />

                            </div>

                            {/* Register button */}
                            <div className="mb-4 mt-6 flex justify-center">
                                <button
                                    type="submit"
                                    disabled={isPending}
                                     className={isPending
                                        ? "h-10 w-full rounded-md bg-gradient-to-br from-[#9b9a9c] to-[#c0bfc1] text-white shadow-md shadow-blue-950"
                                        : "h-10 w-full cursor-pointer rounded-md bg-gradient-to-br from-[#7336FF] to-[#3269FF] text-white shadow-md shadow-blue-950"}
                                >
                                    Register
                                </button>
                            </div>
                        </form>

                        {/* Login link */}
                        <div className="text-center text-[#969696]">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="cursor-pointer text-[#7337FF] hover:underline"
                            >
                                Login
                            </Link>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        </div>
    );
}
