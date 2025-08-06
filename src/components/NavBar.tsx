
import React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AlignJustify } from 'lucide-react';
import { Link } from 'react-router-dom';

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert",
    href: "/docs/components/alert",
    description:
      "Display a prominent message with relevant information and actions.",
  },
  {
    title: "Accordion",
    href: "/docs/components/accordion",
    description:
      "Display a list of collapsible items that can be expanded to reveal more content.",
  },
  {
    title: "Aspect Ratio",
    href: "/docs/components/aspect-ratio",
    description: "Maintain the aspect ratio of an element when the size changes.",
  },
  {
    title: "Avatar",
    href: "/docs/components/avatar",
    description:
      "Display a user's avatar or a fallback icon if no image is available.",
  },
  {
    title: "Badge",
    href: "/docs/components/badge",
    description: "Display a small label with additional information.",
  },
  {
    title: "Button",
    href: "/docs/components/button",
    description:
      "Display an interactive button that triggers an action when clicked.",
  },
  {
    title: "Card",
    href: "/docs/components/card",
    description:
      "Display a content container with a header, content, and footer.",
  },
  {
    title: "Checkbox",
    href: "/docs/components/checkbox",
    description:
      "Display a checkbox that allows the user to select or deselect an option.",
  },
  {
    title: "Dialog",
    href: "/docs/components/dialog",
    description:
      "Display a modal dialog that interrupts the user's workflow to present important information or actions.",
  },
  {
    title: "Hover Card",
    href: "/docs/components/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Input",
    href: "/docs/components/input",
    description:
      "Display a text field that allows the user to enter and edit text.",
  },
  {
    title: "Label",
    href: "/docs/components/label",
    description:
      "Display a text label that describes the purpose of a form element.",
  },
  {
    title: "Popover",
    href: "/docs/components/popover",
    description:
      "Display a floating panel that provides additional information or actions.",
  },
  {
    title: "Radio Group",
    href: "/docs/components/radio-group",
    description:
      "Display a set of radio buttons that allows the user to select one option from a list.",
  },
  {
    title: "Select",
    href: "/docs/components/select",
    description:
      "Display a dropdown menu that allows the user to select an option from a list.",
  },
  {
    title: "Separator",
    href: "/docs/components/separator",
    description: "Visually divide content with a thin line.",
  },
  {
    title: "Sheet",
    href: "/docs/components/sheet",
    description:
      "Display a panel that slides in from the edge of the screen to present additional information or actions.",
  },
  {
    title: "Skeleton",
    href: "/docs/components/skeleton",
    description:
      "Display a placeholder that indicates content is loading.",
  },
  {
    title: "Switch",
    href: "/docs/components/switch",
    description:
      "Display a toggle switch that allows the user to turn an option on or off.",
  },
  {
    title: "Textarea",
    href: "/docs/components/textarea",
    description:
      "Display a multi-line text field that allows the user to enter and edit text.",
  },
  {
    title: "Toast",
    href: "/docs/components/toast",
    description:
      "Display a non-intrusive message that appears briefly to provide feedback or notifications.",
  },
  {
    title: "Toggle",
    href: "/docs/components/toggle",
    description:
      "Display a toggle button that allows the user to turn an option on or off.",
  },
]

export const NavBar = () => {
  return (
    <div className="border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="mr-4 flex items-center space-x-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://uniford.org/wp-content/uploads/2024/01/cropped-UNIFORD-logo-2024-192x192.png" alt="Uniford Foundation Logo" />
            <AvatarFallback>UF</AvatarFallback>
          </Avatar>
          <span className="hidden font-bold sm:inline-block">Uniford Foundation</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/" className={navigationMenuTriggerStyle()}>
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/about" className={navigationMenuTriggerStyle()}>
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/programs" className={navigationMenuTriggerStyle()}>
                  Programs
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/certificate-awards"
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  Certificate & Awards
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                More
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] md:grid-cols-2">
                  {components.map((component) => (
                    <ListItem href={component.href} key={component.title} title={component.title}>
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button variant="outline" size="sm">
          Sign In
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="sm" className="ml-2 px-2 lg:hidden">
              <AlignJustify className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-2/3 md:w-1/2">
            <SheetHeader className="space-y-2 text-left">
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                Explore the Uniford Foundation.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/about" className="hover:underline">About</Link>
              <Link to="/programs" className="hover:underline">Programs</Link>
              <Link to="/certificate-awards" className="hover:underline">Certificate & Awards</Link>
              {components.map((component) => (
                <Link to={component.href} key={component.title} className="hover:underline">
                  {component.title}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
