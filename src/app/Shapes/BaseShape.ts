/* The deffrent shaps that there are
**Rectangle
**Kite
**Parallelogram
**Rectangle
**Square
**Rhombus
**Trapezoid
*/
//The basic class for all shapes.
//Note that if no access modifiy is declaret the its defualt i public.
export abstract class BaseShape {

  private _shapeName: string;
  private _sideA : number;

  get ShapeName(): string
  {return this._shapeName;}
  set ShapeName(shapeName: string)
  {this._shapeName = shapeName}

  get SideA(): number
  {return this._sideA;}
  set SideA(sideA: number)
  {this._sideA = sideA;}

  constructor(shapeName : string , sideA){
    this.ShapeName = shapeName;
    this.SideA = sideA;
  }

  abstract CalculateCircumference() : number;
  abstract CalculateArea() : number;
}
