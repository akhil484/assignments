const fs = require("fs");

function cleanFile(filePath) {
	return new Promise(function(resolve){
	 	fs.readFile(filePath, "utf-8", function (err, data) {
            console.log(data);
	        data = data.replace(/\s+/g, ' ').trim();
            fs.writeFile(filePath, data, function () {
                resolve();
            });
	  });
	 });
  
}

function onDone() {
  console.log("file has been cleaned");
}

cleanFile("a.txt").then(onDone)