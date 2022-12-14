const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const listEndpoints = require('express-list-endpoints')

//dependencia a la conexión a bd
const connectDB = require('./config/db')

//dependencias a las rutas
const bootcampRoutes = require('./routes/BootcampRoutes')
const userRoutes = require('./routes/UserRoutes')
const courseRoutes = require('./routes/CourseRoutes')
const reviewsRoutes = require('./routes/ReviewsRoutes')

//establecer el archivo de configuración
//con variables de entorno del proyecto
dotenv.config({
    path: './config_env/config.env'
})

//1 crear el objeto app
const app = express()

app.use(express.json())

//ejecutar la conexión a db
connectDB()

app.use('/api/v1/bootcamps', bootcampRoutes)
app.use('/api/v1/users', userRoutes)
app.use('/api/v1/courses', courseRoutes)
app.use('/api/v1/reviews', reviewsRoutes)

console.log(listEndpoints(app));

//3. ejecutar servidor
//de desarrollo express
app.listen(process.env.PORT , ()=>{
    console.log(`Servidor iniciado en puerto: ${ process.env.PORT }`.bgGreen.black);
})