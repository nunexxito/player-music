import Image from "next/image";
import {
    ChartBarIcon,
    ClockIcon,
    DotsHorizontalIcon,
    HomeIcon,
  } from "@heroicons/react/solid";
import { FaMicrophoneAlt } from "react-icons/fa";
import { RiCompassFill } from "react-icons/ri";

export default function Sidebar() {
    return(
        <section className="fixed top-0 z-40 flex flex-col p-4 items-center bg-black w-[90px] h-screen pt-0 space-y-8">
            <Image src='/img/N.png' width={56} height={70} objectFit='contain'/>
            <div className="flex flex-col space-y-8">
                <HomeIcon className="sidebarIcon text-white opacity-[0.85]" />
                <RiCompassFill className="sidebarIcon text-2xl" />
                <FaMicrophoneAlt className="sidebarIcon ml-1" />
                <ChartBarIcon className="sidebarIcon" />
                <ClockIcon className="sidebarIcon" />
                <DotsHorizontalIcon className="sidebarIcon" />
            </div>
        </section>
    );
};