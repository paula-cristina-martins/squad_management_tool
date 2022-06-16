import Link from "next/link";

export default function Home() {
  return (
    <div className="container w-full p-4 my-5 mx-24 rounded-lg shadow-lg bg-white">
      <hr className="my-5" />
      <div className="flex items-center w-full justify-center">
        <h1 className="text-purple-900 font-bold text-2xl px-5">Welcome a Squad Management Tool!</h1>
      </div>
      <hr className="my-5" />
      <h1 className="text-center text-gray-400 font-bold px-5 uppercase mb-3">Team Information</h1>
      <div className="flex w-full mx-auto justify-center">
        <Link href={'/teams/find'}>
          <button
            className="flex items-center p-2 bg-gradient-to-r from-pink-600 via-pink-700 to-pink-800 rounded-md text-white transition hover:shadow-lg hover:-translate-y-0.5 hover:scale-105 font-bold">
            Find Team
          </button>
        </Link>
      </div>
    </div>
  );
}