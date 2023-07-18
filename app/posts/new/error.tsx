'use client'; // Error components must be Client components
import React, {useEffect} from 'react';


type Props = {
    error: string;
    reset: () => void;
}

const Error = ({error, reset}: Props) => {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])
  
    return (
    <div>
        <h2>Something went wrong</h2>
        <button
         onClick={() => reset()}>
            Try again
        </button>
    </div>
  )
}

export default Error