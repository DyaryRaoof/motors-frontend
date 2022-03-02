import { useState } from 'react';
import loginUser from '../api/login';

const Navbar = () => {
  const [userName, setUserName] = useState('');
  const [loginReponse, setLoginReponse] = useState('');

  const handlSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser({ name: userName });
    if (!response.error) {
      setLoginReponse('User created and logged in');
    } else if (response.user) {
      setLoginReponse('User logged in successfully');
    } else {
      setLoginReponse(response.error.name);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/#">Motors</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/#">Motorcycles</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">Reserve</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/#">My Reservations</a>
            </li>
          </ul>
          <div>
            <form className="d-flex" onSubmit={handlSubmit}>
              <input className="form-control me-2 rounded-pill" type="search" placeholder="UserName" aria-label="Search" onChange={(e) => setUserName(e.target.value)} value={userName} />
              <button className="btn btn-outline-success rounded-pill" type="submit">Login</button>
            </form>
            <div>{loginReponse}</div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
