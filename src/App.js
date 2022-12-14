import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Contacts from './redux/components/Contacts';
import Edit from './redux/components/Contacts/Edit';
import Error from './redux/components/Error';

function App() {
  return (
    <div className="App">
      <div id='container'>
        <Router>
          <Routes>
            <Route exact path="/" element={<Contacts />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
