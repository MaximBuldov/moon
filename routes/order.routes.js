const {Router} = require('express')
const Order = require('../models/Order')
const auth = require('../middleware/auth.middleware')
const router = Router()

router.post('/create', auth, async (req, res) => {
    try {
        const {details, total, info} = req.body
        const order = new Order({details, total, info})
        await order.save().catch(err => console.log(err));
        res.status(201).json({order})

    } catch (e) {
        res.status(500).json({message: `Order routes create error`, codeError: e});
    }
})

router.get('/', auth, async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.userId })
        res.json(orders)
    } catch (e) {
        res.status(500).json({message: 'something wrong'});
    }
})

router.post('/:id', auth, async (req, res) => {
    try {
        const order = await Order.findById(req.params.id)
        res.json(order)
    } catch (e) {
        res.status(500).json({message: 'something wrong'});
    }
})

module.exports = router