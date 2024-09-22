import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const HeroTaba = () => {
    const btns = ['Buy', 'Rent', 'Sold'];

  return (
    <Tabs defaultValue="Buy" className="w-[400px] tabs_list">
        <TabsList>
            {
                btns.map((btn) => {
                    return <TabsTrigger key={btn} value={btn}>{btn}</TabsTrigger>
                })
            }
        </TabsList>
    </Tabs>

  )
}

export default HeroTaba