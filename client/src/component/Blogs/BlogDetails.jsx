import React from 'react';
import { useParams } from 'react-router-dom';
import { blogItem } from '../../assets/items';
import { Link } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams(); // Extract the ID from the URL
  const post = blogItem.find(item => item.id.toString() === id); // Find the blog post by ID
  
  if (!post) {
    return <div>Blog post not found!</div>; // Return error message if no post found
  }

  return (
    <div>
      <div className="blog-details-area ptb-120">
        <div className="container">
          <div className="blog-details-desc" >
            <div className="article-content">
              <div className="image">
                <img src={post.main_img} alt="Main" />
              </div>
              <div className="contentss">
                <p className="tag-btn">
                  {post.tag}
                </p>
                <ul className="meta">
                  <li>
                    <div className="info">
                      <img src={post.authorImageUrl} alt="Author" />
                      <span>By <a>Admin</a></span>
                    </div>
                  </li>
                  <li>
                    <i className="ri-calendar-2-line" />
                    {post.date}
                  </li>
                  <li>
                    <i className="ri-message-2-line" />
                    {post.comments} Comments
                  </li>
                </ul>
                <h2>
                  {post.blog_title}
                </h2>
                <p>
                  {post.long_para}
                </p>
              </div>
            </div>
              <div className="article-inner-content">
              {post.features.map((feature, index) => (
                <div className="item" key={index}>
                  <h4 className="fs-4 fw-bold my-3">{feature.title}</h4>
                  <p>{feature.paragraph}</p>
                </div>
              ))}
              </div>

            <div
              className="article-block"
            >
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-6">
                  <div className="block-image">
                    <img src={post.related_img_1} alt="image" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="block-image">
                    <img src={post.related_img_2} alt="image" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="article-inner-content"
            >
              <div className="item">
                <h4 className='fs-4 fw-bold'>{post.conclusion_title}</h4>
                <p>
                 {post.conclusion_inner}
                </p>
              </div>
            </div>



            <div
              className="article-footer">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-7 col-md-7">
                  <ul className="tags">
                    <li>
                      <span>Tags:</span>
                    </li>
                    <li>
                      <a>{post.tag}</a>
                    </li>
                    
                  </ul>
                </div>
                <div className="col-lg-5 col-md-5">
                  <ul className="social">
                    <li>
                      <span>Social Share:</span>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="ri-facebook-fill" />
                      </a>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="ri-twitter-fill" />
                      </a>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="ri-instagram-line" />
                      </a>
                      <a href="https://www.youtube.com/" target="_blank">
                        <i className="ri-youtube-fill" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="article-comment">
              <h3>Comment (2)</h3>
              <div className="comment-list">
                <img src={post.authorImageUrl} alt="image" />
                <h4>Jonathan Chancellor</h4>
                <span>December 18, 2024</span>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
                  lectus purus ultricies neque. Aenean nunc nisi, vel
                  dictum.adipiscing elit.”
                </p>
               
              </div>
              <div className="comment-list">
                <img src={post.authorImageUrl} alt="image" />
                <h4>Christopher Baker</h4>
                <span>December 18, 2024</span>
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
                  lectus purus ultricies neque. Aenean nunc nisi, vel
                  dictum.adipiscing elit.”
                </p>
                
              </div>
            </div>
            <div className="article-reply">
              <h3>Leave A Comment</h3>
              <form>
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                  <div className="icon">
                    <i className="ri-user-3-line" />
                  </div>
                </div>
             
                <div className="form-group extra-top">
                  <label>Your Message</label>
                  <textarea
                    className="form-control"
                    placeholder="Your comment here"
                    defaultValue={""}
                  />
                  <div className="icon">
                    <i className="ri-message-2-line" />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="check1"
                      />
                      <label className="form-check-label" htmlFor="check1">
                        Save My Name or Next Time
                      </label>
                    </div>
                  </div>
                </div>
                <button type="submit" className="default-btn">
                  Post A Comment
                </button>
              </form>
            </div>
            {/* -------------related blog--------------------- */}
            <div className=''>Related Blog</div>

            <div className='grid grid-cols-3 row justify-center'>
            {blogItem.map(post => (
            <div className="col-xl-4 col-md-6" key={post.id}>
              <div className="blog-card">
                <div className="blog-image">
                  <Link to={`/blog/${post.id}`}>
                    <img src={post.imageUrl} alt="Blog post" />
                  </Link>
                  <Link to={`/blog/${post.id}`} className="tag-btn">Real Estate</Link>
                  <Link to={`/blog/${post.id}`} className="author-btn">
                    <img src={post.authorImageUrl} alt="Author" />
                  </Link>
                </div>
                <div className="blog-content">
                  <ul className="meta">
                    <li><i className="ri-calendar-2-line" />{post.date}</li>
                  </ul>
                  <h3>
                    {/* <Link to={`/blog/${post.id}`}>{post.blog_title}</Link> */}
                  </h3>
                  {/* <p className='text-sm'>{post.short_para}</p> */}
                </div>
              </div>
            </div>
          ))}
            </div>
            {/* --------------related blog end------------------- */}

          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
