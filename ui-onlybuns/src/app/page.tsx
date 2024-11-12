import type { NextPage } from "next";
import PublicPostFeed from "@/app/components/PublicPostFeed";
import {roboto_mono} from "@/app/fonts/fonts";


const Home: NextPage = () => {
  return (
      <main className="bg-white min-h-screen p-8">
        <PublicPostFeed />
      </main>
  );
};

export default Home;

