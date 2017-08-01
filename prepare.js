var fs = require('fs');

var str = `
    Config = {
        bucket: '${process.env.COSMIC_BUCKET}'
    };

    module.exports = Config;
`;
fs.writeFile("./src/config.js", str, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});