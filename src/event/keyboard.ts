/**
 * This interface represents a keyboard event.
 * 
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/KeyboardEvent)
 */
export interface KeyboardEvent {
  /**
   * The code sequence that was send to the terminal.
   * 
   * [Wikipedia](https://en.wikipedia.org/wiki/ANSI_escape_code)
   */
  sequence : string,
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key) */
  key : string | undefined,
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code) */
  code : string | undefined,
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/ctrlKey) */
  ctrlKey : boolean,
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/altKey) */
  altKey : boolean
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/shiftKey) */
  shiftKey : boolean,
  /** [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat) */
  repeat : boolean
}
