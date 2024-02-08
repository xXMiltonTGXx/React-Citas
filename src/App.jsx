
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'

function App() { 

  const btnPulsar = () => {
    alert('Botón pulsado');
  }
  return (
    <div className='container mx-auto mt-20'>
      <Header/>
      <div className='mt-12 md:flex '>
        <Formulario/>
        <ListadoPacientes/>
      </div>
      
      <button className='text-indigo-50 bg-gray-700' onClick={btnPulsar}>Pulsar</button>
    </div>
  )
}

export default App
