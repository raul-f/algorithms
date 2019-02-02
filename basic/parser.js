const fs = require("fs")

fs.readFile("file.json", "utf8", (err, file) => {
    if (err) {
        console.log(err)
    } else {
        // console.log(JSON.stringify(file))
        // let commentRegEx = /\/\*(\s||.)+\*\//
        let commentRegEx = /\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/
        let jsonRegEx = /{(\s||.)+}/
        let comment = file.match(commentRegEx)[0]
        let json = JSON.parse(file.match(jsonRegEx)[0])
        // console.log(comment)
        // console.log(json)
        // console.log(file.match(jsonRegEx))
        fs.appendFile(
            "file.js",
            comment + "\r\n\r\n" + json["index.js"],
            err => {
                if (err) console.log(err)
                else console.log("Successfully appended data to file!")
            }
        )
    }
})
