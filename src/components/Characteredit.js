import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CharacterEdit() {
    let {id} = useParams();

    const [Name, setName] = useState('');
    const [CharImage, setCharImage] = useState('');
    const [Race, setRace] = useState('');
    const [Class, setClass] = useState('');
    const [SubClass, setSubClass] = useState('');
    const [Statline, setStatline] = useState('');


    const navigate = useNavigate();

    useEffect(
        ()=>{

            axios.get('http://localhost:4000/api/charsheet/'+id)
            .then((response)=>{
                setName(response.data.Name);
                setCharImage(response.data.CharImage);
                setRace(response.data.Race);
                setClass(response.data.Class);
                setSubClass(response.data.SubClass);
                setStatline(response.data.Statline);
            })
            .catch(
                (error)=>{
                    console.log(error);
                }
            );
        },[]
    );

    const handleSubmit = (e)=>{
        e.preventDefault();

        console.log("Name: "+Name+
        " Character Image: "+CharImage+
        " Race: "+Race+ 
        " Class: "+Class+
        " SubClass: "+SubClass+
        " Stats: "+Statline);

        const Charsheet = {
            Name:Name,
            CharImage:CharImage,
            Race:Race,
            Class:Class,
            SubClass:SubClass,
            Statline:Statline
        };

        axios.put('http://localhost:4000/api/charsheet/'+id, Charsheet)
        .then((res)=>{
            navigate('/ViewCharacters');
        })
        .catch(
            (error)=>{
                console.log(error)
            });
    }
    return (
        <div>
            <h2>Hello from Edit component!</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Character Name: </label>
                    <input type="text"
                        className="form-control"
                        value={Name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Character Image: </label>
                    <input type="text"
                        className="form-control"
                        value={CharImage}
                        onChange={(e) => { setCharImage(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Character Race: </label>
                    <input type="text"
                        className="form-control"
                        value={Race}
                        onChange={(e) => { setRace(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Character Class: </label>
                    <input type="text"
                        className="form-control"
                        value={Class}
                        onChange={(e) => { setClass(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Edit Character Subclass:</label>
                    <input type="text"
                        className="form-control"
                        value={SubClass}
                        onChange={(e) => { setSubClass(e.target.value) }}
                    />  
                </div>
                <div className="form-group">
                    <label>Edit Character Stats(label them in order of "Strength, Constitution, Dexterity, Intelligence, Wisdom, Charisma"): </label>
                    <input type="text"
                        className="form-control"
                        value={Statline}
                        onChange={(e) => { setStatline(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit"
                    value="Edit Character">
                        </input>
                </div>
            </form>

        </div>
    );
}