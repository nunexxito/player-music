import Sidebar from './Sidebar';
import Body from './Body';
import Right from './Right';
import SpotifyWebApi from 'spotify-web-api-node';
import { useRecoilState } from 'recoil';
import { playingTrackState } from '../atoms/playerAtom';

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
})

export default function Dashboard() {
    const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState)

    const chooseTrack = (track) => {
        setPlayingTrack(track);
    }
    return(
        <main className="flex min-h-screen min-w-max bg-black lg:pb-24">
            <Sidebar />
            <Body chooseTrack={chooseTrack} spotifyApi={spotifyApi} />
            <Right chooseTrack={chooseTrack} spotifyApi={spotifyApi} />
        </main>
    );
};
