import React, { useEffect } from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import Aos from "aos";
import "aos/dist/aos.css"; 
import "./home.css";



function Home(){
    useEffect(()=>{
            Aos.init({
                duration:1000,})
        },[])
    const {ref} =useWebAnimations({
        keyframes:[
            {transform:"translate(0,0)"},
            {transform:"translate(0,10%)"}
        ],
        timing:{
            duration:3000,
            iterations:Infinity,
            direction:"alternate",
        }
    })
    const {ref:Uxmovement} =useWebAnimations({
        keyframes:[
            {transform:"translate(0,0)"},
            {transform:"translate(10%,0)"}
        ],
        timing:{
            duration:2000,
            iterations:Infinity,
            direction:"alternate",
        }
    })
    const {ref:cortexmovement} =useWebAnimations({
        keyframes:[
            {transform:"translate(0,0)"},
            {transform:"translate(10%,10%)"}
        ],
        timing:{
            duration:3000,
            iterations:Infinity,
            direction:"alternate",
        }
    })
    const {ref:contentmovement} =useWebAnimations({
        keyframes:[
            {transform:"translate(0%,0)"},
            {transform:"translate(10%,0%)"}
        ],
        timing:{
            duration:1000,
            iterations:Infinity,
            direction:"alternate",
        }
    })
  
    
  return(
    <>
    <div className="wrapper">
    <div className="Main">
    <div className="container-1" data-aos="fade-down">
    <div className="image-container-1" data-aos="fade-left">
   <img className="brain-image"
    src="https://www.cortexcopywriter.com/img\intro\Intro_Brain.svg"
    height={500}
    ref={ref}/>

   <img className="featured-image"
    src="https://www.cortexcopywriter.com/img/intro/Intro_Featured_Image_Empty.svg"
    height={600}/>
   </div>
    <div className="cortex-copywriter" data-aos="fade-left">
     <p><span className="cortex">CORTEX</span><br />
     <span className="copywriter">COPYWRITER</span></p>
     <div className="cortex-paragraph" data-aos="fade-right">
       <p>Enhance your communications with<br />
        psychology-based copywriting and UX<br />
         writing</p>
        
   </div>
   
  
   <div>
        <button className="btn">send a message</button>
    </div>  
   
   </div>
   <div className="container-2"  data-aos="fade-right">
   <img className="services-image"
    src="https://www.cortexcopywriter.com/img/services/services-6.svg"
     height={400}
     ref={Uxmovement}/>

<div className="UX-paragraph"  >
       <p className="ux-writing" data-aos="fade-left" >UX Writing</p>
       <p className="ux-writing-paragraph"  data-aos="fade-down">I develop clear and useful text in product interfaces to help users reach a<br />
        specific goal, whether that's completing a form or tapping a button. This<br />
         includes every type of content from on-screen help systems, user<br />
          onboarding and in-app messages to push notifications and tooltips.</p>
         <div className="ul-div"data-aos="fade-right">
          <ul>
          <li>Microcopy</li>

          <li>Taxonomy & Labeling</li> 
          <li>Chatbots</li>
          <li>User Research</li>
            <br />
            <br />
           <li>Content Style Guide</li>
           <li>User Testing</li>
           <li>Design Principles</li>
            <br />
            <br />
            <li>Prototype</li>
        </ul>
        </div> 
</div>
</div>

<div className="container-3" data-aos="fade-left">
    <img className="service-7-image"
    src="https://www.cortexcopywriter.com/img/services/services-7.svg"
     height={400}
    //  ref={Uxmovement}
     ref={cortexmovement}
     />
     <div className="copywriting" data-aos="fade-down">
     <h1 className="copywriter-heading">Website Copywriting</h1>
     <p className="copywriting-paragraph">Your website is a dialogue with your audience. I capture the essence of<br />
      your business and communicate it clearly. Carefully considered writing<br />
      and SEO best practices allow me to craft the perfect user journey online.<br />
      Let me draw the map that guides users every step of the way from<br />
      discovery, to consideration, to conversion.</p>
      <div data-aos="flip-down">
      <ul>
          <li>Information Architecture</li>
          <li>Wireframes</li> 
          <li>Competitor Analysis</li>
          <br />
            <br />
          <li>On-page SEO</li> 
           <li>Off-page SEO</li>
           <li>USP/UVP</li>
           <li>Landing Page</li>
            <br />
            <br />
            <li>Sales Letter</li>
        </ul>
        </div>
    </div>
</div>
   
   <div className="container-4">
   <img className="service-5-image"
   ref={contentmovement}
    src="https://www.cortexcopywriter.com/img/services/services-5.svg"
     height={400}
     />
   </div>
   <div className="content-div" data-aos="fade-down">
       <p className="content-heading">Content Writing</p>
       <p className="content-paragraph">Give your business a competitive edge with powerful content that can be<br />
        targeted to any segment of your audience. No matter how large or<br />
        complex your project, my custom-built solutions including articles, eDMs,<br />
        and case studies will help you implement a plan that maximizes your<br />
        business’s online exposure.</p>
        <div className="content-list"  data-aos="flip-up">
        <ul>
          <li>Headlines & Taglines</li>
          <li>Content Strategy</li> 
          <li>Blogs & Articles</li>
          <br />
            <br />
          <li>Social Media Content</li> 
           <li>Video Scripts</li>
           <li>Case Studies</li>
            <br />
            <br />
            <li>Whitepapers</li>
        </ul>
        </div>
   </div>
  
   
 
    </div>
    <div className="footer">
   <p className="cortex-footer">Pick my brain/cortex and let's get <b>started</b> on your project</p>
    <img className="envelop-image"src="https://www.clker.com/cliparts/e/1/V/6/2/q/green-envelope-hi.png" height={70} width={100} />
    <p className="cortex-footer-text">Based in Sydney, Australia. Available worldwide.</p>
   <p className="cortex-footer-text">nathan@cortexcopywriter.com</p>
   
   </div>
    </div>

    </div>
    </>
  )

}

export default Home;
