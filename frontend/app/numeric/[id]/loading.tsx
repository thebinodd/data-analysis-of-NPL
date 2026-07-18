import Loader from "@/app/components/Loader";
import Navbar from "@/app/components/Navbar";
export default function Loading() {
  return (
    <div className="h-screen w-screen flex flex-col gap-10 justify-start mt-10 items-center">
      <Navbar isHome={false} heading="Loading..." />
      <Loader />
      <h1 className="text-lg font-semibold text-black">Calculating the data...</h1>
    </div>
  );
}