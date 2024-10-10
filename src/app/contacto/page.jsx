import Image from "next/image"
import Wtsp from '../media/img_whatsapp.png'
import Mail from '../media/img_correo.png'
import "../globals.css";

export default function Contacto() {
    return (
        <div className="container-fluid">
            <h2 className="col-10 col-sm-8 col-md-10 col-lg-11 col-xl-7 m-auto my-5">Contacto</h2>
            <div className="row col-10 col-sm-8 col-md-10 col-lg-11 col-xl-7 m-auto d-flex flex-column flex-md-row">
                <div className="m-auto col-12 d-flex align-items-center mb-3 justify-content-center py-4 boxConSty"
                    style={{ border: '1px solid #D5DFFF', borderRadius: '15px 15px 15px 15px', color: '#00485C' }}>
                    <Image src={Mail} className="me-2" style={{ width: '30px', height: '30px' }}></Image>
                    <p className="mb-0 h5">contacto@ciclolegal.cl</p>
                </div>
                <a className="m-auto col-12 d-flex align-items-center mb-3 justify-content-center py-4 boxConSty" target="_blank"
                    style={{ border: '1px solid #D5DFFF', borderRadius: '15px 15px 15px 15px', color: '#00485C', textDecoration: 'none' }}
                    href="https://api.whatsapp.com/send?phone=56951152534">
                    <Image src={Wtsp} className="me-2" style={{ width: '30px', height: '30px' }}></Image>
                    <p className="mb-0 h5">Claudio Saavedra +56951152534</p>
                </a>
                <a className="m-auto col-12 d-flex align-items-center mb-3 justify-content-center py-4 boxConSty" target="_blank"
                    style={{ border: '1px solid #D5DFFF', borderRadius: '15px 15px 15px 15px', color: '#00485C', textDecoration: 'none' }}
                    href="https://api.whatsapp.com/send?phone=56987828670">
                    <Image src={Wtsp} className="me-2" style={{ width: '30px', height: '30px' }}></Image>
                    <p className="mb-0 h5">Daniela Portales +56987828670</p>
                </a>
                <a className="m-auto col-12 d-flex align-items-center mb-3 justify-content-center py-4 boxConSty" target="_blank"
                    style={{ border: '1px solid #D5DFFF', borderRadius: '15px 15px 15px 15px', color: '#00485C', textDecoration: 'none' }}
                    href="https://api.whatsapp.com/send?phone=56975465991">
                    <Image src={Wtsp} className="me-2" style={{ width: '30px', height: '30px' }}></Image>
                    <p className="mb-0 h5">Daniela Astorga +56975465991</p>
                </a>
            </div>
        </div>
    )
}