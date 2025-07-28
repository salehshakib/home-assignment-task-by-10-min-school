import { Star } from 'lucide-react';

import { ProductData } from '@/types/product.types';

export default function CourseBanner({ productData }: { productData: ProductData }) {
  return (
    <div>
      <div className="space-y-2 text-white">
        <div className="text-4xl font-bold">{productData.title || 'Course Banner'}</div>

        <div className="flex items-center gap-2">
          <Star style={{ color: 'orange' }} size={20} />
          <Star style={{ color: 'orange' }} size={20} />
          <Star style={{ color: 'orange' }} size={20} />
          <Star style={{ color: 'orange' }} size={20} />
          <Star style={{ color: 'orange' }} size={20} />

          <div className="text-base font-normal">(81.8% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)</div>
        </div>

        <div
          className="text-base font-normal text-gray-300/80"
          dangerouslySetInnerHTML={{ __html: productData.description }}
        />
      </div>
    </div>
  );
}
