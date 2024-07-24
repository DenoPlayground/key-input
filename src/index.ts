import { mousePattern } from './patterns/mouse_pattern.ts';

Deno.stdin.setRaw(true)
Deno.stdout.write(new TextEncoder().encode('\x1b[?1003h\x1b[?1006h\x1b[2J\x1b[H\x1b[?25l'));

// console.log(new TextDecoder('utf-8').decode(new Uint8Array([132])));
console.log(new TextEncoder().encode('äöü'));
Deno.stdout.write(new TextEncoder().encode('äöü'))

for await (const iterator of Deno.stdin.readable.values()) {
  console.log(iterator);
  
}


for await (const keys of Deno.stdin.readable) {
  const chunk = new TextDecoder().decode(keys[0] === 0x1b ? keys.slice(1) : keys)

  console.log(chunk, keys);

  
  // if (mousePattern.MOUSE_MOVE.exec(chunk)) {
  //   console.log(mousePattern.MOUSE_MOVE.exec(chunk)?.groups);
  // } else {
  //   console.log(`${new TextDecoder('ascii').decode(keys[0] === 0x1b ? keys.slice(1) : keys)} ${keys} \\u${keys[0].toString(16).padStart(4, '0')}`);
  // }
  
  if (keys[0] === 3) break;
}

Deno.stdout.write(new TextEncoder().encode('\x1b[?1003l\x1b[?1006l\x1b[?25h'));
