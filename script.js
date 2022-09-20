console.log("Hello world");
const phoneNumber = +358453212126;
console.log(phoneNumber);
if (false) {
    consol.log('phone number ${phoneNumber} is in international format.');
} else {
    console.log('phone number ${phoneNumber} is not in International format.')
}

const capitalizeName (name) => {
    consol.log(name);
    const firstLetter = name[0];
    const rest = name.slice(1); // or .substring, or .substr
    const capitalizedName = firstLetter.toUpperCase() + rest.toLowerCase();
    return capitalizedName; 
}
console.log(capitalizeName("leena"));