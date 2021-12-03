const errorHandlers = (err, req, res, next) => {
  let message
  let statusCode
  switch (err.name) {
    case 'ValidationError':
      statusCode = 400
      const msg = []
      for (const field in err.errors) {
        const el = err.errors[field]
        msg.push(el.message)
      }
      message = msg
      break
    case 'NotFound':
      statusCode = 404
      message = 'Data not found'
      break
    case 'InvalidToken':
      statusCode = 403
      message = 'You dont have access'
      break
    default:
      statusCode = err.statusCode || 500
      message = err.message || 'Internal server error'
      break
  }

  res.status(statusCode).json({ message })
}

module.exports = { errorHandlers }
