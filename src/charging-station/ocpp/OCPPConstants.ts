import {
  AvailabilityStatus,
  ChargingProfileStatus,
  ClearChargingProfileStatus,
  ConfigurationStatus,
  DataTransferStatus,
  GenericStatus,
  TriggerMessageStatus,
  UnlockStatus,
} from '../../types';
import { Constants } from '../../utils';

export class OCPPConstants {
  static readonly OCPP_WEBSOCKET_TIMEOUT = 60000; // Ms
  static readonly OCPP_TRIGGER_MESSAGE_DELAY = 500; // Ms

  static readonly OCPP_REQUEST_EMPTY = Constants.EMPTY_FREEZED_OBJECT;
  static readonly OCPP_RESPONSE_EMPTY = Constants.EMPTY_FREEZED_OBJECT;
  static readonly OCPP_RESPONSE_ACCEPTED = Object.freeze({ status: GenericStatus.Accepted });
  static readonly OCPP_RESPONSE_REJECTED = Object.freeze({ status: GenericStatus.Rejected });

  static readonly OCPP_CONFIGURATION_RESPONSE_ACCEPTED = Object.freeze({
    status: ConfigurationStatus.ACCEPTED,
  });

  static readonly OCPP_CONFIGURATION_RESPONSE_REJECTED = Object.freeze({
    status: ConfigurationStatus.REJECTED,
  });

  static readonly OCPP_CONFIGURATION_RESPONSE_REBOOT_REQUIRED = Object.freeze({
    status: ConfigurationStatus.REBOOT_REQUIRED,
  });

  static readonly OCPP_CONFIGURATION_RESPONSE_NOT_SUPPORTED = Object.freeze({
    status: ConfigurationStatus.NOT_SUPPORTED,
  });

  static readonly OCPP_SET_CHARGING_PROFILE_RESPONSE_ACCEPTED = Object.freeze({
    status: ChargingProfileStatus.ACCEPTED,
  });

  static readonly OCPP_SET_CHARGING_PROFILE_RESPONSE_REJECTED = Object.freeze({
    status: ChargingProfileStatus.REJECTED,
  });

  static readonly OCPP_SET_CHARGING_PROFILE_RESPONSE_NOT_SUPPORTED = Object.freeze({
    status: ChargingProfileStatus.NOT_SUPPORTED,
  });

  static readonly OCPP_CLEAR_CHARGING_PROFILE_RESPONSE_ACCEPTED = Object.freeze({
    status: ClearChargingProfileStatus.ACCEPTED,
  });

  static readonly OCPP_CLEAR_CHARGING_PROFILE_RESPONSE_UNKNOWN = Object.freeze({
    status: ClearChargingProfileStatus.UNKNOWN,
  });

  static readonly OCPP_RESPONSE_UNLOCKED = Object.freeze({ status: UnlockStatus.UNLOCKED });
  static readonly OCPP_RESPONSE_UNLOCK_FAILED = Object.freeze({
    status: UnlockStatus.UNLOCK_FAILED,
  });

  static readonly OCPP_RESPONSE_UNLOCK_NOT_SUPPORTED = Object.freeze({
    status: UnlockStatus.NOT_SUPPORTED,
  });

  static readonly OCPP_AVAILABILITY_RESPONSE_ACCEPTED = Object.freeze({
    status: AvailabilityStatus.ACCEPTED,
  });

  static readonly OCPP_AVAILABILITY_RESPONSE_REJECTED = Object.freeze({
    status: AvailabilityStatus.REJECTED,
  });

  static readonly OCPP_AVAILABILITY_RESPONSE_SCHEDULED = Object.freeze({
    status: AvailabilityStatus.SCHEDULED,
  });

  static readonly OCPP_TRIGGER_MESSAGE_RESPONSE_ACCEPTED = Object.freeze({
    status: TriggerMessageStatus.ACCEPTED,
  });

  static readonly OCPP_TRIGGER_MESSAGE_RESPONSE_REJECTED = Object.freeze({
    status: TriggerMessageStatus.REJECTED,
  });

  static readonly OCPP_TRIGGER_MESSAGE_RESPONSE_NOT_IMPLEMENTED = Object.freeze({
    status: TriggerMessageStatus.NOT_IMPLEMENTED,
  });

  static readonly OCPP_DATA_TRANSFER_RESPONSE_REJECTED = Object.freeze({
    status: DataTransferStatus.REJECTED,
  });

  protected constructor() {
    // This is intentional
  }
}
