import { useState, useEffect } from 'react';
import UseGetBlogs from "../../hooks/use-get-blogs";

interface Blog {
	_id: {
        $oid: string;
    };
	title: string;
	content: string;
	image: string;
}

const LoadingSkeleton = () => (
	<div className="flex flex-col bg-gray-50 h-96">
		<div className="h-52 rounded-t bg-gray-300 animate-pulse"></div>
		<div className="flex-1 px-4 py-8 space-y-4 sm:p-8">
			<div className="w-full h-6 rounded bg-gray-300 animate-pulse"></div>
			<div className="w-full h-6 rounded bg-gray-300 animate-pulse"></div>
			<div className="w-3/4 h-6 rounded bg-gray-300 animate-pulse"></div>
		</div>
	</div>
);

const Home = () => {
	const [blogList, setBlogList] = useState<Blog[]>([]);
	const { blogs, loading } = UseGetBlogs()

	useEffect(() => {
		if (blogs?.data) {
			setBlogList(blogs.data);
		}
	}, [blogs]);

	return (
		<section className="py-6 sm:py-12 bg-gray-100 text-gray-800">
			<div className="container p-6 mx-auto space-y-8">
				<div className="space-y-2 text-center">
					<h2 className="text-3xl font-bold">Read Blogs</h2>
					<p className="font-serif text-sm text-gray-600">Blog website powered by Fast API</p>
				</div>
				<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
					{loading ? (
						// Show 4 skeleton loaders while loading
						[...Array(4)].map((_, index) => (
							<LoadingSkeleton key={index} />
						))
					) : (
						blogList.map((blog: Blog) => (
							<article key={blog._id.$oid} className="flex flex-col bg-gray-50">
								<a rel="noopener noreferrer" href="#" aria-label={blog.title}>
									<img alt={blog.title} className="object-cover w-full h-52 bg-gray-500" src={blog.image} />
								</a>
								<div className="flex flex-col flex-1 p-6">
									<a rel="noopener noreferrer" href="#" aria-label={blog.title}></a>
									<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-purple-600">Blog</a>
									<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{blog.title}</h3>
									<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
										<span>{blog.content.substring(0, 100)}...</span>
									</div>
								</div>
							</article>
						))
					)}
				</div>
			</div>
		</section>
	);
};

export default Home;