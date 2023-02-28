
import PostFormCard from "../components/PostFormCard";
import NavigationCard from "../components/NavigationCard";
import PostCard from "../components/PostCard";

export default function Home() {
  return (
    <div className="flex mt-4 max-w-4xl mx-auto gap-6">
      <div className="w-3/12">
        <NavigationCard>
          
        </NavigationCard>
      </div>
      <div className="9/12">
        <PostFormCard>
        </PostFormCard>
        <PostCard />
      </div>

    </div>
  )
}
