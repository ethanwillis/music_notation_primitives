
// Visual Components
const staff = ({x, y, width, height, margin}) => (ctx) => {
  return {
    drawFunc: ({x, y, width, height, margin}) => {
      let line_gap = Math.floor(height / 5)
      let staff_line_heights = [
        (line_gap * 0) + y,
        (line_gap * 1) + y,
        (line_gap * 2) + y,
        (line_gap * 3) + y,
        (line_gap * 4) + y,
      ];

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

const note = ({x, y, radius, stem_direction, fill_note}) => (ctx) => {
    return {
      drawFunc: ({x, y, radius}) => {
        let stem_directions = {
          up: -1,
          down: 1
        }

        // draw note
        let circle = new Path2D();
        circle.arc(x, y, radius, 0, 2 * Math.PI)
        if(fill_note) {
          ctx.fill(circle)
        } else {
          ctx.lineWidth = radius/2
          ctx.stroke(circle)
        }

        // draw attached stem.
        let stem_width = radius/2
        let stem_height = radius*3
        ctx.fillRect(x + stem_width, y, stem_width, stem_directions[stem_direction]*stem_height)

      },
      params: {x, y, radius, stem_direction}
    }
}


const MusicNotationPrimitives = {
  staff,
  note
}


export default MusicNotationPrimitives
