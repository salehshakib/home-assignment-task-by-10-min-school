// src/types/productTypes.ts

interface OldInfo {
  cat_id: number;
  course_id: number;
  platform: string;
  skills_cat_id: number;
  slug: string;
}

interface Medium {
  name: string;
  resource_type: string;
  resource_value: string;
  thumbnail_url: string;
}

interface Checklist {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

interface OfferValue {
  background_color: string;
  background_img: string;
  checklist_text_color: string;
  end_at: string;
  id: string;
  start_at: string;
  template: string;
  text: string;
}

interface InstructorValue {
  description: string;
  has_instructor_page: boolean;
  image: string;
  name: string;
  short_description: string;
  slug: string;
}

interface FeatureValue {
  icon: string;
  id: string;
  subtitle: string;
  title: string;
}

interface GroupJoinEngagementValue {
  background: {
    image: string;
    primary_color: string;
    secondary_color: string;
  };
  cta: {
    clicked_url: string;
    color: string;
    text: string;
  };
  description: string;
  description_color: string;
  id: string;
  thumbnail: string;
  title: string;
  title_color: string;
  top_left_icon_img: string;
}

interface PointerValue {
  color: string;
  icon: string;
  id: string;
  text: string;
}

interface AboutValue {
  description: string;
  icon: string;
  id: string;
  title: string;
}

interface FeatureExplanationValue {
  checklist: string[];
  file_type: string;
  file_url: string;
  id: string;
  title: string;
  video_thumbnail: string;
}

interface TestimonialValue {
  description: string;
  id: string;
  name: string;
  profile_image: string;
  testimonial: string;
  thumb: string;
  video_type: string;
  video_url: string;
}

interface FAQValue {
  answer: string;
  id: string;
  question: string;
}

// Define a union type for all possible section values
type SectionValue =
  | OfferValue
  | InstructorValue
  | FeatureValue
  | GroupJoinEngagementValue
  | PointerValue
  | AboutValue
  | FeatureExplanationValue
  | TestimonialValue
  | FAQValue;

interface Section {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: SectionValue[];
}

interface CtaText {
  name: string;
  value: string;
}

// Define SEO interface based on typical SEO properties
interface Seo {
  title: string;
  description: string;
  keywords: string[];
  og_title?: string;
  og_description?: string;
  og_image?: string;
  twitter_title?: string;
  twitter_description?: string;
  twitter_image?: string;
}

export interface ProductData {
  slug: string;
  id: number;
  title: string;
  description: string;
  platform: string;
  type: string;
  modality: string;
  old_info: OldInfo;
  start_at: string;
  media: Medium[];
  checklist: Checklist[];
  seo: Seo[]; // Use defined Seo interface instead of any[]
  cta_text: CtaText;
  sections: Section[];
  is_cohort_based_course: boolean;
  secondary_cta_group: unknown[]; // Use unknown instead of any
  delivery_method: string;
}
