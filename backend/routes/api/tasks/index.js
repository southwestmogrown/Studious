const express = require('express');
const router = express.Router();

const { Task } = require('../../../db/models');

// Get all tasks for a single user
router.get('/', async (req, res) => {
    const userId = req.user.id;
    const tasks = await Task.findAll({
        where: {
            userId
        }
    });

    if (tasks) {
        const safeTasks = tasks.map(task => {
            return { 
                task: task.task, 
                completed: task.completed 
            }
        });

        return res.json(safeTasks);
    } else {
        return null;
    }
});

// Get a single task
router.get('/:id', async (req, res) => {
    const id = req.params.id;

    const task = await Task.findByPk(id);

    if (task) {
        const safeTask = { 
            task: task.task, 
            completed: task.completed 
        };
        return res.json(safeTask);
    } else {
        return null;
    }

});

// Create a task
router.post('/', async (req, res) => {
    const userId = req.user.id;
    const { task } = req.body;

    const newTask = await Task.create({
        userId,
        task
    });

    if (newTask) {
        const safeTask = { task: newTask.task };
        return res.json(safeTask);
    } else {
        return null;
    }

});

// Update a task
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const { task, completed } = req.body;

    const taskToUpdate = await Task.findByPk(id);

    if (taskToUpdate) {
        await taskToUpdate.update({ task, completed });
        const safeTask = { 
            task: taskToUpdate.task,
            completed: taskToUpdate.completed
        }

        return res.json(safeTask);
    } else {
        return null;
    }

});

// Delete a task
router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    const task = await Task.findByPk(id);

    if (task) {
        await task.destroy();
        return res.json('Success!');
    } else {
        return null;
    }
});

module.exports = router;