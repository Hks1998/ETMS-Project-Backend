const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://hks1998:16071998@cluster1.jtvmp4b.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindandModify: false
}).then(() => {
    console.log('connection successful');
}).catch((err) => console.log(err));
