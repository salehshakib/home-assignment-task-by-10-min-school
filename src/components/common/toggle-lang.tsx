'use client';

import { Suspense } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { Languages } from 'lucide-react';

import { Button } from '@/components/ui/button';

export function LanguageToggle() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const currentLang = searchParams.get('lang') || 'en';

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'bn' : 'en';
    const params = new URLSearchParams(searchParams.toString());
    params.set('lang', newLang);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Button
        variant="outline"
        className="flex w-16 cursor-pointer items-center gap-1 border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50"
        onClick={toggleLanguage}
      >
        <Languages className="h-4 w-4" />
        <span>{currentLang.toUpperCase()}</span>
      </Button>
    </Suspense>
  );
}
