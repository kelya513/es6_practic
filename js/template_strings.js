console.log('------------st task17');
/*
 Task#17 The tooling team

 Given the data in the starting code, use a template string to produce the following string.
 Make sure the numbers, names, and team name actually come from the data.

 There are 4 people on the tooling team.
 Their names are Jennie, Ronald, Martin, Anneli.
 2 of them have a senior role.
 */

const teamName = "tooling";
const people = [{name: "Jennie", role: "senior"},
    {name: "Ronald", role: "junior"},
    {name: "Martin", role: "senior"},
    {name: "Anneli", role: "junior"}];

let message = `There are ${people.length} people on the ${teamName} team.
Their names are ${people.reduce((msg, man, index, arr)=>{msg += (index == arr.length - 1) ? man.name +'.': man.name +', ';})}.
${people.filter((ele)=> ele.role == 'senior').length} of them have a senior role.`;

console.log(message);

/*
 ---------------------------------------------------------------------------------------------
 */

console.log('------------st task18');
/*
 Task#18 Template strings

 Write a function html that can be used as a template string tag, and produces a string in which all the interpolated pieces are escaped as HTML.
 Use the supplied escapeHTML function to do the escaping.

 Remember that a tag function gets an array of in-between strings as its first argument, and then the interpolated values as further arguments.
 */

function html(strings, ...values) {
    let str = "";
    for(let i=0; i<values.length; i++) {
        str += strings[i];
        str += escapeHTML(values[i]);
    }

    str += strings[strings.length-1];
    return str;
}

const mustEscape = '<>&"';
console.log(html`You should escape the ${mustEscape.length} characters “${mustEscape}” in HTML`);

function escapeHTML(string) {
    return String(string).replace(/"/g, "&quot;").replace(/</g, "&lt;")
        .replace(/>/g, "&gt;").replace(/&/g, "&amp;")
}


/*
 ---------------------------------------------------------------------------------------------
 */