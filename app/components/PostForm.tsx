'use client'
import { useFormStatus, useFormState } from 'react-dom';
import { useEffect } from 'react';
import { createPost } from "@/app/lib/actions";

// const initialState = {
//   message: null,
// }

const SubmitBtn = () => {
//   const { pending } = useFormStatus(); 
  return (
    <button 
        type='submit' 
        className="p-2 border rounded-lg bg-primary text-secondary"      
        // disabled={pending}
    >
        {/* {pending ? "creating..." : "create task"} */}
        Create
    </button>
  )
}

const TodoForm = () => {  
//   const [state, formAction] = useFormState(createPost, initialState);

//   useEffect(() => {
//     if(state.status === 400){
//       console.log(state.message);
//     } else if(state.message){
//       console.log("Task created");
//     }

//   }, [state])

  return (
    <>
        {/* <form action={formAction}>
        <div className="join w-full mb-8">
            <input  
            type='text'
            className='input input-bordered join-item w-full'
            placeholder='type here'
            name='content'
            required
            />
            <SubmitBtn />
        </div>
        </form> */}

        <form action={createPost} className="flex flex-col gap-y-2">
            <input type="text" name="title" placeholder="Title" className="px-2 py-1 rounded-sm" />
            <textarea name="content" rows={5} placeholder="Content" className="px-2 py-1 rounded-sm" />
            <SubmitBtn />
        </form> 
    </>

     
  )
}

export default TodoForm