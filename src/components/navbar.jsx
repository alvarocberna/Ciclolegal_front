'use client'

import Image from "next/image";
import logo from '../media/logo.png'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    {/* Logo  */}
                    <Link className="navbar-brand" href="/">
                        <Image src={logo} alt="Logo" style={{ width: '200px', height: '40px' }}></Image>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* Menu de opciones */}
                    <div className="collapse navbar-collapse" id="navbarNav" >
                        <ul className="navbar-nav w-100 d-flex justify-content-end">
                            <li className="nav-item  col-12 col-lg-2" style={{ height: '60px' }}>
                                <Link className="nav-link h-100 d-flex align-items-center justify-content-center " href="/#QuienesSomos">Quienes somos</Link>
                            </li>
                            <li className="nav-item  col-12 col-lg-2" style={{ height: '60px' }}>
                                <Link className="nav-link h-100 d-flex align-items-center justify-content-center " href="/#servicios">Servicios</Link>
                            </li>
                            <li className="nav-item  col-12 col-lg-2" style={{ height: '60px' }}>
                                <Link className="nav-link h-100 d-flex align-items-center justify-content-center" href="/#abogados">Abogados y equipo</Link>
                            </li>
                            <li className="nav-item  col-12 col-lg-2" style={{ height: '60px' }}>
                                <Link className="nav-link h-100 d-flex align-items-center justify-content-center" href="/articulos">Artículos de opinión</Link>
                            </li>
                            <li className="nav-item  col-12 col-lg-2" style={{ height: '60px' }}>
                                <Link className="nav-link h-100 d-flex align-items-center justify-content-center " aria-current="page" href="/contacto">Contáctanos</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}