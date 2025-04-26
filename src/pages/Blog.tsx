
import { Language } from "@/types";

interface BlogProps {
  language: Language;
}

const Blog = ({ language }: BlogProps) => {
  return (
    <div className="min-h-screen bg-fortipass-soft-gray">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <p className="text-gray-600 text-center">
              Articles coming soon! Stay tuned for updates about password security, best practices, and more.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
