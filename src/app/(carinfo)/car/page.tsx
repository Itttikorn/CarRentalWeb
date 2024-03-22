import getCars from "@/libs/getCars"
import CarCatalog from "@/components/CarCatalog"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"
import CardPanel from "@/components/CardPanel"

export default async function Car() {
    const cars = await getCars()

    return (
        <main className="text-center p-5">
            <h1 className="font-xl font-medium">Select Your Travel Partner</h1>
            <Suspense fallback={<p>Loading ... <LinearProgress /> </p>}>
                <CarCatalog carJson={cars} />
            </Suspense>

            <hr className="my-10"/>
            <h1 className="text-xl font-medium"> TRY Client-side Car Panel</h1>
            <CardPanel />
        </main>
    )
}