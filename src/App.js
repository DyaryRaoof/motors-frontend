import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import ReserveForm from './components/Reservation/ReserveForm';
import Reservation from './components/Reservation/Reservation';
import Navigation from './Navigation';

function App() {
  return (
    <div>
      <Navbar key="1" />

      <Routes key="2">
        <Route path="/" element={<Main key="3" />} />
        <Route path="/reserve" element={<ReserveForm key="4" />} />
        <Route path="/reservations" element={<Reservation key="5" />} />
      </Routes>
      <Navigation />
    </div>
  );
}

export default App;
