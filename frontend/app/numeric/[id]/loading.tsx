import Loader from "@/app/components/Loader";
import Navbar from "@/app/components/Navbar";
export default function Loading() {
  return (
    <div className="h-screen w-screen flex flex-col gap-10 justify-center  items-center">
      <Loader />
      <h1 className="lg:text-lg text-md font-semibold text-black">Calculating the data...</h1>
    </div>
  );
}