
const express=require('express') //we are importing expressJs functionality here
const app=express()  // express export an function we are storing it in app variable, we can see that going to file express
const bodyParser=require('body-parser')

//importing two routes in this file
const AdminPage=require('./routes/adminPage')
const UserPage=require('./routes/userPage')

// before passing it to the server we need to send it to middleware
//now what is middleware?
//nodejs is based on Middleware ,between request and response there is middleware, it is an set of function which handle I/O operations
//new middleware is made by using use() this is an method which takes 3 argument req,res and next

// app.use((req,res,next)=>{
    // console.log('this is first middleware')
    // next() //without using next our program stoped here at this middleware, we have to use this to run next middleware
// })
// app.use((req,res,next)=>{
//     console.log('this is second middleware')
//     let obj={
//         name:'wilson'
//     }
    // res.setHeader('') res.write() is now replaced by res.send with th help of expressJS
    //by default the content type of .send is text/html which we are doing manually previously
    // now we can send anything from here to our server, like another  html  file etc etc
    // res.send('<h1>hello from the express middleware</h1>') 
    // res.send(obj) //by deafualt the data other than string, like object bool or int is of application/JSON is content -type

// })

// this is the old method of making a server 
// const http=require('http')
// const server=http.createServer(app) //yes also app is an valid request handler here
// server.listen(3000)
app.use(bodyParser.urlencoded()) // this middleware encoded our data into string for whole code, we dont have to use next() because bydefault it call next()
app.use(AdminPage)
app.use(UserPage)
app.use((req,res,next)=>{ //if no route is found , we are sending 404 status code
res.status(404).send('<h1>Page Not Found</h1>')
})
// with the help of express we can just do it in one line
//ofcorse at the backend it is creating with the previous method but express framework make it too easy
app.listen(3000)

