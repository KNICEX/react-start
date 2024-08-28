import App from "../App"
import { useState } from "react"
import Board from "../views/Tictactoe"

const rourtes = new Map<string, JSX.Element>()
rourtes.set('/', <App></App>)
rourtes.set('/tictactoe', <Board></Board>)

function Router  ()  {
    const path = window.location.pathname
    const [view, setView] = useState(rourtes.get(path))
    
    return (
        <>
        {view}
        </>
    )
}

export default Router