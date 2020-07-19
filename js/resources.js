/**
 * Define Resources path
 */
class Resources{
    /**
     * Shader folder path
     */
  static Shader = ()=>{ return 'shaders/'}
  /**
   * Basic Shader Vertex Path
   */
  static BasicVertexShader = ()=>{return Resources.Shader()+"BasicShader.vs.glsl"}
    /**
   * Basic Shader Fragment Path
   */
  static BasicFragmentShader = ()=>{return Resources.Shader()+"BasicShader.fs.glsl"}
}