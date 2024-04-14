import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Helmet } from 'react-helmet-async';


const Location = () => {
    return (
        <div className='flex justify-center mt-24'>
            <Helmet>
                <title>Location</title>
            </Helmet>
            <MapContainer center={[50.5, 30.5]} zoom={13} style={{ width: "60vw", height: "60vh" }}>
                <TileLayer
                    url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=KEIjslpTfHBYdWEUA1Je'
                    attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                >
                </TileLayer>
            </MapContainer>
        </div>
    );
};

export default Location;