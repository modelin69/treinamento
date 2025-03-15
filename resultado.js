const resultado = (num, correto) => {
    if (correto) {
        console.log(`\u001b[0m${num} - \u001b[1;32mCORRETO!`)
    } else {
        console.log(`\u001b[0m${num} - \u001b[1;31mINCORRETO!`)
    }
}

module.exports = resultado