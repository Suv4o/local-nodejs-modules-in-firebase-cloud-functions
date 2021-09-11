module.exports.capitalise = function (input) {
    const words = input.split(" ");
    const CapitalisedWords = [];
    words.forEach((word) => {
        CapitalisedWords.push(
            word[0].toUpperCase() + word.slice(1, word.length)
        );
    });
    return CapitalisedWords.join(" ");
};
