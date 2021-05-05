import logo from './logo.svg'
import './index.css'

import Topbar from './Components/Topbar'
import Footer from './Components/Footer'
function App() {
  return (
    <div>
      <Topbar />
      <div className="container min-h-screen"></div>
      <Footer />
    </div>
  )
}

export default App
