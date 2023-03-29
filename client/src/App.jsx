import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './pages/home/Home';
import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';
import { Single } from './pages/single/Single';
import { Write } from './pages/write/Write';

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Layout />}>
                  <Route path='' element={<Home />} />
                  <Route path='post/:id' element={<Single />} />
                  <Route path='write' element={<Write />} />
              </Route>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
