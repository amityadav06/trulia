import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { CAROUSEL_CONFIG } from "@/data/carousel-config";
import ImageCard from "./ImageCard";
import TextCard from "./TextCard";
import MainHeading from "./MainHeading";

const Gallery = () => {
  return (
    <>
      <div className="px-6 mt-[60px]">
        <div className="text-center">
          <MainHeading title='Explore homes on trulia' />
          <p className="max-w-[600px] m-auto my-6">Take a deep dive and browse homes for sale, original neighborhood photos, 
            resident reviews and local insights to find what is right for you.
          </p>
        </div>
          
     <Carousel
      opts={{ align: "center" }}
      className="w-full"
    >
      <CarouselContent className="w-[68%]">
        {[...Array(Math.ceil(CAROUSEL_CONFIG.length / 4))].map((_, slideIndex) => {
          
          const startIndex = slideIndex * 5;
          const boxes = CAROUSEL_CONFIG.slice(startIndex, startIndex + 5);
          
          return (
            <CarouselItem key={slideIndex} className="grid grid-cols-3 gap-4">
              {/* Box 1 with 400px height */}
              {boxes[0] && (
                <div className="col-1/4 h-[408px]">
                  {
                    boxes[0].flag === false ? (
                      <ImageCard imgUrl={boxes[0].img} place={boxes[0].place} />
                      
                    ) : (
                      <TextCard 
                        title={boxes[0].title} 
                        desc={boxes[0].desc}
                        bgc={boxes[0].bgc}
                        place={boxes[0].place}
                      />
                    )
                  }
                </div>
              )}

              {/* Box 2 with 2 images, each 200px height stacked */}
              <div className="col-1/4">
              <div className="flex flex-col col-span-2 gap-2">
                {boxes[1] && (
                  <div className="h-[200px]">
                    {
                    boxes[1].flag === false ? (
                      <ImageCard imgUrl={boxes[1].img} place={boxes[1].place} />
                    ) : (
                      <TextCard 
                        title={boxes[1].title} 
                        desc={boxes[1].desc}
                        bgc={boxes[1].bgc}
                        place={boxes[1].place}
                      />
                    )
                  }
                  </div>
                )}
                {boxes[2] && (
                  <div className="h-[200px]">
                    {
                    boxes[2].flag === false ? (
                      <ImageCard imgUrl={boxes[2].img} place={boxes[2].place} />
                    ) : (
                      <TextCard 
                        title={boxes[2].title} 
                        desc={boxes[2].desc}
                        bgc={boxes[2].bgc}
                        place={boxes[2].place}
                      />
                    )
                  }
                  </div>
                )}
                </div>
              </div>

              {/* Box 3 with 2 images, each 200px height stacked */}
              <div className="col-1/4">
              <div className="flex flex-col col-span-2 gap-2">
                {boxes[3] && (
                  <div className="h-[200px]">
                    {
                    boxes[3].flag === false ? (
                      <ImageCard imgUrl={boxes[3].img} place={boxes[3].place} />
                    ) : (
                      <TextCard 
                        title={boxes[3].title} 
                        desc={boxes[3].desc}
                        bgc={boxes[3].bgc}
                        place={boxes[3].place}
                      />
                    )
                  }
                  </div>
                )}
                {boxes[4] && (
                  <div className="h-[200px]">
                    {
                    boxes[4].flag === false ? (
                      <ImageCard imgUrl={boxes[4].img} place={boxes[4].place} />
                    ) : (
                      <TextCard 
                        title={boxes[4].title} 
                        desc={boxes[4].desc}
                        bgc={boxes[4].bgc}
                        place={boxes[4].place}
                      />
                    )
                  }
                  </div>
                )}
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="left-[-16px]" />
      <CarouselNext className="right-[-16px]" />
    </Carousel>
    </div>
    </>
  );
}

export default Gallery;
