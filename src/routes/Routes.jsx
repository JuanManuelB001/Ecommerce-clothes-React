import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Index } from "../pages/Index";
import { InfoCloth } from "../pages/InfoCloth";
export function MyRoutes(){
    return(
        <Router>
            <Routes>
                <Route exact path="/"  element={<Index/>}/>
                <Route exact path="/info-clothes/:code" element={<InfoCloth/>}/>
            </Routes>

        </Router>
    );
}
