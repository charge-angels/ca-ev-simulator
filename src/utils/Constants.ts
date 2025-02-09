import { MeterValueMeasurand } from '../types';

export class Constants {
  static readonly OCPP_DEFAULT_BOOT_NOTIFICATION_INTERVAL = 60000; // Ms

  static readonly CHARGING_STATION_DEFAULT_RESET_TIME = 60000; // Ms
  static readonly CHARGING_STATION_ATG_INITIALIZATION_TIME = 1000; // Ms
  static readonly CHARGING_STATION_ATG_DEFAULT_STOP_AFTER_HOURS = 0.25; // Hours

  // See https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string
  static readonly SEMVER_PATTERN =
    '^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$';

  static readonly DEFAULT_CIRCULAR_BUFFER_CAPACITY = 1024;

  static readonly DEFAULT_HASH_ALGORITHM = 'sha384';

  static readonly DEFAULT_IDTAG = '00000000';

  static readonly DEFAULT_CONNECTION_TIMEOUT = 30;

  static readonly DEFAULT_LOG_STATISTICS_INTERVAL = 60; // Seconds

  static readonly DEFAULT_HEARTBEAT_INTERVAL = 60000; // Ms
  static readonly DEFAULT_METER_VALUES_INTERVAL = 60000; // Ms

  static readonly SUPPORTED_MEASURANDS = Object.freeze([
    MeterValueMeasurand.STATE_OF_CHARGE,
    MeterValueMeasurand.VOLTAGE,
    MeterValueMeasurand.POWER_ACTIVE_IMPORT,
    MeterValueMeasurand.CURRENT_IMPORT,
    MeterValueMeasurand.ENERGY_ACTIVE_IMPORT_REGISTER,
  ]);

  static readonly DEFAULT_FLUCTUATION_PERCENT = 5;

  static readonly DEFAULT_PERFORMANCE_RECORDS_FILENAME = 'performanceRecords.json';
  static readonly DEFAULT_PERFORMANCE_RECORDS_DB_NAME = 'e-mobility-charging-stations-simulator';
  static readonly PERFORMANCE_RECORDS_TABLE = 'performance_records';

  static readonly DEFAULT_UI_SERVER_HOST = 'localhost';
  static readonly DEFAULT_UI_SERVER_PORT = 8080;

  static readonly UNKNOWN_COMMAND = 'unknown command';

  static readonly MAX_RANDOM_INTEGER = 281474976710654;

  static readonly EMPTY_FREEZED_OBJECT = Object.freeze({});
  static readonly EMPTY_FUNCTION = Object.freeze(() => {
    /* This is intentional */
  });

  private constructor() {
    // This is intentional
  }
}
