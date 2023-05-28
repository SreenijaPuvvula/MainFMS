const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const Faculty = require('../models/facultySchema');

router.post('/save', (req, res) => {
  Faculty.findOne({ "fid": req.body.fid })
    .then((foundFaculty) => {
      if (!foundFaculty) {
        const newData = new Faculty({
          fid: req.body.fid,
          facultyName: req.body.facultyName,
          fatherName: req.body.fatherName,
          motherName: req.body.motherName,
          age: req.body.age,
          gender: req.body.gender,
          education: req.body.education,
          designation: req.body.designation,
          department: req.body.department,
          doj: req.body.doj,
          experience: req.body.experience,
          aadhar: req.body.aadhar,
          pan: req.body.pan,
          mobile: req.body.mobile,
          email: req.body.email,
        })
        newData.save()
          .then(() => {
            res.send('Faculty added Successfully');
          })
          .catch((err) => {
            console.log('Error: ', err);
          })
      }
      else {
        res.send("Faculty already exists")
      }
    })

});


router.post('/getFaculty', async (req, res) => {
  let searchdata = req.body.searchdata;
  let search = await Faculty.find({ facultyName: { $regex: new RegExp('^' + searchdata + '.*', 'i') } }).exec();
  search = search.slice(0, 10);
  res.send({ searchdata: search });
})

router.get('/getFacultyDetails', (req, res) => {
  Faculty.find()
    .then((results) => {
      res.send(results);
    })
    .catch((err) => {
      console.log(err);
    });
})

router.get('/getUpdatedFaculty', async (req, res) => {
  try {
    const allUser = await Faculty.find({}).then((results) => {
      res.send({ status: "ok", data: results });
    })
      .catch((err) => {
        console.log(err);
      })
  } catch (err) {
    console.log(err);
  }
});

router.post('/delete', async (req, res) => {
  const { fid } = req.body;
  try {
    Faculty.deleteOne({ fid: fid })
      .then((response) => {
        res.send(response);
        console.log(response);
      })
      .then((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
})

router.get('/edit/:id', (req, res) => {
  const id = req.params.id;
  res.send(id);
})

router.get('/editfaculty', (req, res) => {

  res.send('Edit Department')
})

router.get('/getFacultyDetails/:id', (req, res) => {
  // const facultyId = req.params.id;

  Faculty.findOne({ fid: req.params.id })
    .then((faculty) => {
      if (!faculty) {
        return res.status(404).json({ error: 'Faculty not found' });
      }
      res.send(faculty);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

router.put('/putFaculty/:id', (req, res) => {
  Faculty.findOneAndUpdate({ fid: req.params.id }, { $set: req.body }, { returnNewDocument: true })
    .then((results) => {
      console.log(results);
      res.status(200).json({ message: 'Faculty updated successfully' });
    })
    .catch((error) => {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

router.post('/upload', (req, res) => {
  const csvData = req.body.csvData;
  csvData.map((csvRecord) => {
    Faculty.findOne({ "fid": csvRecord.fid })
      .then((foundFaculty) => {
        if (!foundFaculty) {
          const newData = new Faculty({
            fid: csvRecord.fid,
            facultyName: csvRecord.facultyName,
            fatherName: csvRecord.fatherName,
            motherName: csvRecord.motherName,
            age: csvRecord.age,
            gender: csvRecord.gender,
            education: csvRecord.education,
            designation: csvRecord.designation,
            department: csvRecord.department,
            doj: csvRecord.doj,
            experience: csvRecord.experience,
            aadhar: csvRecord.aadhar,
            pan: csvRecord.pan,
            mobile: csvRecord.mobile,
            email: csvRecord.email
          })
          newData.save()
            .then(() => {
              res.send("CSV Data Uploaded Successfully !!")
            })
            .catch((err) => {
              console.log('Error: ', err);
            })
        }
        else {
          res.send("Some Faculty already exists in the Database. Added remaining Faculty successfully!! Refresh to see the changes !")
        }
      })
      .catch((err) => {
        console.log('Error: ', err);
      })

  })
});


router.post("/getFacultyProfile", (req, res) => {
  let fid = req.body.facID;
  console.log(fid)
  Faculty.findOne({ fid: fid })
    .then((foundFaculty) => {
      res.send(foundFaculty)
    })
    .catch((err) => {
      console.log("Error")
    })
})


module.exports = router;







