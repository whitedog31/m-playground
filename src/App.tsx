import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  TestPage,
  UploadPage,
  NotFoundPage,
  ProjectDetailPage,
  TokenPage,
} from './pages';
import GlobalStyle from './styles/global-styles';
import { BasicLayout } from './layouts';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<BasicLayout />}>
        <Route path="" element={<TestPage />} />
        <Route path="upload" element={<UploadPage />} />
        <Route path="token-test" element={<TokenPage />} />
        <Route path="project/:id" element={<ProjectDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
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
