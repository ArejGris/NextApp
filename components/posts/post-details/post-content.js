import PostHeader from "./post-header";
import ReactMarkdown from 'react-markdown'
import './post-content.css'

const PostContent = ({one}) => {
   
    return (
    <article className="content">
    <PostHeader title={one.title} image={one.image}/>
    <ReactMarkdown className="rmd">{one.content}</ReactMarkdown>
    </article> );
}
 
export default PostContent;