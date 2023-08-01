import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

export default function Layout():JSX.Element{
    return (
        <>
            <header>
                <h1>The most perfect things are created by nature</h1>
                <NavBar />
            </header>
            
            <div>
                < Outlet  />
            </div>

            <footer>
                <p> Hopes to see you again </p>
            </footer>
        </>
    )
}