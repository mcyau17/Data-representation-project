import { useState } from "react";
import axios from "axios";

function AddCharacter() {

    const [Name, setName] = useState('');
    const [CharImage, setCharImage] = useState('');
    const [Race, setRace] = useState('');
    const [Class, setClass] = useState('');
    const [SubClass, setSubClass] = useState('');
    const [Statline, setStatline] = useState('');

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

        axios.post('http://localhost:4000/api/charsheet',Charsheet)
        .then()
        .catch();

    }
    // some comment
    return (
        <div>
            <h2>Create your character</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>What is your characters name?: </label>
                    <input type="text"
                        className="form-control"
                        value={Name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>What does your character look like?: </label>
                    <input type="text"
                        className="form-control"
                        value={CharImage}
                        onChange={(e) => { setCharImage(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>What race is your character?: </label>
                    <input type="text"
                        className="form-control"
                        value={Race}
                        onChange={(e) => { setRace(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>What Class is your character?: </label>
                    <input type="text"
                        className="form-control"
                        value={Class}
                        onChange={(e) => { setClass(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Does your character have a subclass and if so what is it?: </label>
                    <input type="text"
                        className="form-control"
                        value={SubClass}
                        onChange={(e) => { setSubClass(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>What are your characters stats?(label them in order of "Strength, Constitution, Dexterity, Intelligence, Wisdom, Charisma"): </label>
                    <input type="text"
                        className="form-control"
                        value={Statline}
                        onChange={(e) => { setStatline(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit"
                    value="Add Character">
                        </input>
                </div>
            </form>
        </div>
    );

}
export default AddCharacter;