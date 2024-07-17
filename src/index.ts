Deno.stdin.setRaw(true)


for await (const keys of Deno.stdin.readable) {
  
  console.log(keys)
}
