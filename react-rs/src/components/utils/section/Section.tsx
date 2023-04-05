import React, { FC } from 'react';

interface ISectionProps {
  pageClassName: string;
  selfClassName: string;
}

export const Section: FC<ISectionProps> = ({ pageClassName, selfClassName, children }) => {
  return (
    <section className={`${pageClassName}__${selfClassName} ${selfClassName}`}>
      <div className={`${selfClassName}__container _container`}>{children}</div>
    </section>
  );
};
