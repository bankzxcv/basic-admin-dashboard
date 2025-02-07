import { Folder, MessageCircle, Newspaper, User } from "lucide-react"

import AnalyticChart from "@/components/dashboard/AnalyticChart"
import DashboardCard from "@/components/dashboard/DashboardCard"
import PostTable from "@/components/posts/PostTable"

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        <DashboardCard
          title="Posts"
          count={100}
          icon={<Newspaper className="text-slate-500" size={72}></Newspaper>}
        />
        <DashboardCard
          title="Categories"
          count={100}
          icon={<Folder className="text-slate-500" size={72}></Folder>}
        />
        <DashboardCard
          title="Users"
          count={100}
          icon={<User className="text-slate-500" size={72}></User>}
        />
        <DashboardCard
          title="Comments"
          count={1200}
          icon={<MessageCircle className="text-slate-500" size={72}></MessageCircle>}
        />
      </div>
      <AnalyticChart></AnalyticChart>
      <PostTable title="Title Posts" limit={5}></PostTable>
    </>
  )
}
