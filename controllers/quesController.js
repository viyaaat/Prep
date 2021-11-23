const Ques = require('../models/ques');


const ques_index = (req, res) => {
    Ques.find().sort({
        createdAt: -1
    })
        .then((result) => {
            res.render('../project/pages/index_ques', {
                title: 'ALL',
                ques: result
            });
        })
        .catch((err) => {
            console.log(err);
        })
}
const ques_topic = (req, res) => {
    const topics = req.query.search;
    Ques.find({ $or: [{ 'topic': { $regex: topics } }, { 'title': { $regex: topics } }] }).sort({
        createdAt: -1
    })
        .then((result) => {
            res.render('../project/pages/index_ques', {
                title: "SEARCHED",
                ques: result
            });
        })
        .catch((err) => {
            console.log(err);
        })
}
const ques_my = (req, res) => {
    const id = req.params.id;
    Ques.find({ "author": id }).sort({
        createdAt: -1
    })
        .then((result) => {
            res.render('../project/pages/index_ques', {
                title: 'PERSONAL',
                ques: result
            });
        })
        .catch((err) => {
            console.log(err);
        })
}
const ques_delete = (req, res) => {
    const id = req.params.id;
    Ques.findByIdAndDelete(id).
        then(result => {
            res.json({ redirect: '/' });
        }).catch(err => {
            console.log(err);
        })
}

const ques_details = (req, res) => {
    const id = req.params.id;
    Ques.findById(id).then((result) => {
        res.render('../project/pages/details_ques', { ques: result, title: 'ques Details' });
    })
        .catch((err) => {
            res.status(404).render('../project/pages/404.ejs', { title: 'que not found' });
        });
}

const ques_create_get = (req, res) => {
    res.render('../project/pages/create_ques', { title: 'share' });
}
const ques_create_post = (req, res) => {
    const que = new Ques(req.body);
    que.save()
        .then((result) => {
            res.redirect('/ques');
        })
        .catch((err) => {
            console.log(err);
        })
}

module.exports = { ques_index, ques_topic, ques_my, ques_delete, ques_details, ques_create_get, ques_create_post };