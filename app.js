const fs = require('fs');
const generatePage = require('./src/page-template');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs

fs.writeFile('./index.html', generatePage(name, github), err => {
    if (err) throw new err;

    console.log('Portfolio complete! Checkout index.html to see the output!');
});


// const printProfileData = profileDataArr => {
//     // This
//     for (let i = 0; i <profileDataArr.length; i++) {
//     console.log(profileDataArr[i]);
//     }

//     console.log('================');

//     // IS the same as this
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);

