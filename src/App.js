import { BrowserRouter } from "react-router-dom";

/* =============== Styles ================= */
import "./reset.scss";

/* ================ Custom Components =============== */
import Navbar from "./components/Navbar/Navbar";
import Pages from "./pages/Pages";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Pages />
            </BrowserRouter>
        </div>
    );
};

export default App;
