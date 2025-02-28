// Partial Copyright Jerome Benoit. 2021-2023. All Rights Reserved.

import { parentPort, workerData } from 'node:worker_threads';

import { ThreadWorker } from 'poolifier';

import { ChargingStation, ChargingStationUtils } from './internal';
import type { ChargingStationWorkerData } from '../types';
import { Utils } from '../utils';
import { WorkerConstants, type WorkerMessage, WorkerMessageEvents } from '../worker';

/**
 * Create and start a charging station instance
 *
 * @param data - workerData
 */
const startChargingStation = (data: ChargingStationWorkerData): void => {
  const station = new ChargingStation(data.index, data.templateFile);
  station.start();
};

/**
 * Listen messages send by the main thread
 */
const addMessageListener = (): void => {
  parentPort?.on('message', (message: WorkerMessage<ChargingStationWorkerData>) => {
    if (message.id === WorkerMessageEvents.startWorkerElement) {
      startChargingStation(message.data);
    }
  });
};

// Conditionally export ThreadWorker instance for pool usage
export let threadWorker: ThreadWorker;
if (ChargingStationUtils.workerPoolInUse()) {
  threadWorker = new ThreadWorker<ChargingStationWorkerData>(startChargingStation, {
    maxInactiveTime: WorkerConstants.POOL_MAX_INACTIVE_TIME,
    async: false,
  });
} else {
  // Add message listener to start charging station from main thread
  addMessageListener();
  if (Utils.isUndefined(workerData) === false) {
    startChargingStation(workerData as ChargingStationWorkerData);
  }
}
