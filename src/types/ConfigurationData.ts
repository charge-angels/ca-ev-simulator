import type { ListenOptions } from 'node:net';

import type { WorkerChoiceStrategy } from 'poolifier';

import type { ApplicationProtocol, AuthenticationType, StorageType } from './internal';
import type { WorkerProcessType } from '../worker';

type ServerOptions = ListenOptions;

export enum SupervisionUrlDistribution {
  ROUND_ROBIN = 'round-robin',
  RANDOM = 'random',
  CHARGING_STATION_AFFINITY = 'charging-station-affinity',
}

export type StationTemplateUrl = {
  file: string;
  numberOfStations: number;
};

export type UIServerConfiguration = {
  enabled?: boolean;
  type?: ApplicationProtocol;
  options?: ServerOptions;
  authentication?: {
    enabled: boolean;
    type: AuthenticationType;
    username?: string;
    password?: string;
  };
};

export type StorageConfiguration = {
  enabled?: boolean;
  type?: StorageType;
  uri?: string;
};

export type WorkerConfiguration = {
  processType?: WorkerProcessType;
  startDelay?: number;
  elementsPerWorker?: number;
  elementStartDelay?: number;
  poolMinSize?: number;
  poolMaxSize?: number;
  poolStrategy?: WorkerChoiceStrategy;
};

export type ConfigurationData = {
  supervisionUrls?: string | string[];
  supervisionUrlDistribution?: SupervisionUrlDistribution;
  stationTemplateUrls: StationTemplateUrl[];
  uiServer?: UIServerConfiguration;
  performanceStorage?: StorageConfiguration;
  worker?: WorkerConfiguration;
  autoReconnectMaxRetries?: number;
  /** @deprecated Moved to worker configuration section. */
  workerProcess?: WorkerProcessType;
  /** @deprecated Moved to worker configuration section. */
  workerStartDelay?: number;
  /** @deprecated Moved to worker configuration section. */
  elementStartDelay?: number;
  /** @deprecated Moved to worker configuration section. */
  workerPoolMinSize?: number;
  /** @deprecated Moved to worker configuration section. */
  workerPoolMaxSize?: number;
  /** @deprecated Moved to worker configuration section. */
  workerPoolStrategy?: WorkerChoiceStrategy;
  /** @deprecated Moved to worker configuration section. */
  chargingStationsPerWorker?: number;
  logStatisticsInterval?: number;
  logFormat?: string;
  logLevel?: string;
  logRotate?: boolean;
  logMaxFiles?: number | string;
  logMaxSize?: number | string;
  logFile?: string;
  logErrorFile?: string;
  logConsole?: boolean;
};
