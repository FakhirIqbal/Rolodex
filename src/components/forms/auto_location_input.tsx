// import React, { useState } from 'react';
// import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

// const LocationInput = () => {
//     const [address, setAddress] = useState('');
//     const [coordinates, setCoordinates] = useState({ lat: null, lng: null });

//     const handleSelect = async (selectedAddress: any) => {
//         const results = await geocodeByAddress(selectedAddress);
//         const latLng = await getLatLng(results[0]);

//         setAddress(selectedAddress);
//         // setCoordinates(latLng);
//     };

//     return (
//         <div>
//             <PlacesAutocomplete
//                 value={address}
//                 onChange={(value: any) => setAddress(value)}
//                 onSelect={handleSelect}
//             >
//                 {({ getInputProps, suggestions, getSuggestionItemProps, loading }: any) => (
//                     <div>
//                         <input
//                             {...getInputProps({
//                                 placeholder: 'Search Places...',
//                                 className: 'location-search-input',
//                             })}
//                         />
//                         <div className="autocomplete-dropdown-container">
//                             {loading && <div>Loading...</div>}
//                             {suggestions.map((suggestion: any) => {
//                                 const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
//                                 return (
//                                     <div
//                                         {...getSuggestionItemProps(suggestion, {
//                                             className,
//                                         })}
//                                     >
//                                         <span>{suggestion.description}</span>
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     </div>
//                 )}
//             </PlacesAutocomplete>

//             {coordinates.lat && coordinates.lng && (
//                 <p>
//                     Latitude: {coordinates.lat}, Longitude: {coordinates.lng}
//                 </p>
//             )}
//         </div>
//     );
// };

// export default LocationInput;
