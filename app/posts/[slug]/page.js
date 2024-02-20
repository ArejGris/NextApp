import PostContent from "@/components/posts/post-details/post-content";
import { getPostData } from "@/lib/post-util";

const OnePost = (context) => {
    const slug=context.params.slug
    console.log(slug)
    const one=getPostData(slug)
    return (  
    <>
    <PostContent one={one}/>
    </>);
}
 
export default OnePost;