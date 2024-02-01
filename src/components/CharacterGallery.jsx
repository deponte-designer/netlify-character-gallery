// import CharacterData from "..data/characterData";
// import Character from "./Character";
// // this component should show all characters defined in src/data/characterData.json
// // should render it as a list of character component

// function CharacterGallery() {
//     //body
//     console.log(CharacterData);
//     return (
//         // <div>This is CharacterGallery components</div>
//         <div>
//             { CharacterData.map((Character) => (
//             <Character 
//                 key={character._id} 
//                 name={character.name}
//                 img={character.imgUrl} 
//                 birth={character.birth}
//                 death={character.death}
//                 race={character.race}
//                 realm={character.realm}
//                 spouse={character.spouse}
//                 />
//             ))}
//         </div>
//     );
// }

// export default CharacterGallery;



// ========================= OTHER WAY TO DO IT ======================

import characterData from '../data/characterData.json';
import Character from './Character';
// This component should show all Characters defined in src\data\characterData.json file
// Should render it as list of character component

function CharacterGallery() {
    // Body
    return (
        <div>
            { characterData.map(
                (character) => <Character
                    key={character.id}
                    { ...character } // this is equivalent as the lines below
                    // _id={character._id}
                    // height={character.height}
                    // race={character.race}
                    // gender={character.gender}
                    // birth={character.birth}
                    // spouse={character.spouse}
                    // death={character.death}
                    // realm={character.realm}
                    // hair={character.hair}
                    // name={character.name}
                    // wikiUrl={character.wikiUrl}
                    // imgUrl={character.imgUrl}
                />
            )}
        </div>
    );
}

export default CharacterGallery;