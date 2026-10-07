import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'

export default function Home() {

    // == Javascript Here before return ==

    let [counter, setCounter] = useState(0);

    function increase(param) {
        setCounter(counter + param);
    }

    return (
        <>
            <Navbar />

            <div className="container text-center mt-4">

                <h2 onClick={function () { increase(1) }}>
                    Counter: {counter}
                </h2>

            </div>
        </>
    )
}