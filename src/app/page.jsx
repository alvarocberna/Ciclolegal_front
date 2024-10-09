"use client";
import React from 'react';
import Image from "next/image"
import img1 from '../media/img_derecho_civil.png'
import img2 from '../media/img_derecho_laboral.png'
import img3 from '../media/img_derecho_familia.png'
import img4 from '../media/img_derecho_inmobiliario.png'
import img5 from '../media/img_derecho_corporativo.png'
import img6 from '../media/img_juzgado_policia.png'
import imgAbodado1 from '../media/img_claudio_saavedra_abogado.jpg'
import imgAbodado2 from '../media/img_daniela_astorga_abogada.jpg'
import imgAbodado3 from '../media/img_daniela_portales_abogada.jpg'
import ImgPortada from '../media/img_abogados_1.jpg'
import imgVerde from '../media/img_verde.png'
import imgNaranja from '../media/img_naranja.png'
import imgArt1 from '../media/img_articulo_1.jpg'
import imgArt2 from '../media/img_articulo_2.jpg'
import imgArt3 from '../media/img_articulo_3.jpg'
import Carousel from 'react-bootstrap/Carousel';
import Link from 'next/link';

function Portada() {
    return (
        <div className="row w-100 mx-0 px-0 d-flex justify-content-center mb-5"
            style={{ height: '90vh', position: 'relative' }}>
            <Image src={ImgPortada} className="h-100 w-100 mx-0 px-0" style={{ objectFit: 'cover' }}></Image>
            <div className="h-100 w-100" style={{ position: 'absolute', background: 'black', opacity: '0.2' }}></div>
            <div className="d-flex flex-column justify-content-center align-items-center"
                style={{ position: 'absolute', width: '100%', height: '100%' }}>
                <h1 className="col-10 col-md-8 col-lg-7 text-center py-4 text-white display-4 fw-bold"
                    style={{ textShadow: '3px 3px 15px black', border: '2px solid #4DA6BE' }}>
                    Asesoría jurídica especializada
                    para emprendedores

                </h1>
                <h2 className="col-10 col-md-8 col-lg-7 text-center text-white h3"
                    style={{ textShadow: '3px 3px 15px black' }}>
                    El respaldo legal que necesitas
                </h2>
            </div>
        </div>
    )
}

function QuienesSomos() {
    return (
        <div className='col-12 d-flex flex-column mb-5' id='QuienesSomos'>
            <div className=' ps-0 d-flex flex-column  justify-content-between m-auto col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9'>
                <h2 className='col-12 mb-5 h1 m-auto' style={{ color: '#4DA6BE' }}>Quienes somos</h2>
                <p className='col-12' style={{ textAlign: 'justify' }}>
                    En Ciclo Legal, somos un equipo de profesionales comprometidos con la excelencia en el ámbito legal.
                    Fundado en 2021 por solo un equipo legal, ampliando capacidad profesional tanto social como contable.
                </p>
                <p className='col-12' style={{ textAlign: 'justify' }}>
                    Ciclo Legal, nace con el propósito de brindar asesoría jurídica especializada a emprendedores y
                    particulares, marcando la diferencia en el mundo legal, ampliando la solución de conflictos más
                    interdisciplinaria con profesionales especialistas en sus áreas.
                </p>
                <p className='col-12' style={{ textAlign: 'justify' }}>
                    Nos caracterizamos por ofrecer un enfoque integral y ciclíco en cada proceso legal. Nuestro nombre
                    refleja nuestra convicción de que cada trámite, desde su inicio hasta su conclusión, forma parte
                    de un ciclo continuo. Acompañamos a nuestros clientes con compromiso, confianza, confidencialidad,
                    empatía y, sobre todo, seguridad en cada paso de su viaje legal.”
                </p>

            </div>
        </div>
    )
}

