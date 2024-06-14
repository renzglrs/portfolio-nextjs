"use server"

import prisma from "./db"
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { TodoSchema } from "./types";


// Error handler
export const getErrorMessage = (error: unknown): string => {
    let message: string;

    if(error instanceof Error) {
        message = error.message;
    } else if (error && typeof error === "object" && "message" in error) {
        message = String(error.message);
    } else if (typeof error === "string") {
        message = error;
    } else {
        message = "Something went wrong";
    }

    return message;
}

// Create blog post function
export async function createPost(newPost: unknown) {
    // const PostSchema = z.object({
    //     title: z.string().min(5, "Title must be at least 5 characters."),
    //     content: z.string().min(5, "Content must be at least 5 characters.")
    // })

    // const parse = PostSchema.safeParse({
    //     title: formData.get("title"),
    //     content: formData.get("content")
    // })

    // if (!parse.success) {
    //     console.log(parse.error.errors);
    //     return { errors: parse.error.errors };
    // }

    // const data = parse.data;



    // server-side validation
    const result = TodoSchema.safeParse(newPost);

    if (!result.success) {
      let errorMessage = "";

      result.error.issues.forEach((issue) => {
        errorMessage = errorMessage + issue.path[0] + ': ' + issue.message + '. ';
      });

      return {
        error: errorMessage,
      };
    }



    try {
        await prisma.post.create({
            data: {
                title: result.data.title,
                slug: result.data.title
                    .replace(/\s+/g, "-")
                    .toLowerCase(),
                content: result.data.content,
                author: {
                    connect: {
                        email: "john@gmail.com",
                    }
                },
            },
        });
        
        revalidatePath("/blog");
        return { 
            message: `Successfully added post!`, 
            status: 200 
        }

    } catch (error: unknown) {
        return { 
            error: getErrorMessage(error), 
            status: 400 
        }
    }
}

export async function editPost(formData: FormData, id: string) {
    await prisma.post.update({
        where: { id },
        data: {
            title: formData.get("title") as string,
            slug: (formData.get("title") as string)
                .replace(/\s+/g, "-")
                .toLowerCase(),
            content: formData.get("content") as string,
        },
    });
}

export async function deletePost(id: string){
    await prisma.post.delete({ where: { id }})
}
