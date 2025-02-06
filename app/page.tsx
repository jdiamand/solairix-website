import Image from "next/image";

export default function Home() {
    return (
        <div className="landing-container">
            {/* Solairix Logo - Using Next.js Image Component */}
            <Image src="/solairix-logo.png" alt="Solairix Logo" width={256} height={256} className="mb-8" />

            <h1 className="text-4xl font-bold">Welcome to Solairix</h1>
            <p className="text-lg mt-4">Exploring the Future of AI, ML, and FinTech.</p>

            <div className="mt-6 flex gap-4">
                <a href="/about" className="px-6 py-2 border border-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black">
                    About
                </a>
                <a href="/projects" className="px-6 py-2 border border-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black">
                    Projects
                </a>
                <a href="/blog" className="px-6 py-2 border border-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black">
                    Blog
                </a>
            </div>
        </div>
    );
}