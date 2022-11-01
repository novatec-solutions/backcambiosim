export const generatePinRequest = (param) => ({
  headerRequest: {
    transactionId: 'string',
    system: 'string',
    target: 'string',
    user: 'string',
    password: 'string',
    requestDate: '2008-09-28T20:49:45',
    ipApplication: 'string',
    traceabilityId: 'string',
  },
  documentClient: param.documentClient,
  contactData: param.contactData,
  contactType: param.contactType,
  user: 'ECM1212',
  company: 'CLARO',
  application: 'CAMBIO_SIM',
  accessKey: '732956381a87a9227ce125e8730872fd3488e784',
});

export const validatePinRequest = (param) => ({
  headerRequest: {
    transactionId: 'string',
    system: 'string',
    target: 'string',
    user: 'string',
    password: 'string',
    requestDate: '2008-09-28T20:49:45',
    ipApplication: 'string',
    traceabilityId: 'string',
  },
  documentClient: param.documentClient,
  method: param.method,
  pinNumber: param.pinNumber,
  user: 'ECM1212',
  company: 'CLARO',
  application: 'CAMBIO_SIM',
  accessKey: '732956381a87a9227ce125e8730872fd3488e784',
  trace: true
});
