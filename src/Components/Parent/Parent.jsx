import React, { useState } from 'react'
import Child from '../Child/Child'
export default function Parent() {
    let [studentName, setStudentName] = useState(`Martina`);
    return (
        <>
            <div className="container-fluid">
                <h1 className='bg-success text-light text-center p-4 mt-3'>
                    Parent
                </h1>
                <Child studentName={studentName} />
            </div>
        </>
    )
}