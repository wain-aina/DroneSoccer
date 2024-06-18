const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

const Email = require('./models/mail');
const Student = require('./models/student');
const Stem = require('./models/stem');

const mongoose = require('./controllers/mongodb');

const port = 3000;

app.get('/', (req,res)=>{
    res.render('index.ejs');
})

app.get('/stem', (req,res)=>{
    res.render('stem.ejs');
})

app.get('/join', (req,res)=>{
    res.render('join.ejs');
})

app.get('/sports', (req,res)=>{
    res.render('sports.ejs');
})

app.get('/events', (req,res)=>{
    res.render('events.ejs');
})

app.get('/FAQs', (req,res)=>{
    res.render('faq.ejs');
})

app.post('/subscribe', async(req,res)=>{
    try {
        let { email } = req.body;
        let newMail = new Email({ email });

        newMail.save().then(()=>{
            res.status(201).json({
                message: 'You have successfully subscribed to out newsletter. We Will Keep You Up-To-Date With The Latest In Drone Soccer.'
            })
        });

    } catch(err) {
        res.status(500).json({
            error: 'Something Went Wrong. PLease Try Again Later'
        });
    }
})

app.post('/student', async(req,res)=>{
    try {
        let { fname, lname, phone, email, school, age } = req.body;
        let newStudent = new Student({ fname, lname, phone, email, school, age });

        newStudent.save().then(()=>{
            res.status(201).json({
                message: 'Thank You For Enrolling To Drone Soccer. We Will Send You An Email With More Details.'
            })
        });

    } catch(err) {
        res.status(500).json({
            error: 'Something Went Wrong. PLease Try Again Later'
        });
    }
})

app.post('/stem', async(req,res)=>{
    try {
        let { fname, lname, phone, email, school, service } = req.body;
        let newStem = new Stem({ fname, lname, phone, email, school, service });

        newStem.save().then(()=>{
            res.status(201).json({
                message: 'Thank You For Showing Interest In The Curriculum. A Response Will Be Sent To You.'
            })
        });

    } catch(err) {
        res.status(500).json({
            error: 'Something Went Wrong. Please Try Again Later'
        });
    }
})

app.all('*', (req, res) => {
    res.render('404.ejs');  // Replace with your 404 page content
});

app.listen(port, (req, res) => {
    console.log(`Server started on port ${port || '3000'}`)
})

