import {Inter} from "next/font/google";

import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
  const buttonClassName =
    "relative inline-flex items-center w-full px-4 py-2 font-medium hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white";
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-start p-24">
        <ul>
          <li>
            <Link href="/standing" className={buttonClassName}>
              <span class="material-symbols-outlined mr-1">leaderboard</span>
              Standing
            </Link>
          </li>
          <li>
            <Link href="/team/123" className={buttonClassName}>
              <span class="material-symbols-outlined mr-1">
                sports_basketball
              </span>
              Teams
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
}
