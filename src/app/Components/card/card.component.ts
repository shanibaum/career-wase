import {Component, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  isDetailed = false;
  cardElem;
  lastTop;
  @Input() front: TemplateRef<ElementRef>;
  @Input() back: TemplateRef<ElementRef>;
  @Input() name: String;
  @Output() onFlip = new EventEmitter();
  @ViewChild('card') card;


  constructor(protected router: Router) {}


  ngOnInit() {
    this.cardElem = this.card.nativeElement;
    this.cardElem.style.left = 20 + 'px';
    this.cardElem.style.top = 20 + 'px';

    window.addEventListener('scroll', () => {
      if (this.isDetailed) {
        this.cardElem.style.top = this.lastTop + window.scrollY + 'px';
      }
    });
  }

  showDetails() {
    this.isDetailed = !this.isDetailed;
    if (this.isDetailed) {
      this.showDetailed();
    } else {
      this.showCard();
    }
  }

  showDetailed() {
    this.cardElem.style.left = window.innerWidth / 2 - this.cardElem.offsetLeft.toString() + this.cardElem.querySelector('.back').offsetWidth / 2 + 'px';
    this.cardElem.style.top = window.innerHeight / 2 + window.scrollY - this.cardElem.offsetTop.toString() - this.cardElem.querySelector('.back').offsetHeight / 2 + 'px';
    this.cardElem.style.perspective = '500px';
    this.cardElem.style.zIndex = '1000';
    setTimeout(() => {
      this.cardElem.style.perspective = 'unset';
    }, 500);
    const overlay = document.createElement('div');
    overlay.setAttribute('id', 'overlay');
    document.body.appendChild(overlay);
    this.lastTop = parseInt(this.cardElem.style.top.slice(0, -2));
  }

  showCard() {
    this.cardElem.style.left = 20 + 'px';
    this.cardElem.style.top = 20 + 'px';
    this.cardElem.style.perspective = '500px';
    setTimeout(() => {
      this.cardElem.style.perspective = 'unset';
      this.cardElem.style.zIndex = 'initial';
    }, 500);
    document.body.removeChild(document.getElementById('overlay'));
  }

  onNavigate(){
    this.router.navigate(['/paths']);
  }
}
