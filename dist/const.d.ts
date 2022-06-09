export interface Logger {
    log(msg: string, ...args: any[]): void;
    error(msg: string, ...args: any[]): void;
    debug(msg: string, ...args: any[]): void;
}
export declare const baudRates: number[];
export declare const FLASH_SIZES: {
    "512KB": number;
    "256KB": number;
    "1MB": number;
    "2MB": number;
    "4MB": number;
    "2MB-c1": number;
    "4MB-c1": number;
    "8MB": number;
    "16MB": number;
};
export declare const ESP32_FLASH_SIZES: {
    "1MB": number;
    "2MB": number;
    "4MB": number;
    "8MB": number;
    "16MB": number;
    "32MB": number;
    "64MB": number;
    "128MB": number;
};
export declare const DETECTED_FLASH_SIZES: {
    18: string;
    19: string;
    20: string;
    21: string;
    22: string;
    23: string;
    24: string;
    25: string;
    26: string;
};
export declare const FLASH_WRITE_SIZE = 1024;
export declare const STUB_FLASH_WRITE_SIZE = 16384;
export declare const FLASH_SECTOR_SIZE = 4096;
export declare const ESP_ROM_BAUD = 115200;
export declare const ESP8266_SPI_REG_BASE = 1610613248;
export declare const ESP8266_BASEFUSEADDR = 1072693328;
export declare const ESP8266_MACFUSEADDR = 1072693328;
export declare const ESP8266_SPI_USR_OFFS = 28;
export declare const ESP8266_SPI_USR1_OFFS = 32;
export declare const ESP8266_SPI_USR2_OFFS = 36;
export declare const ESP8266_SPI_MOSI_DLEN_OFFS = -1;
export declare const ESP8266_SPI_MISO_DLEN_OFFS = -1;
export declare const ESP8266_SPI_W0_OFFS = 64;
export declare const ESP8266_UART_DATE_REG_ADDR = 1610612856;
export declare const ESP8266_BOOTLOADER_FLASH_OFFSET = 0;
export declare const ESP32_SPI_REG_BASE = 1072963584;
export declare const ESP32_BASEFUSEADDR = 1073061888;
export declare const ESP32_MACFUSEADDR = 1073061888;
export declare const ESP32_SPI_USR_OFFS = 28;
export declare const ESP32_SPI_USR1_OFFS = 32;
export declare const ESP32_SPI_USR2_OFFS = 36;
export declare const ESP32_SPI_MOSI_DLEN_OFFS = 40;
export declare const ESP32_SPI_MISO_DLEN_OFFS = 44;
export declare const ESP32_SPI_W0_OFFS = 128;
export declare const ESP32_UART_DATE_REG_ADDR = 1610612856;
export declare const ESP32_BOOTLOADER_FLASH_OFFSET = 4096;
export declare const ESP32S2_SPI_REG_BASE = 1061167104;
export declare const ESP32S2_BASEFUSEADDR = 1061265408;
export declare const ESP32S2_MACFUSEADDR = 1061265476;
export declare const ESP32S2_SPI_USR_OFFS = 24;
export declare const ESP32S2_SPI_USR1_OFFS = 28;
export declare const ESP32S2_SPI_USR2_OFFS = 32;
export declare const ESP32S2_SPI_MOSI_DLEN_OFFS = 36;
export declare const ESP32S2_SPI_MISO_DLEN_OFFS = 40;
export declare const ESP32S2_SPI_W0_OFFS = 88;
export declare const ESP32S2_UART_DATE_REG_ADDR = 1610612856;
export declare const ESP32S2_BOOTLOADER_FLASH_OFFSET = 4096;
export declare const ESP32S3_SPI_REG_BASE = 1610620928;
export declare const ESP32S3_BASEFUSEADDR = 1610641408;
export declare const ESP32S3_MACFUSEADDR: number;
export declare const ESP32S3_SPI_USR_OFFS = 24;
export declare const ESP32S3_SPI_USR1_OFFS = 28;
export declare const ESP32S3_SPI_USR2_OFFS = 32;
export declare const ESP32S3_SPI_MOSI_DLEN_OFFS = 36;
export declare const ESP32S3_SPI_MISO_DLEN_OFFS = 40;
export declare const ESP32S3_SPI_W0_OFFS = 88;
export declare const ESP32S3_UART_DATE_REG_ADDR = 1610612864;
export declare const ESP32S3_BOOTLOADER_FLASH_OFFSET = 0;
export declare const ESP32C3_SPI_REG_BASE = 1610620928;
export declare const ESP32C3_BASEFUSEADDR = 1610647552;
export declare const ESP32C3_MACFUSEADDR: number;
export declare const ESP32C3_SPI_USR_OFFS = 24;
export declare const ESP32C3_SPI_USR1_OFFS = 28;
export declare const ESP32C3_SPI_USR2_OFFS = 32;
export declare const ESP32C3_SPI_MOSI_DLEN_OFFS = 36;
export declare const ESP32C3_SPI_MISO_DLEN_OFFS = 40;
export declare const ESP32C3_SPI_W0_OFFS = 88;
export declare const ESP32C3_UART_DATE_REG_ADDR = 1610612860;
export declare const ESP32C3_BOOTLOADER_FLASH_OFFSET = 0;
export interface SpiFlashAddresses {
    regBase: number;
    baseFuse: number;
    macFuse: number;
    usrOffs: number;
    usr1Offs: number;
    usr2Offs: number;
    mosiDlenOffs: number;
    misoDlenOffs: number;
    w0Offs: number;
    uartDateReg: number;
    flashOffs: number;
}
export declare const SYNC_PACKET: number[];
export declare const CHIP_DETECT_MAGIC_REG_ADDR = 1073745920;
export declare const CHIP_FAMILY_ESP8266 = 33382;
export declare const CHIP_FAMILY_ESP32 = 50;
export declare const CHIP_FAMILY_ESP32S2 = 12882;
export declare const CHIP_FAMILY_ESP32S3 = 12883;
export declare const CHIP_FAMILY_ESP32C3 = 12995;
export declare const CHIP_FAMILY_ESP32C6 = 12998;
export declare const CHIP_FAMILY_ESP32H2 = 12914;
export declare type ChipFamily = typeof CHIP_FAMILY_ESP8266 | typeof CHIP_FAMILY_ESP32 | typeof CHIP_FAMILY_ESP32S2 | typeof CHIP_FAMILY_ESP32S3 | typeof CHIP_FAMILY_ESP32C3 | typeof CHIP_FAMILY_ESP32C6 | typeof CHIP_FAMILY_ESP32H2;
export declare const CHIP_DETECT_MAGIC_VALUES: {
    4293968129: {
        name: string;
        family: number;
    };
    15736195: {
        name: string;
        family: number;
    };
    1990: {
        name: string;
        family: number;
    };
    9: {
        name: string;
        family: number;
    };
    3942662454: {
        name: string;
        family: number;
    };
    1763790959: {
        name: string;
        family: number;
    };
    456216687: {
        name: string;
        family: number;
    };
    3391540258: {
        name: string;
        family: number;
    };
    228687983: {
        name: string;
        family: number;
    };
};
export declare const ESP_FLASH_BEGIN = 2;
export declare const ESP_FLASH_DATA = 3;
export declare const ESP_FLASH_END = 4;
export declare const ESP_MEM_BEGIN = 5;
export declare const ESP_MEM_END = 6;
export declare const ESP_MEM_DATA = 7;
export declare const ESP_SYNC = 8;
export declare const ESP_WRITE_REG = 9;
export declare const ESP_READ_REG = 10;
export declare const ESP_ERASE_FLASH = 208;
export declare const ESP_ERASE_REGION = 209;
export declare const ESP_SPI_SET_PARAMS = 11;
export declare const ESP_SPI_ATTACH = 13;
export declare const ESP_CHANGE_BAUDRATE = 15;
export declare const ESP_SPI_FLASH_MD5 = 19;
export declare const ESP_CHECKSUM_MAGIC = 239;
export declare const ESP_FLASH_DEFL_BEGIN = 16;
export declare const ESP_FLASH_DEFL_DATA = 17;
export declare const ESP_FLASH_DEFL_END = 18;
export declare const ROM_INVALID_RECV_MSG = 5;
export declare const USB_RAM_BLOCK = 2048;
export declare const ESP_RAM_BLOCK = 6144;
export declare const DEFAULT_TIMEOUT = 3000;
export declare const CHIP_ERASE_TIMEOUT = 600000;
export declare const MAX_TIMEOUT: number;
export declare const SYNC_TIMEOUT = 100;
export declare const ERASE_REGION_TIMEOUT_PER_MB = 30000;
export declare const MEM_END_ROM_TIMEOUT = 500;
/**
 * @name timeoutPerMb
 * Scales timeouts which are size-specific
 */
export declare const timeoutPerMb: (secondsPerMb: number, sizeBytes: number) => number;
export declare const getSpiFlashAddresses: (chipFamily: ChipFamily) => SpiFlashAddresses;
export declare class SlipReadError extends Error {
    constructor(message: string);
}
