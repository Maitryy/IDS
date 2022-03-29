const router =  require("express").Router();
const Post = require("../models/post.js");

router.post("/posts",async (req,res) => {
    try {
        const{title, description, keyword, row, col} = req.body;
        var _id = new Date();
        _id = _id.getTime();
        if(!description || !title  || !keyword || !_id)
            return res
                .status(400)
                .json({errorMessage: "Please enter all details"});

        const existingPost = await Post.findOne({_id})
        if(existingPost)
            return res
                .status(400)
                .json({errorMessage: "A post with same id already exists"});    

        const NewPost = new Post({
            description: description,
            title: title,
            keywords: keyword,
            row: row,
            col: col,
            _id: _id
        });
        await NewPost.save();

        res.status(200).send({_id: _id});

    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
});


router.get("/GetAllPosts", async (req,res) => {
    try {
        const getPosts = await Post.find();
        res.send(getPosts);

    }catch(err) {
        console.error(err);
        res
            .status(401)
            .json({errorMessage: "Unauthorised"});
    }
});
module.exports = router;