const Mall = require("../models/mall");

// return mall list from db
exports.getAllMalls = async (req, res) => {
    try {
        const malls = await Mall.find({}, 'title address img').lean();
        res.json(malls); // return mall list
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch malls', error: error.message });
    }
};

// return mall object from db
exports.getMall = async (req, res) => {
    const { mallName } = req.params;
    try {
        const mall = await Mall.findOne({ title: mallName }).lean();
        if (!mall) {
            return res.status(404).json({ message: "Mall not found" });
        }
        res.json(mall); // return mall object
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch mall ' + mallName, error: error.message });
    }
}

// return posts of mallName mall
exports.getPosts = async (req, res) => {
    const { mallName } = req.params;
    try {
        const mall = await Mall.findOne({ title: mallName }).lean();
        if (!mall) {
            return res.status(404).json({ message: "Mall not found" });
        }

        const posts = mall.posts || [];

        // Get the start and end timestamps for the current day
        const startOfDay = new Date();
        startOfDay.setHours(0, 0, 0, 0);

        const endOfDay = new Date();
        endOfDay.setHours(23, 59, 59, 999);

        // Filter posts to include only those from the current day
        const todayPosts = posts.filter(post => {
            const postDate = new Date(post.timestamp);
            return postDate >= startOfDay && postDate <= endOfDay;
        });

        // Sort posts by timestamp in descending order
        const sorted = todayPosts.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

        res.status(200).json(sorted);
    } catch (error) {
        console.error("Error fetching posts:", error);
        res.status(500).json({ message: 'Error fetching posts', error: error.message });
    }
};


// (post) add a post to mallName mall
exports.addPost = async (req, res) => {
    const { name, title, store,  subject, body } = req.body;
    const { mallName } = req.params;
    try {
        const newPost = { name, title, store, subject, body, timestamp: new Date(), comments:[] };
        const result = await Mall.findOneAndUpdate(
            { title: mallName },
            { $push: { posts: newPost } },
            { new: true, upsert: false }
        );
        if (!result) {
            return res.status(404).json({ message: "Mall not found" });
        }
        res.status(201).json(result.posts);
    } catch (error) {
        res.status(500).json({ message: 'Failed to save post in ' + mallName, error: error.message });
    }
}

exports.addComment = async (req, res) => {
    const { name, body} = req.body;
    const { mallName, postId } = req.params;

    try{
        const newComment = {name, body, timestamp: new Date() };
        const result = await Mall.findOneAndUpdate(
            {   title: mallName,
                "posts._id": postId },
            { $push: { "posts.$.comments": newComment } },
            { new: true }
        )

        if (!result) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.status(201).json(result.posts);
        } catch (error) {
        res.status(500).json({ message: 'Failed to add comment to post ' + postId + ' in ' + mallName, error: error.message });
    } 
}


module.exports = exports; // export all functions in this file