"use client"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"
import { removeReservation } from "@/redux/features/cartSlice"

export default function ReservationCart(){

    const carItems = useAppSelector((state)=>state.cartSlice.carItems)
    const dispatch = useDispatch<AppDispatch>()

    return(
        <>
        {
            carItems.map((reservationItem)=>(
                <div className="bg-slate-200 roundex px-5 mx-5 py-2 my-2" key={reservationItem.carId}> 
                    <div className="text-xl">{reservationItem.carModel}</div>
                    <div className="text-sm">Pick-up: {reservationItem.pickupDate} from {reservationItem.pickupLocation}</div>
                    <div className="text-sm">Return: {reservationItem.returnDate} from {reservationItem.returnLocation}</div>
                    <div className="text-md">Duration: {reservationItem.numOfDays}</div>
                    <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm" onClick={()=>dispatch(removeReservation(reservationItem))}>
                        Remove from Cart
                    </button>
                </div>
            ))
        }
        </>
    )
}