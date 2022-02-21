//Server logic for socket.io

const app = require("express")();
const Server = require("http").createServer(app);
const port=process.env.PORT || 8000;
const cors =require("cors");

const io = require("socket.io")(Server ,{
    cors: {
        origin:"*",
        methods : ["GET","POST"]
    }
});

app.use(cors());

app.get('/',(req,res)=> {
    res.send("HealthGenic Server is Running");
})

io.on("connection" ,(socket)=> {
    socket.emit("me",socket.id)

    socket.on('disconnect', ()=> {
        socket.broadcast.emit("Call Ended");
    })

    socket.on("calluser", ({userToCall,signalData,from ,name})=> {
        io.to(userToCall).emit("calluser",{sigal :signalData,from,name});
          
    });
});


Server.listen(port,function(err) {
    if(err)
    {
        console.log(err);
    }
    console.log("Express Server is Running on Port ",port);
})
