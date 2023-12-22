import { routes } from './configs.jsx/routes';
import { Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import TripDetail from './routes/TripDetail';
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            !route.layout ? (
              route.component
            ) : (
              <AppLayout>{route.component}</AppLayout>
            )
          }
        />
      ))}
      <Route
        path='trips/:id'
        element={
          <AppLayout>
            <TripDetail />
          </AppLayout>
        }
      />
      <Route path='/' element={<Navigate to='/login' />} />
    </Routes>
  );
}

export default App;
