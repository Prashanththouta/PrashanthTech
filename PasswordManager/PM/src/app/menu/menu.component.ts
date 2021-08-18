import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  products: IMenuItem[] = [];
  constructor() { }

  ngOnInit() {
    this.prepareParentId_Id_Items();
  }

  itemClick(e: any) {
    console.log(e);
  }

  private prepareParentId_Id_Items() {
    let menuData = [
      { Heirachy: "&Masters,Auto DMS,General", LastText: "Color" },
      { Heirachy: "&Masters,Auto DMS,General", LastText: "Vehicle" },
      { Heirachy: "&Transaction,Auto DMS1,Sales,SalesOrders", Lasttext: "" },
      { Heirachy: "&Transaction,Auto DMS1,Sales,SalesOrdersAgainstEnquiries", Lasttext: "" },
      { Heirachy: "&Transaction,Auto DMS1,xShowRoom,Purchase,Vehicle Purchase Order", Lasttext: "" },
      {Heirachy: "&Transaction,Auto DMS1,ShowRoom,Purchase,Vehicle Purchase Receipts", Lasttext: ""},
    ]

    let newMenuItems: any[] = [];
    menuData.forEach(
      (md) => {
        let _data = md.Heirachy;
        if (_data.split(",")[0] === "&Masters") {
          _data = _data + "," +md.LastText;
        }

        let _splitData = _data.split(",");
        for (let i = 0; i < _splitData.length; i++) {
          let _id = _splitData[i];
          let _parentId = i > 0 ? _splitData[i - 1] : null;
          let _text = _splitData[i];

          if (!newMenuItems.find(x => x.id === _id)) {
            newMenuItems.push({ id: _id, text: _text, parentId: _parentId, isNode: i === _splitData.length-1 ? false: true });
          }
        }
      }
    )
    console.log(newMenuItems);
    this.createTreeView(newMenuItems);
  }

  private createTreeView(menuItems: any[]) {
    let map = {};
    menuItems.forEach(mi => {
      mi.items = [];
      //@ts-ignore
      map[mi.id] = mi;
      let parent = mi.parentId || "_";
      
      //@ts-ignore
      if (!map[parent]) {
        //@ts-ignore
        map[parent] = {
          items: []
        }
      }
      
      

      //@ts-ignore
      map[parent].items.push(mi);
    })
    //@ts-ignore
    this.products = map["_"].items;
    console.log(this.products, 'products');

  }
}


interface IMenuItem {
  text: string;
  isNode: boolean;
  items?: IMenuItem[];
}