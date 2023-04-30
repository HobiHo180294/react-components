export type UserLinks = {
  followers: string;
  following: string;
  html: string;
  likes: string;
  photos: string;
  portfolio: string;
  self: string;
};

export type UserProfileImage = {
  large: string;
  medium: string;
  small: string;
};

export type UserSocial = {
  instagram_username: string | null;
  paypal_email: string | null;
  portfolio_url: string | null;
  twitter_username: string | null;
};
