import express from 'express';
const app = express();
const PORT = process.env.PORT || 3001;
import cors from "cors";
import catsRouter from "./routes/catsRouter.js";
// import path from 'path';

// import __dirname  from './dirname.js';
// import cookieParser  from 'cookie-parser';

// import logger  from 'morgan';





// app.use(logger('dev'));
app.use(cors());

// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

//test route
app.get("/", function (req,res) {
    res.json({
        success: true,
        message: "Test route working",
    });
});


// // Return "https" URLs by setting secure: true
// cloudinary.config({
//   secure: true
// });

// // Log the configuration
// console.log(cloudinary.config());

app.use(express.json());
app.use("/cats", catsRouter);

// app.use(function (req, res, next) {
//   res.status(404).json({message: "We couldn't find what you were looking for 😞"})
// })

// app.use(function (err, req, res, next) {
//   console.error(err.stack)
//   res.status(500).json(err)
// })



app.listen(PORT, function () {
	console.log(`Server is running on port ${PORT}`);
});

export default app;
