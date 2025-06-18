import { isString } from "../utils";
import { getNode } from "./getNode";

export function endScroll(node) {
  if (isString(node)) node = getNode(node);
  node.scrollTop = node.scrollHeight;
}
