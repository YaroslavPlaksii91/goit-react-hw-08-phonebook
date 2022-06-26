import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Skeleton } from '@mui/material';
import AppBar from './AppBar';
import { authOperations, authSelectors } from 'redux/auth';
import { ProtectedRoute } from './ProtectedRoute';
import { PublicRoute } from './PublicRoute';

const SignUp = lazy(() =>
  import('./views/SignUpView' /* webpackChunkName: "sign-up" */),
);
const SignIn = lazy(() =>
  import('./views/SignInView' /* webpackChunkName: "sign-in" */),
);
const ContactsView = lazy(() =>
  import('./views/ContactsView' /* webpackChunkName: "contacts" */),
);

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      {isFetchingCurrentUser ? (
        <Skeleton
          animation={'wave'}
          variant="rectangular"
          width={300}
          height={200}
        />
      ) : (
        <>
          <AppBar />
          <Suspense fallback={<p>Download...</p>}>
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
          </Suspense>
        </>
      )}
    </div>
  );
};

export default App;
