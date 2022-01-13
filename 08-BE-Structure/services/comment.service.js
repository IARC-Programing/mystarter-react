const CommentModel = require('../models/Comment')

const methods = {
  async find(req) {
    return new Promise(async (resolve, reject) => {
      try {
        const obj = await CommentModel.find({})
        if (!obj) {
          reject(ErrorNotFound('id: not found'))
        }
        resolve(obj.toJSON())
      } catch (error) {
        reject(ErrorNotFound('id: not found'))
      }
    })
  },

  findById(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const obj = await CommentModel.findById(id).populate('employee')
        if (!obj) {
          reject(ErrorNotFound('id: not found'))
        }
        resolve(obj.toJSON())
      } catch (error) {
        reject(ErrorNotFound('id: not found'))
      }
    })
  },

  insert(req) {
    return new Promise(async (resolve, reject) => {
      try {
        const data = req.body
        const obj = new CommentModel(data)
        const inserteg = await obj.save()
        resolve(inserteg)
      } catch (error) {
        reject(ErrorBadRequest(error.message))
      }
    })
  },

  update(id, data) {
    return new Promise(async (resolve, reject) => {
      try {
        const obj = await CommentModel.findById(id)
        if (!obj) {
          reject(ErrorNotFound('id: not found'))
        }
        await CommentModel.updateOne({ _id: id }, data)
        resolve(Object.assign(obj, data))
      } catch (error) {
        reject(error)
      }
    })
  },

  delete(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const obj = await CommentModel.findById(id)
        if (!obj) {
          reject(ErrorNotFound('id: not found'))
        }
        await CommentModel.deleteOne({ _id: id })
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  },
}

module.exports = { ...methods }
