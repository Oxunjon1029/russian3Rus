import React from 'react';

const Content = ({ children }) => {
  return (
    <div className="content_container">
      {children}
    </div>
  );
};

Content.propTypes = {};

export default Content;