import React, {useState, useEffect} from "react";

function App() {
    const [dog, setDog] = useState(null)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(r => r.json())
        .then(dogPic => setDog(dogPic.message))
    }, [])

    return (
        <div>
            {dog ? <img src={dog} alt="A Random Dog"/> : <p>Loading...</p>}
        </div>
    )
}


export default App
