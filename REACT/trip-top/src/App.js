import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import Flights from "./pages/flights/Flights";
import Stays from "./pages/stays/Stays";
import Attractions from "./pages/attractions/Attractions";
import CarRentals from "./pages/carrentals/CarRentals";
import Taxis from "./pages/taxis/Taxis";
import List from "./pages/list/List";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hotels" element={<List />} />
                <Route path="/hotels/:id" element={<Hotel />} />
                <Route path="/flights" element={<Flights />} />
                <Route path="/attractions" element={<Attractions />} />
                <Route path="/carrentals" element={<CarRentals />} />
                <Route path="/taxis" element={<Taxis />} />
                <Route path="/stays" element={<Stays />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;