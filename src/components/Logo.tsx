const Logo = () => {
  return (
    <div className="h-22 w-52 cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 100"
        className="w-full h-full"
      >
        <circle cx="36" cy="50" r="20" className="fill-primary" />
        <path
          d="M 45,50 L 60,40 L 60,60 Z"
          className="fill-secondary"
          stroke="currentColor"
          strokeWidth="2"
        />

        <text
          x="70"
          y="50"
          textAnchor="start"
          dy="0.35em"
          fontSize="32"
          fontFamily="Helvetica, Arial, sans-serif"
          fontWeight="bold"
          fill="currentColor"
        >
          عبد الأحد
        </text>
      </svg>
    </div>
  );
};

export default Logo;
