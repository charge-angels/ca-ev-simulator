import type { ChargingStation } from '../../charging-station';
import type { OCPPError } from '../../exception';
import {
  type JsonType,
  type MessageType,
  OCPP16AvailabilityType,
  type OCPP16BootNotificationRequest,
  type OCPP16DataTransferRequest,
  OCPP16DiagnosticsStatus,
  type OCPP16DiagnosticsStatusNotificationRequest,
  OCPP16FirmwareStatus,
  type OCPP16FirmwareStatusNotificationRequest,
  type OCPP16HeartbeatRequest,
  OCPP16IncomingRequestCommand,
  OCPP16MessageTrigger,
  type OCPP16MeterValuesRequest,
  OCPP16RequestCommand,
  type OCPP16StatusNotificationRequest,
  type OCPP20BootNotificationRequest,
  OCPP20IncomingRequestCommand,
  OCPP20RequestCommand,
  type OCPP20StatusNotificationRequest,
  OperationalStatusEnumType,
} from '../internal';

export const RequestCommand = {
  ...OCPP16RequestCommand,
  ...OCPP20RequestCommand,
} as const;
export type RequestCommand = OCPP16RequestCommand | OCPP20RequestCommand;

export type OutgoingRequest = [MessageType.CALL_MESSAGE, string, RequestCommand, JsonType];

export type RequestParams = {
  skipBufferingOnError?: boolean;
  triggerMessage?: boolean;
  throwError?: boolean;
};

export const IncomingRequestCommand = {
  ...OCPP16IncomingRequestCommand,
  ...OCPP20IncomingRequestCommand,
} as const;
export type IncomingRequestCommand = OCPP16IncomingRequestCommand | OCPP20IncomingRequestCommand;

export type IncomingRequest = [MessageType.CALL_MESSAGE, string, IncomingRequestCommand, JsonType];

export type ResponseCallback = (payload: JsonType, requestPayload: JsonType) => void;

export type ErrorCallback = (error: OCPPError, requestStatistic?: boolean) => void;

export type CachedRequest = [
  ResponseCallback,
  ErrorCallback,
  RequestCommand | IncomingRequestCommand,
  JsonType
];

export const MessageTrigger = {
  ...OCPP16MessageTrigger,
} as const;
export type MessageTrigger = OCPP16MessageTrigger;

export type BootNotificationRequest = OCPP16BootNotificationRequest | OCPP20BootNotificationRequest;

export type HeartbeatRequest = OCPP16HeartbeatRequest;

export type StatusNotificationRequest =
  | OCPP16StatusNotificationRequest
  | OCPP20StatusNotificationRequest;

export type MeterValuesRequest = OCPP16MeterValuesRequest;

export type DataTransferRequest = OCPP16DataTransferRequest;

export type DiagnosticsStatusNotificationRequest = OCPP16DiagnosticsStatusNotificationRequest;

export type FirmwareStatusNotificationRequest = OCPP16FirmwareStatusNotificationRequest;

export type IncomingRequestHandler = (
  chargingStation: ChargingStation,
  commandPayload: JsonType
) => JsonType | Promise<JsonType>;

export const AvailabilityType = {
  ...OCPP16AvailabilityType,
  ...OperationalStatusEnumType,
} as const;
export type AvailabilityType = OCPP16AvailabilityType | OperationalStatusEnumType;

export const DiagnosticsStatus = {
  ...OCPP16DiagnosticsStatus,
} as const;
export type DiagnosticsStatus = OCPP16DiagnosticsStatus;

export const FirmwareStatus = {
  ...OCPP16FirmwareStatus,
} as const;
export type FirmwareStatus = OCPP16FirmwareStatus;

export type ResponseType = JsonType | OCPPError;
