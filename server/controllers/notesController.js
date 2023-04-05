const Note = require("../models/note")

const fetchNotes = async (req,res)=>{
    //Find the notes from db
    const notes = await Note.find()

    //Respond with the notes
    res.json({ notes: notes })
}

const fetchNote = async (req,res)=>{
    //Get the id from url
    const noteId = req.params.id

    //Find the note by id
    const note = await Note.findById(noteId)

    //Respond with the note
    res.json({ note: note })
}
const createNote = async (req,res)=>{
    //Get data from request body
    const title = req.body.title
    const body = req.body.body

    //Make a note with it
    const note = await Note.create({
        title: title,
        body: body,
    })

    //Respond with the created note
    res.json({ note: note})
}

const updateNote = async (req,res)=>{
    //Get the id from url
    const noteId = req.params.id

    //Get data from request body
    const title = req.body.title
    const body = req.body.body

    //Find and update the note
    await Note.findByIdAndUpdate(noteId, {
        title: title,
        body: body,
    })

    //Find updated note by id
    const note = await Note.findById(noteId)

    //Respond with the note
    res.json({ note: note})

}

const deleteNote = async (req,res)=>{
    //Get the id from url
    const noteId = req.params.id

    //Delete the note
    await Note.deleteOne({ _id: noteId })

    //Respond with success
    res.json({ success: "Note deleted successfully "})

}

module.exports = {
    fetchNotes: fetchNotes,
    fetchNote: fetchNote,
    createNote: createNote,
    updateNote: updateNote,
    deleteNote: deleteNote
}