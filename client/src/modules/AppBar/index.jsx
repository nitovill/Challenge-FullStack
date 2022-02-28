import React from "react";

const AppBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="http://localhost:3000">
          Operaciones
        </a>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Todos
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="https://www.google.com.ar">
                    Todos
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="http://localhost:3000/crear"
                  >
                    Ingresos
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Egresos
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <a href="http://localhost:3000/crear">
        <button type="button" className="btn btn-primary">
          Nuevo
        </button>
      </a>
    </nav>
  );
};

export default AppBar;
