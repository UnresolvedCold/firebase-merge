var fs = require('fs');
var glob = require("glob")

var fileList = './CodeFiles.dat';
var js = '../../js'

fs.stat(fileList, function (err, stats) {
    //console.log(stats);//here we got all information of file in stats variable
    
    if (err) {
        if(err.code=='ENOENT')
        {
            CreateList();
            return;
        }

        return console.error(err);
    }
    
    //delete the backup file
    fs.unlink(fileList,function(err){
            if(err) return console.log(err);
    
            CreateList();

    });  
});

async function CreateList()
{

    //get all files name in js
    glob("**/*.js", { cwd: js }, function (er, files) {
    // files is an array of filenames.
    for(var i=0;i<files.length;i++)
    {
        fs.appendFile(fileList, '../../js/'+files[i]+'\n', function (err) {
            if (err) throw err;

        });
    }
    //console.log(files)
    });
}