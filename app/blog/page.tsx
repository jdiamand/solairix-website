import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Blog() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center p-8">
            {/* Blog Heading with Inline Icon */}
            <div className="flex items-center space-x-3">
                <h1 className="text-3xl font-bold">Solairix Blog</h1>
                <FontAwesomeIcon icon={faBlog} className="text-yellow-400 w-7 h-7" />
            </div>

            <p className="text-lg mt-2">Explore my latest insights on AI/ML and FinTech.</p>

            <div className="mt-6 w-full max-w-2xl text-left">
                {/* AI/ML Section */}
                <h2 className="text-xl font-bold text-yellow-400">AI/ML</h2>
                <p className="text-gray-400 italic">Coming soon...</p>

                {/* FinTech Section with Thumbnail */}
                <h2 className="text-xl font-bold text-yellow-400 mt-6">FinTech</h2>
                <a
                    href="https://www.linkedin.com/...your-blog-url"
                    className="flex items-center space-x-4 mt-2 border p-2 rounded-lg hover:bg-gray-800 transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {/* Blog Post Thumbnail */}
                    <div className="w-20 h-14 relative rounded-md overflow-hidden">
                        <Image
                            src="/blog-thumbnails/fintech-banner.jpg"
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
        </div>
    );
}