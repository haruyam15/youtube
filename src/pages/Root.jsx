import { Outlet } from 'react-router-dom';
import LoadingProvider from '../context/LoadingContext';
import Navbar from './Navbar';

export default function Root() {
    return (
        <LoadingProvider>
            <Navbar />
            <div className="content pt-[66px]">
              <Outlet />
            </div>
        </LoadingProvider>
    );
}