import { Assert } from "./utils";

class Engine {
  gl: WebGL2RenderingContext;
  canvas: HTMLCanvasElement | OffscreenCanvas;

  lastTime: number = 0.0;
  
  constructor(canvas: HTMLCanvasElement | OffscreenCanvas, gl: WebGL2RenderingContext) {
    this.canvas = canvas;
    this.gl = gl;
    this.update = this.update.bind(this);
  }

  start() {
    // NOTE: initialize engine

    // Compile VS and FS
    // Set program
    
    // Setup Vertex Array Object

    // Create vertex buffer: one triangle with color lerping

    requestAnimationFrame(this.update);
  }

  update(time: number) {
    // Engine loop
    const delta = time - this.lastTime;
    const gl = this.gl;

    this.lastTime = time;

    gl.clearColor(0.5, 0.5, 0.5, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // useProgram

    // viewport

    // bind VAO

    // Draw triangle

    requestAnimationFrame(this.update);
  }
  
  dispose() {
  }
}

export default Engine;