import React from 'react';

const PortfolioButton = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className="portfolio-btn" {...props}>
        <span className="flex items-center justify-center">
            {children}
        </span>
    </button>
  );
};

export default PortfolioButton;
