import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
    return (
        <div className="flex flex-col items-center justify-start min-h-screen text-center p-8">
            {/* Navigation Bar */}
            <nav className="w-full flex justify-center space-x-6 p-4 border-b border-gray-700">
                <Link href="/" className="text-yellow-400 hover:underline">Home</Link>
                <Link href="/about" className="text-yellow-400 hover:underline">About</Link>
                <Link href="/projects" className="text-yellow-400 hover:underline">Projects</Link>
                <Link href="/blog" className="text-yellow-400 font-bold hover:underline">Blog</Link>
            </nav>

            {/* Blog Heading with Inline Icon */}
            <div className="flex items-center space-x-3 mt-6">
                <h1 className="text-3xl font-bold">Solairix Blog</h1>
                <FontAwesomeIcon icon={faBlog} className="text-yellow-400 w-7 h-7" />
            </div>

            {/* Tech Insights + Footnote Indicator */}
            <p className="text-lg mt-2">
                Explore tech insights<span className="text-yellow-400">*</span>.
            </p>

            {/* Footnote explaining LinkedIn Access */}
            <p className="text-sm text-gray-400 mt-1">
                <span className="text-yellow-400">*</span> Some articles may require LinkedIn access.
            </p>

            <div className="mt-6 w-full max-w-2xl text-left">
                {/* AI/ML Section */}
                <h2 className="text-xl font-bold text-yellow-400">AI/ML</h2>
                <p className="text-gray-400 italic">Coming soon...</p>

                {/* FinTech Section with Thumbnail */}
                <h2 className="text-xl font-bold text-yellow-400 mt-6">FinTech</h2>
                <a
                    href="https://lnkd.in/eS7YEjTg"
                    className="flex items-center space-x-4 mt-2 border p-2 rounded-lg hover:bg-gray-800 transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {/* Blog Post Thumbnail */}
                    <div className="w-24 h-16 relative rounded-md overflow-hidden">
                        <Image
                            src="/blog-thumbnails/unmaskbitcoin.png"
                            alt="FinTech Blog Thumbnail"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>

                    {/* Blog Post Title */}
                    <span className="text-blue-400 text-lg font-semibold hover:underline">
                        Unmasking Anonymity in Bitcoin Transactions
                    </span>
                </a>
            </div>

            {/* Placeholder for Pagination */}
            <div className="mt-10">
                <button className="px-6 py-2 border border-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black">
                    Load More Articles
                </button>
            </div>
        </div>
    );
}