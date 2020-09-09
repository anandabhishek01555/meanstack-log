const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true,useCreateIndex: true,useUnifiedTopology: true}, (err) => {
    if (!err) { console.log('MongoDB connection succeeded.'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
});
// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true,useUnifiedTopology: true }, (err)=>{
//     if (!err) { console.log('MongoDB connection succeeded.'); 
// });
// .then(res => console.log('Connected to db'));

require('./user.model');