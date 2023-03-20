import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './pages/home/Home';
import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
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
                  <Route path='post/:id' element={<Home />} />
                  <Route path='write' element={<Home />} />
              </Route>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
