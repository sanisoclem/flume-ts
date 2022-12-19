import styles from "./components/Connection/Connection.css";
import { CONNECTIONS_ID } from './constants'
import { line, curveBasis } from 'd3-shape'

const getPort = (nodeId: any, portName: any, transputType = "input") => document
  .querySelector(
    `[data-node-id="${nodeId}"] [data-port-name="${portName}"][data-port-transput-type="${transputType}"]`
  )

export const getPortRect = (nodeId: any, portName: any, transputType: any = "input", cache: any = undefined) => {
  if(cache){
    const portCacheName = nodeId + portName + transputType;
    const cachedPort = cache.current.ports[portCacheName];
    if(cachedPort){
      return cachedPort.getBoundingClientRect();
    }else{
      const port = getPort(nodeId, portName, transputType)
      cache.current.ports[portCacheName] = port;
      return port && port.getBoundingClientRect();
    }
  }else{
    const port = getPort(nodeId, portName, transputType);
    return port && port.getBoundingClientRect();
  }
}

export const getPortRectsByNodes = (nodes: any, forEachConnection: any) =>
  Object.values(nodes).reduce((obj: any, node: any) => {
    if (node.connections && node.connections.inputs) {
      Object.entries(node.connections.inputs).forEach(
        ([inputName, outputs]: any) => {
          outputs.forEach((output: any) => {
            const toRect = getPortRect(node.id, inputName);
            const fromRect = getPortRect(
              output.nodeId,
              output.portName,
              "output"
            );
            if (forEachConnection) {
              forEachConnection({
                to: toRect,
                from: fromRect,
                name: output.nodeId + output.portName + node.id + inputName
              });
            }
            obj[node.id + inputName] = toRect;
            obj[output.nodeId + output.portName] = fromRect;
          });
        }
      );
    }
    return obj;
  }, {});

export const calculateCurve = (from: any, to: any) => {
  const length = to.x - from.x;
  const thirdLength = length / 3;
  const curve = line().curve(curveBasis)([
    [from.x, from.y],
    [from.x + thirdLength, from.y],
    [from.x + thirdLength * 2, to.y],
    [to.x, to.y]
  ]);
  return curve;
};

export const deleteConnection = ({ id }: any) => {
  const line = document.querySelector(`[data-connection-id="${id}"]`);
  if (line) (line.parentNode as any)!.remove();
};

export const deleteConnectionsByNodeId = (nodeId: any) => {
  const lines = document.querySelectorAll(
    `[data-output-node-id="${nodeId}"], [data-input-node-id="${nodeId}"]`
  );
  for (const line of lines) {
    (line.parentNode! as any).remove();
  }
};

export const updateConnection = ({ line, from, to }: any) => {
  line.setAttribute("d", calculateCurve(from, to));
};

export const createSVG = ({
  from,
  to,
  stage,
  id,
  outputNodeId,
  outputPortName,
  inputNodeId,
  inputPortName
}: any) => {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", styles.svg);
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  const curve = calculateCurve(from, to)
  path.setAttribute("d", curve ?? '')
  path.setAttribute("stroke", "rgb(185, 186, 189)");
  path.setAttribute("stroke-width", "3");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("fill", "none");
  path.setAttribute("data-connection-id", id);
  path.setAttribute("data-output-node-id", outputNodeId);
  path.setAttribute("data-output-port-name", outputPortName);
  path.setAttribute("data-input-node-id", inputNodeId);
  path.setAttribute("data-input-port-name", inputPortName);
  svg.appendChild(path);
  stage.appendChild(svg);
  return svg;
};

export const getStageRef = (editorId: any) =>
  document.getElementById(`${CONNECTIONS_ID}${editorId}`);

export const createConnections = (nodes: any, {scale, stageId}: any, editorId: any) => {
  const stageRef = getStageRef(editorId);
  if(stageRef){
    const stage = stageRef.getBoundingClientRect();
    const stageHalfWidth = stage.width / 2;
    const stageHalfHeight = stage.height / 2;

    const byScale = (value: number) => (1 / scale) * value;

    Object.values(nodes).forEach((node: any) => {
      if (node.connections && node.connections.inputs) {
        Object.entries(node.connections.inputs).forEach(
          ([inputName, outputs]: any, k: any) => {
            outputs.forEach((output: any) => {
              const fromPort = getPortRect(
                output.nodeId,
                output.portName,
                "output"
              );
              const toPort = getPortRect(node.id, inputName, "input");
              const portHalf = fromPort ? fromPort.width / 2 : 0;
              if (fromPort && toPort) {
                const id = output.nodeId + output.portName + node.id + inputName;
                const existingLine = document.querySelector(
                  `[data-connection-id="${id}"]`
                );
                if (existingLine) {
                  updateConnection({
                    line: existingLine,
                    from: {
                      x: byScale(fromPort.x - stage.x + portHalf - stageHalfWidth),
                      y: byScale(fromPort.y - stage.y + portHalf - stageHalfHeight)
                    },
                    to: {
                      x: byScale(toPort.x - stage.x + portHalf - stageHalfWidth),
                      y: byScale(toPort.y - stage.y + portHalf - stageHalfHeight)
                    }
                  });
                } else {
                  createSVG({
                    id,
                    outputNodeId: output.nodeId,
                    outputPortName: output.portName,
                    inputNodeId: node.id,
                    inputPortName: inputName,
                    from: {
                      x: byScale(fromPort.x - stage.x + portHalf - stageHalfWidth),
                      y: byScale(fromPort.y - stage.y + portHalf - stageHalfHeight)
                    },
                    to: {
                      x: byScale(toPort.x - stage.x + portHalf - stageHalfWidth),
                      y: byScale(toPort.y - stage.y + portHalf - stageHalfHeight)
                    },
                    stage: stageRef
                  });
                }
              }
            });
          }
        );
      }
    });
  }
};
