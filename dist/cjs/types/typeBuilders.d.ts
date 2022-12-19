export declare const Controls: {
    text: (config: any) => {
        type: any;
        label: any;
        name: any;
        defaultValue: any;
        setValue: any;
    };
    select: (config: any) => {
        type: any;
        label: any;
        name: any;
        defaultValue: any;
        setValue: any;
    };
    number: (config: any) => {
        type: any;
        label: any;
        name: any;
        defaultValue: any;
        setValue: any;
    };
    checkbox: (config: any) => {
        type: any;
        label: any;
        name: any;
        defaultValue: any;
        setValue: any;
    };
    multiselect: (config: any) => {
        type: any;
        label: any;
        name: any;
        defaultValue: any;
        setValue: any;
    };
    custom: (config: any) => {
        type: any;
        label: any;
        name: any;
        defaultValue: any;
        setValue: any;
    };
};
export declare const Colors: {
    yellow: string;
    orange: string;
    red: string;
    pink: string;
    purple: string;
    blue: string;
    green: string;
    grey: string;
};
export declare const getPortBuilders: (ports: any) => unknown;
export declare class FlumeConfig {
    nodeTypes: any;
    portTypes: any;
    constructor(config: any);
    addRootNodeType(config: any): this;
    addNodeType(config: any): this;
    removeNodeType(type: any): this;
    addPortType(config: any): this;
    removePortType(type: any, { skipDynamicNodesCheck }?: {
        skipDynamicNodesCheck?: boolean | undefined;
    }): this;
}
