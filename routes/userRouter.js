const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const auth = require("../middleware/auth");


router.post("/signup", async (req, res) => {
    try {
        const { firstName, lastName, email, password, userCreated } = req.body;

        if (!firstName || !lastName || !email || !password) {
            return res
            .status(400).json({ msg: "Not all fields have been entered" });
        }

        if (password.length < 5) {
            return res
                .status(400)
                .json({ msg: "The password must be at least 5 characters long" })
        }

        const existingEmail = await User.findOne({ email: email });
        if (existingEmail) {
            return res
                .status(500)
                .json({ msg: "An account with this email already exists" })
        }
 
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);
    
        const newUser = new User({
            email: email,
            password: passwordHash,
            firstName: firstName,
            lastName: lastName,
            userCreated: userCreated

        });

        const savedUser = await newUser.save();
        res.json(savedUser);
    }
    catch (error) {
        res.status(500).json({ err: error.message});
    }
});

router.post("/login", async (req,res) => {
    try {
        const {email, password } = req.body;

        if (!email || !password) {
            return res
            .status(400)
            .json({ msg: "Not all fields have been entered"});
        }

        const user = await User.findOne({ email: email });
        if (!user) {
            return res
            .status(400)
            .json({ msg: "User already exists." });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res
            .status(400)
            .json ({ msg: "Invalid credentials."})
        }

        const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET);
        res.json({
            token,
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
            },
        });
    } catch (error) {
        res.status(500).json({ err: error.message });
    }
});

router.delete("/delete", auth, async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.user);
        res.json(deletedUser);
    } catch (error) {
        res.status(500).json({ err: error.message });
    }
});

router.post("/tokenIsValid", async (req,res) => {
    try {
        const token = req.header("x-auth-token");
        if (!token) return res.json(false);
 
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if (!verified) return res.json(false);

        const user = await User.findById(verified.id);
        if (!user) return res.json(false);

        return res.json(true);
    } catch (error) {
        res.status(400)
        .json({ err: error.message });
    }
})

module.exports = router;


