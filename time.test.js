const convert = require("./time")
test(`Converts 24000000 ms to 6 hours 40 minutes`,()=>{
    expect(convert(24000000)).toBe(`6 hours 40 minutes`)
})

test(`Converts 5200 ms to 5 seconds`,()=>{
    expect(convert(5200)).toBe(`5 seconds`)
})
test(`Converts 60000 ms to 1 minutes`,()=>{
    expect(convert(60000)).toBe(`1 minutes`)
})
test(`Converts 180000 ms to 3 minutes`,()=>{
    expect(convert(180000)).toBe(`3 minutes`)
})
test(`Converts 200000 ms to 3 minutes 20 seconds`,()=>{
    expect(convert(200000)).toBe(`3 minutes 20 seconds`)
})
test(`Converts 56000000 ms to 15 hours 33 minutes 20 seconds`,()=>{
    expect(convert(56000000)).toBe(`15 hours 33 minutes 20 seconds`)
})
test(`Converts 79000000 ms to 21 hours 56 minutes 40 seconds`,()=>{
    expect(convert(79000000)).toBe(`21 hours 56 minutes 40 seconds`)
})
