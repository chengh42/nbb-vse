import {useRouter} from "next/router";
import Navbar from "@/components/Navbar";

export default function Team() {
  const router = useRouter();
  const {teamId} = router.query;
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-start p-24">
        <p>Team: {teamId}</p>
      </main>
    </>
  );
}
