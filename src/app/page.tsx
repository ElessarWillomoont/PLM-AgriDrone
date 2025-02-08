import Team from "@/components/Team";
import ThreeViewer from "@/components/ThreeViewer";
import BOM from "@/components/BOM";

export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Left Sidebar: Team */}
      <aside className="w-1/5 bg-gray-800 text-white p-4">
        <Team />
      </aside>

      {/* Main Content: 3D Viewer */}
      <main className="flex-1 flex justify-center items-center bg-gray-900 text-white">
        <ThreeViewer />
      </main>

      {/* Right Sidebar: BOM */}
      <aside className="w-1/5 bg-gray-800 text-white p-4">
        <BOM />
      </aside>
    </div>
  );
}
