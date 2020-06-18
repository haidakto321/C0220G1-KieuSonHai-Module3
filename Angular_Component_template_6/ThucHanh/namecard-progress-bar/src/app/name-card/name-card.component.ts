import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.css']
})
export class NameCardComponent implements OnInit {
  sub: Subscription;
  @Input() cardName: string;
  @Input() email: string;
  @Input() phone: string;
  namecard = [
    {cardName: 'Professional Dev', email: 'prodev1@abc.xyz', phone: '0123456789'},
    {cardName: 'Professional Tester', email: 'protest@abc.xyz', phone: '0123456789'},
    {cardName: 'Professional Dev2', email: 'prodev2@abc.xyz', phone: '0123456789'}
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.data.subscribe((value => console.log(value)));
  }

}
