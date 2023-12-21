import { useEffect, useState } from "react";
import axios from "axios";
import CharacterSheet from "./CharacterSheet";

function ViewCharacters() {
   
    const [data, setData] = useState([]);

  useEffect(
    ()=>{
        
        axios.get('http://localhost:4000/api/charsheet')
        .then(
            (response)=>{
                setData(response.data)
            }
        )
        .catch(
            (error)=>{
                console.log(error);
            }
        )

    }, []
  );

  const Reload = (e)=>{
    axios.get('http://localhost:4000/api/charsheet')
        .then(
            (response)=>{
                setData(response.data)
            }
        )
        .catch(
            (error)=>{
                console.log(error);
            }
        )
  }

    return (
        <div>
            <h2>These are your characters</h2>
            <CharacterSheet myCharacterSheets={data} ReloadData={Reload}></CharacterSheet>
        </div>
    );

}

export default ViewCharacters;