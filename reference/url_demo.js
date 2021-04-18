const url = require('url');

const myUrl = new URL('https://avci-home.de/calculator.html?id=100&status=activ');

//Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);

// Hostname (without port)
console.log(myUrl.hostname);

//Pathname (unterseiten ( alles nach dem / von der root domain))
console.log(myUrl.pathname);

//Setializhed query
console.log(myUrl.search);

// Params object (all the variables in URL)
console.log(myUrl.searchParams);

// Add Param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

//Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));