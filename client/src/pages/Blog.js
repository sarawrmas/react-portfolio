import React from 'react';

function Blog() {
  return (
  <div className="page-div">
    <h2>Blog</h2>
    <div className="page-body">
      <div className="blog-card">
        <h3 className="blog-header">Welcome</h3>
        <blockquote className="blog-text blog-p">"Thanks for visiting! I have thought about starting a blog for a long time, and today is that day. I have a few ideas about topics I’d like to discuss on this forum, and the top two, hiking and coding, are the reason for my title. Before jumping in to one of many many thoughts..."</blockquote>
        <a href="https://hikingcodingandmayhem.wordpress.com/2021/08/30/welcome/" target="_blank" rel="noreferrer" className="blog-text blog-link">Continue reading &#8594;</a>
      </div>
    </div>
  </div>
  );
}

export default Blog;