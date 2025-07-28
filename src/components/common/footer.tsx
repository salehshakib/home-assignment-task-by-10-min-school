import Image from 'next/image';
import Link from 'next/link';

import { Facebook, Instagram, Linkedin, MessageCircle, Phone, TwitterIcon as TikTok, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <footer className="w-full border-t border-gray-200 bg-white px-4 py-12 md:px-6 md:py-16 md:pb-6">
        <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo and App Downloads */}
          <div className="flex flex-col items-start gap-4">
            <Image src="/10mslogo-svg.svg" alt="10 Minute School Logo" width={150} height={32} className="h-8 w-auto" />
            <p className="text-sm text-gray-700">Download Our Mobile App</p>
            <div className="flex gap-3">
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <Image src="/g-play.jpeg" alt="Get it on Google Play" width={135} height={40} className="h-10 w-auto" />
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/ios-store.jpeg"
                  alt="Download on the App Store"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div className="flex flex-col items-start gap-3">
            <h3 className="mb-2 text-lg font-bold text-gray-900">Company</h3>
            <Link href="#" className="text-sm text-gray-700 hover:text-gray-900">
              Career / Recruitment
            </Link>
            <Link href="#" className="text-sm text-gray-700 hover:text-gray-900">
              Join as a Teacher
            </Link>
            <Link href="#" className="text-sm text-gray-700 hover:text-gray-900">
              Join as an Affiliate
            </Link>
            <Link href="#" className="text-sm text-gray-700 hover:text-gray-900">
              Privacy policy
            </Link>
            <Link href="#" className="text-sm text-gray-700 hover:text-gray-900">
              Refund policy
            </Link>
            <Link href="#" className="text-sm text-gray-700 hover:text-gray-900">
              Terms & Conditions
            </Link>
          </div>

          {/* Column 3: Others Links */}
          <div className="flex flex-col items-start gap-3">
            <h3 className="mb-2 text-lg font-bold text-gray-900">Others</h3>
            <Link href="#" className="text-sm text-gray-700 hover:text-gray-900">
              Blog
            </Link>
            <Link href="#" className="text-sm text-gray-700 hover:text-gray-900">
              Book Store
            </Link>
            <Link href="#" className="text-sm text-gray-700 hover:text-gray-900">
              Free Notes & Guides
            </Link>
            <Link href="#" className="text-sm text-gray-700 hover:text-gray-900">
              Job Preparation Courses
            </Link>
            <Link href="#" className="text-sm text-gray-700 hover:text-gray-900">
              Verify Certificate
            </Link>
            <Link href="#" className="text-sm text-gray-700 hover:text-gray-900">
              Free Download
            </Link>
          </div>

          {/* Column 4: Keep up with us at */}
          <div className="flex flex-col items-start gap-3">
            <h3 className="mb-2 text-lg font-bold text-gray-900">Keep up with us at</h3>
            <p className="text-sm text-gray-700">
              Call Us: <span className="font-semibold text-green-600">16910</span> (24×7)
            </p>
            <p className="text-sm text-gray-700">
              whatsapp: <span className="font-semibold text-green-600">+8801896016252</span>(24×7)
            </p>
            <p className="text-sm text-gray-700">
              Outside Bangladesh: <span className="font-semibold text-green-600">+880 9610916910</span>
            </p>
            <p className="text-sm text-gray-700">
              Email Us:{' '}
              <Link href="mailto:support@10minuteschool.com" className="font-semibold text-green-600 hover:underline">
                support@10minuteschool.com
              </Link>
            </p>
            <div className="mt-2 flex gap-3">
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gray-800 text-white hover:bg-gray-700">
                  <Facebook className="h-5 w-5" />
                </div>
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gray-800 text-white hover:bg-gray-700">
                  <Instagram className="h-5 w-5" />
                </div>
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gray-800 text-white hover:bg-gray-700">
                  <Linkedin className="h-5 w-5" />
                </div>
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gray-800 text-white hover:bg-gray-700">
                  <Youtube className="h-5 w-5" />
                </div>
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gray-800 text-white hover:bg-gray-700">
                  <TikTok className="h-5 w-5" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="container mx-auto mt-12 pt-8 text-center text-xs text-gray-500">
          2015 - 2025 Copyright © 10 Minute School. All rights reserved.
        </div>
      </footer>

      {/* Floating WhatsApp Buttons */}
      <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-3">
        <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Chat">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 shadow-lg transition-colors hover:bg-green-600">
            <MessageCircle className="h-6 w-6 text-white" />
          </div>
        </Link>
        <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Call">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 shadow-lg transition-colors hover:bg-green-600">
            <Phone className="h-6 w-6 text-white" />
          </div>
        </Link>
      </div>
    </>
  );
}
