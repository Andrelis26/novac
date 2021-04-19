import { Component, OnInit } from '@angular/core';
import * as $ from 'jQuery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.smoothEfect();
  }

  smoothEfect() {
    //  smooth-scroll
    $( function () {
        $('a.smooth-scroll').click(function (event) {
            event.preventDefault();
            // get / return
            let section = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(section)
                    .offset() .top - 54
            }, 1250);
        });

    });
}
}
