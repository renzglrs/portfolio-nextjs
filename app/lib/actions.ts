"use server"

import { revalidatePath } from "next/cache";
import prisma from "./db"
import { Prisma } from "@prisma/client";

export async function createPost(formData: FormData) {
    try {
        await prisma.post.create({
            data: {
                title: formData.get("title") as string,
                slug: (formData.get("title") as string)
                    .replace(/\s+/g, "-")
                    .toLowerCase(),
                content: formData.get("content") as string,
                author: {
                    connect: {
                        email: "john@gmail.com",
                    }
                },
            },
        });
        
        revalidatePath("/blog");
        return { message: "Success!", status: 200 }

    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === "P2002") {
                console.log("There is a unique constraint violation, a new user cannot be created with this email.")
            }
        }

        return { message: "Error", status: 400 }
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
