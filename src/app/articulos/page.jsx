import Image from "next/image"
import Link from "next/link"
import img1 from '../../media/img_abogados_1.jpg'

export default function Articulos() {
    return (
        <div className="container-fluid">
            <h2 className="col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 m-auto my-5">Artículos de opinión</h2>
            <div className="row col-10 col-sm-8 col-md-10 col-lg-11 col-xl-9 m-auto d-flex flex-column flex-md-row justify-content-between">
                {/* articulo 1 */}
                <div className="d-flex col-12 col-md-4 mb-3">
                    <Link className="col-12 col-md-11 m-start" href="/articulos/articulo-01" style={{ textDecoration: 'none', color: 'black' }}>
                        <Image src={img1} className='w-100 mb-1 rounded' style={{ height: '200px', objectFit: 'cover' }} alt='...'></Image>
                        <h4 className='h4' style={{ textAlign: 'justify' }}>Suplementos indicados para cada deporte</h4>
                        <p className='' style={{ textAlign: 'justify' }}>
                            El uso de suplementos deportivos puede generar un gran auamento en el rendimiento,
                            pero debemos considerar utilizar el suplemento correcto para la disciplina indicada...
                        </p>
                        <p className=''>Ver más</p>
                    </Link>
                </div>
                {/* articulo 2 */}
                <div className="d-flex col-12 col-md-4 mb-3">
                    <Link className="col-12 col-md-11 m-start" href="/articulos/articulo-01" style={{ textDecoration: 'none', color: 'black' }}>
                        <Image src={img1} className='w-100 mb-1 rounded' style={{ height: '200px', objectFit: 'cover' }} alt='...'></Image>
                        <h4 className='h4' style={{ textAlign: 'justify' }}>Suplementos indicados para cada deporte</h4>
                        <p className='' style={{ textAlign: 'justify' }}>
                            El uso de suplementos deportivos puede generar un gran auamento en el rendimiento,
                            pero debemos considerar utilizar el suplemento correcto para la disciplina indicada...
                        </p>
                        <p className=''>Ver más</p>
                    </Link>
                </div>
                {/* articulo 3 */}
                <div className="d-flex col-12 col-md-4 mb-3">
                    <Link className="col-12 col-md-11 m-start" href="/articulos/articulo-01" style={{ textDecoration: 'none', color: 'black' }}>
                        <Image src={img1} className='w-100 mb-1 rounded' style={{ height: '200px', objectFit: 'cover' }} alt='...'></Image>
                        <h4 className='h4' style={{ textAlign: 'justify' }}>Suplementos indicados para cada deporte</h4>
                        <p className='' style={{ textAlign: 'justify' }}>
                            El uso de suplementos deportivos puede generar un gran auamento en el rendimiento,
                            pero debemos considerar utilizar el suplemento correcto para la disciplina indicada...
                        </p>
                        <p className=''>Ver más</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}