import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import loginUser from '../api/login';
import { getUserSuccess } from '../redux/users/users';

const Navbar = () => {
  const [userName, setUserName] = useState('');
  const [loginReponse, setLoginReponse] = useState('');
  const dispach = useDispatch();

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

    dispach(getUserSuccess(response.user));
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
              <Link to="/" className="nav-link active">Motorcycles</Link>
            </li>
            <li className="nav-item">
              <Link to="/reserve" className="nav-link">Reserve</Link>
            </li>

            <li className="nav-item">
              <Link to="/reservations" className="nav-link">Reservations</Link>
            </li>
          </ul>
          <div>
            <form className="d-flex align-items-center" onSubmit={handlSubmit}>
              <input className="form-control me-2 rounded-pill m-0" type="search" placeholder="UserName" aria-label="Search" onChange={(e) => setUserName(e.target.value)} value={userName} />
              <button className="btn btn-outline-success rounded-pill" type="submit">Login</button>
            </form>
            {loginReponse ? <div className="text-start ms-2">{loginReponse}</div> : null}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
