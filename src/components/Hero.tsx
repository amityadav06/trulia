import HeroTaba from "./HeroTaba";
import SearchUi from "./SearchUi";

const Hero = ()  => {
  return (
    <section className="px-4">
      {/* Hero */}
      <div className="relative h-[500px] lg:h-[560px]  py-24 lg:pb-32" 
        style={
            {backgroundImage : `url(./hero.webp)`, 
            backgroundSize: 'cover',
        }}>
        
        {/* End Gradients */}
        <div className="relative">
          <div className="container py-10 lg:pb-16">
            <div className="max-w-2xl text-center mx-auto">
              {/* Title */}
              <div className="mt-7 max-w-2xl">
                <h1 className="scroll-m-20 text-white text-4xl font-bold tracking-tight lg:text-5xl" style={{textShadow: '0 0px 5px rgba(0, 0, 0, 1)'}}>
                  Discover a place <br /> you'll love to live
                </h1>
              </div>
              {/* End Title */}
              <div className="mt-8 max-w-3xl flex justify-center">
                <HeroTaba />
              </div>
              {/* Buttons */}
              <div className="gap-3 flex justify-center">
                <SearchUi />
              </div>
              {/* End Buttons */}
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </section>
  );
}

export default Hero;