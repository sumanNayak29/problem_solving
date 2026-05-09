/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {

    const arrayLenght = functions.length

    return function (x) {

        if (!arrayLenght) return x
        
        let updatedX = x
        for (let i = arrayLenght - 1; i >= 0; i--) {
            updatedX = functions[i](updatedX)
        }
        return updatedX

    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */