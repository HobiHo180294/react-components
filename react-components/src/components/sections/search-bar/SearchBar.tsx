import React from 'react';
import './SearchBar.scss';

interface ISearchBarProps {
  parentClassName?: string;
  onSubmit: (searchTerm: string) => void;
}

interface ISearchBarState {
  searchTerm: string;
}

class SearchBar extends React.Component<ISearchBarProps, ISearchBarState> {
  constructor(props: ISearchBarProps) {
    super(props);

    this.state = {
      searchTerm: localStorage.getItem('searchTerm') || '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.onSubmit(this.state.searchTerm);
  }

  handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ searchTerm: event.target.value });
  }

  componentWillUnmount() {
    localStorage.setItem('searchTerm', this.state.searchTerm);
  }

  render() {
    const { parentClassName } = this.props;

    return (
      <form onSubmit={this.handleSubmit} className={`${parentClassName}__bar search-bar`}>
        <fieldset className="search-bar__group">
          <input
            type="text"
            value={this.state.searchTerm}
            placeholder="Search..."
            onChange={this.handleInputChange}
            className="search-bar__input"
          />
          <button type="submit" className="search-bar__button">
            Search
          </button>
        </fieldset>
      </form>
    );
  }
}

export default SearchBar;
