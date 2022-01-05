import { Navlink } from "react-router-dom";


export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Navlink to='/'>Home</Navlink>
                </li>
                <li>
                    <Navlink to='/about'>About</Navlink>
                </li>
                <li>
                    <Navlink to='/service'>Service</Navlink>
                </li>
                <li>
                    <Navlink to='/contact'>Contact</Navlink>
                </li>
            </ul>
        </nav>
    );

}