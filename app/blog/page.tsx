import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
export default function Blog() {
    return (
        <div className="container mx-auto p-8">
            <FontAwesomeIcon icon={faBlog} className="text-yellow-400" />
            <h1 className="text-4xl font-bold mb-6">Solairix Blog</h1>
            <p className="text-lg mb-4">Explore my latest insights on AI/ML and FinTech.</p>



            {/* AI/ML Articles Section (Future Placeholder) */}
            <div>
                <h2 className="text-2xl font-semibold text-yellow-400">AI/ML</h2>
                <ul className="mt-4 space-y-4">
                    <li className="text-gray-500 italic">Coming soon...</li>
                </ul>
            </div>
            {/* FinTech Articles Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold text-yellow-400">FinTech</h2>
                <ul className="mt-4 space-y-4">
                    <li>
                        <a
                            href="https://www.linkedin.com/pulse/unmasking-anonymity-bitcoin-transactions-joseph-diamand-x4l1e/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                        >
                            🔗 The Evolution of FinTech: Disruptions & Innovations
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}