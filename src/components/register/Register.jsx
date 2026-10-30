export default function Register() {
    const backgroundImage =
        "https://plus.unsplash.com/premium_photo-1661883991651-b5487771e9aa?q=80&w=1516&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

    return (
        <div
            className="min-h-screen bg-cover bg-center"
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

                        <form>
                            <div className="space-y-4">

                                {/* Email */}
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

                                {/* Password */}
                                <input
                                    type="password"
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
                                    className="h-10 w-full cursor-pointer rounded-md bg-gradient-to-br from-[#7336FF] to-[#3269FF] text-white shadow-md shadow-blue-950"
                                >
                                    Register
                                </button>
                            </div>
                        </form>

                        {/* Login link */}
                        <div className="text-center text-[#969696]">
                            Already have an account?{" "}
                            <a
                                href="/login"
                                className="cursor-pointer text-[#7337FF] hover:underline"
                            >
                                Login
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
