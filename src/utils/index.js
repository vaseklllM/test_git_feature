const generationTodayDate = () => {
    const today = new Date()
    return `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`
}



module.exports = { generationTodayDate }
