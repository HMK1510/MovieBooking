"use client"
import React from 'react'
import '../Popup.css'

const LocationPopup = ({
    setShowLocationPopup
}:{
    setShowLocationPopup : React.Dispatch<React.SetStateAction<boolean>>
}) => {

    const[cities,setCities] = React.useState<any[]>([])

    const getcities = async () => {
        const vietnamCities = [
            "Hồ Chí Minh",
            "Cần Thơ",
            "Biên Hòa",
            "Vũng Tàu",
            "Mỹ Tho",
            "Long Xuyên",
            "Cà Mau"
        ];

        const cities = vietnamCities.map((city) => {
            return{
                label: city,
                value: city
            }
        })

        setCities(cities)
    }

    React.useEffect(() => {
        getcities()
    }, [])

    const handleSave = () => {
        setShowLocationPopup(false)
    }

  return (
    <div className='popup-bg'>
      <div className='popup-cont'>
        <select>
            <option value="" disabled selected>Select your city</option>
            {
                cities.map((city: any) => {
                    return <option value={city.value}>{city.label}</option>
                })
            }
        </select>

        <button className='btn'
            onClick={handleSave}
            >Save
        </button>
      </div>
    </div>
  )
}

export default LocationPopup
