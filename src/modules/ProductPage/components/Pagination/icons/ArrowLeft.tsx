import classNames from 'classnames';
import React from 'react';

type Props = {
  isDisabled: boolean;
};

export const ArrowLeft: React.FC<Props> = ({ isDisabled }) => {
  return (
    <svg
      className={classNames('pagination__icon-arrow-left', {
        pagination__disabled: isDisabled,
      })}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        // eslint-disable-next-line max-len
        d="M10.4712 3.52851C10.2109 3.26816 9.78878 3.26816 9.52843 3.52851L5.52843 7.52851C5.26808 7.78886 5.26808 8.21097 5.52843 8.47132L9.52843 12.4713C9.78878 12.7317 10.2109 12.7317 10.4712 12.4713C10.7316 12.211 10.7316 11.7889 10.4712 11.5285L6.94265 7.99992L10.4712 4.47132C10.7316 4.21097 10.7316 3.78886 10.4712 3.52851Z"
      />
    </svg>
  );
};
