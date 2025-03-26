const fs = require('fs');
const path = require('path');
let doc = path.join(__dirname, 'data', 'abc.txt');
let data = "This is temperoray String data";
fs.writeFile(doc, data, (err)=>{
    if(err){
        return console.log(err);
        
    }
    console.log("File write is successfull");
    
})