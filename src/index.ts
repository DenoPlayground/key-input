import { patterns } from './event/mouse/patterns.ts';

Deno.stdin.setRaw(true)
Deno.stdout.write(new TextEncoder().encode('\x1b[?1003h\x1b[?1006h\x1b[2J\x1b[H\x1b[?25l'));

for await (const keys of Deno.stdin.readable) {
  const chunk = new TextDecoder().decode(keys.slice(1))
  console.log(chunk, patterns.MOUSE_MOVE.exec(chunk)?.groups);
  
  // console.log(`keyMap.set([${keys.join(', ')}], {code: '', key: '${String.fromCharCode(...Array.from(keys.slice(1)))}'})`);
  if (keys[0] === 3) break;
}

Deno.stdout.write(new TextEncoder().encode('\x1b[?1003l\x1b[?1006l\x1b[?25h'));
