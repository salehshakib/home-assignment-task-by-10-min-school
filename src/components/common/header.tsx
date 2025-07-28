import Image from 'next/image';

import { ChevronDown, Languages, Phone, Search } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { LanguageToggle } from '@/components/common/toggle-lang';

export default function Header() {
  return (
    <div className="w-full border-b border-gray-200 bg-white px-4 py-3 md:px-6">
      <header className="sticky top-0 z-50 container mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <Image src="/10mslogo-svg.svg" alt="10 Minute School Logo" width={150} height={32} className="h-6 w-auto" />

        {/* Search Bar */}
        <div className="relative max-w-md flex-1">
          <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-500" />
          <Input
            type="text"
            placeholder="কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..." // "Search for courses, or school programs..."
            className="w-full rounded-full border-none bg-gray-100 py-2 pr-4 pl-10 focus:ring-0 focus:outline-none"
            aria-label="Search for courses or school programs"
          />
        </div>

        {/* Navigation Links */}
        <nav className="hidden items-center gap-2 text-sm font-medium lg:flex">
          <Button size={'sm'} variant="ghost" className="flex items-center gap-1 text-gray-700 hover:text-gray-900">
            <span>ক্লাস ১-১২</span> {/* Class 1-12 */}
            <ChevronDown className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size={'sm'} className="flex items-center gap-1 text-gray-700 hover:text-gray-900">
            <span>স্কিলস</span> {/* Skills */}
            <ChevronDown className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size={'sm'} className="flex items-center gap-1 text-gray-700 hover:text-gray-900">
            <span>ভর্তি পরীক্ষা</span> {/* Admission Test */}
            <ChevronDown className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size={'sm'} className="flex items-center gap-1 text-gray-700 hover:text-gray-900">
            <span>অনলাইন ব্যাচ</span> {/* Online Batch */}
            <ChevronDown className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size={'sm'} className="flex items-center gap-1 text-gray-700 hover:text-gray-900">
            <span>ইংলিশ সেন্টার</span> {/* English Center */}
            <ChevronDown className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size={'sm'} className="flex items-center gap-1 text-gray-700 hover:text-gray-900">
            <span>আরো</span> {/* More */}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </nav>

        {/* Right Section: Language, Phone, Login */}
        <div className="flex items-center gap-4">
          <LanguageToggle />
          <div className="flex items-center gap-1 font-semibold text-green-600">
            <Phone className="h-4 w-4" />
            <span>16910</span>
          </div>
          <Button className="rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700">
            লগ-ইন {/* Log-in */}
          </Button>
        </div>
      </header>
    </div>
  );
}
