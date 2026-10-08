const Container = ({ children, className="" }) => {
  return <div className={`max-w-292.5 m-auto ${className}`}>{children}</div>;
};

export default Container;