function Mision() {
    return (
        <div className='col-12 d-flex flex-column mb-5' style={{ background: '#4DA6BE', padding: '60px 0 70px 0', position: 'relative' }}>
            <Image src={ImgPortada} className='h-100 w-100' style={{ position: 'absolute', top: '0px', objectFit: 'cover' }}></Image>
            <div style={{ background: '#4DA6BE', position: 'absolute', top: '0px', opacity: '0.8' }} className='w-100 h-100'></div>
            <div className='col-9 m-auto' style={{ position: 'relative' }}>
                <h2 className='col-12 mb-3 h1 m-auto' style={{ color: 'white' }}>Misión</h2>
                <p className='col-12 m-auto text-white mb-3' style={{ textAlign: 'justify' }}>
                    En Ciclo Legal, nos dedicamos a ser el respaldo legal que necesitas en cada etapa de tu vida y
                    emprendimiento. Nuestra misión es proporcionar servicios jurídicos de calidad, garantizando la
                    satisfacción de nuestros clientes y contribuyendo al desarrollo de una comunidad informada y empoderada.
                </p>
                <p className='col-12 m-auto text-white' style={{ textAlign: 'justify' }}>
                    Ofrecemos representación en materias judiciales, abarcando casos de Familia, Civiles, Laborales,
                    Societarias, Tránsito y Consumidor. Nuestra diferenciación radica en la accesibilidad, tanto en
                    honorarios como en comunicación, con asesoría y acompañamiento remoto en todo el territorio nacional,
                    y, presencial en Región de Valparaíso y Santiago.
                </p>
            </div>
        </div>
    )
}

function Servicio({ titulo, img, ruta }) {
    return (
        <Link className="px-0 mb-3 mx-1 col-12 col-md-5 col-lg-3" href={ruta}
            style={{ height: '250px', position: 'relative', borderRadius: '20px' }}>
            <Image src={img} className="w-100 h-100" style={{ position: 'absolute', borderRadius: '20px' }}></Image>
            <div className="w-100 h-100" style={{ position: 'absolute', background: 'black', opacity: '0.3', borderRadius: '20px' }}></div>
            <div className="w-100 h-100 d-flex flex-column align-items-center justify-content-center" style={{ position: 'absolute' }}>
                <p className="text-white h4 mb-4 text-center"> {titulo}</p>
                <div className="col-6 mb-4" style={{ height: '2px', background: 'white' }}></div>
                <button className="btn rounded text-white w-75" style={{ border: '2px solid white', }}>Mas información</button>
            </div>
        </Link>
    )
}

function Servicios() {
    return (
        <div className="row col-12 d-flex justify-content-center mb-5" id='servicios'>
            <h2 className="col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 mb-5 h1" style={{ color: '#4DA6BE' }}>Servicios</h2>
            <div className="row col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 d-flex justify-content-between">
                <Servicio titulo='Derecho civil' img={img1} ruta='/servicios/derecho-civil' />
                <Servicio titulo='Derecho laboral' img={img2} ruta='/servicios/derecho-laboral' />
                <Servicio titulo='Derecho de familia' img={img3} ruta='/servicios/derecho-de-familia' />
                <Servicio titulo='Derecho inmobiliario' img={img4} ruta='/servicios/derecho-inmobiliario' />
                <Servicio titulo='Derecho corporativo' img={img5} ruta='/servicios/derecho-corporativo' />
                <Servicio titulo='Juzgado de polocía local' img={img6} ruta='/servicios/juzgado-de-policia' />
            </div>

        </div>
    )
}

