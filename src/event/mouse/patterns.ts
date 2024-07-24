export const patterns = {
  MOUSE_MOVE: /\[<(?<buttons>35);(?<column>\d+);(?<row>\d+)M/gm,
  MOUSE_BEGIN: /\[<(?<buttons>(?!35)\d+);(?<column>\d+);(?<row>\d+)M/gm,
  MOUSE_RELEASE: /\[<(?<buttons>(?!35)\d+);(?<column>\d+);(?<row>\d+)m/gm
}
