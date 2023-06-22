import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DoctorComp from './Componants/DoctorComp';
import AmbulanceComp from './Componants/AmbulanceComp';
import RoomComp from './Componants/RoomComp';
import DischargeComp from './Componants/DischargeComp';
import ApointmentComp from './Componants/ApointmentComp';
import AboutComp from './Componants/AboutComp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeComp from './Componants/HomeComp';
import FooternewComp from './Componants/FooternewComp';
import NavbarnewComp from './Componants/NavbarnewComp';
import AdminComp from './Componants/AdminComp';




function App() {
  return (
    <>

      <Router >
        <NavbarnewComp />

        <Routes>
          <Route path='/' element={<HomeComp />}></Route>
          <Route path='/homeComp' element={<HomeComp />}></Route>
          <Route path='/aboutComp' element={<AboutComp />}></Route>
          <Route path='/apointmentComp' element={<ApointmentComp />}></Route>
          <Route path='/dischargeComp' element={<DischargeComp />}></Route>
          <Route path='/ambulanceComp' element={<AmbulanceComp />}></Route>
          <Route path='/doctorComp' element={<DoctorComp />}></Route>
          <Route path='/roomComp' element={<RoomComp />}></Route>
          <Route path='/adminComp' element={<AdminComp />}></Route>




        </Routes>
        <FooternewComp />
      </Router>
    </>
  );
}

export default App;
