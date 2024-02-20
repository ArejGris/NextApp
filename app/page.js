import { Fragment } from "react";
import Hero from "@/components/home-page/hero";
import FeaturedPost from "@/components/home-page/featured-posts";
import { getFeaturedPost } from "@/lib/post-util";
 function getData(){
 return getFeaturedPost()
}
export default function Home() {
 const Dummy_Data=getData()
  return (
  <Fragment>
    <Hero/>
    <FeaturedPost posts={Dummy_Data}/>
  </Fragment>);
}
