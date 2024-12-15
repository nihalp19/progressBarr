import React, { useEffect, useState } from 'react'


function ProgressBar() {

    const [bar, setBar] = useState(0)

    useEffect(() => {
       const interval =  setInterval(() => {
            setBar((prev) => {
                if(prev >= 100){
                    clearInterval(interval)
                    return prev
                }
                console.log("interval is running")
                return prev + 5
            })
        }, 150)
        return () => {clearInterval(interval)}
    }, [])

    return (
        <div style={{ width: "300px",border : "1px solid grey", height: "20px", margin: "20px", borderRadius: "10px", overflow: "hidden", position: "relative" }}>
            <div style={{ transform: `translateX(${bar - 100}%)`, background: "green", position: "absolute", width: "100%", height: "100px" }}>
            </div>
        </div>
    )
}

export default ProgressBar