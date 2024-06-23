import { Container } from 'react-bootstrap'
import './App.css'
import Header from './component/Header'
import TaskContainer from './component/TaskContainer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
    <Container>
      <Header />
      <TaskContainer />
    </Container>
      
    </>
  )
}

export default App
