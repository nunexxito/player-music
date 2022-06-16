import Sidebar from './Sidebar';
import Body from './Body';
import Right from './Right';
import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
})

export default function Dashboard() {
    return(
        <div>
            <Sidebar/>
            <Body spotifyApi={spotifyApi}/>
            <Right/>
        </div>
    );
};
