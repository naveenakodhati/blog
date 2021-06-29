// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      title: data.title,
      author: data.author,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      content: data.content,
      topic: data.topic,
    }
    this.setState({blogData: updatedData, isLoading: false})
  }

  render() {
    const {blogData, isLoading} = this.state
    console.log(blogData)
    const {title, topic, imageUrl, avatarUrl, content, author} = blogData

    return (
      <>
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div className="blog-content-container">
            <h1 className="blog-title">{title}</h1>
            <div className="blog-styling">
              <img className="blog-profile-icon" src={avatarUrl} alt={author} />
              <p className="blog-author">{author}</p>
            </div>
            <img className="content-image" src={imageUrl} alt={topic} />
            <p className="blog-content">{content}</p>
          </div>
        )}
      </>
    )
  }
}

export default BlogItemDetails
