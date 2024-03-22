import { useState, useEffect } from "react"

export function useWindowListener(eventType:string, listener:EventListener) {
    const [winwidth, setWinwidth] = useState(0)
    useEffect(()=>{
        const handleWinWidthChange = ()=>{
            setWinwidth(window.innerWidth)
            alert('window width' + window.innerWidth)
        }
        window.addEventListener(eventType, listener)

        return ()=>{
            window.removeEventListener(eventType, listener)
        }
    })
}