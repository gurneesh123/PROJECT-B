// routes/bookRoutes.js
import express from 'express';
import Item from '../models/Item.js';

const router = express.Router();

// Get all items
router.get("/", async (req, res) => {
    try {
        const data = await Item.find({});
        res.json(data);
    } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Get item by ID
router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Item.findOne({ _id: id });
        res.json(data);
    } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Search items by category
router.get("/category/:category", async (req, res) => {
    try {
        const category = req.params.category;
        const data = await Item.find({ category: category });
        res.json(data);
    } catch (error) {
        console.error('Error retrieving data by category:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

export default router;
