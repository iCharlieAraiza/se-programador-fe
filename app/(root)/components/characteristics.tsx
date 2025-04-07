
const Characteristics = () => {
    const characteristics = [
        {
        title: "Programa gratuito y de código abierto",
        description: "Todo el contenido es totalmente gratuito, incluida la plataforma. Si deseas colaborar, accede al repositorio de GitHub."
        },
        {
        title: "Tutoriales y guías en video",
        description: "Tambien contamos con videos en los que se explican los distintos temas "
        },
        {
        title: "Registra tus progresos",
        description: "En la plataforma podrás guardar los contenidos y tus avances "
        }
    ]

  return (
    <section>
        <div className="max-w-6xl mx-auto p-4">
            <h2 className='text-3xl font-semibold tracking-tight'>
                Características
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
                {
                    characteristics.map((characteristic, index) => (
                        <CharacteristicItem key={`${index}-element`} title={characteristic.title} description={characteristic.description} />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

const CharacteristicItem = ({ title, description }: { title: string, description: string }) => {
    return (
        <div className="my-4">
            <h3 className='text-xl font-semibold'>{title}</h3>
            <p className="my-2">{description}</p>
        </div>
    )
}


export default Characteristics