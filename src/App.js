import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './routes/routes';
import SiderDemo from './components/sidebar';
import { UserProvider } from './helper/UserContext';

function App() {
  return (
    <UserProvider>
      <Router>
        <SiderDemo>
          <Routes>
            {routes.map((route, idx) => (
              <Route
                key={idx}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </SiderDemo>
      </Router>
    </UserProvider>
  );
}

export default App;
