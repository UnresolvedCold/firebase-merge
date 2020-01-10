/**
	function files : .js
	header/initializer : .init
*/
var fs = require('fs');
var glob = require("glob")

var fileList = './CodeFiles.dat';
var headerList = './init.dat'
var js = '../../js'

fs.stat(fileList, function (err, stats) {
    //console.log(stats);//here we got all information of file in stats variable
    
    if (err) {
        if(err.code=='ENOENT')
        {
            CreateList();
 
        }
		else

        return console.error(err);
    }
	else
    
    //delete the backup file
    fs.unlink(fileList,function(err){
            if(err) return console.log(err);
    
            CreateList();

    });  
});

fs.stat(headerList, function (err, stats) {
    //console.log(stats);//here we got all information of file in stats variable
    
    if (err) {
        if(err.code=='ENOENT')
        {
            CreateHeaderList();
        }
		else
        return console.error(err);
    }
    else
    //delete the backup file
    fs.unlink(headerList,function(err){
            if(err) return console.log(err);
    
            CreateHeaderList();

    });  
});



async function CreateList()
{

    //get all files name in js
    glob("**/!(*.init).js", { cwd: js}, function (er, files) {
    // files is an array of filenames.
    for(var i=0;i<files.length;i++)
    {
		console.log("Listing function "+files[i]);
        fs.appendFile(fileList, '../../js/'+files[i]+'\n', function (err) {
            if (err) throw err;

        });
    }
    //console.log(files)
    });
}

async function CreateHeaderList()
{
	//get init js files
    glob("**/*.init", { cwd: js }, function (er, files) {
    // files is an array of filenames.
    for(var i=0;i<files.length;i++)
    {
		console.log("Listing header "+files[i]);
        fs.appendFile(headerList, '../../js/'+files[i]+'\n', function (err) {
            if (err) throw err;

        });
    }
    //console.log(files)
    });
}
