
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Temperature from './components/temperature/Temperature';
import Co2 from './components/co2/Co2';
import Methane from './components/methane/Methane';
import NitrousOxide from './components/nitrousOxide/NitrousOxide';
import PolarIce from './components/polarIce/PolarIce';
import styles from './components/home/home.module.css';

import { BrowserRouter, Routes, Route,  } from 'react-router-dom';


function App() {
  return (
    <div className={styles.appPage}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='temperature' element={<Temperature />} />
          <Route path='co2' element={<Co2 />} />
          <Route path='methane' element={<Methane />} />
          <Route path='nitrousOxide' element={<NitrousOxide />} />
          <Route path='polarIce' element={<PolarIce />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
