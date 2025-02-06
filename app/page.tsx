import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 text-white text-center">
            {/* Solairix Logo with Glow Effect */}
            <div className="relative">
                <Image
                    src="/solairix-logo.png"
                    alt="Solairix Logo"
                    width={256}
                    height={256}
                    className="mb-8 transition-transform transform hover:scale-105 drop-shadow-glow"
                />
            </div>

            <h1 className="text-5xl font-extrabold tracking-wide animate-fade-in">
                Welcome to <span className="text-yellow-400">Solairix<span className="text-sm align-super">™</span></span>
            </h1>
            <p className="text-lg mt-4 max-w-xl opacity-90">
                Enabling the Advancement of <span className="text-yellow-400">Intelligent, Emerging Technologies</span>.
            </p>

            {/* Navigation Links */}
            <div className="mt-6 flex gap-6">
                <a href="/about" className="px-6 py-2 border border-yellow-400 rounded-lg transition-all hover:bg-yellow-400 hover:text-black hover:scale-105">
                    About
                </a>
                <a href="/projects" className="px-6 py-2 border border-yellow-400 rounded-lg transition-all hover:bg-yellow-400 hover:text-black hover:scale-105">
                    Projects
                </a>
                <a href="/blog" className="px-6 py-2 border border-yellow-400 rounded-lg transition-all hover:bg-yellow-400 hover:text-black hover:scale-105">
                    Blog
                </a>
            </div>
        </div>
    );
}



