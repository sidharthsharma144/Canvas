const express = require('express')
const mongoose = require('mongoose') 
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const path = require('path')


dotenv.config()

if (process.env.NODE_ENV === 'local') {
    app.use(cors({
        origin: 'http://localhost:3000',
        credentials: true
    }))
} else {
    app.use(cors({
        credentials: true
    }))
}

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,"./frontend/dist")))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'./','frontend','dist','index.html'))
    })
}

const dbConnect = async () => {
    try {
        if (process.env.NODE_ENV === 'local') {
            await mongoose.connect(process.env.LOCAL_DB_URI)
            console.log('Local database is connected...')
        } else {
            await mongoose.connect(process.env.MONGODB_URI)
            console.log('Production database is connected...')
        }
    } catch {
        console.log('Database Connection Failed!')
    }
}

dbConnect()

const PORT = process.env.PORT || 3000 

app.listen(PORT, () => console.log(`Server is running on port ${PORT}..`))
