import { ChangeDetectionStrategy } from '@angular/compiler/src/compiler_facade_interface';
import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-lookup-test',
  templateUrl: './lookup-test.component.html',
  styleUrls: ['./lookup-test.component.scss']
})
export class LookupTestComponent implements OnInit {

  dataSource: Map<string, Product[]> = new Map<string, Product[]>();
  items: string[] = [];

  constructor(private ref: ChangeDetectorRef) {
    let item = 'item';
    for (let i = 0; i < 20; i++) {
      this.preparedataSource(item + i);
      this.items.push(item + i);
    }
  }

  ngOnInit() {
  }

  @HostListener("document:input", ["$event"])
  inputChangeC(e: any) {
  }

  valueChanged(e: any) {
    console.log(e, 'vc');
  }

  private preparedataSource(item: string) {
    let ds: Product[] = [];
    for (let i = 0; i < 100000; i++) {
      let id = i + 1;
      ds.push({ ProductId: item + id.toString(), ProductName: item +'Product' + id });
    }
    this.dataSource.set(item, ds);
  }

  getDataSource(item: string) {
    return <any[]>this.dataSource.get(item);
  }

}


interface Product {
  ProductId: string;
  ProductName: string;
}
