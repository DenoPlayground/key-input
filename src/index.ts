Deno.stdin.setRaw(true)


for await (const iterator of Deno.stdin.readable) {
  
  console.log(iterator)
}

