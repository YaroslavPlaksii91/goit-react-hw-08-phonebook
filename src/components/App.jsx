import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppBar from './AppBar';
import SignUp from './views/SignUpView';
import SignIn from './views/SignInView';
import ContactsView from './views/ContactsView';
import { authOperations } from 'redux/auth';
import { ProtectedRoute } from './ProtectedRoute';
import { PublicRoute } from './PublicRoute';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <AppBar />
      <Routes>
        <Route
          path="/register"
          element={
            <PublicRoute redirectPath={'/contacts'}>
              <SignUp />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute redirectPath={'/contacts'}>
              <SignIn />
            </PublicRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <ProtectedRoute redirectPath={'/login'}>
              <ContactsView />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/register" />} />
      </Routes>
    </div>
  );
};

export default App;
