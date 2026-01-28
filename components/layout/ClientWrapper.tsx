'use client';

import { ReactNode } from 'react';
import ScrollProgress from '@/components/ui/ScrollProgress';

export default function ClientWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <ScrollProgress />
      {children}
    </>
  );
}
