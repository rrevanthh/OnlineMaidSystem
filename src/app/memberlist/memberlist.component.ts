import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MemberDetails } from '../model/memberdetails';
import { MemberdetailsService } from '../service/memberdetails.service';


@Component({
  selector: 'app-memberlist',
  templateUrl: './memberlist.component.html',
  styleUrls: ['./memberlist.component.css']
})
export class MemberlistComponent implements OnInit {

  members: Observable<MemberDetails[]>;

  constructor(private memberservice: MemberdetailsService) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.members = this.memberservice.getMemberList();
    // .subscribe(data =>{
    //   this.members = data;
    // });
  }

}
