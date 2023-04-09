import { UserLinks, UserProfileImage, UserSocial } from './ImageDataUser';

type ImageDataLinks = { download: string; download_location: string; html: string; self: string };

type ImageDataTags = [
  {
    type: string;
    title: string;
  }[]
];

type ImageDataTopicSubmissions = {
  'business-work': {
    approved_on: string;
    status: string;
  };
};

type ImageDataUrls = {
  full: string;
  raw: string;
  regular: string;
  small: string;
  small_s3: string;
  thumb: string;
};

type ImageDataUser = {
  accepted_tos: boolean;
  bio: string;
  first_name: string;
  for_hire: boolean;
  id: string;
  instagram_username: string;
  last_name: string;
  links: UserLinks;
  location: string;
  name: string;
  portfolio_url: string;
  portfolio_image: UserProfileImage;
  social: UserSocial;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  twitter_username: string | null;
  updated_at: string;
  username: string;
};

export interface ImageData {
  alt_description: string;
  blur_hash: string;
  color: string;
  created_at: string;
  current_user_collections: [];
  description: string;
  readonly height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: ImageDataLinks;
  promoted_at: string;
  sponsorship: null;
  tags: ImageDataTags;
  topic_submissions: ImageDataTopicSubmissions;
  updated_at: string;
  urls: ImageDataUrls;
  user: ImageDataUser;
  width: number;
}
