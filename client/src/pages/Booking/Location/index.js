import React, {useState} from 'react';
import GoogleMap from 'google-map-react';
import './style.scss';
import {FaMapMarker, FaMapMarkerAlt} from "react-icons/all";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import {Input, Typography} from "antd";
import {Pagination} from "../../index";

const AnyReactComponent = () => <div><FaMapMarkerAlt style={{fontSize:'40px'}} /></div>;

const Location = () => {
    const [api, setApi] = useState(false);
    const [address, setAddress] = useState('');
    const center = {
        lat: 32.74,
        lng: -117.13
    };
    const zoom = 11;

    const handleChange = address => {
        setAddress(address);
    };

    const handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('Success', latLng))
            .catch(error => console.error('Error my', error));
    };

    const handleApiLoaded = (map, maps) => {
        setApi(true)
    };



    return (
        <div>
            <Typography.Title style={{textAlign: 'center'}}>Add Location</Typography.Title>
            <div style={{ height: '300px', width: '500px' }}>
                <GoogleMap
                    bootstrapURLKeys={{
                        key: 'AIzaSyCHuvVL7hfcWaEXLCHxLRJxUsnTw5MSZkI',
                        libraries:['places']
                    }}
                    defaultCenter={center}
                    defaultZoom={zoom}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                >
                    <AnyReactComponent
                        lat={32.74}
                        lng={-117.13}
                    />
                </GoogleMap>
            </div>

            <br />
            {api && (
                <PlacesAutocomplete
                    value={address}
                    onChange={handleChange}
                    onSelect={handleSelect}
                >
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div>
                            <Input
                                {...getInputProps({
                                    placeholder: 'Search Places ...',
                                    className: 'location-search-input',
                                })}
                                size={"large"}
                                prefix={<FaMapMarker />}
                            />
                            <div className="autocomplete-dropdown-container">
                                {loading && <div>Loading...</div>}
                                {suggestions.map(suggestion => {
                                    const className = suggestion.active
                                        ? 'suggestion-item--active'
                                        : 'suggestion-item';
                                    const style = suggestion.active
                                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                    return (
                                        <div
                                            {...getSuggestionItemProps(suggestion, {
                                                className,
                                                style,
                                            })}
                                            key={suggestion.description}
                                        >
                                            <span>{suggestion.description}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </PlacesAutocomplete>
            )}
            <Pagination next="/location-details" progress="20" />

        </div>
    );
};

export default Location;