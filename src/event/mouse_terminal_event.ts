/**
 * This interface represents a mouse event inside of the terminal.
 */
export interface MouseTerminalEvent {
  /** [MND Reference](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX) */
  clientX : number,
  /** [MND Reference](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientY) */
  clientY : number,
  /** [MND Reference](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/movementX) */
  movementX : number,
  /** [MND Reference](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/movementY) */
  movementY : number,
  /** [MND Reference](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/buttons) */
  buttons : number
}
