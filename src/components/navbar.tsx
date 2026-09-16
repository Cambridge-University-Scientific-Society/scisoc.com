"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/theme-toggle";
// import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <Image
              src="/favicon.ico"
              alt="SciSoc Logo"
              width={40}
              height={40}
              className="rounded"
            />
          </div>
        </Link>

        {/* Navigation Menu */}
        <NavigationMenu className="hidden md:flex" viewport={false}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[200px] gap-3 p-4 md:w-[300px] lg:w-[400px]">
                  <ListItem href="/about" title="About Scisoc">
                    Learn about our history, mission, and community
                  </ListItem>
                  <ListItem href="/about/committee" title="Committee">
                    Meet our current committee members 
                  </ListItem>
                  <ListItem href="/about/past-committees" title="Past Committees">
                    Learn more about our past committee members
                  </ListItem>
                  <ListItem href="/about/patrons" title="Patrons">
                    Meet the patrons and honorary member of the Society
                  </ListItem>
                  <ListItem href="/about/constitution" title="Constitution">
                    Read the society constitution and governing framework
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Events</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[200px] gap-3 p-4 md:w-[300px] lg:w-[400px]">
                  <ListItem href="/events" title="Overview">
                    Explore the events archive and key event pages
                  </ListItem>
                  <ListItem href="/events/talks" title="Talks">
                    Weekly talks and lecture information
                  </ListItem>
                  <ListItem href="/events/garden-party" title="Garden Party">
                    Our annual post-exams celebration
                  </ListItem>
                  <ListItem href="/events/founders-dinner" title="Founders' Dinner">
                    The Society&apos;s formal annual dinner
                  </ListItem>
                  <ListItem href="/events/scientific-internship-event" title="Scientific Internship Event">
                    Internship stories and networking across sectors
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>


            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[200px] gap-3 p-4 md:w-[300px] lg:w-[400px]">
                  <ListItem href="/resources/guides" title="Guides">
                    Part IA and IB subject guides
                  </ListItem>
                  <ListItem href="/resources/articles" title="Articles">
                    Spotlight on various topics of interesty
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/sponsors"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  Sponsors
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side actions */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="default" className="hidden sm:inline-flex">
            <Link href="/membership">
              Membership 
            </Link>
          </Button>
          
          {/* Mobile Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64">
              <DropdownMenuLabel className="font-semibold">Navigation</DropdownMenuLabel>
              <DropdownMenuSeparator />
              
              {/* About submenu */}
              <DropdownMenuSub>
                <DropdownMenuSubTrigger className="cursor-pointer">
                  About
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem asChild>
                    <Link href="/about" className="cursor-pointer">
                      About Scisoc
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/about/committee" className="cursor-pointer">
                      Committee
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/about/past-committees" className="cursor-pointer">
                      Past Committees
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/about/patrons" className="cursor-pointer">
                      Patrons
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/about/constitution" className="cursor-pointer">
                      Constitution
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>

              {/* Events submenu */}
              <DropdownMenuSub>
                <DropdownMenuSubTrigger className="cursor-pointer">
                  Events
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem asChild>
                    <Link href="/events" className="cursor-pointer">
                      Overview
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/events/talks" className="cursor-pointer">
                      Talks
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/events/garden-party" className="cursor-pointer">
                      Garden Party
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/events/founders-dinner" className="cursor-pointer">
                      Founders&apos; Dinner
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/events/scientific-internship-event" className="cursor-pointer">
                      Scientific Internship Event
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>

              {/* Resources submenu */}
              <DropdownMenuSub>
                <DropdownMenuSubTrigger className="cursor-pointer">
                  Resources
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem asChild>
                    <Link href="/resources/guides" className="cursor-pointer">
                      Guides
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/resources/articles" className="cursor-pointer">
                      Articles
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>

              <DropdownMenuItem asChild>
                <Link href="/sponsors" className="cursor-pointer">
                  Sponsors
                </Link>
              </DropdownMenuItem>

              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="sm:hidden">
                <Link href="/membership" className="cursor-pointer font-medium">
                  Membership
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}


// function navigationMenuTriggerStyle() {
//   return cn(
//     "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
//   );
// }
