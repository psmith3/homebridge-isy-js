import './utils';
import { Categories } from 'hap-nodejs';
import { InsteonDoorWindowSensorDevice } from 'isy-nodejs';
import { ISYDeviceAccessory } from './ISYDeviceAccessory';
export declare class ISYDoorWindowSensorAccessory extends ISYDeviceAccessory<InsteonDoorWindowSensorDevice, Categories.SENSOR> {
    constructor(device: InsteonDoorWindowSensorDevice);
    translateCurrentDoorWindowState(): boolean;
    getCurrentDoorWindowState(callback: any): void;
    handleExternalChange(propertyName: string, value: any, oldValue: any, formattedValue: string): void;
    setupServices(): void;
}
//# sourceMappingURL=ISYDoorWindowSensorAccessory.d.ts.map