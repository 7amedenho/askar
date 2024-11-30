import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Blog = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-100 via-gray-200 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 overflow-hidden">
      {/* Background shapes */}
      <div className="absolute inset-0">
        {/* Left geometric shape */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-indigo-300 dark:bg-indigo-700 rounded-full opacity-30"></div>
        {/* Right geometric shape */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gray-400 dark:bg-slate-700 rounded-full opacity-20"></div>
        {/* Zigzag line */}
        <div className="absolute top-1/2 left-0 w-72 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-50 transform -translate-y-1/2 rotate-45"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-10">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-indigo-700 dark:text-slate-100 capitalize">Our most recent Articles</h1>
          <p className="text-gray-700 dark:text-slate-100">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit perferendis eos amet eum repudiandae aspernatur mollitia quos consectetur voluptatibus pariatur 
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array(3).fill(null).map((_, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 shadow-lg shadow-gray-200/50 dark:shadow-transparent border border-gray-200/50 dark:border-slate-700/50 rounded-lg">
              <Image
                src="/images/working-on-housing-project.jpg" 
                alt="illustration" 
                width="1300"
                height="1000"
                className="w-full aspect-[5/3] object-cover bg-gray-100 dark:bg-slate-700 rounded-t-lg"
              />
              <div className="relative p-4 pt-10">
                <div className="absolute right-4 -top-8 bg-indigo-700 dark:bg-slate-800 px-4 py-0.5 flex flex-col rounded-lg">
                  <p className="font-bold text-2xl text-white">15</p>
                  <p className="text-sm text-gray-200">May</p>
                </div>
                <div className="flex items-center text-gray-500 dark:text-slate-400">
                  <span>Category</span>
                  <span className="relative px-5 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:h-3 before:w-px before:bg-gray-400"></span>
                  <span>Author</span>
                </div>
                <h1 className="text-xl my-6 font-semibold text-indigo-700 dark:text-slate-200">
                  Here some good ways write type safe support attaque
                </h1>
                <a href="#" className="text-indigo-600 dark:text-blue-400 transition hover:text-opacity-90 flex items-center gap-x-3 group">
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" className="w-4 h-4 transition-all ease-linear group-hover:ml-1">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/en/projects" className="px-5 py-2.5 border border-gray-100 dark:border-slate-700 text-indigo-600 dark:text-slate-400 flex items-center gap-x-3 rounded-lg">
            See More
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>                      
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Blog;
