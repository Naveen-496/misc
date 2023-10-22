import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import { statistics, shoes } from "../constants";
import Button from "../Components/Button";
import ShoeCard from "../Components/ShoeCard";


const Hero = () => {

   const [ bigShoeImg, setBigShoeImg] = useState( bigShoe1 );

  return (
    <section
      id="home"
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      {/*  Content Section */}
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28  border border-blue-800">
        <p className="font-montserrat text-coral-red text-xl">
          Our Summer collections
        </p>

        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red">Nike</span> Shoes
        </h1>

        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 pb-14 sm:max-w-sm ">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label="Shop Now" iconUrl={arrowRight} />

        {/*  Stastitics section */}
        <div className="flex justify-start items-start flex-wrap mt-20 w-full gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray"> {stat.label} </p>
            </div>
          ))}
        </div>
      </div>

      {/* Image Section */}

      <div className="border border-green-600 relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-center bg-cover">

         {/* big image */}
         <img src={bigShoeImg} alt="shoe collection" width={610} height={502} className="object-contain z-10 relative" />

         {/* small shoe imgaes */}

         <div className="flex gap-4 sm:gap-6 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
            {shoes.map( (shoe, index) => (
                <div key={index}>
                    <ShoeCard 
                       index={index}
                       imageUrl={ shoe }
                       changeBigShoeImage={( shoe ) => setBigShoeImg( shoe)}
                       bigShoe={bigShoeImg}
                    />
                </div>
            ))}
         </div>

      </div>
    </section>
  );
};

export default Hero;
