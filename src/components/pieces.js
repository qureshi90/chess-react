
const p = {
  pw: "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg", // pawn white
  pb: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg", // pawn black
  bw: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg", // bishop white
  bb: "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg", // bishop black
  kw: "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg", // king white
  kb: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg", // king black
  nw: "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg", // knight white
  nb: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg", // knight black
  qw: "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg", // queen white
  qb: "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg", // queen black
  rw: "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg", // rook white
  rb: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg", // rook black
}

const arr = [
  [p.rb,p.nb,p.bb,p.qb,p.kb,p.bb,p.nb,p.rb],
  [p.pb,p.pb,p.pb,p.pb,p.pb,p.pb,p.pb,p.pb],
  [],
  [],
  [], 
  [],
  [p.pw,p.pw,p.pw,p.pw,p.pw,p.pw,p.pw,p.pw],
  [p.rw,p.nw,p.bw,p.qw,p.kw,p.bw,p.nw,p.rw]
]

export default arr;
