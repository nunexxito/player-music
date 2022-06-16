import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Search from "./Search";
import Poster from "./Poster";

export default function Body({spotifyApi}) {
    const [search, setSearch] = useState("");
    const {data: session} = useSession();
    const {accessToken} = session;
    const [searchResult, setSearchResult] = useState([]);
    const [newReleases, setNewReleases] = useState([]);

    useEffect(()=>{
        if(!accessToken) return;
        spotifyApi.setAccessToken(accessToken);
    }, [accessToken])

    //searching...
    useEffect(()=>{
        if(!search) return setSearchResult([]);
        if(!accessToken) return;

        spotifyApi.searchTracks(search).then((res)=>{
            setSearchResult(res.body.tracks.items.map((track)=>{
                return{
                    id: track.id,
                    artist: track.artists[0].name,
                    title: track.name,
                    uri: track.uri,
                    albumUrl: track.album.images[0].url,
                    popularity: track.popularity,
                }
            }))
        })
    }, [search, accessToken])

    // New Releases...
    useEffect(() => {
        if (!accessToken) return;

        spotifyApi.getNewReleases().then((res) => {
        setNewReleases(
            res.body.albums.items.map((track) => {
            return {
                id: track.id,
                artist: track.artists[0].name,
                title: track.name,
                uri: track.uri,
                albumUrl: track.images[0].url,
            };
            })
        );
        });
    }, [accessToken]);

    return(
        <section className="bg-black py-4 ml-24 space-y-8 md:max-1-6x1 flex-grow md:mr-2.5">
            <Search search={search} setSearch={setSearch}/>
            <div className="grid overflow-y-scroll scrollbar-hide h-96 py-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 p-4">
                {searchResult.length === 0
                ? newReleases
                    .slice(0, 4)
                    .map((track) => (
                        <Poster
                        key={track.id}
                        track={track}
                        //   chooseTrack={chooseTrack}
                        />
                    ))
                : searchResult
                    .slice(0, 4)
                    .map((track) => (
                        <Poster
                        key={track.id}
                        track={track}
                        //   chooseTrack={chooseTrack}
                        />
                    ))}
            </div>
            <div></div>
        </section>
    );
};