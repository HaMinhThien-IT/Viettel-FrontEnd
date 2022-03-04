import React from 'react'
type props = {
    open: boolean
    onOpen: () => void
}
export default function Test1(props: props) {
    return (
        <>
            <p>{props.open == true ? "hi" : "hello"}</p>
            <button onClick={() => props.onOpen()}>click me</button>
        </>
    )
}
