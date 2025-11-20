import { HomeLayout } from './pages/Layout/HomeLayout';
import ClientHomePage from './pages/ClientDashboard/ClientHomePage';
import ClientLogin from './pages/Auth/ClientLogin';
import ClientSignup from './pages/Auth/ClientSignup';
import AdminLogin from './pages/Auth/AdminLogin';
import AdminSignup from './pages/Auth/AdminSignup';
import AdminHomeLayout from './pages/Layout/AdminHomeLayout';
import AdminHomePage from './pages/Admin/AdminHomePage';
import { Route, Routes } from 'react-router-dom';
import ClientLandingPage from './LandingPage/ClientLandingPage';

function App() {


  return (

    <>
      <Routes>

        {/* 🟦 Public / Client Auth Routes */}
        <Route path="/login" element={<ClientLogin />} />
        <Route path="/signup" element={<ClientSignup />} />
        <Route path="l" element={<ClientLandingPage />} />
        


        {/* 🟦 Admin Auth */}
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminsignup" element={<AdminSignup />} />

        {/* 🟩 Client Dashboard Layout */}
        <Route path="/home" element={<HomeLayout />}>
          <Route index element={<ClientHomePage />} />


        </Route>

        {/* 🟥 Admin Dashboard Layout */}
        <Route path="/adminhome" element={<AdminHomeLayout />}>
          <Route index element={<AdminHomePage />} />

        </Route>

      </Routes>
    </>
  )
}

export default App
