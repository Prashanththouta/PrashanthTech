import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  existUsers: any = "";
  parentNodes: string[] = [];
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.addNodes();
    this.getParentNodes();
    console.log(this.parentNodes);
  }


  navigateToUserDetail() {
    let pathName = document.location.pathname;
    console.log(pathName);
    this.router.navigate([ pathName+"/userdetail"]);
  }

  async getServerData() {
    let data = await this.userService.getServerData();
    if (data) {
      this.existUsers = data;
    }
  }

  masterNodesList: IMasterWindowModel[] = [];
  private addNodes() {
    this.masterNodesList = [
      { Node: '4Wheelers', ParentNode: null, Text: '4Wheelers', IsNode: true,Expanded: false },
      { Node: 'Honda', ParentNode: '4Wheelers', Text: 'Honda', IsNode: true,Expanded: false },
      { Node: 'Honda', ParentNode: 'Honda', Text: 'Amaze', IsNode: false ,Expanded: false},
      { Node: 'Honda', ParentNode: 'Honda', Text: 'City4', IsNode: false ,Expanded: false},
      { Node: 'Petrol', ParentNode: 'Honda', Text: 'Petrol', IsNode: true ,Expanded: false},
      { Node: 'Petrol', ParentNode: 'Petrol', Text: 'Petrol1', IsNode: false ,Expanded: false},
      { Node: 'Petrol', ParentNode: 'Petrol', Text: 'Petrol2', IsNode: false ,Expanded: false},
      { Node: 'Maruti', ParentNode: '4Wheelers', Text: 'Maruti', IsNode: true ,Expanded: false},
      { Node: 'Maruti', ParentNode: 'Maruti', Text: 'Dzire', IsNode: false ,Expanded: false},
      { Node: 'Maruti', ParentNode: 'Maruti', Text: 'Ertiga', IsNode: false ,Expanded: false},
      { Node: 'Maruti', ParentNode: 'Maruti', Text: 'S-cross', IsNode: false ,Expanded: false},
      { Node: 'Toyota', ParentNode: '4Wheelers', Text: 'Toyota', IsNode: true ,Expanded: false},
      { Node: '3Wheelers', ParentNode: null, Text: '4Wheelers', IsNode: true ,Expanded: false},
      { Node: '2Wheelers', ParentNode: null, Text: '4Wheelers', IsNode: true ,Expanded: false}
    ]
  }

  private getParentNodes() {
    this.masterNodesList.forEach(mn => {
      if (!mn.ParentNode && !this.parentNodes.find(n => n === mn.Node)) {
        this.parentNodes.push(mn.Node);
      }
    })
  }

  parentNodeClick(e: any, node: string) {
    let existNode = document.getElementById(node);
    if (existNode && existNode.childElementCount < 1) {
      let childNodes = this.masterNodesList.filter(x => x.ParentNode === node);
      if (childNodes && childNodes.length > 0) {
        childNodes.forEach(cn => {
          let childExistNodesId = this.getMasterWindowListId(cn);
          let childExistNodes = document.getElementById(childExistNodesId);
          if (!childExistNodes || childExistNodes.childElementCount < 1) {
            let newElem = document.createElement(cn.IsNode ? 'ul' : 'li');
            newElem.id = this.getMasterWindowListId(cn);
            newElem.innerText = cn.Text;
            newElem.classList.add('node-item');
            newElem.addEventListener("click", (event) => {
              event.stopPropagation();
              this.childEventClicked(event, cn);
            })
            existNode?.appendChild(newElem);
          }
        })
      }
    }
  }

  childEventClicked(e: any, item: IMasterWindowModel) {
    this.parentNodeClick(null, item.Node);
 }

  getMasterWindowListId(item: IMasterWindowModel) {
    if (item.IsNode) {
      return item.Node;
    } else {
      return item.Node + "_" + item.Text;
    }
  }

  isNodeExpanded(item: IMasterWindowModel) {

  }
}

interface IMasterWindowModel {
  Node: string;
  ParentNode: string | null;
  Text: string;
  IsNode: boolean;
  Expanded: boolean;
}