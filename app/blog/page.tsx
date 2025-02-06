import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
    return (
        <div className="flex flex-col items-center min-h-screen text-center p-8">
            {/* 🔹 Navigation Bar */}
            <nav className="w-full max-w-4xl flex justify-center space-x-6 text-gray-300 text-lg mb-5">
                <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
                <Link href="/about" className="hover:text-yellow-400 transition">About</Link>
                <Link href="/projects" className="hover:text-yellow-400 transition">Projects</Link>
                <Link href="/blog" className="font-bold text-yellow-400">Blog</Link>
            </nav>

            {/* 🔹 Blog Heading with Icon */}
            <div className="flex items-center space-x-3">
                <h1 className="text-3xl font-bold">Solairix Blog</h1>
                <FontAwesomeIcon icon={faBlog} className="text-yellow-400 w-7 h-7" />
            </div>

            <p className="text-lg mt-2">Explore tech insights <sup>*</sup>.</p>
            <p className="text-sm text-gray-400 mt-1">* Some articles may require LinkedIn access.</p>

            <div className="mt-6 w-full max-w-2xl text-left">
                {/* 🔹 AI/ML Section */}
                <h2 className="text-xl font-bold text-yellow-400">AI/ML</h2>
                <a
                    href="https://lnkd.in/ai-ml-example"
                    className="flex items-center space-x-4 mt-2 border p-2 rounded-lg hover:bg-gray-800 transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {/* ✅ AI/ML Blog Thumbnail FIXED */}
                    <div className="w-24 h-14 relative rounded-md overflow-hidden">
                        <Image
                            src="/blog-thumbnails/unmaskbitcoin.png"
                            alt="AI/ML Blog Thumbnail"
                            width={96}
                            height={56}
                            className="rounded-md"
                        />
                    </div>

                    {/* Blog Post Title */}
                    <span className="text-blue-400 text-lg font-semibold hover:underline">
                        AI Models and Their Ethical Challenges
                    </span>
                </a>

                {/* Load More AI/ML Articles */}
                <div className="mt-2 text-right">
                    <Link href="/blog/ai-ml" className="text-yellow-400 text-base font-semibold hover:underline">
                        → Load More AI/ML Articles
                    </Link>
                </div>




                {/* 🔹 FinTech Section */}
                <h2 className="text-xl font-bold text-yellow-400 mt-6">FinTech</h2>
                <a
                    href="https://lnkd.in/eS7YEjTg"
                    className="flex items-center space-x-4 mt-2 border p-2 rounded-lg hover:bg-gray-800 transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {/* ✅ FinTech Blog Thumbnail FIXED */}
                    <div className="w-24 h-14 relative rounded-md overflow-hidden">
                        <Image
                            src="/blog-thumbnails/unmaskbitcoin.png"
                            alt="FinTech Blog Thumbnail"
                            width={96}
                            height={56}
                            className="rounded-md"
                        />
                    </div>

                    {/* Blog Post Title */}
                    <span className="text-blue-400 text-lg font-semibold hover:underline">
                        Unmasking Anonymity in Bitcoin Transactions
                    </span>
                </a>


                {/* Load More FinTech Articles */}
                <div className="mt-3 text-right">
                    <Link href="/blog/fintech" className="text-yellow-400 text-base font-semibold hover:underline">
                        → Load More FinTech Articles
                    </Link>
                </div>
            </div>
        </div>
    );
}