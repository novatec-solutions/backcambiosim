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
  user: 'ECM8790L',
  channelTypeCode: '1',
  triedNumber: '1',
  Company: 'CLARO',
  Application: 'CAMBIO_SIM',
  accessKey: '27307e34b160a02bed9481455012d281f2fd153e',
  trace: true,
  accountType: 'N/A',
});

export const migrateSimRequest = (param) => ({
  min: param.min,
  iccidNew: param.iccidNew,
  codeDesactivation: '381',
  codeChangeIccid: 9,
  descriptionChangeIccid: 'Repo Voluntaria (Sin Costo)',
});
