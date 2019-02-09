module.exports = {
    frankenSplice: function(arr1, arr2, n) {
        let finalArray = [...arr2]
        finalArray.splice(n, 0, ...arr1)
        // It's alive. It's alive!
        //console.log(JSON.stringify(arr2));
        return finalArray
    }
}
