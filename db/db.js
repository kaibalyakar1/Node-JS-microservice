const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://200301120011:TRFmp2SzD47Cxjiy@cluster0.euk3eru.mongodb.net/?retryWrites=true&w=majority', {
   

}).then(() => {
    console.log('Connection successfull!');
}).catch((e) => {
    console.error('Connection failed!!!', e);
});
