import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function Root() {
    return (
        <>
            <Navbar />
            <div className="content pt-[66px]">
              <Outlet />
            </div>
        </>
    );
}