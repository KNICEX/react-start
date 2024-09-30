import App from "../App"
import { useState } from "react"
import Board from "../views/Tictactoe"
import FilterableProductTable from "../views/product"

const rourtes = new Map<string, JSX.Element>()
rourtes.set('/', <App></App>)
rourtes.set('/tictactoe', <Board></Board>)
rourtes.set('/product', <FilterableProductTable></FilterableProductTable>)

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