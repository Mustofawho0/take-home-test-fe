import { SidebarDashboard } from '@/components/sidebar';
import * as React from 'react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className='grid grid-cols-12 min-h-screen'>
      <div className='col-span-2 lg:col-span-1'>
        <SidebarDashboard />
      </div>
      <div className='col-span-10 lg:col-span-11 h-[100vh] overflow-auto p-6'>
        {children}
      </div>
    </div>
  );
}
