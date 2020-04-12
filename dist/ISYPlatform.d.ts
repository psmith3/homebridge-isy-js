import { API, PlatformConfig, PlatformPlugin } from 'homebridge';
import { Logging } from 'homebridge/lib/logger';
import { PlatformAccessory } from 'homebridge/lib/platformAccessory';
import { ISY, ISYDevice, ISYNode } from 'isy-js';
import { IgnoreDeviceRule } from '../typings/config';
import { ISYAccessory } from './ISYAccessory';
import './utils';
export declare class ISYPlatform implements PlatformPlugin {
    log: Logging;
    config: PlatformConfig;
    host: string;
    username: string;
    password: string;
    elkEnabled: boolean;
    debugLoggingEnabled: boolean;
    includeAllScenes: boolean;
    includedScenes: [];
    ignoreRules: IgnoreDeviceRule[];
    homebridge: API;
    static Instance: ISYPlatform;
    accessories: PlatformAccessory[];
    accessoriesWrappers: Map<string, ISYAccessory<any, any>>;
    accessoriesToRegister: PlatformAccessory[];
    accessoriesToConfigure: Map<string, PlatformAccessory>;
    isy: ISY;
    constructor(log: Logging, config: PlatformConfig, homebridge: API);
    logger(msg: string): void;
    shouldIgnore(device: ISYNode): boolean;
    getGarageEntry(address: string): any;
    renameDeviceIfNeeded(device: ISYNode): any;
    configureAccessory(accessory: PlatformAccessory): boolean;
    createAccessories(): Promise<void>;
    createAccessory(device: ISYDevice<any>): ISYAccessory<any, any>;
}
//# sourceMappingURL=ISYPlatform.d.ts.map