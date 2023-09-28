const { logger, logEvents } = require('./logger')

const errorHandler = (err, req, res, next) => {
    logEvents(`${err.name}: ${err.message}\t${req.methos}\t${req.url}\t${req.headers.origin}`, 'errLog.log')
    const status = res.statusCode ? res.statusCode : 500 // server error
    res.status(status)
    res.json({message: err.message})
}

module.exports = errorHandler



