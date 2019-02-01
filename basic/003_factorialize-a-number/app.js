module.exports = {
    factorialize: function(num) {
        if (num === 0) {
            num = 1
        }
        for (let i = num - 1; i > 0; i--) {
            num *= i
        }
        return num
    }
}
