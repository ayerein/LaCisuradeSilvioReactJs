import { Link } from "react-router-dom"


const MenuNav = () => {

    return(
        <header>
            <nav className="contenedor-menu">
                <div className="contenedor-logo">
                    
                    <Link to='/'>
                    <img src='../assets/img/logo-blanco.png' alt="logo de La Cisura de Silvio" />
                    </Link>
                </div>
                <ul className="contenedor-nav">
                    <Link to='/'>
                    <p>Inicio</p>
                    </Link>
                    <Link to='bio'>
                    <p>Bio</p>
                    </Link>
                    <Link to='discos'>
                    <p>Discos</p>
                    </Link>
                    <Link to='contacto'>
                    <p>Contacto</p>
                    </Link>
                    <Link to='tienda'>
                    <p>Tienda</p>
                    </Link>
                    <Link to='administrador'>
                    <p>Administrador</p>
                    </Link>
                </ul>


            </nav>
        </header>
    )

}

export default MenuNav