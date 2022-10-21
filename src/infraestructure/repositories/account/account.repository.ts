import { Injectable } from '@nestjs/common';
import Axios from 'axios';
import { ID_CLARO_URL, SIM_MIGRATION_URL } from 'src/constants';
import { RequestMethod } from 'src/infraestructure/enum/request-method.enum';
import { HandleError } from 'src/infraestructure/handle-error';
import {
  migrateSimRequest,
  validateAccountRequest,
} from '../account/account.request';

@Injectable()
export class AccountRepository extends HandleError {
  async consultContacts(body) {
    try{
      const { data } = await Axios({
        method: RequestMethod.PUT,
        url: `${ID_CLARO_URL}Evaluate`,
        data: validateAccountRequest(body),
      });
      return this.validateContactsResponse(data);
    } catch (error) {
      return {
        error: 1,
        response: { description: `Ha ocurrido un error. ${error}` },
      }
    }
  }

  async migrateSim(body) {
    try{
      const { data } = await Axios({
        method: RequestMethod.POST,
        url: `${SIM_MIGRATION_URL}migrateSIMResource`,
        data: migrateSimRequest(body),
      });
      return this.processError(data);
    } catch (error) {
      return {
        error: 1,
        response: { description: 'Ha ocurrido un error' },
      }
    }
  }
}