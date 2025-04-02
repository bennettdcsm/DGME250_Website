import logo from './logo.svg';
import './App.css';
import AsideContent from "./components/AsideContent";
import Aside from "./components/Aside/Aside";
import Main from "./components/Main";

function App() {
    return (
        <div className="App">
            <header style={{
                height: '4rem',
                width: '100%',
                backgroundColor: '#000'
            }}>hello
            </header>
            <div className="main-container">
                <Aside/>
                <Main/>
            </div>
        </div>
    );
}

export default App;
