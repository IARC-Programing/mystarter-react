const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const schema = new mongoose.Schema(
  {
    employee: {
      type: mongoose.Types.ObjectId,
      ref: 'Employee',
    },
    process: {
      type: mongoose.Types.ObjectId,
      ref: 'Process',
    },
    message: String,
    file: { type: mongoose.Types.ObjectId, ref: 'File' },
    image: {
      type: mongoose.Types.ObjectId,
      ref: 'Image',
    },
  },
  { timestamps: true }
)

schema.plugin(uniqueValidator)

schema.methods.toJSON = function () {
  return {
    _id: this._id,
    id: this._id,
    employee: this.employee,
    process: this.manufacturing_order,
    message: this.message,
    file: this.file,
    image: this.image,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  }
}

schema.pre('save', (next) => {
  next()
})

const comment = mongoose.model('Comment', schema)

module.exports = comment
