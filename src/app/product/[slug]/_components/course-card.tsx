'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';

import {
  ArrowLeft,
  ArrowRight,
  Book,
  Calendar,
  Clock,
  Facebook,
  FileText,
  Phone,
  Play,
  Users,
  Video,
} from 'lucide-react';

import { Button } from '@/components/ui/button';

import { ProductData } from '@/types/product.types';

export default function CourseCard({ productData }: { productData: ProductData }) {
  const { media } = productData;
  const previewGallery = useMemo(() => {
    return media.filter((item) => item.name === 'preview_gallery');
  }, [media]);

  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentMedia = previewGallery[currentMediaIndex];

  const handlePrev = () => {
    setCurrentMediaIndex((prevIndex) => (prevIndex === 0 ? previewGallery.length - 1 : prevIndex - 1));
    setIsPlaying(false);
  };

  const handleNext = () => {
    setCurrentMediaIndex((prevIndex) => (prevIndex === previewGallery.length - 1 ? 0 : prevIndex + 1));
    setIsPlaying(false);
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentMediaIndex(index);
    setIsPlaying(false);
  };

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto border bg-white p-1">
        <div className="relative mb-4 aspect-video w-full overflow-hidden bg-black">
          {currentMedia && currentMedia.resource_type === 'video' && isPlaying ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${currentMedia.resource_value}?autoplay=1&rel=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="relative flex h-full w-full items-center justify-center">
              {currentMedia ? (
                <Image
                  src={currentMedia.thumbnail_url || currentMedia.resource_value}
                  alt={`Preview ${currentMediaIndex + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gray-800 text-gray-400">
                  No media available
                </div>
              )}
              {currentMedia && currentMedia.resource_type === 'video' && (
                <Button
                  className="absolute flex size-12 items-center justify-center rounded-full bg-white text-green-500 transition-colors hover:bg-white"
                  onClick={handlePlayClick}
                  aria-label="Play video"
                >
                  <Play className="size-5 fill-current" />
                </Button>
              )}
            </div>
          )}

          <Button
            className="absolute top-1/2 left-4 z-10 -translate-y-1/2 rounded-full bg-white text-gray-800 transition-colors hover:bg-white"
            size="icon"
            onClick={handlePrev}
            aria-label="Previous media"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <Button
            className="absolute top-1/2 right-4 z-10 -translate-y-1/2 rounded-full bg-white text-gray-800 transition-colors hover:bg-white"
            size="icon"
            onClick={handleNext}
            aria-label="Next media"
          >
            <ArrowRight className="h-6 w-6" />
          </Button>
        </div>

        <div className="overflow-x-auto">
          <div className="flex gap-2">
            {previewGallery.map((media, index) => (
              <div
                key={index}
                className={`relative h-16 w-24 flex-shrink-0 cursor-pointer overflow-hidden rounded-md border-2 md:h-20 md:w-32 ${
                  index === currentMediaIndex ? 'border-green-500' : 'border-transparent'
                }`}
                onClick={() => handleThumbnailClick(index)}
              >
                <Image
                  src={media.thumbnail_url || media.resource_value}
                  alt={`Thumbnail ${index + 1}`}
                  width={128}
                  height={80}
                  className="h-full w-full object-cover"
                />
                {media.resource_type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <Play className="h-6 w-6 fill-white text-white" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg p-6 text-gray-800">
          <div className="mb-4 flex items-baseline gap-2">
            <span className="text-3xl font-bold text-green-600">৳3850</span>
            <span className="text-xl text-gray-500 line-through">৳5000</span>
            <span className="rounded-full bg-orange-500 px-2 py-1 text-xs font-semibold text-white">- 1150 ৳ ছাড়</span>
          </div>
          <Button className="mb-6 w-full rounded-md bg-green-600 py-3 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-green-600">
            {productData?.cta_text?.name}
          </Button>

          <h2 className="mb-4 text-2xl font-bold">এই কোর্সে যা থাকছে</h2>
          <ul className="space-y-3">
            {productData?.checklist?.map((item) => (
              <li key={item.id} className="flex items-center gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full">
                  <Image
                    width={48}
                    height={48}
                    src={item.icon}
                    alt={item.text}
                    className="size-5"
                    style={{
                      color: item?.color,
                    }}
                  />
                </span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-4 flex flex-col items-center justify-between text-gray-800 md:flex-row">
        <p className="mb-4 text-sm md:mb-0">কোর্সটি সম্পর্কে বিস্তারিত জানতে</p>
        <a href="tel:16910" className="flex items-center gap-2 text-green-600 hover:underline">
          <Phone className="h-5 w-5" />
          <span>ফোন করুন (16910)</span>
        </a>
      </div>
    </div>
  );
}
