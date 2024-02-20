import Image from "next/image"
import './hero.css'
export default function Hero(){
    return(<>
        <section className="main-home">
            <div className="img"><Image src='/areeg.png' width={300} height={300} alt="areeg"/></div>
            <h1>Hi, I'm Areej</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error temporibus doloremque dolore.</p>
        </section>
        </>)
}