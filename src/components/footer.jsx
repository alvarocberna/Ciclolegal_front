import Image from "next/image"
import Ig from '../media/img_instagram.png'
import Wtsp from '../media/img_whatsapp.png'
import Mail from '../media/img_correo.png'

export default function Footer() {
    return (
        <div className="col-12 mt-5 py-5" style={{ background: '#4DA6BE' }} id="contacto">
            <div className="col-10 m-auto my-3 d-flex justify-content-center mb-4">
                <p className="h3 text-white">Contacto</p>
            </div>
            <div className="col-11 col-sm-8 col-md-12 col-lg-12 col-xl-10 m-auto my-3 d-flex flex-column flex-md-row justify-content-center">
                <a className="col-12 col-md-3 mb-3 d-flex flex-row flex-md-column flex-xl-row align-items-center  justify-content-center"
                    href="mailto:contacto@CicloLegal.cl" target='_blank' rel='noreferrer' style={{ textDecoration: 'none' }}>
                    <Image className=" me-2 mb-2" src={Mail} style={{ height: '40px', width: '40px' }}></Image>
                    <p className="mb-0 h5 fw-semibold text-white mb-2 ">
                        Contacto@CicloLegal.cl
                    </p>
                </a>
                <a className="col-12 col-md-3 mb-3 d-flex flex-row flex-md-column flex-xl-row align-items-center  justify-content-center"
                    href="https://api.whatsapp.com/send?phone=56951152534" target='_blank' rel='noreferrer' style={{ textDecoration: 'none' }}>
                    <Image className=" me-2 mb-2" src={Wtsp} style={{ height: '40px', width: '40px' }}></Image>
                    <p className="mb-0 h5 fw-semibold text-white  mb-2">
                        +569 5115 2534
                    </p>
                </a>
                <a className="col-12 col-md-3 mb-3 d-flex flex-row flex-md-column flex-xl-row align-items-center  justify-content-center"
                    href="https://www.instagram.com/ciclolegal.cl/" target='_blank' rel='external' style={{ textDecoration: 'none' }}>
                    <Image className=" me-2 mb-2" src={Ig} style={{ height: '40px', width: '40px' }}></Image>
                    <p className="mb-0 h5 fw-semibold text-white  mb-2">
                        Ciclolegal.cl
                    </p>
                </a>
            </div>

        </div>
    )
}