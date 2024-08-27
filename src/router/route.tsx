import App from "../App"
import { useState } from "react"
import Tictactoe from "../views/Tictactoe"

const rourtes = new Map<string, JSX.Element>()
rourtes.set('/', <App></App>)
rourtes.set('/tictactoe', <Tictactoe></Tictactoe>)

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