'use client';

import { Suspense } from 'react';
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import { ReactNode } from 'react';

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <>
      <Suspense fallback={null}>
        <ProgressBar />
      </Suspense>
      {children}
    </>
  );
}