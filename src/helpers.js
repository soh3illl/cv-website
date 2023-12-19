export const ucwords = (words) => {
    return words
        .split(" ")
        .map((word) => {
            return word.toUpperCase().slice(0, 1) + word.slice(1);
        })
        .join(" ");
};

export const chunk = (array, chunkSize) => {
    console.log(array, "inside chunk");
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunkedArray.push(array.slice(i, i + chunkSize));
    }

    return chunkedArray;
};
