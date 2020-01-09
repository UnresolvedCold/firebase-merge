# firebase-merge
This frees user form typing all firebase cloud codes into index.js. Now you can split the codes as per your liking. 

# How to get started

1. Clone this repository to your root directory of firebase functions (ie. the directory containing 'firebase.json' file).<br /> <pre> git clone 'https://github.com/UnresolvedCold/firebase-merge.git'</pre>
1. Change the directory to 'firebase-merge' <br /><pre>cd firebase-merge</pre>
1. Install the required node modules<br /> <pre>npm install</pre>
1. Go back to the root directory and create a new directory named, 'js'<br/> <pre>cd ..<br />mkdir js</pre>
1. Write all your functions here as you would write in index.js. Here you can organize your functions as per your liking. You can create new folders into this also.
1. run auto.bat located in '/firebase-merge/firebase-merge/' directory to create the 'index.js' file automatically.
1. now deploy your functions.
