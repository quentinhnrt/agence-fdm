import RealisationCard from "./Components/RealisationCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";

import { Navigation } from "swiper";

export default function Realisations() {
    return (
        <div className="py-8" id="realisations">
            <p className={"flex justify-center text-center text-2xl font-bold my-4 underline decoration-orange-400"}>Nos réalisations</p>

            <Swiper navigation={true} modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
    >
      <SwiperSlide>
            <RealisationCard 
            title="Site web pour une alpiniste"
            desc="Création d'une maquette à partir d'un brief client, puis développement du site web avec Wordpress et Themosis."
            link = "https://christinevogondy.ch"
            image="/public/photos/christine-vogondy.png"/></SwiperSlide>
      <SwiperSlide>
            <RealisationCard 
            title="Site web - Portfolio d'étudiant"
            desc="Création d'un site web présentant le portfolio d'un étudiant, avec Wordpress et Themosis."
            link="#"
            image="/public/photos/fifteen-prod.png"/>
      </SwiperSlide>
      <SwiperSlide>
            <RealisationCard 
            title="Refonte d'un site web sous Wix"
            desc="Refonte graphique et ergonomique d'un site web existant"
            link="https://www.elyetsespepites.fr/"
            image="/public/photos/ely_wix.png"/>
      </SwiperSlide>
      <SwiperSlide>
            <RealisationCard 
            title="Création de supports de communication"
            desc="Création de supports de communication pour les réseaux sociaux et carte de visite"
            image="/public/photos/ely.png"/>
      </SwiperSlide>
    </Swiper> 
        </div>
    )
}