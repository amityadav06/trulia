import { Button } from "./ui/button";

interface ImageCardProps {
    imgUrl: string;
    place: string;
  }
  
const ImageCard = ({imgUrl, place}: ImageCardProps) => {
  return (
    <div className="img_container w-[100%] h-[100%] relative overflow-hidden">
        <div 
            className="img_card w-[100%] h-[100%] relative"
            style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) 50%),url(${imgUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}
        >
            <div className="flex flex-col justify-between h-[100%] items-start pl-[20px] pt-4 pb-4 relative z-10">
                <h3 className="img_text_wrap">
                  <div className="img_text">{place}</div>
                </h3>
                <Button className="img_btn">View Homes {' >'}</Button>
            </div>
            <div className="absolute inset-0 scale-image" />
        </div>
    </div>
  )
}

export default ImageCard