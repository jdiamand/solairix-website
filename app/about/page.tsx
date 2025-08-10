import Link from "next/link";

export default function About() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-black text-white p-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-yellow-400">About Me</h1>
                <p className="mt-4 text-lg text-gray-300">This page is also under construction.</p>
                <Link
                    href="/"
                    className="inline-block mt-6 px-4 py-2 border border-yellow-400 rounded-lg text-yellow-400 hover:bg-yellow-400 hover:text-black transition"
                >
                    ← Back to Home
                </Link>
            </div>
        </div>
    );
}
