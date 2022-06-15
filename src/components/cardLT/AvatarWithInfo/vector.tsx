
///-----------------------------------------
/// Interface do Componente
interface VectorIconParam {
    color?: string;  
  }
  
  ///-----------------------------------------
  /// Componente
  
  /**
   * 
   * @componente 
   */
  export default function Vector(props: VectorIconParam) {
  
    return (
      <>    
        <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 4C1.46957 4 0.960859 3.78929 0.585786 3.41421C0.210713 3.03914 0 2.53043 0 2C0 1.46957 0.210713 0.960859 0.585786 0.585786C0.960859 0.210713 1.46957 0 2 0C2.53043 0 3.03914 0.210713 3.41421 0.585786C3.78929 0.960859 4 1.46957 4 2C4 2.53043 3.78929 3.03914 3.41421 3.41421C3.03914 3.78929 2.53043 4 2 4Z" fill={props.color ? props.color : "#757575"}/>
        </svg>

      </>
    )
  }