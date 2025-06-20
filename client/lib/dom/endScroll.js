import { isString } from "../utils/index.js";
import { getNode } from "./index.js";

export function endScroll(node) {
  if (isString(node)) node = getNode(node);
  node.scrollTop = node.scrollHeight;
}
