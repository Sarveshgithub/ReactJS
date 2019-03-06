import React from 'react'
const ArtistList = (props) => {
    console.log(props)
    
    const list =({allArtist}) => {
        if(allArtist)
    }
    return (
        <div className="artists_list">
            <h4>Browse the artists</h4>
             {list(props)}
        </div>
    )
}
export default ArtistList