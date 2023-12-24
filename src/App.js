import "./App.scss";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import MainRoutes from "./routes/MainRoutes";

function App() {
    return (
        <div className="App">
            <Header />
            <MainRoutes />
            <Footer />
        </div>
    );
}

export default App;
