function Container({ children, className = '' }) {
  return <div className={`mx-auto w-full max-w-[1400px] px-6 sm:px-8 xl:px-10 ${className}`}>{children}</div>;
}

export default Container;
