const express = require('express'); 
const fs = require('fs'); 
const path = require('path') 
const formidable = require('formidable'); 
const app = express(); 
   // add api req
app.post('/api/upload', (req, res, next) => { 
    const form = new formidable.IncomingForm(); 
    form.parse(req, function(err, fields, files){ 
        var oldPath = files.fileUpload.path; 
        var newPath = path.join(__dirname, 'uploads') 
                + '/'+files.fileUpload.name 
        var rawData = fs.readFileSync(oldPath) 
      
        fs.writeFile(newPath, rawData, function(err){ 
            if(err) console.log(err) 
            return res.send("Successfully uploaded") 
        }) 
  }) 
}); 
   
app.listen(3000, function(err){ 
    if(err) console.log(err) 
    console.log('Server listening on Port 3000'); 
}); 