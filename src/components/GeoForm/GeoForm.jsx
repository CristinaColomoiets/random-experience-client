import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { useEffect, useState } from 'react'
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete'

function GeoForm({ onLocationSelect }) {
    const [addressValue, setAddressValue] = useState(null)

    useEffect(() => {
        handleAutocomplete()
    }, [addressValue])

    const handleAutocomplete = () => {
        if (!addressValue?.label) return

        geocodeByAddress(addressValue.label)
            .then((addressDetails) => {
                return getLatLng(addressDetails[0])
            })
            .then((coordinates) => {
                onLocationSelect({
                    address: addressValue.label,
                    latitude: coordinates.lat,
                    longitude: coordinates.lng
                })
            })
            .catch((error) => console.error(error))
    }

    return (
        <form>
            <h3>Test GeoForm</h3>
            <GooglePlacesAutocomplete
                selectProps={{
                    value: addressValue,
                    onChange: setAddressValue,
                    placeholder: 'Type an address...'
                }}
                apiKey="AIzaSyA8S485nE7NARE5iZtJzNz2masvN5Txl18"
            />
        </form>
    )
}

export default GeoForm