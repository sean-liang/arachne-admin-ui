export class DictItem {
  prefix?: string;
  key: string;
  color?: string;
  data?: any;

  get fullKey(): string {
    return `${this.prefix}.${this.key}`;
  }

  get i18nKey(): string {
    return `dict.${this.fullKey}`;
  }
}

export const DICT_DATA: any = {
  httpMethod: [
    { key: 'GET', color: 'blue' },
    { key: 'POST', color: 'green' },
    { key: 'PUT', color: 'gold' },
    { key: 'DELETE', color: 'red' },
  ],
  'worker.status': [
    { key: 'NORMAL', color: 'blue' },
    { key: 'DISABLED', color: 'red' },
  ],
  'worker.protocol': [
    { key: 'HTTP', color: 'blue' },
    { key: 'WEBSOCKET', color: 'green' },
  ],
  'target.status': [
    { key: 'SCHEDULED', color: 'purple' },
    { key: 'RUNNING', color: 'blue' },
    { key: 'PAUSED', color: 'gold' },
    { key: 'FAIL', color: 'red' },
    { key: 'DONE', color: 'green' },
    { key: 'DISABLED', color: 'default' },
  ],
  'target.retryStrategy': [
    { key: 'NEVER', color: 'default' },
    { key: 'LOCAL', color: 'blue' },
    { key: 'CLUSTER', color: 'green' },
  ],
  'target.repetition': [
    { key: 'NEVER', color: 'default' },
    { key: 'INTERVAL', color: 'blue' },
    { key: 'CRON', color: 'green' },
  ],
  'target.actionprovider': [
    {
      key: 'TEMPLATE_GENERATED',
      color: 'green',
    },
    {
      key: 'MONGO_COLLECTION',
      color: 'blue',
    },
  ],
  'target.store': [
    {
      key: 'MONGO_DOCUMENT',
      color: 'green',
    },
  ],
  'target.pipe': ['ATTACH_UPDATE_TIMESTAMP_PIPE', 'SCRIPT_PIPE'],
};
