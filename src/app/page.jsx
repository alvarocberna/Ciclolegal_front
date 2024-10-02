// "use client";
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
                    Asesoría juridica especializada para emprendedores
                </h1>
                <h2 className="col-10 col-md-8 col-lg-7 text-center text-white h3"
                    style={{ textShadow: '3px 3px 15px black' }}>
                    El respaldo legal que necesitas
                </h2>
            </div>
        </div>
    )
}

function Servicio({ titulo, img, ruta }) {
    return (
        <div className="px-0 mb-3 mx-1 col-12 col-md-5 col-lg-3" style={{ height: '250px', position: 'relative', borderRadius: '20px' }}>
            <Image src={img} className="w-100 h-100" style={{ position: 'absolute', borderRadius: '20px' }}></Image>
            <div className="w-100 h-100" style={{ position: 'absolute', background: 'black', opacity: '0.3', borderRadius: '20px' }}></div>
            <div className="w-100 h-100 d-flex flex-column align-items-center justify-content-center" style={{ position: 'absolute' }}>
                <p className="text-white h4 mb-4 text-center"> {titulo}</p>
                <div className="col-6 mb-4" style={{ height: '2px', background: 'white' }}></div>
                <button className="btn rounded text-white w-75" style={{ border: '2px solid white', }}>Mas información</button>
            </div>
        </div>
    )
}

function Servicios() {
    return (
        <div className="row col-12 d-flex justify-content-center mb-5">
            <h2 className="col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 mb-5 h1" style={{ color: '#4DA6BE' }}>Servicios</h2>
            <div className="row col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 d-flex justify-content-between">
                <Servicio titulo='Derecho civil' img={img1} />
                <Servicio titulo='Derecho laboral' img={img2} />
                <Servicio titulo='Derecho de familia' img={img3} />
                <Servicio titulo='Derecho inmobiliario' img={img4} />
                <Servicio titulo='Derecho corporativo' img={img5} />
                <Servicio titulo='Juzgado de polocía local' img={img6} />
            </div>

        </div>
    )
}

function Abogados() {
    return (
        <div className="row col-12 d-flex justify-content-center mb-5">
            <h2 className="col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 mb-5 h1" style={{ color: '#4DA6BE' }}>Abogados</h2>
            <div className="row d-flex flex-column flex-lg-row col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 justify-content-around">
                <div className="col-12 col-lg-3 d-flex flex-column flex-md-row mb-4 flex-lg-column">
                    <Image src={imgAbodado1} className="m-auto mb-4" style={{ objectFit: 'cover', height: '320px', width: '220px', borderRadius: '100px' }} />
                    <div className="d-flex m-auto flex-column col-12 col-sm-8 col-md-6 col-lg-12  justify-content-center align-items-center">
                        <h2 className="col-12 h4 mb-2 text-center">Claudio Saavedra</h2>
                        <p className="col-12" style={{ textAlign: 'justify' }}>
                            lorem ipsum dolor sit amter lorem ipsum dolor sit amter
                            lorem ipsum dolor sit amter lorem ipsum dolor sit amter
                        </p>
                    </div>
                </div>
                <div className="col-12 col-lg-3 d-flex flex-column flex-md-row mb-4 flex-lg-column ">
                    <Image src={imgAbodado2} className="m-auto mb-4" style={{ objectFit: 'cover', height: '320px', width: '220px', borderRadius: '100px' }} />
                    <div className="d-flex m-auto flex-column col-12 col-sm-8 col-md-6 col-lg-12  justify-content-center align-items-center">
                        <h2 className="col-12 h4 mb-2 text-center">Daniela Astorga</h2>
                        <p className="col-12" style={{ textAlign: 'justify' }}>
                            lorem ipsum dolor sit amter lorem ipsum dolor sit amter
                            lorem ipsum dolor sit amter lorem ipsum dolor sit amter
                        </p>
                    </div>
                </div>
                <div className="col-12 col-lg-3 d-flex flex-column flex-md-row mb-4 flex-lg-column ">
                    <Image src={imgAbodado3} className="m-auto mb-4" style={{ objectFit: 'cover', height: '320px', width: '220px', borderRadius: '100px' }} />
                    <div className="d-flex m-auto flex-column col-12 col-sm-8 col-md-6 col-lg-12  justify-content-center align-items-center">
                        <h2 className="col-12 h4 mb-2 text-center">Daniela Portales</h2>
                        <p className="col-12" style={{ textAlign: 'justify' }}>
                            lorem ipsum dolor sit amter lorem ipsum dolor sit amter
                            lorem ipsum dolor sit amter lorem ipsum dolor sit amter
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default function HomePage() {
    return (
        <div className="containter mx-0">
            <Portada />
            <Servicios />
            <Abogados />

        </div>
    )
}
