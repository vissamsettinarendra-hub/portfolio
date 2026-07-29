import "./Blog.css";
import blogs from "../../data/blogs";

function Blog() {
  return (
    <section className="blog section" id="blog">

      <div className="container">

        <div className="section-head">

          <span className="eyebrow">
            09 — Blog
          </span>

          <h2>Latest Articles</h2>

          <p>
            Sharing my learning experiences in software development,
            cloud computing and modern web technologies.
          </p>

        </div>

        <div className="blog-grid">

          {blogs.map((blog) => (

            <div className="blog-card" key={blog.id}>

              <span className="blog-category">
                {blog.category}
              </span>

              <h3>{blog.title}</h3>

              <p>{blog.description}</p>

              <small>{blog.date}</small>

              <a
                href={blog.link}
                target="_blank"
                rel="noreferrer"
              >
                Read More →
              </a>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Blog;