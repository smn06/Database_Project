import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Appointment from './pages/Appointment/Appointment';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import RequireAuth from './pages/Login/RequireAuth';
import Signup from './pages/Login/Signup';
import Navbar from './pages/Shared/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard/Dashboard';
import MyAppointments from './pages/Dashboard/MyAppointments';
import Myreview from './pages/Dashboard/Myreview';
import Users from './pages/Dashboard/Users';
import RequireAdmin from './pages/Dashboard/RequireAdmin';
import AddDoctor from './pages/Dashboard/AddDoctor';
import ManageDoctor from './pages/Dashboard/ManageDoctor';

function App() {
  return (
    <div >
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>

        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        }></Route>


        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>

          <Route index element={<MyAppointments />}></Route>

          <Route path='review' element={<Myreview />}></Route>

          <Route path='users' element={<RequireAdmin>
            <Users />
          </RequireAdmin>}></Route>

          <Route path='addDoctor' element={<RequireAdmin>
            <AddDoctor />
          </RequireAdmin>}></Route>

          <Route path='manageDoctor' element={<RequireAdmin>
            <ManageDoctor></ManageDoctor>
          </RequireAdmin>}></Route>

        </Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
