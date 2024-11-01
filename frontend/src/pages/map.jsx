// src/App.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MapComponent from '../components/MapComponent';

const App = ({ data }) => {
    const [loading, setLoading] = useState(true);
    const [coordinates, setCoordinates] = useState({ latitude: 51.505, longitude: -0.09 }); // Default coordinates

    useEffect(() => {
        const fetchCoordinates = async () => {
            setLoading(true);
            const { postcode, city, streetName, houseNumber } = data;
            const fullAddress = `${houseNumber} ${streetName}, ${city}, ${postcode}`;

            try {
                const response = await axios.get('https://api.opencagedata.com/geocode/v1/json', {
                    params: {
                        q: fullAddress,
                        key: '7ebd780bf32b4ec6b05ca2c97e1f7a4a', // Replace with your actual API key
                    },
                });

                if (response.data.results.length > 0) {
                    const { lat, lng } = response.data.results[0].geometry;
                    setCoordinates({ latitude: lat, longitude: lng });
                } else {
                    alert('Address not found');
                }
            } catch (error) {
                console.error('Error fetching geocode data', error);
                alert('Error fetching geocode data: ' + error.message);
            } finally {
                setLoading(false); // Ensure loading is set to false after the fetch
            }
        };

        fetchCoordinates(); // Call the async function
    }, [data.ftch]); // Note that we depend on address here

    if (loading) return <p>Loading map...</p>; // Only show loading if true

    return (
        <div>
            <MapComponent latitude={coordinates.latitude} longitude={coordinates.longitude} />
        </div>
    );
};

export default App;
