export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8">
            {/* Logo */}
            <img src="/solairix-logo.png" alt="Solairix Logo" className="w-48 h-48 rounded-lg mb-6" />

            {/* Heading */}
            <h1 className="text-3xl font-bold">Welcome to Solairix!</h1>
            <p className="text-lg mt-4 text-center">
                AI-powered insights, projects, and research.
            </p>

            {/* Navigation Links */}
            <nav className="mt-8 flex space-x-6">
                <a href="#about" className="text-blue-500 hover:underline text-lg">About</a>
                <a href="#projects" className="text-blue-500 hover:underline text-lg">Projects</a>
                <a href="#blog" className="text-blue-500 hover:underline text-lg">Blog</a>
            </nav>

            {/* Sections */}
            <section id="about" className="mt-16 w-3/4 text-center">
                <h2 className="text-2xl font-semibold">About</h2>
                <p className="mt-2 text-gray-600">
                    Solairix is an AI/ML-driven platform showcasing research, projects, and insights.
                    More content coming soon!
                </p>
            </section>

            <section id="projects" className="mt-16 w-3/4 text-center">
                <h2 className="text-2xl font-semibold">Projects</h2>
                <p className="mt-2 text-gray-600">
                    Explore AI-powered applications and cutting-edge solutions. Stay tuned!
                </p>
            </section>

            <section id="blog" className="mt-16 w-3/4 text-center">
                <h2 className="text-2xl font-semibold">Blog</h2>
                <p className="mt-2 text-gray-600">
                    Read about AI trends, insights, and development updates.
                </p>
            </section>
        </div>
    );
}