export declare const getInitialNodes: (initialNodes: any, defaultNodes: any, nodeTypes: any, portTypes: any, context: any) => any;
declare const nodesReducer: (nodes: any, action: any, { nodeTypes, portTypes, cache, circularBehavior, context }: any, dispatchToasts?: any) => any;
export declare const connectNodesReducer: (reducer: any, environment: any, dispatchToasts: any) => (state: any, action: any) => any;
export default nodesReducer;
