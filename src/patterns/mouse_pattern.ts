export const mousePattern = {
  MOUSE_MOVE: /\[<(?<buttons>35|43|51|59);(?<column>\d+);(?<row>\d+)m/,
  MOUSE_DRAG: /\[<(?<buttons>32|33|34|40|41|42|48|49|50|56|57|58);(?<column>\d+);(?<row>\d+)M/,
  MOUSE_DOWN: /\[<(?<buttons>0|1|2|8|9|10|16|17|18|24|25|26);(?<column>\d+);(?<row>\d+)M/,
  MOUSE_UP: /\[<(?<buttons>0|1|2|8|9|10|16|17|18|24|25|26);(?<column>\d+);(?<row>\d+)m/,
}
