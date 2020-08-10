import {BaseShape} from '../Shapes/BaseShape';

//A rectangle is a shape with 2 pair of equal length sides.
class Rectangle extends BaseShape {

  private _sideB : number;

  get SideB(): number
  {return this._sideB;}
  set SideB(_sideB: number)
  {this._sideB = _sideB;}

  constructor(shapeName : string,sideA : number , sideB : number)
  {
    super(shapeName,sideA);
    this.SideB = sideB;
  }
  CalculateArea(): number {
    return this.SideA * this.SideB;
  }
  CalculateCircumference(): number {
    return 2 * (this.SideA+this.SideB) ;
  }
}
//Another way of exporting in typescirpt.
export {Rectangle};
