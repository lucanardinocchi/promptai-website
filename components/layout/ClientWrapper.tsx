'use client';

import { ReactNode } from 'react';
import Cursor from '@/components/ui/Cursor';
import ScrollProgress from '@/components/ui/ScrollProgress';

export default function ClientWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <Cursor />
      <ScrollProgress />
      {children}
    </>
  );
}
