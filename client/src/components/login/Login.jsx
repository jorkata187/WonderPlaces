import { Link, useNavigate } from "react-router";
import { useActionState } from "react";

import Footer from "../footer/Footer";
import { useLogin } from "../../api/authApi";

export default function Login() {
    const navigate = useNavigate();
    const { login } = useLogin();

    const loginHandler = async (previousState, formData) => {
        const values = Object.fromEntries(formData);

        const authData = await login(values.email, values.password);

        navigate(-1);
    };

    const [values, loginAction, isPending] = useActionState(loginHandler, { email: '', password: '' });

    const backgroundImage =
        "https://plus.unsplash.com/premium_photo-1661883991651-b5487771e9aa?q=80&w=1516&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

    return (
        <div
            className="bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="flex h-screen items-center justify-center">
                <div className="flex flex-col items-center space-y-8">
                    <div
                        className="w-80 rounded-[20px] bg-white p-8"
                        style={{
                            boxShadow: "#00000057 1px 3px 4px",
                        }}
                    >
                        <h1
                            className="mb-4 text-center text-3xl font-bold text-black"
                            style={{
                                textShadow: "#00000063 0px 3px 5px",
                            }}
                        >
                            Welcome Back!
                        </h1>

                        <form className="space-y-4" action={loginAction}>
                            <div className="space-y-4">
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

                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    autoComplete="current-password"
                                    required
                                    className="w-full rounded-md bg-[#E9EFF6] p-2.5 placeholder:text-[#000000]"
                                    style={{
                                        boxShadow:
                                            "rgb(0 0 0 / 21%) 0px 7px 5px 0px",
                                    }}
                                />
                            </div>

                            {/* Sign in button */}
                            <div className="mb-4 flex justify-center">
                                <button
                                    type="submit"
                                    disabled={isPending}
                                    className={isPending
                                        ? "h-10 w-full rounded-md bg-gradient-to-br from-[#9b9a9c] to-[#c0bfc1] text-white shadow-md shadow-blue-950"
                                        : "h-10 w-full cursor-pointer rounded-md bg-gradient-to-br from-[#7336FF] to-[#3269FF] text-white shadow-md shadow-blue-950"}
                                >
                                    Login
                                </button>
                            </div>
                        </form>

                        {/* Sign up */}
                        <div className="text-center text-[#969696]">
                            Don't have an account?{" "}
                            <Link
                                to="/register"
                                className="cursor-pointer text-[#7337FF] hover:underline"
                            >
                                Register
                            </Link>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        </div>
    );
}


