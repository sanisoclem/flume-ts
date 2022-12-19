export const checkForCircularNodes = (nodes:any, startNodeId:any) => {
  let isCircular = false;
  const walk = (nodeId:any) => {
    const outputs = Object.values(nodes[nodeId].connections.outputs);
    for (var i = 0; i < outputs.length; i++) {
      if(isCircular){
        break;
      }
      const outputConnections:any = outputs[i];
      for (var k = 0; k < outputConnections.length; k++) {
        const connectedTo = outputConnections[k]
        if(connectedTo.nodeId === startNodeId){
          isCircular = true;
          break;
        }else{
          walk(connectedTo.nodeId)
        }
      }
    }
  }
  walk(startNodeId)
  return isCircular;
}