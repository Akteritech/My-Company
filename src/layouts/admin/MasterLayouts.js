import React from 'react';
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";



export default function MasterLayouts() {
    return (
        <div className='sb-nav-fixed'>
            <Navbar />
            <div id='layoutSidenav'>
                <div id='layoutSidenav_nav'>
                    <Sidebar/>

                </div>
                <div id='layoutSidenav_content'>
                    <main>

                    </main>

                    <Footer />

                </div>

            </div>
        </div>
    );

}