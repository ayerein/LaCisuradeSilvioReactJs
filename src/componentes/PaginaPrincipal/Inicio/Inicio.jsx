

const Inicio = () => {
    return(
        <main>
            <div className="imagen-fondo-inicio"></div>

            <div className="contenedor-videos">

                <h2 className="titulo-videos">Videos</h2>

                <div className="video">
                    <iframe src="https://www.youtube.com/embed/iyxd81IngI8" title="YouTube video player"></iframe>
                </div>

                

                <div className="contenedor-parrafo">
                    <p>
                        Aunque me falte la voz es la canción inicial de nuestro primer disco "Trece" en este caso les dejamos nuestro primer video clip oficial grabado en vivo en El Nacional el 26 de diciembre de 2015.
                    </p>
                    <a href="https://www.youtube.com/c/LaCisuradeSilvioRnR/videos" target="_blank" rel="noopener noreferrer">Ver más videos</a>
                </div>

            </div>

            <div className="contenedor-integrantes-fondo">
                <div className="contenedor-integrantes">
                    <h3 className="titulo-integrantes">Integrantes</h3>
                    <p className="nombres-integrantes">Matias Miglioretti<br />Maximiliano Mercado<br />Damian Aguero<br />Patricio Tordó<br />Bernardo Banegas<br />Nicolas Pinco<br />Juan Casih<br />Leandro Vaquero Diaz<br />Matias Recouso</p>
                    <p className="instrumentos-integrantes">Guitarra y voz.<br />Guitarra y coros.<br />Bajo.<br />Saxo alto.<br />Saxo tenor.<br />Trompeta.<br />Bateria.<br />Teclado.<br />Armonica.</p>
                </div>
            </div>
        </main>
    )
}

export default Inicio

