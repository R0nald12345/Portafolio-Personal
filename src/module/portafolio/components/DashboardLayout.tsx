import type { ReactNode } from 'react';
import Header from '../layout/Header';

interface DashboardLayoutProps {
  children?: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <Header />
      <main className="pt-20">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
