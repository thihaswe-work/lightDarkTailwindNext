import { ThreeDCardDemo } from "@/features/3dCard";
import { FloatingDockDemo } from "@/features/floatingDeck";
import { ThreeDMarqueeDemo } from "@/features/marquee";
import ThemeToggle from "./theme-toogle";
import UserTable from "./user-table";

export default async function Home() {
  // const res = await fetch("https://dummyjson.com/users", { cache: "no-store" });
  // const data = await res.json();
  // const users: any[] = data.users;
  return (
    <div>
      <ThemeToggle />
      <ThreeDCardDemo />
      <FloatingDockDemo />
      <ThreeDMarqueeDemo />
      <UserTable />
      {/* <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        <table className="table-auto border-collapse border border-gray-300 w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border border-gray-300 px-4 py-2">{user.id}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.firstName} {user.lastName}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
}
