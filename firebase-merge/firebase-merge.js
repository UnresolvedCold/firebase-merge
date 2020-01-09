var fs = require('fs');

var index = '../index.js'; //this is the entry point for firebase
var indexBackup = '../index.bak';
var fileList = './CodeFiles.dat'; //this contains the address of list of files to be combined

fs.stat(indexBackup, function (err, stats) {
    //console.log(stats);//here we got all information of file in stats variable
    
    if (err) {
        if(err.code=='ENOENT')
        {
            ProcessCodeFiles();
            return;
        }

        return console.error(err);
    }
    
    //delete the backup file
    fs.unlink(indexBackup,function(err){
            if(err) return console.log(err);
    
            ProcessCodeFiles();

    });  
});

async function ProcessCodeFiles()
{
    //read the file list
    fs.rename(index, indexBackup, function (err) {
        if (err) throw err;
        console.log('Creation of backup was successfull');
        fs.readFile(fileList, function read(err, _fileList) {
            if (err) {
                throw err;
            }
            var content = _fileList;
            var array = content.toString().split("\n");

            //open individual files
            for(var i=0;i<array.length;i++) {

                var filename = array[i].trim();
                console.log('processing '+filename);
                fs.readFile(filename, function read(err, _data) {
                    if (err) {
                        throw err;
                    }
                    
                    //create index.js
                    fs.appendFile(index, _data+'\n\n', function (err) {
                        if (err) throw err;

                    });

                });
            }
        });
    });
}
