import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  HomeModernIcon,
  HomeIcon,
  UsersIcon,
  Cog8ToothIcon,
  ArrowRightStartOnRectangleIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import basilLogo from "../assets/images/basil_logo.png";

const navigation = [
  { href: "#", icon: HomeIcon, current: false },
  { href: "#", icon: HomeModernIcon, current: true },
  { href: "#", icon: UsersIcon, current: false },
  { href: "#", icon: CalendarIcon, current: false },
  { href: "#", icon: DocumentDuplicateIcon, current: false },
  { href: "#", icon: ChartPieIcon, current: false },
  { href: "#", icon: Cog8ToothIcon, current: false },
  { href: "#", icon: ArrowRightStartOnRectangleIcon, current: false }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col w-20 bg-white border-r border-gray-200 px-2 py-4">
        <img
          className="h-8 w-auto mx-auto"
          src={basilLogo}
          alt="Your Company"
        />
        <nav className="mt-8">
          <ul role="list" className="flex flex-col gap-4">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-white bg-blue-600"
                      : "text-gray-600 hover:bg-blue-50 hover:text-blue-600",
                    "group flex items-center justify-center rounded-md p-2 transition-colors duration-200"
                  )}
                >
                  <item.icon className="w-6 h-6" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex-1">{/* Content goes here */}</div>
    </div>
  );
}
