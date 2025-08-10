import Image from "next/image";


export default function Home() {
    return (
        <div className="flex flex-col min-h-screen px-6 text-white text-center pt-12">
            {/* "Hero" section that grows to fill space */}
            <div className="flex-grow flex flex-col items-center">
                {/* Logo */}
                <div className="relative mt-6 flex justify-center">
                    <Image
                        src="/solairix-logo.png"
                        alt="Solairix Logo"
                        width={256}
                        height={256}
                        className="mb-6 transition-transform transform hover:scale-105 drop-shadow-glow"
                    />
                </div>


                <h1 className="text-2xl font-extrabold tracking-wide text-white">
  Engineering at the Nexus of{" "}
  <span className="text-yellow-400">AI and Fintech</span>
  <span className="text-sky-400">.</span>
</h1>

            </div>
            {/* "Sticky‐bottom" container for Nav and Footer */}
            <div className="mt-auto mb-6">
                {/* Centered Navigation Menu */}
                <div className="flex gap-6 justify-center mb-4">
                    <a
                        href="/about"
                        className="px-6 py-2 border border-yellow-400 rounded-lg transition-all hover:bg-yellow-400 hover:text-black hover:scale-105"
                    >
                        About
                    </a>
                    <a
                        href="/projects"
                        className="px-6 py-2 border border-yellow-400 rounded-lg transition-all hover:bg-yellow-400 hover:text-black hover:scale-105"
                    >
                        Projects
                    </a>
                    <a
                        href="/blog"
                        className="px-6 py-2 border border-yellow-400 rounded-lg transition-all hover:bg-yellow-400 hover:text-black hover:scale-105"
                    >
                        Blog
                    </a>
                </div>

                {/* Footer */}
                <footer className="text-sm text-gray-400">
                    &copy; 2025 Solairix Labs, LLC. All rights reserved.
                </footer>
            </div>
        </div>
    );
}
