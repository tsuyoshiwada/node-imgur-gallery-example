import block from "bem-cn";

block.setup({
  el: "__",
  mod: "--",
  modValue: "-"
});

export default function bem(blockName) {
  return block(blockName);
}
