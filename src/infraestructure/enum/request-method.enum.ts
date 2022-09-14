export enum RequestMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
}

export enum TypeContacts {
  PHONE = '4',
  MAIL = '1'
}

export enum TypesValidatePin {
  ERR_MAX_TIME = 'La fecha del PIN ha expirado, por favor genere uno nuevo.',
  ERR_VERIFY_PIN = 'Verificar la información ingresada, el pin, propiedades o operación no corresponden con el cliente registrado.',
  PIN_VALIDATED = 'PIN validado satisfactoriamente.'
}

export const MsgValidatePin = {
  [TypesValidatePin.ERR_VERIFY_PIN]: 'El código que acabaste de ingresar es incorrecto, solicita un nuevo código e intenta nuevamente',
  [TypesValidatePin.ERR_MAX_TIME]: 'Tu código de verificación ha superado el tiempo máximo de verificación, solicita un nuevo código para continuar con el proceso',
  [TypesValidatePin.PIN_VALIDATED]: 'Pin validado exitosamente'
}