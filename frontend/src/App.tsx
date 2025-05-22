import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import { AuthProvider } from './contexts/AuthContext_1';
import { ContentProvider } from './contexts/ContentContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <ContentProvider>
          <AppRoutes />
        </ContentProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
