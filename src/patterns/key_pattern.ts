export const keyPattern = {
  NULL: /0x00/,
  START_OF_HEADING: /0x01/,
  START_OF_TEXT: /0x02/,
  END_OF_TEXT: /\x03/,
  END_OF_TRANSMISSION: /\x04/,
  ENQUIRY: /\x05/,
  ACKNOWLEDGE: /\x06/,
  BELL: /\x07/,
  BACKSPACE: /\x08/,
  HORIZONTAL_TAB: /\t/,
} as const;
