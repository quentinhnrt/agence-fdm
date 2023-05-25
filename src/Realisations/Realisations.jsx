import RealisationCard from "./Components/RealisationCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";

import { Navigation } from "swiper";

export default function Realisations() {
    return (
        <div className="py-8" id="qui-sommes-nous">
            <p className={"flex justify-center text-2xl font-bold my-4"}>Nos réalisations</p>

            <Swiper navigation={true} modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
    >
      <SwiperSlide>
            <RealisationCard 
            title="Site web pour une alpiniste"
            desc="Voici une description de réalisation"
            image="https://i.pinimg.com/474x/f9/31/5a/f9315a536142491e7275702351895558.jpg"/></SwiperSlide>
      <SwiperSlide>
            <RealisationCard 
            title="Site web - Portfolio d'étudiant"
            desc="Création d'un site web présentant le portfolio d'un étudiant, avec Wordpress et Themosis."
            image="https://i.pinimg.com/474x/f9/31/5a/f9315a536142491e7275702351895558.jpg"/>
      </SwiperSlide>
      <SwiperSlide>
            <RealisationCard 
            title="Refonte d'un site web sous Wix"
            desc="Refonte graphique et ergonomique d'un site web existant"
            image="https://i.pinimg.com/474x/f9/31/5a/f9315a536142491e7275702351895558.jpg"/>
      </SwiperSlide>
      <SwiperSlide>
            <RealisationCard 
            title="Création de supports de communication"
            desc="Création de supports de communication pour les réseaux sociaux"
            image="https://i.pinimg.com/474x/f9/31/5a/f9315a536142491e7275702351895558.jpg"/>
      </SwiperSlide>
    </Swiper> 
        </div>
    )
}