import prisma from "@/app/lib/db";
import { unstable_cache as cache } from "next/cache";

type Params = {
  slug: string;
};

const getCachedPost = cache((slug) => {
  return prisma.post.findUnique({
    where: {
      slug,
    },
  })
})

const PostPage = async ({ params }: { params: Params}) => {

  const post = await getCachedPost(params.slug);

  return (
    <main className="container max-w-[700px] flex flex-col gap-10 pt-16 pb-40">

      <h1 className="text-3xl font-bold">{post?.title}</h1>
      <p>{post?.content}</p>

    </main>
  )
}

export default PostPage;