import TabAnimation from "@/components/TabAnimation";
import FollowButtonAnimation from "@/components/FollowButtonAnimation";
import ToggleFollowButton from "@/components/ToggleFollowButton";
import FollowButtonExact from "@/components/FollowButtonExact";

export default function Home() {
  const placeholders = [5, 6];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2 text-neutral-700">UI Animations</h2>
        <p className="text-neutral-500">
          気になるアニメーションをクリックして、実装コードを確認できます。
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        <div className="bg-white rounded-3xl shadow-sm h-64 flex flex-col items-center justify-center hover:shadow-md transition-all cursor-pointer">
          <TabAnimation autoPlay={true} />
          <span className="mt-6 text-sm text-neutral-400 font-medium">Tabs</span>
        </div>

        <div className="bg-white rounded-3xl shadow-sm h-64 flex flex-col items-center justify-center hover:shadow-md transition-all cursor-pointer">
          <FollowButtonAnimation autoPlay={true} />
          <span className="mt-6 text-sm text-neutral-400 font-medium">Follow Button (Simple)</span>
        </div>

        <div className="bg-white rounded-3xl shadow-sm h-64 flex flex-col items-center justify-center hover:shadow-md transition-all cursor-pointer">
          <ToggleFollowButton autoPlay={true} />
          <span className="mt-6 text-sm text-neutral-400 font-medium">Follow Button (Toggle)</span>
        </div>

        <div className="bg-white rounded-3xl shadow-sm h-64 flex flex-col items-center justify-center hover:shadow-md transition-all cursor-pointer">
          <FollowButtonExact autoPlay={true} />
          <span className="mt-6 text-sm text-neutral-400 font-medium">Follow Button (Exact)</span>
        </div>

        {placeholders.map((i) => (
          <div
            key={i}
            className="bg-white rounded-3xl shadow-sm h-64 flex flex-col items-center justify-center hover:shadow-md transition-all cursor-pointer"
          >
            <span className="text-neutral-300 font-medium">Animation {i}</span>
          </div>
        ))}
      </div>
    </div>
  );
}