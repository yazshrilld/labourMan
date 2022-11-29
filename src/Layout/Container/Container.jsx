import React from 'react'

const Container = ({ children, className }) => {
    return (
      <section className={`w-[95%] max-w-[1400px] mx-auto py-2 ${className}`}>
        {children}
      </section>
    );
  };

export default Container