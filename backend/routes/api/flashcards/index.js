const express = require('express');
const router = express.Router();

const { FlashCard } = require('../../../db/models');

// Get all FlashCards for a single user
router.get('/', async (req, res) => {
    const userId = req.user.id;
    const flashCards = await FlashCard.findAll({
        where: {
            userId
        }
    });

    if (flashCards) {
        const safeFlashCards = flashCards.map(flashCard => {
            return { 
                question: flashCard.question, 
                answer: flashCard.answer 
            }
        });

        return res.json(safeFlashCards);
    } else {
        return null;
    }
});

// Get a single FlashCard
router.get('/:id', async (req, res) => {
    const id = req.params.id;

    const flashCard = await FlashCard.findByPk(id);

    if (flashCard) {
        const safeFlashCard = { 
            question: flashCard.question, 
            answer: flashCard.answer 
        };
        return res.json(safeFlashCard);
    } else {
        return null;
    }

});

// Create a FlashCard
router.post('/', async (req, res) => {
    const userId = req.user.id;
    const { question, answer } = req.body;

    const newFlashCard = await FlashCard.create({
        userId,
        question,
        answer
    });

    if (newFlashCard) {
        const safeFlashCard = { 
            question: newFlashCard.question,
            answer: newFlashCard.answer
         };
        return res.json(safeFlashCard);
    } else {
        return null;
    }

});

// Update a task
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const { question, answer } = req.body;

    const flashCardToUpdate = await FlashCard.findByPk(id);

    if (flashCardToUpdate) {
        await flashCardToUpdate.update({ question, answer });
        const safeFlashCard = { 
            question: flashCardToUpdate.question,
            answer: flashCardToUpdate.answer
        }

        return res.json(safeFlashCard);
    } else {
        return null;
    }

});

// Delete a task
router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    const flashCard = await FlashCard.findByPk(id);

    if (flashCard) {
        await flashCard.destroy();
        return res.json('Success!');
    } else {
        return null;
    }
});

module.exports = router;