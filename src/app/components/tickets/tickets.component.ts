import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../../services/tickets/tickets.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  tickets: any;
  ticketName: any;
  public show: boolean = false;

  constructor(private ticketService: TicketsService) { }

  ngOnInit() {
  }

  getTickets() {
    this.show = !this.show;
    this.ticketService.getTickets()
      .subscribe(tickets => {
        this.tickets = tickets;
        console.log('tickets: ', tickets);
        this.ticketName = this.tickets;
      });
  }
}
