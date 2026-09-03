import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import HorsePage from './pages/HorsePage';
import DonationsPage from './pages/DonationsPage';
import ReportPage from './pages/ReportPage';

type Route =
  | { page: 'home'; scrollTarget?: string }
  | { page: 'horse'; id: string }
  | { page: 'donations' }
  | { page: 'report'; id: string };

export default function App() {
  const [route, setRoute] = useState<Route>({ page: 'home' });

  function navigate(page: string, id?: string, section?: string) {
    window.scrollTo({ top: 0 });
    if (page === 'home') {
      setRoute({ page: 'home', scrollTarget: section });
    } else if (page === 'horse' && id) {
      setRoute({ page: 'horse', id });
    } else if (page === 'donations') {
      setRoute({ page: 'donations' });
    } else if (page === 'report' && id) {
      setRoute({ page: 'report', id });
    }
  }

  // Reset scroll on route change (except home with section target)
  useEffect(() => {
    if (route.page !== 'home' || !('scrollTarget' in route && route.scrollTarget)) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [route]);

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Nav navigate={navigate} currentPage={route.page} />

      <main className="flex-1">
        {route.page === 'home' && (
          <HomePage navigate={navigate} scrollTarget={route.scrollTarget} />
        )}
        {route.page === 'horse' && (
          <HorsePage horseId={route.id} navigate={navigate} />
        )}
        {route.page === 'donations' && (
          <DonationsPage navigate={navigate} />
        )}
        {route.page === 'report' && (
          <ReportPage reportId={route.id} navigate={navigate} />
        )}
      </main>

      <Footer navigate={navigate} />
    </div>
  );
}
