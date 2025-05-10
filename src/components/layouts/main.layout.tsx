// import { Outlet } from "react-router";
import Dashboard from "../../pages/Dashboard";
import Header from "./Header";

export default function MainLayout() {
    return (
        <div className="w-full min-h-screen bg-slate-100">
            <Header />
            <div className="w-full py-24 px-10">
                <div className="w-full max-w-7xl mx-auto">
                    <Dashboard />
                </div>
            </div>
        </div>
    )
}