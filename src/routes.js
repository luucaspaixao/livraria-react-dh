import { Switch, Route, BrowserRouter } from "react-router-dom"
import Home from "./pages/home"
import Reviews from "./pages/reviews"

export default function Routes(){
    return (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/reviews/:id" component={Reviews} exact />
        </Switch>
    </BrowserRouter>
    )
}