import React from 'react';
import ArmsWide from '../assets/images/arms-wide.jpg';
import PlanImg from '../assets/images/plan.jpg';
import BinaryImg from '../assets/images/binary.jpg';

function Blog() {
  const blogPosts = [
    {
      title: "Why Coding?",
      image: BinaryImg,
      alt: "A screen of 1's and 0's",
      preview: "I was meant to be a software engineer. I understand it enough to do it well, but am challenged enough by it to stay interested. It plays to all of my strengths; my curiosity, my thirst for challenge...",
      link: "https://hikingcodingandmayhem.wordpress.com/2021/09/12/why-coding/"
    },
    {
      title: "WOOP: Wish, Outcome, Obstable, Plan",
      image: PlanImg,
      alt: "A hand stacking blocks that say 'plan'",
      preview: "Using this technique is a helpful way to visualize any challenge. By laying out what you hope to achieve, the best possible outcome, what obstacles you may encounter, and then making a plan...",
      link: "https://hikingcodingandmayhem.wordpress.com/2021/09/05/woop-wish-outcome-obstacle-plan/"
    },
    {
      title: "Knowing When to Let Go",
      image: ArmsWide,
      alt: "Arms spread wide overlooking a vista",
      preview: "I am competitive, strong-willed, and stubborn. It’s a blessing and a curse. Because I have a never-give-up attitude, I frequently reach the goals that I set for myself and have been able to accomplish...",
      link: "https://hikingcodingandmayhem.wordpress.com/2021/09/06/knowing-when-to-let-go/"
    },
  ]

  return (
  <div className="page-div">
    <h2>Blog</h2>
    <div className="page-body all-blog">
      {blogPosts.map(post =>
      <div className="blog-card" key={post.title}>
        <img src={post.image} alt={post.alt}/>
        <div class="blog-content">
          <h3 className="blog-header blog-text">{post.title}</h3>
          <blockquote className="blog-text blog-p">"{post.preview}"</blockquote>
          <a href={post.link} target="_blank" rel="noreferrer" className="blog-text blog-link">Continue reading <span className="arrow">&#8594;</span></a>
        </div>
      </div>
      )}
    </div>
  </div>
  );
}

export default Blog;