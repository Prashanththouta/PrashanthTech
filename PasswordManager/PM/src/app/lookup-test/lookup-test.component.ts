import { ChangeDetectionStrategy } from '@angular/compiler/src/compiler_facade_interface';
import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-lookup-test',
  templateUrl: './lookup-test.component.html',
  styleUrls: ['./lookup-test.component.scss']
})
export class LookupTestComponent implements OnInit {

  dataSource = ["item1", "item2", "item3"];
  gridBoxValue: number[] = [3];
  isGridBoxOpened: boolean = false;
  gridDataSource: any[] = [];

  constructor(private ref: ChangeDetectorRef) {
    this.gridDataSource = [
      { id: 1, name: 'Prashanth' },
      { id: 2, name: 'Kaveri' },
      { id: 3, name: 'Rithik' }
    ]
  }

  ngOnInit() {
  }

  inputChange(e: any) {
    console.log(e);
  }

  ip(e1: any) {
    console.log(e1, 'ip');
  }

  optionChanged(e: any) {
    console.log(e, 'oc');
  }

  @HostListener("document:input", ["$event"])
  inputChangeC(e: any) {
    // let elem = document.getElementById("123");
    // console.log(elem);
    // console.log(e);
  }

  valueChanged(e: any) {
    console.log(e, 'vc');
  }

  onGridBoxOptionChanged(e: any) {
    if (e.name === "value") {
      this.isGridBoxOpened = false;
      this.ref.detectChanges();
    }
  }

}

