import Link from 'next/link'; // For navigation between pages
import Image from 'next/image'; // Next.js optimized image component
import { getAllBlogs } from '@/data/data'; // Import the local data-fetching function
// import Header from '@/components/header'; // Site header component
// import Footer from '@/components/footer'; // Site footer component

export default async function BlogPage() {
  // Fetch all blogs from the local data source
  const blogs = await getAllBlogs();

  return (
    <div>
      {/* Render the header component */}
      {/* <Header /> */}

      {/* Content Container */}
      <div className="container mx-auto px-4 py-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-blue-950 mt-14 mb-12 text-center">
          Strategies
        </h1>

        {/* Grid container to display blog cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Iterate over each blog and render a card */}
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.slug}`}
              className="group" // Tailwind class for grouping hover styles
            >
              {/* Each blog card container */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full transform hover:-translate-y-1">
                {/* Container for the cover image */}
                <div className="relative h-25 overflow-hidden">
                  <Image
                    src={blog.coverImage} // Blog cover image URL
                    alt={blog.title} // Alt text for accessibility
                    fill // Fill the parent container
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw" // Responsive sizes for the image
                    className="object-cover transition-transform duration-300 group-hover:scale-105" // Object fit and hover scale effect
                  />
                </div>

                {/* Textual content for the blog card */}
                <div className="p-5">
                  {/* Category label */}
                  <span className="text-xs text-blue-600 font-medium uppercase tracking-wide">
                    {blog.category}
                  </span>
                  {/* Blog title */}
                  <h2 className="text-lg font-semibold text-gray-800 mb-2 mt-1 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                    {blog.title}
                  </h2>
                  {/* Blog excerpt */}
                  <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                    {blog.excerpt}
                  </p>
                  {/* Author and read time */}
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                    <div className="flex items-center">
                      <span className="text-xs text-gray-500">{blog.author}</span>
                    </div>
                    <span className="text-xs text-gray-500">{blog.readTime} min read</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Render the site footer */}
      {/* <Footer /> */}
    </div>
  );
}