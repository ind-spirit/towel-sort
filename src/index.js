module.exports = function towelSort(matrix) {
    let arr = [],
        j,
        i,
        n = 0;

    if (matrix !== undefined) {
        if (matrix.length > 0) {
            for (i = 0; i < matrix.length; i++) {
                for (j = 0; j < matrix[i].length; j++) {
                    if (i % 2 == 0) {
                        arr[n] = matrix[i][j];
                        n++;
                    } else {
                        arr[n] = matrix[i][matrix[i].length - j - 1];
                        n++;
                    }
                }
            }
        } else {
            return arr;
        }
    } else {
        return arr;
    }
    return arr;
}