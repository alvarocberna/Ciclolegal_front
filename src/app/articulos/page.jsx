import Image from "next/image"
import Link from "next/link"
import img1 from '../../media/img_articulo_1.jpg'
import img2 from '../../media/img_articulo_2.jpg'
import img3 from '../../media/img_articulo_3.jpg'

export default function Articulos() {
    return (
        <div className="container-fluid">
            <h2 className="col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 m-auto my-5">Artículos de opinión</h2>
            <div className="row col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 m-auto d-flex flex-column flex-md-row justify-content-between">
                {/* articulo 1 */}
                <div className="d-flex col-12 col-md-6 mb-3">
                    <Link className="col-12 col-md-11 m-start" href="/articulos/articulo-01" style={{ textDecoration: 'none', color: 'black' }}>
                        <Image src={img1} className='w-100 mb-1 rounded' style={{ height: '200px', objectFit: 'cover' }} alt='...'></Image>
                        <h4 className='h4' style={{ textAlign: 'justify' }}>
                            La necesidad de dotar a los emprendedores con conocimientos legales y
                            laborales para fomentar la estabilidad empresarial
                        </h4>
                        <p className='' style={{ textAlign: 'justify' }}>
                            Por Claudio Saavedra
                        </p>
                        <p className=''>Ver más</p>
                    </Link>
                </div>
                {/* articulo 2 */}
                <div className="d-flex col-12 col-md-6 mb-3">
                    <Link className="col-12 col-md-11 m-start" href="/articulos/articulo-02" style={{ textDecoration: 'none', color: 'black' }}>
                        <Image src={img2} className='w-100 mb-1 rounded' style={{ height: '200px', objectFit: 'cover' }} alt='...'></Image>
                        <h4 className='h4' style={{ textAlign: 'justify' }}>
                            Crisis de seguridad pública en Chile: ¿Qué podemos hacer como ciudadanos?
                        </h4>
                        <p className='' style={{ textAlign: 'justify' }}>
                            Por Daniela Astorga
                        </p>
                        <p className=''>Ver más</p>
                    </Link>
                </div>
                {/* articulo 3 */}
                <div className="d-flex col-12 col-md-6 mb-3">
                    <Link className="col-12 col-md-11 m-start" href="/articulos/articulo-03" style={{ textDecoration: 'none', color: 'black' }}>
                        <Image src={img3} className='w-100 mb-1 rounded' style={{ height: '200px', objectFit: 'cover' }} alt='...'></Image>
                        <h4 className='h4' style={{ textAlign: 'justify' }}>
                            Formas de resolución de conflictos en Chile y La Mediación
                        </h4>
                        <p className='' style={{ textAlign: 'justify' }}>
                            Por Daniela Portales
                        </p>
                        <p className=''>Ver más</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}