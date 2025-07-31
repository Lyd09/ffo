import React from 'react';
import Link from 'next/link';

const PortfolioButton = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className="portfolio-btn" {...props}>
      {children}
    </button>
  );
};

export default PortfolioButton;
