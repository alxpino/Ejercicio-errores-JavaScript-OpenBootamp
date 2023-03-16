const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

const concat = (str1, str2) => {
    if(typeof str1 == "string" && typeof str2 == "string"){
        return str1 + str2;
    }
    throw new Error("Error de tipo");
}


try{
    const c = concat("A", 3);
    console.log(c);
} catch(e){
    logger.error("Error: " + e);
} finally {
    logger.info("Fin de la ejecución");
}