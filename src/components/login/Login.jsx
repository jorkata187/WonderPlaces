export default function Login() {
    const backgroundImage =
        "https://plus.unsplash.com/premium_photo-1661883991651-b5487771e9aa?q=80&w=1516&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

    return (
        <div
            className="bg-cover bg-center"
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

                        <form className="space-y-4">
                            <div className="space-y-4">
                                <input
                                    type="email"
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
                                    className="h-10 w-full cursor-pointer rounded-md bg-gradient-to-br from-[#7336FF] to-[#3269FF] text-white shadow-md shadow-blue-950"
                                >
                                    Login
                                </button>
                            </div>
                        </form>

                        {/* Sign up */}
                        <div className="text-center text-[#969696]">
                            Don't have an account?{" "}
                            <a
                                href="/register"
                                className="cursor-pointer text-[#7337FF] hover:underline"
                            >
                                Register
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