function Abogados() {
    return (
        <div className="row col-12 d-flex justify-content-center mb-5" id='abogados'>
            <h2 className="col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 mb-5 h1" style={{ color: '#4DA6BE' }}>Abogados</h2>
            <div className="row d-flex flex-column flex-lg-row mb-md-3 col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 align-items-start justify-content-around">
                <div className="col-12 col-lg-3 d-flex flex-column flex-md-row mb-4 flex-lg-column">
                    <Image src={imgAbodado1} className="m-auto mb-4" style={{ objectFit: 'cover', height: '320px', width: '220px', borderRadius: '100px' }} />
                    <div className=" d-flex m-auto flex-column col-12 col-sm-8 col-md-6 col-lg-12  justify-content-center align-items-center">
                        <h2 className="col-12 h4 mb-2 text-center">Claudio E. Saavedra T.</h2>
                        <p className='col-12 h5 text-center'>
                            Abogado
                        </p>
                        <p className='text-center col-12 mb-1'>
                            Licenciado en Ciencias Jurídicas.
                        </p>
                        <p className='text-center col-12 mb-1'>
                            Magister en Dirección Tributaria, Universidad Viña del Mar 2023.
                        </p>
                        <p className='text-center col-12 mb-1'>
                            Diplomado en Seguridad Ciudadana, Universidad de Chile, 2023.
                        </p>
                        <p className='text-center col-12 mb-1 fw-bold' style={{ color: '#4DA6BE' }}>
                            Claudio.saavedra@ciclolegal.cl
                        </p>
                    </div>
                </div>
                <div className="col-12 col-lg-3 d-flex flex-column flex-md-row mb-4 flex-lg-column ">
                    <Image src={imgAbodado2} className="m-auto mb-4" style={{ objectFit: 'cover', height: '320px', width: '220px', borderRadius: '100px' }} />
                    <div className="d-flex m-auto flex-column col-12 col-sm-8 col-md-6 col-lg-12  justify-content-center align-items-center">
                        <h2 className="col-12 h4 mb-2 text-center">Daniela F. Astorga V.</h2>
                        <p className='col-12 h5 text-center'>
                            Abogada
                        </p>
                        <p className='text-center col-12 mb-1'>
                            Licenciada en Ciencias Jurídicas.
                        </p>
                        <p className='text-center col-12 mb-1'>
                            Diplomada en Seguridad Ciudadana, Universidad de Chile, 2022.
                        </p>
                        <p className='text-center col-12 mb-1'>
                            Diplomada En Implementación De Políticas Públicas A Nivel Municipal,
                            Universidad Austral de Chile, 2018.

                        </p>
                        <p className='text-center col-12 mb-1 fw-bold' style={{ color: '#4DA6BE' }}>
                            Daniela.astorga@ciclolegal.cl
                        </p>
                    </div>
                </div>
                <div className="col-12 col-lg-3 d-flex flex-column flex-md-row mb-4 flex-lg-column ">
                    <Image src={imgAbodado3} className="m-auto mb-4" style={{ objectFit: 'cover', height: '320px', width: '220px', borderRadius: '100px' }} />
                    <div className="d-flex m-auto flex-column col-12 col-sm-8 col-md-6 col-lg-12  justify-content-center align-items-center">
                        <h2 className="col-12 h4 mb-2 text-center">Daniela A. Portales E.</h2>
                        <p className='col-12 h5 text-center'>
                            Abogada
                        </p>
                        <p className='text-center col-12 mb-1'>
                            Licenciada en Ciencias Jurídicas.
                        </p>
                        <p className='text-center col-12 mb-1'>
                            Diplomada en Mediación Familiar, U. Católica de Valparaíso.
                        </p>
                        <p className='text-center col-12 mb-1 fw-bold' style={{ color: '#4DA6BE' }}>
                            Daniela.portales@ciclolegal.cl
                        </p>
                    </div>
                </div>
            </div>
            <div className="row d-flex flex-column flex-lg-row col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 align-items-start justify-content-around">
                <div className="col-12 col-lg-3 d-flex flex-column flex-md-row mb-4 flex-lg-column">
                    {/* <Image src={imgAbodado1} className="m-auto mb-4" style={{ objectFit: 'cover', height: '320px', width: '220px', borderRadius: '100px' }} /> */}
                    <div className=" d-flex m-auto flex-column col-12 col-sm-8 col-md-6 col-lg-12  justify-content-center align-items-center">
                        <h2 className="col-12 h4 mb-2 text-center">Anita M. Salomón J.</h2>
                        <p className='col-12 h5 text-center'>
                            Psicóloga
                        </p>
                        <p className='text-center col-12 mb-1'>
                            Diplomada Psicoterapia Para el Tratamiento de Abuso de Alcohol y Drogas, Universidad de Santiago.
                        </p>
                        <p className='text-center col-12 mb-1'>
                            Magíster en Intervención Socio Jurídica en Familia de la Universidad Andrés Bello.
                        </p>
                    </div>
                </div>
                <div className="col-12 col-lg-3 d-flex flex-column flex-md-row mb-4 flex-lg-column ">
                    {/* <Image src={imgAbodado2} className="m-auto mb-4" style={{ objectFit: 'cover', height: '320px', width: '220px', borderRadius: '100px' }} /> */}
                    <div className="d-flex m-auto flex-column col-12 col-sm-8 col-md-6 col-lg-12  justify-content-center align-items-center">
                        <h2 className="col-12 h4 mb-2 text-center">Camila I. Arriagada</h2>
                        <p className='col-12 h5 text-center'>
                            Contadora Auditor
                        </p>
                        <p className='text-center col-12 mb-1'>
                            Mención Legislación Tributaria
                        </p>
                        <p className='text-center col-12 mb-1'>
                            Ingeniera Comercial, en curso.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ArticulosOpinion() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide mb-5 d-flex flex-column">
            {/* <h2 className="m-auto col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 mb-3 h1" style={{ color: '#4DA6BE' }}>
                Articulos de opinión
            </h2> */}
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <Link className="carousel-item active" href='/articulos/articulo-01'>
                    <Image src={imgArt1} className="d-block w-100" style={{ height: '350px', objectFit: 'cover', opacity: '0.7' }} alt="..." />
                    <div className="carousel-caption d-block">
                        <h5 className='h2 fw-bold text-start' style={{ textShadow: '2px 2px 15px #737373' }}>
                            La necesidad de dotar a los emprendedores con conocimientos legales y
                            laborales para fomentar la estabilidad empresarial
                        </h5>
                        <p className='text-start fw-semibold' style={{ textShadow: '2px 2px 15px #737373' }}>
                            Por Claudio Saavedra
                        </p>
                    </div>
                </Link>
                <Link className="carousel-item" href='/articulos/articulo-02'>
                    <Image src={imgArt2} className="d-block w-100" style={{ height: '350px', objectFit: 'cover', opacity: '0.7' }} alt="..." />
                    <div className="carousel-caption d-block">
                        <h5 className='h2 fw-bold text-start' style={{ textShadow: '2px 2px 15px #737373' }}>
                            Crisis de seguridad pública en Chile: ¿Qué podemos hacer como ciudadanos?
                        </h5>
                        <p className='text-start fw-semibold' style={{ textShadow: '2px 2px 15px #737373' }}>
                            Por Daniela Astorga
                        </p>
                    </div>
                </Link>
                <Link className="carousel-item" href='/articulos/articulo-03'>
                    <Image src={imgArt3} className="d-block w-100" style={{ height: '350px', objectFit: 'cover', opacity: '0.7' }} alt="..." />
                    <div className="carousel-caption d-block">
                        <h5 className='h2 fw-bold text-start' style={{ textShadow: '2px 2px 15px #737373' }}>
                            Formas de resolución de conflictos en Chile y La Mediación
                        </h5>
                        <p className='text-start fw-semibold' style={{ textShadow: '2px 2px 15px #737373' }}>
                            Por Daniela Portales
                        </p>
                    </div>
                </Link>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default function HomePage() {
    return (
        <div className="containter mx-0">
            <Portada />
            <QuienesSomos />
            <Mision />
            <Servicios />
            <Abogados />
            <ArticulosOpinion />
            <div style={{ height: '150px' }} />
        </div>
    )
}
