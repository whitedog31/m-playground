import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, NotFoundPage, ProjectDetailPage } from './pages';
import NotFound from './pages/NotFoundPage';
import GlobalStyle from './styles/global-styles';
import { BasicLayout } from './layouts';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<BasicLayout />}>
        <Route path="" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="project/:id" element={<ProjectDetailPage />} />
      </Route>
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  );
}
