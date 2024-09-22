import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import MainHeading from "./MainHeading";
import { Product } from "@/types/types";
import useFetch from "@/customHook/useFetch";

const NewHome = ()  => {
    const { data: products, loading, error } = useFetch<Product[]>('https://dummyjson.com/products?limit=10&skip=0');
    console.log(products);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    
   return (
    <div className="px-6 mt-[60px] pb-8">
            <div className="text-center">
                <MainHeading title='Newly listed homes in Atlanta' />
            </div>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full mt-16"
                >
            <CarouselContent>
                {products?.map((product, index) => {
                    //@ts-ignore
                    const {id, title, description, price, images, rating} = product;
                        return <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5 h-[370px] w-[222px]">
                            <article className="rounded-xl bg-white p-3 shadow-lg h-[366px] hover:shadow-xl">
                                <a href="#">
                                    <div 
                                        className="relative flex items-end h-52 overflow-hidden rounded-xl"
                                        style={{
                                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) 50%),url(${images[0]})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',   
                                        }}
                                    >
                                        <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <span className="text-slate-400 ml-1 text-sm">{rating}</span>
                                        </div>
                                    </div>

                                    <div className="mt-1 p-2">
                                    <h2 className="text-slate-700">{title}</h2>
                                    <p className="text-slate-400 mt-1 text-sm">Lisbon, Portugal</p>

                                    <div className="mt-3 flex items-end justify-between">
                                        <p>
                                        <span className="text-lg font-bold text-blue-500">${price}</span>
                                        <span className="text-slate-400 text-sm">/night</span>
                                        </p>

                                        <div className="group inline-flex rounded-xl bg-blue-100 p-2 hover:bg-blue-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:text-blue-500 h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                                        </svg>
                                        </div>
                                    </div>
                                    </div>
                                </a>
                                </article>
                        </CarouselItem>
                    })}
            </CarouselContent>
            <CarouselPrevious className="left-[-16px]" />
            <CarouselNext className="right-[-16px]" />
        </Carousel>
    </div>
   
  )
}

export default NewHome;