import React from 'react';

const DroneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <path d="M12 12l0 -9" />
      <path d="M12 12l9 0" />
      <path d="M12 12l0 9" />
      <path d="M12 12l-9 0" />
      <path d="M19 5l-4 4" />
      <path d="M5 5l4 4" />
      <path d="M19 19l-4 -4" />
      <path d="M5 19l4 -4" />
    </svg>
  );
};

export default DroneIcon;
