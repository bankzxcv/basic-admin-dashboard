import BackButton from "@/components/BackButton"
import PostPagination from "@/components/posts/PostPagination"
import PostTable from "@/components/posts/PostTable"

const PostsPage = () => {
  return (
    <>
      <BackButton text="Go Back" link="/"></BackButton>
      <PostTable></PostTable>
      <PostPagination></PostPagination>
    </>
  )
}

export default PostsPage
