const express = require('express');
const router = express.Router();

const { Note } = require('../../../db/models');

// Get all notes
router.get('/', async (req, res) => {
    const notes = await Note.findAll();

    if (notes) {
        return res.json(notes);
    } else {
        return null;
    }
});

// Get a single note
router.get('/:id', async (req, res) => {
    const id = req.params.id;

    const note = await Note.findByPk(id);

    if (note) {
        return res.json(note);
    } else {
        return null;
    }

});

// Get all notes from single user
router.get('/user/:userId', async (req, res) => {
    const userId = req.params.userId;

    const notes = await Note.findAll({
        where: {
            userId: userId
        }
    });

    if (notes) {
        return res.json(notes);
    } else {
        return null;
    }
});

// Create a new note
router.post('/', async (req, res) => {
    const user = req.user;
    const { data } = req.body;

    const note = await Note.create({
        userId: user.id,
        data
    });

    if (note) {
        const safeNote = {
            data: note.data
        }
        return res.json(safeNote);
    } else {
        return null;
    }
    
});

// update a note
router.put('/:id', async (req, res) => {
    const { data } = req.body;
    const id = req.params.id;
    const note = await Note.findByPk(id);

    if (note) {
        await note.update({ data });
        const safeNote = {
            data: note.data
        }
        return res.json(safeNote);
    } else {
        return null;
    }

});

// Delete a note
router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    const note = await Note.findByPk(id);

    if (note) {
        await note.destroy();

        return res.json('Success!')
    } else {
        return null;
    }
});

module.exports = router;