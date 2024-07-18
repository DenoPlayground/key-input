Deno.stdin.setRaw(true)
// Deno.stdout.write(new TextEncoder().encode('\x1b[?1003h\x1b[?1006h\x1b[2J\x1b[H\x1b[?25l'));

for await (const keys of Deno.stdin.readable) {
  
  console.log(`keyMap.set([${keys.join(', ')}], {code: '', key: '${String.fromCharCode(...Array.from(keys))}'})`);
  
}
