function pairElement(str) {
    let DNAPairs = []

    for (let letterIndex in str) {
        let currentPair = []

        // Better code would use a switch statement

        if (str[letterIndex] === "A") {
            currentPair.push("A")
            currentPair.push("T")
            DNAPairs.push(currentPair)
        } else if (str[letterIndex] === "T") {
            currentPair.push("T")
            currentPair.push("A")
            DNAPairs.push(currentPair)
        } else if (str[letterIndex] === "G") {
            currentPair.push("G")
            currentPair.push("C")
            DNAPairs.push(currentPair)
        } else if (str[letterIndex] === "C") {
            currentPair.push("C")
            currentPair.push("G")
            DNAPairs.push(currentPair)
        }
    }
    return DNAPairs
}
