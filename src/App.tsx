import { Navbar } from "./components"
import { Title } from "./components/Title"
import Weather from "./components/Weather/Weather"


function App() {

  return (
    <div>
      <Navbar/>
      <div className="flex flex-col  justify-center items-center h-screen">
        <Title text="Weather App" className="text-3xl my-10 font-bold underline text-center text-[#fffb00]"/>
        <Weather/>
      </div>
    </div>
  )
}
export default App
