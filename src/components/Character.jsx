// function Character(props) {
//     //body

//     return (
//         // <div>This is Character components</div>
//         <div>
//             <h2>{props.name}</h2>
//         </div>
//     );
// }

// export default Character;

// ================ MY SOLUTION ==================

// function Character(props) {
//     const {
//         name,
//         birth,
//         death,
//         race,
//         realm,
//         spouse,
//         imgUrl,
//     } = props;

//     return (
//         <div>
//             <h2>{name}</h2>
//             <img src={imgUrl} alt={`Portrait of ${name}`} />
//             <ul>
//                 <li>Date of Birth: {birth}</li>
//                 <li>Date of Death: {death}</li>
//                 <li>Race: {race}</li>
//                 <li>Realm: {realm}</li>
//                 <li>Spouse: {spouse}</li>
//             </ul>
//         </div>
//     );
// }

// export default Character;



// ========================= OTHER WAY TO DO IT ======================

function Character({ name, imgUrl, birth, death, race, realm, spouse }) {
    return (
        <div>
            <h2>{name}</h2>
            <img src={imgUrl} alt={name} />
            <ul>
                <li>Date of Birth: {birth}</li>
                <li>Date of Death: {death}</li>
                <li>Race: {race}</li>
                <li>Realm: {realm}</li>
                <li>Spouse: {spouse}</li>
            </ul>
        </div>
    );
}

export default Character;