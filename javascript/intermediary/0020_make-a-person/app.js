module.exports = {
    Person: function(firstAndLast) {
        // Complete the method below and implement the others similarly

        let fullName = firstAndLast
        let names = fullName.split(" ")
        let firstName = names[0]
        let lastName = names[names.length - 1]

        this.getFirstName = function() {
            console.log(`The first name is ${JSON.stringify(firstName)}`)
            return firstName
        }

        this.getLastName = function() {
            console.log(`The last name is ${JSON.stringify(lastName)}`)
            return lastName
        }

        this.getFullName = function() {
            console.log(`The full name is ${JSON.stringify(fullName)}`)
            return fullName
        }

        this.setFirstName = function(first) {
            firstName = first
            fullName = first + " " + lastName
        }

        this.setLastName = function(last) {
            lastName = last
            fullName = firstName + " " + last
        }

        this.setFullName = function(firstAndLast) {
            fullName = firstAndLast
            let newNames = fullName.split(" ")
            firstName = newNames[0]
            lastName = newNames[names.length - 1]
        }

        return firstAndLast
    }
}
