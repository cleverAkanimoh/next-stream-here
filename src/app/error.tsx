'use client'

type ErrorProps = {
    error: Error;
    reset: () => void;
}

export default function error({ error, reset }: ErrorProps) {
    return (
        <div>
            <span>{error.name}</span>
            <span>{error?.message || 'Error message undefined'}</span>

            <button onClick={reset} >Try again</button>
        </div>
    )
}