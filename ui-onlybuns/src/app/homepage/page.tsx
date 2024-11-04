import type { NextPage } from "next";
import PublicPostFeed from "../components/PublicPostFeed";

const Home: NextPage = () => {
    return (
        <main className="bg-slate-900 min-h-screen p-8">
            <h1 className="text-3xl font-bold mb-4">Welcome to OnlyBuns</h1>
            <PublicPostFeed />
        </main>
    );
};

export default Home;
