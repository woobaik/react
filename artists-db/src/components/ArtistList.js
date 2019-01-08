import React from 'react';
import { Link } from 'react-router-dom';

 const ArtistList = (props) => {


   const list = ({allArtists}) => {
     if (allArtists) {
       return allArtists.map(artist => {

         const style = {
           background: `url('/images/covers/${artist.cover}.jpg') no-repeat`
         }

         return (
           <Link key={artist.id} to={`/artist/${artist.id}`}
                 className="artist_item"
                 style={style}
           >
            <div>{artist.name}</div>
           </Link>
         )
       })
     }
   };

   return(
     <div>
       <h4>{list(props)}</h4>
     </div>
   );
 }

 export default ArtistList;
