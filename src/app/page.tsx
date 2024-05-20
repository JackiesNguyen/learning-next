import { redirect } from "next/navigation";

export default function Home() {
  const isLogin = false;
  if (!isLogin) {
    redirect("/login");
  }
  return <div>Đây là trang home</div>;
}
