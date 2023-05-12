const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017/FMS_DB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//gives acknowledgement whether connection with mongoDB is established or not
mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
})
const backendSchema = {

    facultyID: String,
    facultyName: String,
    fatherName: String,
    motherName: String,
    age: Number,
    gender: String,
    education: String,
    designation: String,
    department: String,
    doj: String,
    experience: Number,
    aadhar: Number,
    pan: String,
    mobile: Number,
    email: String,

};

const Backend = mongoose.model("Backend", backendSchema);

app.use(cors());

app.use(morgan('tiny'));


app.use(express.json())


app.get("/insert", (req, res) => {
    Backend.find({})
        .then((backendData) => {
            res.json(backendData);
        })
        .catch((err) => {
            console.log(err);
        })
})

app.post("/insert", (req, res) => {
    const newData = new Backend({
        facultyID: req.body.id,
        fatherName: req.body.fatherName,
        motherName: req.body.motherName,
        age: req.body.age,
        gender: req.body.gender,
        education: req.body.education,
        designation: req.body.designation,
        doj: req.body.doj,
        experience: req.body.experience,
        aadhar: req.body.aadhar,
        pan: req.body.pan,
        mobile: req.body.phno,
        email: req.body.email,
    });
    res.send(newData);

    newData.save()
        .then((results) => {
            console.log("Successfully added ");
            res.json(results);
        })
        .catch((err) => {
            console.log(err);
        })
})

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});