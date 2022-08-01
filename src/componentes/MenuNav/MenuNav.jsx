import { Link } from "react-router-dom"


const MenuNav = () => {

    return(
        <header>
            <nav className="contenedor-menu">
                <div className="contenedor-logo">
                    
                    <Link to='/'>
                    <img src="https://drive.google.com/uc?id=18ZTdD2YbSmQhRJDOr8Kgixw5C0KQYroM" alt="logo de la banda" />
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
                    <Link to='ingreso'>
                    <img className="imagen-usuario" src="https://drive.google.com/uc?id=1I020Bn8ztEdRx8aS1d2ET90pA6V028Za" alt="" />
                    </Link>
                </ul>


            </nav>
        </header>
    )

}

export default MenuNav