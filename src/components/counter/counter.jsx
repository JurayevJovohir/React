import React, { useReducer, useState } from 'react'
import counterReducer from '../counter/counterReducer';
import '../../index.scss'

const counter = () => {
    const [data, dispatch] = useReducer(counterReducer, 0);
    const [input, setInput] = useState("")

    const decreaseHandler = () => {
        dispatch({ type: 'decrease' });
    };
    const increaseHandler = () => {
        dispatch({ type: 'increase' });

    };

    const updateHandler = () => {
        dispatch({ type: 'update', payload: +input });
    }

    return (
        <>
            <div className=' w-16 m-auto mt-[250px]'>
                <div className='flex'>
                    <button onClick={decreaseHandler} className='px-2 rounded bg-blue-600 hover:bg-blue-700 text-white'>-</button>
                    <div className='ml-2'>{data}</div>
                    <button onClick={increaseHandler} className='ml-2 px-2 rounded bg-blue-600 hover:bg-blue-700 text-white'>+</button>
                </div>
            </div>
            <form onSubmit={(evt) => {
                evt.preventDefault();
            }} className='w-[300px] m-auto mt-5'>
                <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Update</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input onChange={(evt) => {
                        setInput(evt.target.value);


                    }}
                        type="search" id="search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                    <button onClick={updateHandler} type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>
        </>
    )
}

export default counter