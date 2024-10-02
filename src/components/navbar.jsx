'use client'

import Image from "next/image";
import logo from '../media/logo.png'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    {/* Logo  */}
                    <a className="navbar-brand" href="#">
                        <Image src={logo} style={{ width: '200px', height: '40px' }}></Image>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* Menu de opciones */}
                    <div className="collapse navbar-collapse" id="navbarNav" >
                        <ul className="navbar-nav w-100 d-flex justify-content-end">
                            <li className="nav-item  col-12 col-lg-2" style={{ height: '60px' }}>
                                <a className="nav-link h-100 d-flex align-items-center justify-content-center " aria-current="page" href="#">Contactanos</a>
                            </li>
                            <li className="nav-item  col-12 col-lg-2" style={{ height: '60px' }}>
                                <a className="nav-link h-100 d-flex align-items-center justify-content-center " href="#">Quienes somos</a>
                            </li>
                            <li className="nav-item  col-12 col-lg-2" style={{ height: '60px' }}>
                                <a className="nav-link h-100 d-flex align-items-center justify-content-center " href="#">Servicios</a>
                            </li>
                            <li className="nav-item  col-12 col-lg-2" style={{ height: '60px' }}>
                                <a className="nav-link h-100 d-flex align-items-center justify-content-center ">Articulos de opinion</a>
                            </li>
                            <li className="nav-item  col-12 col-lg-2" style={{ height: '60px' }}>
                                <a className="nav-link h-100 d-flex align-items-center justify-content-center ">Abogados y equipo</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}