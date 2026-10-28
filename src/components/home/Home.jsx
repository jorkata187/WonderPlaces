export default function Home() {
   return (
        <section className="w-full">
            <div
                className="w-full h-[520px] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center"
                style={{
                    backgroundImage:
                        "url('https://plus.unsplash.com/premium_photo-1661883991651-b5487771e9aa?q=80&w=1516&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D')",
                }}
            >
                {/* Photo by '@insolitus' on Unsplash */}
                <div>
                    <h1 className="text-white text-center xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold p-2 bg-opacity-40 rounded-sm">
                        Discover New Places
                    </h1>
                </div>

                <div className="w-full mx-auto">
                    <form>
                        <div className="xl:w-1/2 lg:w-[60%] sm:w-[70%] w-[90%] mx-auto flex gap-2 md:mt-6 mt-4">
                            <input
                                type="text"
                                className="border border-gray-400 w-full p-2 rounded-md text-xl pl-2"
                                placeholder="Search for a place by country..."
                            />

                            <button
                                type="submit"
                                className="px-[10px] bg-blue-500 text-lg text-white rounded-md font-semibold"
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}