import PostFormCard from "../components/PostFormCard";
import PostCard from "../components/PostCard";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout >
      <PostFormCard></PostFormCard>
      <PostCard />
    </Layout>
  )
}
