import PostGrid from '../posts/post-grid';
import './feature.css'
const FeaturedPost = ({posts}) => {
    return (
    <section className='featured-post'>
        <h2>Featured Posts</h2>
        <PostGrid posts={posts}/>
    </section>);
}
 
export default FeaturedPost;