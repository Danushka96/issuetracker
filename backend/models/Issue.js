import mongoose, { Schema } from 'mongoose';

const schema = mongoose.schema;

let Issue = new Schema({
    title : {
        type: String
    },
    responsible : {
        type: String
    },
    description : {
        type: String
    },
    serverity : {
        type: String
    },
    status : {
        type: String,
        default: 'Open'
    }
});

export default mongoose.model('Issue',Issue);