import JobPost from "./components/JobPost";

export default function App() {
    return (
        <section className="px-8">
            <header className="flex w-full p-5 gap-3 items-center justify-between">
                <h1>
                    <b>Job Sphere</b>
                </h1>
                <label htmlFor="search">
                    <input
                        type="text"
                        name="keyword"
                        id="keyword"
                        dir="ltr"
                        placeholder="Your Job Search Here"
                        />
                    <input
                        type="text"
                        name="place"
                        id="place"
                        dir="rtl"
                        placeholder="City, State, Remote"
                    />
                    <button className="py-2 px-5 max-md:w-full">Search</button>
                </label>
            </header>

            {/* Feed */}
            <div className="grid justify-evenly gap-8 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <JobPost />
                <JobPost />
                <JobPost />
                <JobPost />
                <JobPost />
                <JobPost />
                <JobPost />
                <JobPost />
                <JobPost />
            </div>
        </section>
    );
}
