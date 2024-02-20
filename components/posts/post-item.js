import Image from "next/image";
import Link from "next/link";
import './post-item.css'
const PostItem = ({post}) => {
    const {title, image, excerpt, date,slug}=post
    const formatedDate=new Date(date).toLocaleDateString('es-US',{
        day:'numeric',
        month:'long',
        year:'numeric'
    })
    const linka=`/posts/${slug}`
    return ( 
    <li className="one-post">
        <Link href={linka}>
          <div className="image">
             <Image src={image} width={300} height={200} alt="alt" layout="responsive" />
          </div>
          <div className="content">
            <h3>{title}</h3>
            <time>{formatedDate}</time>
            <div className="excerpt"> {excerpt}</div>

          </div>
        </Link>
    </li> );
}
 
export default PostItem;