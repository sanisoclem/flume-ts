export declare const getPortRect: (nodeId: any, portName: any, transputType?: any, cache?: any) => any;
export declare const getPortRectsByNodes: (nodes: any, forEachConnection: any) => unknown;
export declare const calculateCurve: (from: any, to: any) => string | null;
export declare const deleteConnection: ({ id }: any) => void;
export declare const deleteConnectionsByNodeId: (nodeId: any) => void;
export declare const updateConnection: ({ line, from, to }: any) => void;
export declare const createSVG: ({ from, to, stage, id, outputNodeId, outputPortName, inputNodeId, inputPortName }: any) => SVGSVGElement;
export declare const getStageRef: (editorId: any) => HTMLElement | null;
export declare const createConnections: (nodes: any, { scale, stageId }: any, editorId: any) => void;
