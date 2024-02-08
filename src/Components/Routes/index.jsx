import React from 'react';
import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';

import Forms from '../Forms/Basic';
import Conditions from '../Conditions/Login';
import Lists from '../Lists/JobSeekers';
import Event from '../Events/ButtonCounter';
import Durga from '../Durga';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/forms">Forms</Link>
            </li>
            <li>
              <Link to="/conditions">Conditions</Link>
            </li>
            <li>
              <Link to="/lists">Lists</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
          </ul>
        </nav>

        <hr />
<Routes>
        <Route  path="/forms" element={<Forms></Forms>} />
        <Route path="/conditions" element={<Conditions></Conditions>} />
        <Route path="/lists" element={<Lists></Lists>} />
        <Route path="/events" element={<Event></Event>} />
        <Route path="/ashok" element={<Durga></Durga>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
