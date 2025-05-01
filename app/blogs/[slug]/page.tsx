import { getBlogBySlug, getRelatedBlogs, getAllBlogs } from '@/data/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
// import Header from '@/components/header';
// import Footer from '@/components/footer';
import { Metadata } from 'next';

// Define the props interface
interface PageProps {
  params: {
    slug: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

// Pre-render all possible slugs at build time
export async function generateStaticParams() {
  const blogs = await getAllBlogs(); // Fetch all blogs to extract slugs
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// Page component for individual blog posts
export default async function BlogPost({ params, searchParams }: PageProps) {
  // Fetch the blog post data based on the slug
  const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    notFound(); // Redirect to 404 page if the blog post is not found
  }

  // Fetch related blogs
  const relatedBlogs = await getRelatedBlogs(blog.id, blog.category);

  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      {/* Render the header component */}
      {/* <Header /> */}

      <div className="container mx-auto max-w-6xl">
        {/* Back to Blog List Link */}
        <Link href="/blog" className="flex items-center text-center text-white mb-4 pt-28 hover:underline">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Strategies
        </Link>

        {/* Main Blog Content */}
        <article className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl shadow-sm overflow-hidden mb-12">
          <div className="relative h-96">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="p-8">
            <span className="text-xs text-blue-600 font-medium uppercase tracking-wide">{blog.category}</span>
            <h1 className="text-4xl font-bold my-4">{blog.title}</h1>

            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
              <div className="flex items-center">
                <span className="text-white">{blog.author}</span>
              </div>
              <span className="text-white">{blog.readTime} min read</span>
            </div>

            <div className="prose prose-lg max-w-none">
              {blog.content.map((paragraph, index) => (
                <p key={index} className="mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>

        {/* Related Posts Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">You might also like</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 px-3">
            {relatedBlogs.map((relatedBlog) => (
              <Link key={relatedBlog.id} href={`/blog/${relatedBlog.slug}`} className="group">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full transform hover:-translate-y-1">
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={relatedBlog.coverImage}
                      alt={relatedBlog.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 33vw, 25vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-blue-600 font-medium uppercase tracking-wide">{relatedBlog.category}</span>
                    <h3 className="text-md font-semibold text-gray-800 mb-2 mt-1 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                      {relatedBlog.title}
                    </h3>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-100">
                      <span className="text-xs text-gray-500">{relatedBlog.readTime} min read</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Render the site footer */}
      {/* <Footer /> */}
    </div>
  );
}