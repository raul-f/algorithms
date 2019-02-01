module.exports = {
    bouncer: function(arr) {
        let localArray = [...arr]
        let k = 0
        for (let i = 0; i < arr.length; i++) {
            //console.log(JSON.stringify(localArray));
            //console.log("Going through the loop!");
            //console.log(arr[i]);
            if (!arr[i]) {
                //console.log("In the if condition!");
                localArray.splice(i - k, 1)
                k += 1
            }
            //console.log(JSON.stringify(localArray));
        }

        arr = localArray

        // Don't show a false ID to this bouncer.
        return arr
    }
}
