var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool=require("pg").Pool;
var app = express();
var crypto=require('crypto');
app.use(morgan('combined'));
var config={
  user:'somainashwin1998',
  host:'db.imad.hasura-app.io',
  database:'somaniashwin1998',
  port:'5432',
  password:process.env.DB_PASSWORD
};
var terminal={   
'terminal-one':{
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
var counterc=0;
app.get('/counter',function(req,res){
    counterc++;
    res.send(counterc.toString());
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ashwin',function(req,res){
    
    res.send("hello");
});
var pool=new Pool(config);
app.get("/test-db",function(req,res){
    pool.query("select * FROM test",function(err,result){
        if(err){
            res.status(500).send(err.toString());
        }
        else{
            res.send(JSON.stringify(result.rows));
        }
    });
});
function hash(input,salt){
    var hashed=crypto.pbkdf2Sync(input,salt,10000, 512, 'sha512');
    return hashed.toString("hex");
}
app.get('/hash/:input',function(req,res){
   var hashstring=hash(req.params.input,"this -is -some-random-string");
   res.send(hashstring);
});
    app.get('/terminal/:terminalName',function(req,res){
       pool.query("Select * FROM article where title = '"+req.params.terminalame + "'",function(err,result){
           if(err){
                   res.status(500).send(err.toString());
           }
           else{
               if(result.rows.length===0){
                   res.status(404).send('Article not found');
               }
               else{
                   var articleData=result.rows[0];
                   res.send(createTemplate(articleData));
               }
           }
       }); 
    });
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
