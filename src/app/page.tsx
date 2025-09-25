import NavBar from "@/component/NavBar";
import HomePage from "@/pages.tsx/homepage/page";

export default function Home() {
  return (
    // <div className="font-sans grid items-center justify-items-center p-8 pb-20 gap-16 sm:p-10 w-full">
    <div className="font-sans items-center justify-center p-8 pb-20 gap-2 sm:p-10 w-full">
      <NavBar />/
      <HomePage />
    </div>
  );
}
