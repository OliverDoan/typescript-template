import { About } from '@components/About'
import Slider from '@components/Slider'
import Title from '@components/Title'
import Logo from './assets/images/logo.png'

import '@styles/app.scss'
function App() {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-7'>
            <Slider />
          </div>
          <div className='col-5'>
            <div className='form-container'>
              <form action='' className='form-control'>
                <div className='title'>
                  <div className='img'>
                    <img src={Logo} alt='logo' />
                  </div>
                  <h1 className='title'>Đăng ký tài khoản</h1>
                  <p>
                    <span>Hoặc</span>
                    <a href=''>Đăng nhập</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
