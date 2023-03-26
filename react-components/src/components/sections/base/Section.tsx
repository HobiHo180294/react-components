import React, { Component } from 'react';

interface ISectionProps {
  pageClassName: string;
  selfClassName: string;
}

class Section extends Component<ISectionProps> {
  render() {
    const { pageClassName, selfClassName, children } = this.props;

    return (
      <section className={`${pageClassName}__${selfClassName} ${selfClassName}`}>
        <div className={`${selfClassName}__container _container`}>{children}</div>
      </section>
    );
  }
}

export default Section;
