/**
 * Define Resources path
 */
class Resources{
    /**
     * Shader folder path
     */
  static _Shader = ()=>{ return "shaders/"}
  static _Texture = () => { return "textures/" }
  static _Model = () => { return "models/" }
  static _FragShaderName = (name) => {return name +".frag"}
  static _VertShaderName = (name) => {return name +".vert"}

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
   * PBR Shader Vertex Path
   */
  static PBRVertexShader = ()=>{return Resources._Shader()+Resources._VertShaderName("PBRShader")}
      /**
   * PBR Shader Fragment Path
   */
  static PBRFragmentShader = ()=>{return Resources._Shader()+Resources._FragShaderName("PBRShader")}

    /**
   * Microfacet Shader Fragment Path
   */
  static MicrofacetFragmentShader = ()=>{return Resources._Shader()+Resources._FragShaderName("MicrofacetShader")}

    /**
   * Microfacet Shader Vertex Path
   */
  static MicrofacetVertexShader = ()=>{return Resources._Shader()+Resources._VertShaderName("MicrofacetShader")}

      /**
   * Glass Shader Fragment Path
   */
  static GlassFragmentShader = ()=>{return Resources._Shader()+Resources._FragShaderName("GlassShader")}

    /**
   * Glass Shader Vertex Path
   */
  static GlassVertexShader = ()=>{return Resources._Shader()+Resources._VertShaderName("GlassShader")}

  static ModelMark = ()=>{return Resources._Model()+"Arc_Reactor/Arc_Reactor.obj"}

  static MatGoldAlbedo = ()=>{return Resources._Texture()+"gold/gold-color.jpg"}
  static MatGoldNormal = ()=>{return Resources._Texture()+"gold/gold-normalmap.jpg"}

}