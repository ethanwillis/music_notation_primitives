
// Visual Components
const staff = ({x, y, width, height, margin}) => (ctx) => {
  return {
    drawFunc: ({x, y, width, height, margin}) => {
      let staff_line_heights = [];
      for(let i = 0; i < 5; i++) {
        staff_line_heights.push( (Math.floor(height / 5) * i) + y )
      }

      staff_line_heights.forEach( (staff_line_height) => {
        ctx.beginPath();
        ctx.moveTo(x + margin.left, staff_line_height + margin.top);
        ctx.lineTo(width - margin.right, staff_line_height + margin.top);
        ctx.stroke()
      });
    },
    params: {x, y, width, height, margin}
  }
}

const MusicNotationPrimitives = {
  staff
}


export default MusicNotationPrimitives
