import Image from "next/image"
import getCar from "@/libs/getCar";
import Link from "next/link";

export default async function CarDetailPage( {params} : { params: {cid: string}}){
    const carDetail = await getCar(params.cid)
    return(
        <main className="text-center p-5">
            <h1 className="text-lg font-medium">{carDetail.data.model}</h1>
            <div className="flex flex-row my-5">
                <Image src={carDetail.data.picture} alt='Car Image' width={0} height={0} sizes="100vw" className="rounded-lg w-[30%]"></Image>
                <div className="flex flex-col text-left">
                    <div className="text-md mx-5">{carDetail.data.description}</div>
                    <div className="text-md mx-5">Doors: {carDetail.data.doors}</div>
                    <div className="text-md mx-5">Seats: {carDetail.data.seats}</div>
                    <div className="text-md mx-5">Large Bags: {carDetail.data.largebags}</div>
                    <div className="text-md mx-5">Small Bags: {carDetail.data.smallbags}</div>
                    <div className="text-md mx-5">Daily Rental Rate: {carDetail.data.dayRate} (insurance included)</div>
                    <Link href={`/reservations?id=${params.cid}&model=${carDetail.data.model}`}>
                        <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 mx-5 my-2 text-white shadow-sm">
                            Make Reservation
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
}

export async function generateStaticParams(){
    return [{cid:'001'}, {cid:'002'}, {cid:'003'}, {cid:'004'}]
}