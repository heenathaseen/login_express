const express = require('express');
const router = express.Router();

const credential = {
    "email": "admin@gmail.com",
    "password": "admin123"
}
console.log(credential.email)

//login user
router.post('/login', (res, req) => {
    if (req.body.email == credential.email && req.body.password == credential.password) {
        req.session.user = req.body.email;
        res.end('login success');
    } else {
        res.end("invalid Username");
    }
});
module.exports = router;