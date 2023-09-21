import {Home , BarChart, SquareStack, CheckSquare, Flag, Users} from 'lucide-react'
import { NavItem } from './NavItem'

export function MainNavigation() {
    return(
        <nav className="space-y-0.5">
            <NavItem title="Home" icon={Home} />
            <NavItem title="Dashboard" icon={BarChart} />
            <NavItem title="Home" icon={SquareStack} />
            <NavItem title="Home" icon={CheckSquare} />
            <NavItem title="Home" icon={Flag} />
            <NavItem title="Home" icon={Users} />
        </nav>       
    )
}