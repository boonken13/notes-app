const fs = require('fs')

const getNotes = function () {
    console.log("doing some work");
};

const addNote = function (title, body) {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function () {
        return notes.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
    }else {
        console.log("Note title taken!")
    }

}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)

    fs.writeFileSync("notes.json", dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}
module.exports = {
    getNotes: getNotes,
    addNote: addNote
}