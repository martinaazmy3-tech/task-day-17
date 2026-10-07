import React from 'react'
export default function Child({ studentName }) {

    return (
        <>
            <div className="container-fluid">
                <h1 className='bg-dark text-light text-center p-4'>
                    Child
                </h1>
                <div className="container bg-info p-3">
                    <h3 className='text-center text-light'>
                        <strong>Student Details</strong>
                    </h3>
                    <h4>Student Name: {studentName}</h4>
                </div>
            </div>
        </>
    )
}