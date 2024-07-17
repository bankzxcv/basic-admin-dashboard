import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import Link from "next/link"
import posts from "@/data/posts"

export interface PostTableProbs {
  limit?: number
  title?: string
}

const PostTable = ({ limit, title }: PostTableProbs) => {
  return <div>PostTable</div>
}

export default PostTable
