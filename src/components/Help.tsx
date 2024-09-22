import MainHeading from "./MainHeading"
import { Button } from "./ui/button";

const Help = () => {
  return (
        <div className="px-6 mt-[60px] pb-8">
            <div className="text-center">
                <MainHeading title='See how Trulia can help' />
                <p className="max-w-[600px] m-auto my-6">Take a deep dive and browse homes for sale, original neighborhood photos, 
                    resident reviews and local insights to find what is right for you.
                </p>
            </div>
            <div className="block w-full lg:grid lg:grid-cols-3 lg:gap-8 lg:max-w-[800px] lg:m-auto">
                {
                    [...Array(3).keys()].map((_, index) => {
                        return <div key={index} className="w-full lg:w-[250px] h-[350px] text-center">
                                <div>
                                    <div className='flex items-center justify-center'>
                                        <img loading="lazy" decoding="async" src="https://www.trulia.com/images/icons/txl3/illustrations/BuyAHome.svg" alt="" className="h-[128px] w-[128px]" />
                                    </div>
                                    <h3 className="font-bold text-[24px]" >
                                        <div className="Text__TextBase-sc-13iydfs-0-div Text__TextContainerBase-sc-13iydfs-1 cMwnNt icHjbr">Buy a home</div>
                                    </h3>
                                    <div className="text-lg">
                                        With over 1 million+ homes for sale available on the website, Trulia can match you
                                        with a house you will want to call home.
                                    </div>
                                    <Button variant="outline" className="help-btn mt-4 py-4 cursor-pointer">Find a home</Button>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
  )
}

export default Help;
