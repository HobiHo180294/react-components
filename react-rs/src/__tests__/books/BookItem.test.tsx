import React from 'react';
import { render, screen } from '@testing-library/react';
import { BookItem, IBookItemProps } from '../../components/BookCatalog/ImageCard/ImageCard';
import { fetchBooks } from '../../components/BookCatalog/Gallery';

jest.mock('../../components/BookCatalog/BookCatalog', () => ({
  fetchBooks: jest.fn(() =>
    Promise.resolve([
      {
        author: 'Douglas Crockford',
        imageLink:
          'https://a.allegroimg.com/s512/1127dc/a965bddd435688e82c2ce3a92e13/JavaScript-The-Good-Parts-Crockford-Douglas-Jezyk-angielski',
        title: 'JavaScript: The Good Parts: The Good Parts',
        price: 30,
        description:
          "With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must",
      },
    ])
  ),
}));

describe('BookItem component', () => {
  let firstBookData: IBookItemProps;
  beforeAll(async () => {
    const books = await fetchBooks('');
    firstBookData = books[0];
  });
  it('should render the first book cover image', () => {
    render(<BookItem {...firstBookData} />);
    const imgElement = screen.getByAltText(firstBookData.title);
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', firstBookData.imageLink);
  });
  it('should render the first book author', () => {
    render(<BookItem {...firstBookData} />);
    const authorElement = screen.getByText(firstBookData.author);
    expect(authorElement).toBeInTheDocument();
  });
  it('should render the first book price', () => {
    render(<BookItem {...firstBookData} />);
    const priceElement = screen.getByText(firstBookData.price);
    expect(priceElement).toBeInTheDocument();
  });
  it('should render the first "Show more" button', () => {
    render(<BookItem {...firstBookData} />);
    const moreButtonElement = screen.getByRole('button', { name: 'Show more' });
    expect(moreButtonElement).toBeInTheDocument();
  });
  it('should render the first "Add to bag" button', () => {
    render(<BookItem {...firstBookData} />);
    const buyButtonElement = screen.getByRole('button', { name: 'Add to bag' });
    expect(buyButtonElement).toBeInTheDocument();
  });
});
