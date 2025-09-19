const express = require('express');
const router = express.Router();

// Example object (isko apne data se replace kar sakte ho)
const obj = {
    message: "Hello Rahul! Router is working fine 🚀",
    status: "success"
};

router.get('/', (req, res) => {
    res.json(obj);
});

module.exports = router;
 