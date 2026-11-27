import type { ReactNode } from 'react';
import Header from '../layout/Header';

interface DashboardLayoutProps {
  children?: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-[var(--surface-page)] text-[var(--ink-primary)]">
      <Header />
      <main className="py-12">{children}</main>
    </div>
  );
};

export default DashboardLayout;
