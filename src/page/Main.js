import Image from '../components/UnsplashImage';
import React, { useState } from 'react'
import axios from 'axios';
import '../index.css';
import '../App.css';

function Main(props) {
    const [imagefind, setImage] = useState();
    const clientId = "3v-5e_yB533b2tSJkTDDmN5o7UBoI_2-NF7QnJg00Nc";
    const [result, setResult] = useState([]);
    const onClick = (event) => {
        setImage(event.target.value);
        const imageurls = "https://api.unsplash.com/search/photos?page=1&query=" +
            imagefind + "&client_id=" + clientId;
        axios.get(imageurls).then((response) => {
            setResult(response.data.results);
        })

    };

    //////////////////////////////////////////////

    return (

        <body>
            <div class="containers">
                <input type="text" name="image" class="search" onClick={onClick} placeholder="search photo" />
                {
                    result.map(image => (

                        <Image image={image} />


                    ))
                }

            </div>

        </body >
    );
}
export default Main;