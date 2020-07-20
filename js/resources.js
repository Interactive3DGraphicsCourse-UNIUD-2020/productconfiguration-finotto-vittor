/**
 * Define Resources path
 */
class Resources{
    /**
     * Shader folder path
     */
  static _Shader = ()=>{ return "shaders/"}
  static _Texture = () => { return "textures/" }
  static _FragShaderName = (name) => {return name +".fs.glsl"}
  static _VertShaderName = (name) => {return name +".vs.glsl"}

  /**
   * Basic Shader Vertex Path
   */
  static BasicVertexShader = ()=>{return Resources._Shader()+Resources._VertShaderName("BasicShader")}
    /**
   * Basic Shader Fragment Path
   */
  static BasicFragmentShader = ()=>{return Resources._Shader()+Resources._FragShaderName("BasicShader")}

    /**
   * Phong Shader Vertex Path
   */
  static PhongVertexShader = ()=>{return Resources._Shader()+Resources._VertShaderName("PhongShader")}
    /**
   * Phong Shader Fragment Path
   */
  static PhongFragmentShader = ()=>{return Resources._Shader()+Resources._FragShaderName("PhongShader")}
    /**
   * Basic Shader Vertex Path
   */
  static PBRVertexShader = ()=>{return Resources._Shader()+Resources._VertShaderName("PBRShader")}
    /**
   * PBR Shader Fragment Path
   */
  static MicrofacetFragmentShader = ()=>{return Resources._Shader()+Resources._FragShaderName("MicrofacetShader")}

    /**
   * Basic Shader Vertex Path
   */
  static MicrofacetVertexShader = ()=>{return Resources._Shader()+Resources._VertShaderName("MicrofacetShader")}
    /**
   * PBR Shader Fragment Path
   */
  static PBRFragmentShader = ()=>{return Resources._Shader()+Resources._FragShaderName("PBRShader")}

  static MatGoldAlbedo = ()=>{return Resources._Texture()+"gold/gold-color.jpg"}
}