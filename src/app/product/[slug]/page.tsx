import { Suspense } from 'react';

import CourseBanner from '@/app/product/[slug]/_components/course-banner';
import CourseCard from '@/app/product/[slug]/_components/course-card';
import { fetchProductData } from '@/app/services/product-service';

import { LangType } from '@/types/product.types';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: LangType }>;
}

export default async function ProductPage({ params, searchParams }: ProductPageProps) {
  const { slug } = await params;
  const { lang = 'en' } = await searchParams;

  const { data } = await fetchProductData(lang, slug);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div
        style={{
          backgroundImage: 'url(https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg)',
        }}
        className="h-[250px] bg-cover bg-center bg-no-repeat"
      >
        <div className="container mx-auto grid w-full max-w-7xl grid-cols-9 gap-8 py-16">
          <div className="col-span-6 min-h-screen">
            <CourseBanner productData={data} />
          </div>

          <div className="col-span-3">
            <CourseCard productData={data} />
          </div>
        </div>
      </div>
    </Suspense>
  );
}
