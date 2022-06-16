import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
// import { playingTrackState, playState } from "../atoms/playerAtom";

export default function Poster({track}) {
    return(
        <div className="w-[260px] h-[360px] rounded-[50px] overflow-hidden relative text-white/80 cursor-pointer hover:scale-105 hover:text-white/100 transition duration-200 ease-out group mx-auto">
            <img
                src={track.albumUrl}
                alt=""
                className="h-full w-full absolute inset-0 object-cover rounded-[50px] opacity-80 group-hover:opacity-100"
            />

            <div className="absolute bottom-10 inset-x-0 ml-4 flex items-center space-x-3.5">
                <div className="h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 gold">
                    <BsFillPauseFill className="text-white text-xl" />

                    {/* {track.uri === playingTrack.uri && play ? (
                        <BsFillPauseFill className="text-white text-xl" />
                    ) : (
                        <BsFillPlayFill className="text-white text-xl ml-[1px]" />
                    )} */}
                </div>
            </div>
        </div>
    );
}