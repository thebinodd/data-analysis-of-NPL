import Loader from "@/app/components/Loader";
export default function Loading() {
  return (
    <div className="h-screen w-screen flex flex-col gap-2 justify-center items-center">
      <Loader />
      <h1 className="text-lg font-semibold text-black">Calculating the data...</h1>
    </div>
  );
}