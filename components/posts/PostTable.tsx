import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import Link from "next/link"
import { Post } from "@/types/posts"
import posts from "@/data/posts"

export interface PostTableProbs {
  limit?: number
  title?: string
}

const PostTable = ({ limit, title }: PostTableProbs) => {
  // Sort posts in dec order based on date
  const sortedPosts: Post[] = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  // filter post to limit
  const filteredPosts = limit ? sortedPosts.slice(0, limit) : sortedPosts
  return (
    <div className="mt-10">
      <h3 className="text-2xl mb-4 font-semibold">{title || "Posts"}</h3>
      <Table>
        {sortedPosts.length == 0 && <TableCaption>A list of recent posts</TableCaption>}
        <TableHeader>
          <TableRow>
            <TableHead>title</TableHead>
            <TableHead className="hidden md:table-cell">auther</TableHead>
            <TableHead className="hidden md:table-cell text-right">Date</TableHead>
            <TableHead>View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredPosts.map(post => (
            <TableRow key={post.id}>
              <TableCell>{post.title}</TableCell>
              <TableCell className="hidden md:table-cell">{post.author}</TableCell>
              <TableCell className="hidden text-right md:table-cell">{post.date}</TableCell>
              <TableCell>
                <Link href={`/posts/edit/${post.id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs">
                    Edit
                  </button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default PostTable
