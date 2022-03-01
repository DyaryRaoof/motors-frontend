import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import ReserveForm from './components/Reservation/ReserveForm';
import Reservation from './components/Reservation/Reservation';
// import Navigation from './Navigation';
import DetailPage from './components/DetailPage/DetailPage';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reserve" element={<ReserveForm />} />
        <Route path="/reservations" element={<Reservation />} />
        <Route path="/Detail/:id" element={<DetailPage />} />
      </Routes>
      {/* <Navigation /> */}
    </div>
  );
}

export default App;
