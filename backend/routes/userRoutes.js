import express from 'express';
import { User } from '../models/user.js';

const router = express.Router();

router.post('/', async (request, response) => {
    try {
        if (
            !request.body.name ||
            !request.body.email ||
            !request.body.password
        ) {
            return response.status(400).send({
                message: 'Enter all the required fields!'
            });
        }

        const newUser = {
            name: request.body.name,
            email: request.body.email,
            password: request.body.password
        };

        const ques = await User.create(newUser)

        return response.status(201).send(ques);
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
});

router.get('/', async (request, response) => {
    try {
        const users = await User.find({});

        return response.status(200).json(users);
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
});

router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const user = await User.findById(id);

        return response.status(200).json(user);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.name ||
            !request.body.email ||
            !request.body.password
        ) {
            return response.status(400).send({
                message: 'Enter all the required fields!'
            });
        }

        const { id } = request.params;

        const user = await User.findByIdAndUpdate(id, request.body);

        if(!user) {
            return response.status(404).json({ message: 'User not found' });
        }

        return response.status(200).send({ message: 'User information updated successfully' });
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
});

router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const user = await User.findByIdAndDelete(id);

        if(!result) {
            return response.status(404).json({ message: 'User not found' });
        }
        return response.status(200).send({ message: 'User deleted successfully' });
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
});

export default router;