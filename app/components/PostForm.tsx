"use client"

import { useFormStatus } from 'react-dom';
import { useRef, useState } from 'react';
import { createPost } from "@/app/lib/actions";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Button } from "@/app/components/ui/button";
import { toast, useToast } from "@/app/components/ui/use-toast";
import { TodoSchema } from '../lib/types';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <Button 
        type='submit' 
        variant="secondary"
        className="p-2 border rounded-lg bg-primary text-secondary" 
        disabled={pending}
    >
      { pending ? "Creating..." : "Create post" }
    </Button>
  )
}

const TodoForm = () => {  
  const ref = useRef<HTMLFormElement>(null);

  const clientAction = async (formData: FormData) => {
    // reset form
    ref.current?.reset();
    
    // construct new post object
    const newPost = {
      title: formData.get("title"),
      content: formData.get("content"),
    }
    // client-side validation
    const result = TodoSchema.safeParse(newPost);
    if (!result.success) {
      let errorMessage = "";

      result.error.issues.forEach((issue) => {
        errorMessage = errorMessage + issue.path[0] + ': ' + issue.message + '. ';
      });

      // output error message
      toast({
        variant: "destructive",
        title: "Error",
        description: errorMessage,
      });
      return;
    } else {
      // output success message
      toast({
        variant: "default",
        title: "Success",
        description: result.success,
      });
    }


    // from server
    const response = await createPost(result.data);
    if (response?.error) {
      // output error message
      toast({
        variant: "destructive",
        title: "Error",
        description: response.error,
      });
    }

  }

  return (
    <>
      <form ref={ref} action={clientAction} className="flex flex-col gap-y-2">
          <Input 
            type="text" 
            name="title" 
            placeholder="Title" 
            className="px-2 py-1 rounded-sm"
          />
          <Textarea 
            name="content" 
            rows={4} 
            placeholder="Content" 
            className="px-2 py-1 rounded-sm" 
          />
          
          <SubmitBtn />
      </form> 

      {/* <Form {...form}>
        <form action={clientAction} className="w-full flex flex-col gap-5">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-primary'>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter title of the post." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-primary'>Content</FormLabel>
                <FormControl>
                  <Textarea placeholder="Write something..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <SubmitBtn />
        </form>
      </Form> */}
    </>

     
  )
}

export default TodoForm