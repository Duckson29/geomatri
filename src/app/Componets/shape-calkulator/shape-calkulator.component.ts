import { Component} from '@angular/core';
import { Rectangle } from '../../Shapes/rectangle';
import {Square} from '../../Shapes/square';


@Component({
  selector: 'app-shape-calkulator',
  templateUrl: './shape-calkulator.component.html',
  styleUrls: ['./shape-calkulator.component.css']
})
export class ShapeCalkulatorComponent {

  selectedId = 0;
  selectlist = [new Rectangle("Rectangle",3,2), new Square("Square",12)];
  submitted = true;
  shape = new Rectangle("Testing",null,null);

  /// For switching between the different shapes.
  SelectShape(value : string)
  {
    if(value == "Rectangle")
    {this.selectedId = 0;
    }else{ this.selectedId = 1 }
  }
  //Sets the value on sideA on the selected shape.
  SetValueOnSide(form: any) {
    this.selectlist[this.selectedId].SideA = form.controls.name.value;
  }
  //Sets the value on sideB on the selected shape(only on shapes that have 2 different).
  //Note that evey ohter shape is going to be a subclass of Rectangle, hence the "as Rectangle"..
  SetValueOnSideB(form: any){
    let tempVar = this.selectlist[0] as Rectangle;
    tempVar.SideB = form.controls.name.value;
  }


}
