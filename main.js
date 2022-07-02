//pokemon object
class Pokemon {
    //define constructor
    constructor (id, name, imgUrl, cryUrl){
        this.id = id; 
        this.name = name; //case sensitive, will remember 
        this.imgUrl = pokeimgUrl;
        this.cryUrl = cryUrl;
    }
};

//DO NOT USE inner function to get pokemon name DO NOT USE
const getPokeNameWAIT = async (id) =>{
    let req = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    let res = await req.json();
    return res.forms[0].name;    
}

//gets pokemon name by forcing the promise ot resolve
const getPokeName = async (id) => {
    console.log('getting name now')
    const name = await getPokeNameWAIT(id);
    return name
}

//get img url DOES NOT EXTRACT FROM API
const getPokeImg = (id) => {
    //return interpolated string
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`
};

//get cry url
const getPokeCry = (name) => {
    //return interpolated string
    return `https://play.pokemonshowdown.com/audio/cries/${name.toLowerCase()}.mp3`
}

//array to hold main banner roster (above user)
const bannerRoster = []
//array to hold user's chosen roster
const userRoster = []

//array of objects that hold pokemon
const hoennStarters = [
    {name: 'Sceoptile', id: '254'},
    {name: 'Blaizken', id: '257'},
    {name: 'Swampert', id: '260'},
];

//creation of pokemon object (does not handle invalid inputs)
const createPokemon = (id) => {
}

