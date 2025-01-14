var config = {
    email: {}
}
config.puerto= 3000
config.bdPrueba= 'ProyectoFinalPrueba'
config.bd= 'ProyectoFinal'
config.secret= "123456oisjfoewirjow3eijweoir-+--++-"

config.urlReal= "http://localhost:4200"

config.email.host= "smtp.gmail.com"
config.email.port= 587
config.email.user= "pruebadecorreo438@gmail.com"
config.email.pass= "vozsosponkmaqoar"

config.expiracion= 60000*5

config.blacklist = [
    "http://localhost:4200"
]

module.exports.config= config