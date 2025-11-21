import { Routes, Route } from "react-router-dom";
import App from "./App";
import PrivacyPolicyPage from "./components/PrivacyPolicyPage";
import ParentalAppPrivacyPolicyPage from "./components/ParentalAppPrivacyPolicyPage";
import DownloadModal from "./components/DownloadModal";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/privacy" element={<ParentalAppPrivacyPolicyPage />} />
      <Route path="/privacy.html" element={<ParentalAppPrivacyPolicyPage />} />
      <Route path="/kids" element={<DownloadModal onClose={() => {}} />} />
      <Route path="/kids/privacy" element={<PrivacyPolicyPage />} />
      <Route path="/kids/terms" element={<PrivacyPolicyPage />} />
      <Route path="/kids/terms.html" element={<PrivacyPolicyPage />} />
      <Route path="/kids/privacy.html" element={<PrivacyPolicyPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

// 404 Page
function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

export default AppRoutes;
