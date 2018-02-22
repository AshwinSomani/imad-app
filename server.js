var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));





var terminal={   
'terminal_one':{
    title:'HELLOPAPA',
    date:'18.12.1998',
    heading:'terminal-one',
    content:`
                    <p>
                    ..prachi i luv uprachi i luv u...prachi i luv uprachi i luv u...prachi i luv uprachi i luv uprachi i luv uprachi i luv u..prachi i luv uprachi i luv u
                    </p>
                    <p>
                    ..prachi i luv uprachi i luv u...prachi i luv uprachi i luv u...prachi i luv uprachi i luv uprachi i luv uprachi i luvu..prachi i luv uprachi i luv u
                    </p>
                    <p>
                    ..prachi i luv uprachi i luv u...prachi i luv uprachi i luv u...prachi i luv uprachi i luv uprachi i luv uprachi i luv u..prachi i luv uprachi i luv u
                    </p>    
                `

},
'terminal_two':{
    title:'Helloashwin',
    date:'12.12.1997',
    heading:'terminal-two',
    content:'Hello here is ashwin somani'
},
'terminal_three':{
    title:'Helloashwinsomani',
    date:'12.12.2016',
    heading:'terminal-three',
    content:'Hello here is ashwin somani...hows u'
}
};
function somaniji(data){
    var date=data.date;
    var heading=data.heading;
    var title=data.title;
    var content=data.content;
var HtmlCodes=`
<html>
    
    <head>
       <title>
           HELLOPAPA
        </title>
         <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
              <div class="center">
            <img src="/ui/madi.png" class="img-medium"/>
        </div>
            <div class='ashwin'>
            <div>
                <a href="/">ashwinsomani</a>
                </div>
                <hr/>
                <h5>
                    ${heading}
                    </h5>
                    <div>
                        ${date}
                        </div>
                <div>
                    ${content}
                    </div>
            </div>
            </body>
    
</html>

`;

    return HtmlCodes;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:terminalName',function(req,res){
    var terminalName=req.params.terminalName;
    res.send(somaniji(terminal[terminalName]));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/terminal_four',function(req,res){
  
   res.send("hello");
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
