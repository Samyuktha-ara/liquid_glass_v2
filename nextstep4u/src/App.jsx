import { Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './sections/Footer';
import mockData from './data/mockData.json';
import iconMap from './data/iconMap';
import HomePage from './pages/HomePage';
import FeaturesPage from './pages/FeaturesPage';
import CoursesPage from './pages/CoursesPage';
import WhyUsPage from './pages/WhyUsPage';
import TestimonialsPage from './pages/TestimonialsPage';
import GetStartedPage from './pages/GetStartedPage';

const footerSocialLinks = mockData.footer.socialLinks.map((s) => ({
  ...s,
  icon: iconMap[s.icon],
}));

function Layout() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer links={mockData.footer.links} socialLinks={footerSocialLinks} />
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/get-started" element={<GetStartedPage />} />
        </Route>
      </Routes>
    </>
  );
}
