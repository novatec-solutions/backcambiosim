export const validateAccountRequest = (param) => ({
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
  channelTypeCode: '1',
  triedNumber: '1',
  accountType: 'N/A',
  user: 'ECM8790L',
  company: 'CLARO',
  application: 'CAMBIO_SIM',
  accessKey: '732956381a87a9227ce125e8730872fd3488e784',
  trace: true,
});

export const migrateSimRequest = (param) => ({
  min: param.min,
  min_b: param.min_b,
  iccidNew: param.iccidNew,
  codeDesactivation: '381',
  codeChangeIccid: 9,
  descriptionChangeIccid: 'Repo Voluntaria (Sin Costo)',
});
