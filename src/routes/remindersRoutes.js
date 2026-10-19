import {Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send('Get all reminders');
})

router.get('/:id', (req, res) => {
    console.log('Hello there');
    res.send('Get reminder by ID')
})

router.post('/', (req, res) => {
    res.send('Create new reminder')
})

router.patch('/:id', (req, res) => {
    res.send('Update old reminder')
})

router.delete('/:id', (req, res) => {
    res.send('Delete old reminder')
})

export default router;