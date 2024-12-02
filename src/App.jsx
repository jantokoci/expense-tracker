import { Routes, Route, BrowserRouter } from 'react-router'
import ExpenseTracker from "./page/ExpenseTracker";
import Welcome from './page/Welcome';


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Welcome />} />
        <Route path='/app' element={<ExpenseTracker />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App