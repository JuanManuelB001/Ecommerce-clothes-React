import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Index } from "../pages/Index";
export function MyRoutes(){
    return(
        <Router>
            <Routes>
                <Route exact path="/"  element={<Index/>}/>
            </Routes>

        </Router>
    );
}
