import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import MainPage from "../pages/Main/MainPage"
import Practice01Page from "../pages/Practice/Practice01"

export default function Router() {
    return (
        <BrowserRouter>
            <nav>
                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/'>
                    Main
                </NavLink>
                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/practive01'>
                    Practice01
                </NavLink>
                <NavLink className={({ isActive }) => "nav-link" + (isActive ? "click" : "")} to='/practice02'>
                    Practice02
                </NavLink>
            </nav>
            <Routes>
                <Route exact path="/" element={<MainPage />} />
                <Route path="/practice01" element={<Practice01Page />} />
                <Route path="/" element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    )
}
