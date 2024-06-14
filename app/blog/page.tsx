import Link from "next/link";
import prisma from "@/app/lib/db";
import { createPost } from "@/app/lib/actions";
import PostForm from "@/app/components/PostForm"

const BlogPage = async () => {
  // const posts = await prisma.post.findMany({
  //   where: {
  //     title: {
  //       endsWith: "Post"
  //     },
  //   },
  //   orderBy: {
  //     createdAt: "desc"
  //   },
  //   select: {
  //     id: true,
  //     title: true,
  //     content: true,
  //     slug: true,
  //   },
  //   take: 10,
  //   // skip: 10,
  // });
  // const posts = await prisma.post.findMany();
  // const postsCount = await prisma.post.count();

  const user = await prisma.user.findUnique({
    where: {
      email: "john@gmail.com"
    },
    include: {
      posts: {
        orderBy: {
          createdAt: "desc"
        }
      },
    }
  });

  // Utility function to format the date
  const formatDate = (dateString: Date) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };


  return (
    <main className="container max-w-[700px] flex flex-col gap-10 pt-16 pb-40">

      <h1 className="text-3xl font-bold">Blog <span className="text-xl">({user?.posts.length})</span></h1>

      <ul className="w-full sm:px-36 flex flex-col gap-6 animated-list">
        {user?.posts.map((post)=> {
          const formattedDate = formatDate(post.createdAt);
          
          return (
            <li key={post.id}>
            <Link href={`/blog/${post.slug}`}>
              <div className="flex justify-between">
                <p className="text-gray-500">{formattedDate}</p>
                <p>{post.title}</p>
              </div>
            </Link>
          </li>
          )
          
        })}
      </ul>

      <PostForm />

    </main>
  )
}

export default BlogPage;