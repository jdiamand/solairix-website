import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog } from "@fortawesome/free-solid-svg-icons";


export default function BlogCategoryAI() {
    const aiMlArticles24 = [
        {
            title: "How to Train Your Llama: Part 2 - Calibration",
            link: "https://lnkd.in/e5kiZcRJ",
            image: "/blog-thumbnails/train-llama-p2.png",
        },
        {
            title: "Do Transformers Dream of Electric Sheep?: Part 1 - Discovery",
            link: "https://lnkd.in/eQZZxauY",
            image: "/blog-thumbnails/transformer-dream-p1.png",
        },
    ];
    const aiMlArticles25 = [
        {
            title: "The Matrix Retrieved : Part 3 - From RAGs To Riches",
            link: "https://lnkd.in/eQ5EHVRx",
            image: "/blog-thumbnails/matrix-part3.png",
        },

    ];

    return (
        <div className="flex flex-col items-center min-h-screen text-center p-8">
            {/* 🔹 Blog Home Button */}
            <div className="w-full max-w-2xl flex justify-start mb-4">
                <Link href="/blog">
                    <button className="px-4 py-2 border border-yellow-400 rounded-lg text-yellow-400 hover:bg-yellow-400 hover:text-black transition duration-300">
                        ← Blog Home
                    </button>
                </Link>
            </div>

            {/* 🔹 Blog Title with Correct Font */}
            <div className="flex items-center space-x-3">
                <h1 className="text-3xl font-bold text-white">Solairix Blog</h1>
                <FontAwesomeIcon icon={faBlog} className="text-yellow-400 w-7 h-7" />
            </div>

            {/* 🔹 AI/ML Articles Subtitle */}
            <p className="text-2xl font-bold mt-4 text-yellow-400">AI/ML Articles</p>

            {/* 🔹 2025 Year Subtitle (Left-aligned) */}
            <div className="w-full max-w-2xl text-left">
                <h3 className="text-lg font-bold text-gray-400">2025</h3>
            </div>
            {/* 🔹 Blog Post List - Fixed Thumbnail Size */}
            <div className="w-full max-w-2xl flex flex-col gap-6 mt-2">
                {aiMlArticles25.map((article, index) => (
                    <a
                        key={index}
                        href={article.link}
                        className="flex items-center gap-4 border p-4 rounded-lg hover:bg-gray-800 transition duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {/* ✅ Fixed Thumbnail Size & Aspect Ratio */}
                        <div className="w-24 h-14 relative rounded-md overflow-hidden">
                            <Image
                                src={article.image}
                                alt="Thumbnail"
                                width={96}
                                height={56}
                                className="rounded-md object-cover"
                            />
                        </div>

                        {/* Blog Post Title */}
                        <span className="text-blue-400 text-lg font-semibold hover:underline">
                            {article.title}
                        </span>
                    </a>
                ))}
            </div>


            {/* 🔹 2024 Year Subtitle (Left-aligned) */}
            <div className="w-full max-w-2xl text-left mt-10">
                <h3 className="text-lg font-bold text-gray-400">2024</h3>
            </div>

            {/* 🔹 Blog Post List - Fixed Thumbnail Size */}
            <div className="w-full max-w-2xl flex flex-col gap-6 mt-2">
                {aiMlArticles24.map((article, index) => (
                    <a
                        key={index}
                        href={article.link}
                        className="flex items-center gap-4 border p-4 rounded-lg hover:bg-gray-800 transition duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {/* ✅ Fixed Thumbnail Size & Aspect Ratio */}
                        <div className="w-24 h-14 relative rounded-md overflow-hidden">
                            <Image
                                src={article.image}
                                alt="Thumbnail"
                                width={96}
                                height={56}
                                className="rounded-md object-cover"
                            />
                        </div>

                        {/* Blog Post Title */}
                        <span className="text-blue-400 text-lg font-semibold hover:underline">
                            {article.title}
                        </span>
                    </a>
                ))}
            </div>
        </div>
    );
}