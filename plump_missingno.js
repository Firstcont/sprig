/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: 
@author: 
@tags: []
@img: ""
@addedOn: 2024-00-00
*/






                    
const player = "p"
const wall = "w"
const Ziel = "Z"
const Weg = "1"
const Kreuzung = "2"
const Vertekal = "3"
const Hindernis = "h"
const Bariere = "b"
                    
addText("try to ", { 
  x: 6,
  y: 4,
  color: color`6`
})

addText("achieve", { 
  x: 6,
  y: 6,
  color: color`6`
})

addText("the goel", { 
  x: 6,
  y: 8,
  color: color`6`
})


                    
setLegend(
  [ player, bitmap`
................
.55777777777555.
.55777777777755.
.57722777722755.
.77702777702775.
.77777777777777.
.77777788777777.
.77777888877777.
.77777888857557.
.77733333333555.
.77773333335555.
.55777777777555.
.55577777777555.
.55555557777755.
.55555555557755.
................` ],
  [ wall, bitmap`
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................
................` ],
  [ Ziel, bitmap`
2222233333322222
2223322222233222
2232222222222322
2322223333222232
2322232222322232
3222322222232223
3223222332223223
3223223333223223
3223223333223223
3223222332223223
3222322222232223
2322232222322232
2322223333222232
2232222222222322
2223322222233222
2222233333322222` ],
  [ Weg , bitmap`
.......DD.......
.......DD.......
.......DD.......
.......DD.......
.......DD.......
.......DD.......
.......DD.......
.......DD.......
.......DD.......
.......DD.......
.......DD.......
.......DD.......
.......DD.......
.......DD.......
.......DD.......
.......DD.......` ],
  [ Kreuzung, bitmap`
.......DD.......
.......DD.......
.......DD.......
.......DD.......
.......DD.......
.......DD.......
.......DD.......
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
.......DD.......
.......DD.......
.......DD.......
.......DD.......
.......DD.......
.......DD.......
.......DD.......` ],
  [ Vertekal, bitmap`
................
................
................
................
................
................
................
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
................
................
................
................
................
................
................` ],
  [ Hindernis, bitmap`
.......DD.......
.......DD.......
.......DD.......
.......DD.......
.......DD.......
.......DD.......
.......DD.......
.......DD.......
.......DD.......
.......DD.......
.......DD.......
.......DD.......
.......DD.......
.......DD.......
.......DD.......
.......DD.......` ],
  [ Bariere, bitmap`
................
................
................
................
................
................
................
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
................
................
................
................
................
................
................` ],
)

setSolids([player,wall,Hindernis,Bariere ])

let level = 0
const levels = [
  map`
www233332b2
w2bZwwww1w1
w1www23b232
w22w.1wwhw1
ww1w.1w.232
w2223pb32wh
whw1wwww1w1
w232w.w.1w1
www23333232`
]

setMap(levels[level])

setPushables({
  [ player]: []
})

onInput("w", () => {
  getFirst(player).y -= 1
  
})

onInput("s", () => {
  getFirst(player).y += 1
  
  
})

  onInput("a", () => {
  getFirst(player).x -= 1
    
})

onInput("d", () => {
  getFirst(player).x += 1
})

