import { ProductData } from '@/types/product.types';

export default function CourseInstructor({ productData }: { productData: ProductData }) {
  const instructorData = productData.sections.find((section) => section.type === 'instructors');

  return (
    //
    <></>
  );
}
