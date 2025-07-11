const express = require('express');

const path = require('path');
      
const app = express();

// const publicPath = path.join(__dirname,'.','assets');

const port = process.env.PORT || 9000;

      app.use(express.static(__dirname));

      app.get('/*', function(req, res){
            res.sendFile(path.join(__dirname, 'index.html'));
      });

      app.listen(port,()=> {
      	console.log(`Server is running on port ${port}. `);
      });