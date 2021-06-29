// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {eachBlogData} = props
  const {id, author, title, topic, avatarUrl, imageUrl} = eachBlogData
  return (
    <Link className="blog-item-link" to={`/blogs/${id}`}>
      <div className="blog-item-container">
        <img className="image-container" src={imageUrl} alt={title} />
        <div className="adjust-items">
          <h1 className="blog-item-heading">{topic}</h1>
          <p className="blog-item-description">{title}</p>
          <div className="row-styling">
            <img className="profile-image" src={avatarUrl} alt={author} />
            <p className="author-description">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
