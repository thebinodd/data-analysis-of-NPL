import Stats from "@/app/components/Stats";
import getData from "@/app/helpers/fetchStats";
export default async function Page({params}: {params: Promise<{ id: string }>}) {
    const { id } = await params;
    const  res  =await getData({id, head:100});
    
    return (
        <div className="pb-5">
            <Stats data={res} unit="Runs" />
        </div>
    );
}