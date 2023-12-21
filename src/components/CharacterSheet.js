import CharacterSheetItem from "./CharacterSheetItem";

function CharacterSheet(props){

    return props.myCharacterSheets.map(
        (Charsheet)=>{
            return <CharacterSheetItem myCharacterSheet={Charsheet} key={Charsheet._id} Reload={()=>{props.ReloadData();}}></CharacterSheetItem>
        }
    );

}

export default CharacterSheet;