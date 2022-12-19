import React from 'react';

declare const Controls: {
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
declare const Colors: {
    yellow: string;
    orange: string;
    red: string;
    pink: string;
    purple: string;
    blue: string;
    green: string;
    grey: string;
};
declare class FlumeConfig {
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

declare const NodeEditor: React.ForwardRefExoticComponent<Pick<any, string | number | symbol> & React.RefAttributes<unknown>>;

export { Colors, Controls, FlumeConfig, NodeEditor };
