import { BaseShape } from '../Shapes/BaseShape';

//A square is a shape with 4 equal length sides
export class Square extends BaseShape {
  constructor(shapeName : string,sideA : number)
  {
    super(shapeName,sideA)
  }
  CalculateArea(): number {
    return this.SideA * this.SideA;
  }
  CalculateCircumference(): number {
    return this.SideA * 4 ;
  }
}
