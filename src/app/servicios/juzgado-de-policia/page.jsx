
export default function JuzgadoDePolicia() {
    return (
        <div className="container-fluid" style={{ minHeight: '500px' }}>
            <h2 className="col-10 col-sm-8 col-md-10 col-lg-11 col-xl-7 m-auto my-5">Juzgado de Policía Local</h2>
            <div className="col-10 col-sm-8 col-md-10 col-lg-11 col-xl-7 m-auto d-flex flex-column">
                <p style={{ textAlign: 'justify' }}>
                    <b>Infracciones de tránsito: </b>
                    Tramitación de causas relacionadas con multas de tránsito, suspensión de licencias, y otros asuntos viales.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <b>Infracciones municipales: </b>
                    Multas por incumplimiento de ordenanzas municipales, construcción sin permisos, ruidos molestos, etc.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <b>Defensa del consumidor: </b>
                    Litigios relacionados con la Ley del Consumidor, como venta de productos defectuosos, incumplimientos
                    contractuales por parte de proveedores, etc.
                </p>
                <p style={{ textAlign: 'justify' }}>
                    <b>Delitos menores: </b>
                    Tramitación de causas por delitos menores que son de competencia de los Juzgados
                    de Policía Local, como hurto o daños a la propiedad.
                </p>
            </div>
        </div>
    )
}