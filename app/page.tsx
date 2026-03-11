import TabAnimation from "@/components/TabAnimation";

export default function Home() {
  const placeholders = [2, 3, 4, 5, 6];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">UI Animations</h2>
        <p className="text-gray-500">
          気になるアニメーションをクリックして、実装コードを確認できます。
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 h-64 flex flex-col items-center justify-center hover:shadow-md transition-shadow">
          <TabAnimation autoPlay={true} />
          <span className="mt-6 text-sm text-gray-400 font-medium">Tabs</span>
        </div>

        {placeholders.map((i) => (
          <div 
            key={i} 
            className="bg-white rounded-2xl shadow-sm border border-gray-100 h-64 flex flex-col items-center justify-center hover:shadow-md transition-shadow cursor-pointer"
          >
            {/* ここに後で実際のアニメーションコンポーネントが入ります */}
            <span className="text-gray-400 font-medium">Animation {i}</span>
          </div>
        ))}
      </div>
    </div>
  );
}