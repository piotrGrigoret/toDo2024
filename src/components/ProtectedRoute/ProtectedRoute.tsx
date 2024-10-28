import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';

interface ProtectedRouteProps {
    isAllowed: boolean; 
    redirectPath?: string; 
    children: ReactNode; 
  }

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAllowed, redirectPath = '/', children }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;



