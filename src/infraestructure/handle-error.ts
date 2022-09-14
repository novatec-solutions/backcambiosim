import { HttpStatus } from '@nestjs/common';
import { MsgValidatePin, TypeContacts } from './enum/request-method.enum';
import { ResponseCodeMessage } from './enum/response-code.enum';

export class HandleError {
  httpCodesError = [
    HttpStatus.UNAUTHORIZED,
    HttpStatus.FORBIDDEN,
    HttpStatus.NOT_FOUND,
    HttpStatus.INTERNAL_SERVER_ERROR,
    HttpStatus.SERVICE_UNAVAILABLE
  ];

  processError(data) {
    if (this.httpCodesError.includes(data.statusCode)) {
      return this.errorResponse();
    } 

    return {
      error: data.code == '0' ? 0 : 1,
      response:
        data.code == '0'
          ? data
          : { description: ResponseCodeMessage[data.code] }
    };
  }

  validateContactsResponse(data){
    const [response] = data?.pinGeneratorResponse;
    const contact_array = [];

    if (response.isValid === 'true') {
      data?.telephoneNumbers?.map((elem) => {
        contact_array.push({ type: TypeContacts.PHONE, contact: elem });
      });
  
      data?.emails?.map((elem) => {
        contact_array.push({ type: TypeContacts.MAIL, contact: elem });
      });
    }
    contact_array.push({ type: '4', contact: '3102383099' }); //Data para pruebas
    contact_array.push({ type: '4', contact: '3108012045' }); //Data para pruebas

    const res = {
      error: 0,
      response: contact_array,
    };

    // const res = {
    //   error: response.isValid === 'true' ? 0 : 1,
    //   response:
    //     response.isValid === 'true'
    //       ? contact_array
    //       : { description: response?.message },
    // };
    return res;
  }

  validatePinResponse(data: any){
    if (data.pinGeneratorResponse) {
      const [response] = data.pinGeneratorResponse;
      return {
        error: response.isValid == 'true' ? 0 : 1,
        response: { 
          description: MsgValidatePin[response.message]
        }
      };
    }

    if (data.response.result == 'ERROR') {
      return this.errorResponse();
    }
  }

  errorResponse(){
    return {
      error: 1,
      response: { description: 'Ha ocurrido un error' },
    }
  }
}