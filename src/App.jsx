
import './App.css'

import AnaliticsChart from './components/Admin/AnaliticsChart';
import { KPIDashboard } from './components/Admin/KPICardsDashBord';

function App() {


  return (
    <>
    <div>
      <KPIDashboard />
    </div>
      <div>
        <AnaliticsChart />
      </div>

    </>

  )
}

export default App
