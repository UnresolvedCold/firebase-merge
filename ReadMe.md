# firebase-merge

Now you don't need to write all your codes in a single 'index.js' file. You can split the code into multiple files without ever thinking about 'index.js'.

## How it works

All you need to do is write your code insida a specific folder named, "js" in the root directory of firebase functions. (ie. where firebase.json is present).
Then run 'perform-merge-operation.bat' in command line by coing inside the folder, 'firebase-merge/firebase-merge'.
In case of header files (ie. the files you want to write at the top of index.js), instead of .js at the end, change the extension to .init.
>Note: The manner in which function in the index.js file are arranged does not affect their uploading.
>You can also create sub folders inside the js directory.

## How to use

1. Clone this repository to your root directory of firebase function.
    >git clone <https://github.com/UnresolvedCold/firebase-merge.git>
1. Change the directory to 'firebase-merge'
    >cd firebase-merge
1. Install required node modules
    >npm install
1. Perform necessary operations like updating the gitignore to ignore the firebase-merge files and create a folder called js in root directory
    >install.bat
1. Write your code inside js file in the root directory.
1. run 'perform-merge-operation.bat' located in './firebase-merge/firebase/merge/' directory to update the index.js file.
1. Verify the content of index.js before uploading. 
    >Note: A backup file called, 'index.js.bak' is created before the execution of the script. If anything bad happens, 'you can delete the .bak extension of the backup file to get your original file'
1. Upload your function as always
    >firebase deploy

## What's next

1. Implementing a node command line to remove the unnecessary requirement of changing folders everytimne you merge.
