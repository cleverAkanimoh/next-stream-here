'use client'

type Props = {
    error: Error;
    reset: () => void
}

export default function error({ error, reset }: Props) {
    return (
        <div>error</div>
    )
}