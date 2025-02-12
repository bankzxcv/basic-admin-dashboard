"use client"

import * as z from "zod"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import BackButton from "@/components/BackButton"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import posts from "@/data/posts"
import { useForm } from "react-hook-form"
import { useToast } from "@/components/ui/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  body: z.string().min(1, { message: "Body is required" }),
  author: z.string().min(1, { message: "Author is required" }),
  date: z.string().min(1, { message: "Date is required" }),
})

interface PostEditPageProps {
  params: {
    id: string
  }
}

const PostEditPage = ({ params }: PostEditPageProps) => {
  const { toast } = useToast()
  const post = posts.find(p => p.id === params.id)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post?.title || "",
      body: post?.body || "",
      author: post?.author || "",
      date: post?.date || "",
    },
  })

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    toast({
      title: "Post has been updated",
      description: `Updated by ${data.author}`,
    })
    console.log("Submit")
    console.log(data)
  }
  return (
    <>
      <BackButton text="Back to Posts" link="/posts"></BackButton>
      <h3 className="text-2xl mb-4">Edit Post</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                  Title
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter Title"
                    className="bg-slate-100 border-0 focus-visible:ring-0 text-black dark:bg-slate-500 dark:text-white focus-visible:ring-offset-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                  Body
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Enter Body"
                    className="bg-slate-100 border-0 focus-visible:ring-0 text-black dark:bg-slate-500 dark:text-white focus-visible:ring-offset-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                  Author
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter Author"
                    className="bg-slate-100 border-0 focus-visible:ring-0 text-black dark:bg-slate-500 dark:text-white focus-visible:ring-offset-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                  Date
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter Date"
                    className="bg-slate-100 border-0 focus-visible:ring-0 text-black dark:bg-slate-500 dark:text-white focus-visible:ring-offset-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full dark:bg-slate-800 text-white">Update Post</Button>
        </form>
      </Form>
    </>
  )
}

export default PostEditPage
