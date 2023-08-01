import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import Birds from "../Birds/Birds";
import Flowers from "../Flowers/Flowers";
import Fishes from "../Fishes/Fishes";

export default function FloraFauna():JSX.Element {
    return(
        <Routes>
            <Route path="/" element = {<Layout />}  >
                <Route path="birds" element ={<Birds />} />     
                <Route path="flowers" element ={<Flowers />} />     
                <Route path="fishes" element ={<Fishes />} />     
            </Route>
        </Routes>
    )
}