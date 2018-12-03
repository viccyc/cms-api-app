import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../../services/tickets/tickets.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  public tickets: any[];
  public cacheTickets: any[];
  public ticketNames: any;
  public show: boolean = false;

  constructor(private ticketService: TicketsService) {
    this.ticketService.getTickets()
      .subscribe(tickets => {
        this.tickets = tickets.data;
        this.cacheTickets = this.tickets;
        this.ticketNames = this.tickets;
      }, error => console.error());
  }

  ngOnInit() {
  }

  getTickets(filterVal: any) {
    this.show = true;
    if (filterVal === '0') {
      this.tickets = this.cacheTickets;
    } else {
      this.tickets = this.cacheTickets.filter((item) => item.ticketName === filterVal);
    }
  }
}
