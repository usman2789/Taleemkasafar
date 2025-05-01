import Link from 'next/link';
// import Header from '@/components/header';
// import Footer from '@/components/footer';

export default function NotFound() {
  return (
    <div>
      {/* <Header /> */}
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Blog Post Not Found</h2>
        <p className="text-gray-600 mb-8">We couldn't find the blog post you were looking for.</p>
        <Link href="/blog" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Return to Blog
        </Link>
      </div>
    </div>
    {/* <Footer /> */}
    </div>
  );
}