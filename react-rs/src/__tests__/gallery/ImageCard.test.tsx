import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ImageCard } from '../../components/Gallery/ImageCard/ImageCard';
import { ImageData } from '../../services/ImageData';

describe('ImageCard', () => {
  const mockImageData: ImageData = {
    alt_description: 'white and brown long fur cat',
    blur_hash: 'LRJcqDIUL3s..mX8rXRPOZnirWXT',
    color: '#a6d9d9',
    created_at: '2020-06-15T04:30:27Z',
    current_user_collections: [],
    description: null,
    height: 7952,
    id: 'ZCHj_2lJP00',
    liked_by_user: false,
    likes: 1729,
    links: {
      download:
        'https://unsplash.com/photos/ZCHj_2lJP00/download?ixid=Mnw0MzMyNzR8MHwxfHNlYXJjaHwxfHxjYXRzfGVufDB8fHx8MTY4MTI0MDQzMg',
      download_location:
        'https://api.unsplash.com/photos/ZCHj_2lJP00/download?ixid=Mnw0MzMyNzR8MHwxfHNlYXJjaHwxfHxjYXRzfGVufDB8fHx8MTY4MTI0MDQzMg',
      html: 'https://unsplash.com/photos/ZCHj_2lJP00',
      self: 'https://api.unsplash.com/photos/ZCHj_2lJP00',
    },
    promoted_at: '2020-06-15T08:16:29Z',
    sponsorship: null,
    tags: [
      {
        type: 'landing_page',
        title: 'cat',
      },
      {
        type: 'landing_page',
        title: 'animal',
      },
      {
        type: 'search',
        title: 'pet',
      },
    ],
    topic_submissions: {
      'business-work': {
        approved_on: '2020-06-16T11:38:49Z',
        status: 'approved',
      },
    },
    updated_at: '2023-04-11T12:14:58Z',
    urls: {
      full: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw0MzMyNzR8MHwxfHNlYXJjaHwxfHxjYXRzfGVufDB8fHx8MTY4MTI0MDQzMg&ixlib=rb-4.0.3&q=85',
      raw: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixid=Mnw0MzMyNzR8MHwxfHNlYXJjaHwxfHxjYXRzfGVufDB8fHx8MTY4MTI0MDQzMg&ixlib=rb-4.0.3',
      regular:
        'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MzMyNzR8MHwxfHNlYXJjaHwxfHxjYXRzfGVufDB8fHx8MTY4MTI0MDQzMg&ixlib=rb-4.0.3&q=80&w=1080',
      small:
        'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MzMyNzR8MHwxfHNlYXJjaHwxfHxjYXRzfGVufDB8fHx8MTY4MTI0MDQzMg&ixlib=rb-4.0.3&q=80&w=400',
      small_s3:
        'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1592194996308-7b43878e84a6',
      thumb:
        'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MzMyNzR8MHwxfHNlYXJjaHwxfHxjYXRzfGVufDB8fHx8MTY4MTI0MDQzMg&ixlib=rb-4.0.3&q=80&w=200',
    },
    user: {
      accepted_tos: true,
      bio: 'I really love unsplash！！！！！',
      first_name: 'Alvan',
      for_hire: false,
      id: '1LMzZNX562k',
      instagram_username: 'alvan_nee',
      last_name: 'Nee',
      links: {
        followers: 'https://api.unsplash.com/users/alvannee/followers',
        following: 'https://api.unsplash.com/users/alvannee/following',
        html: 'https://unsplash.com/@alvannee',
        likes: 'https://api.unsplash.com/users/alvannee/likes',
        photos: 'https://api.unsplash.com/users/alvannee/photos',
        portfolio: 'https://api.unsplash.com/users/alvannee/portfolio',
        self: 'https://api.unsplash.com/users/alvannee',
      },
      location: 'Shanghai, China',
      name: 'Alvan Nee',
      portfolio_url: null,
      profile_image: {
        large:
          'https://images.unsplash.com/profile-1617947361627-4a8765a9b014image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128',
        medium:
          'https://images.unsplash.com/profile-1617947361627-4a8765a9b014image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64',
        small:
          'https://images.unsplash.com/profile-1617947361627-4a8765a9b014image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32',
      },
      social: {
        instagram_username: 'alvan_nee',
        paypal_email: null,
        portfolio_url: null,
        twitter_username: 'Alvan Nee',
      },
      total_collections: 0,
      total_likes: 66,
      total_photos: 172,
      twitter_username: 'Alvan Nee',
      updated_at: '2023-04-10T11:53:25Z',
      username: 'alvannee',
    },
    width: 5304,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the image and content', () => {
    render(<ImageCard data={mockImageData} />);
    const image = screen.getByAltText(mockImageData.alt_description);
    expect(image).toBeInTheDocument();

    const link = screen.getByText(mockImageData.urls.regular);
    expect(link).toBeInTheDocument();

    const likesCount = screen.getByText(mockImageData.likes.toString());
    expect(likesCount).toBeInTheDocument();
  });

  it('should show content on mouse enter', () => {
    const { container } = render(<ImageCard data={mockImageData} />);
    const content = container.firstElementChild?.lastElementChild;

    if (content) {
      expect(content).toHaveClass('invisible');
      fireEvent.mouseEnter(content);
      expect(content).toHaveClass('visible');
    }
  });
});
