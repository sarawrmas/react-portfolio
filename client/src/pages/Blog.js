import React from 'react';
import ArmsWide from '../assets/images/arms-wide.jpg';
import ClimbImg from '../assets/images/climb.jpg';

function Blog() {
  const blogPosts = [
    {
      title: "Welcome",
      image: ArmsWide,
      alt: "Arms spread wide overlooking a vista",
      preview: "Hi! I’m Sara. I hail from the great state of Wisconsin, where I was raised by a family of German and Polish farmers. My midwestern upbringing taught me a great deal of values...",
      link: "https://hikingcodingandmayhem.wordpress.com/2021/08/30/welcome/"
    },
    {
      title: "Values",
      image: ClimbImg,
      alt: "A mountain climber",
      preview: "By identifying our values and connecting them to educational experiences, we can increase our level of persistence and enhance our likelihood to see things through.",
      link: "https://hikingcodingandmayhem.wordpress.com/2021/09/04/values/"
    },
  ]

  return (
  <div className="page-div">
    <h2>Blog</h2>
    <div className="page-body all-blog">
      {blogPosts.map(post =>
      <div className="blog-card" key={post.title}>
        <h3 className="blog-header">{post.title}</h3>
        <img src={post.image} className="blog-img" alt={post.alt}/>
        <blockquote className="blog-text blog-p">"{post.preview}"</blockquote>
        <a href={post.link} target="_blank" rel="noreferrer" className="blog-text blog-link">Continue reading &#8594;</a>
      </div>
      )}
    </div>
  </div>
  );
}

export default Blog;