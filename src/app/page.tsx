import NavBar from "@/component/NavBar";
import HomePage from "@/pages.tsx/homepage/page";

export default function Home() {
  return (
    <div className="font-sans items-center justify-center sm:p-8 p-1 pb-20 gap-2 w-full">
      <NavBar />/
      <HomePage />
    </div>
  );
}
