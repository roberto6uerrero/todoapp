import { TaskProvider } from './context/taskContext'
import {Router} from './routes/Router'

function App() {
  return (
    <TaskProvider>
      <Router />
    </TaskProvider>
  )
}

export default App

