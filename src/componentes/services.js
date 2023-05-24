import Service from "./Service";
import Title from "./Title";
import { Services } from "./data";

const services = () => {
  return (
      <section className="section services" id="services">
      <Title title='Our' subTitle='services'/>
      <div className="section-center services-center">
       {Services.map((service)=>{
     
        return(
          <Service key={service.id} {...service}/>
            )
          
       })}

       
      </div>
    </section>
  );
}
export default services;