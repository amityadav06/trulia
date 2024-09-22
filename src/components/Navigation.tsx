import routes from '../data/routes.json';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';

export function NavigationMenuDemo() {
  return (
    <nav className="nav_main fixed top-0 left-0 right-0 z-50 px-7 py-4 bg-white shadow">
        <div className="inner_nav flex items-center justify-between">
            <div className="left_nav flex gap-4">
                <img srcSet='./trulia.svg' alt='logo' />
                <NavigationMenu className='hidden lg:block'>
                <NavigationMenuList>
                    {routes.map((route) => (
                        <div key={route.page}>
                        <NavigationMenuItem className='relative'>
                        <NavigationMenuTrigger className='nav_btn'>{route.page.charAt(0).toUpperCase() + route.page.slice(1)}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-2 p-2 md:w-[400px] lg:w-[500px] lg:grid-cols-3">
                            {route.links.map((link) => (
                                <li className=' hover:underline capitalize pb-1 pl-1 hover:bg-slate-200' key={link.label}>
                                <Link to={link.url}>
                                    {link.label}
                                </Link>
                                </li>
                            ))}
                            </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        </div>
                    ))}
                </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="right_nav flex items-center gap-8">
                <div className="hidden lg:flex gap-4">
                    <button className='btn'>Saved Homes</button>
                    <button className='btn'>Saved Searches</button>
                    <button className='outline-btn shadow-2xl'>Sign up or Log in</button>
                </div>
                <button>
                    <GiHamburgerMenu className='bold h-[24px] w-[24px]' color='#007882' />
                </button>
            </div>
        </div>
    </nav>
  )
}

