import logo from './logo.svg'
import './index.css'
import Footer from './Components/LayoutComponent/Footer'
import Topbar from './Components/LayoutComponent/Topbar'
import ControlCard from './Components/ControlCard'

function App() {
  const titleArray = ['banking', 'logistic', 'e-commerce', 'computer']
  return (
    <div>
      <Topbar appTitle="สวัสดี" />
      {titleArray.map((titleElement) => (
        <ControlCard title={titleElement} />
      ))}

      <Footer />
    </div>
  )
}

export default App
