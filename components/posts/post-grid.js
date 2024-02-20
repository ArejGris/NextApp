import PostItem from "./post-item";
import './post-grid.css'
const PostGrid = ({posts}) => {
    return ( 
    <ul className="grid">
       {posts.map(post=><PostItem key={post.slug} post={post}/>)}
    </ul> );
}
 
export default PostGrid;