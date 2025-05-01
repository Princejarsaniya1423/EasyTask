import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// };

@Component({
  selector: 'app-user',
  imports: [CommonModule, CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  @Input() user!: User;
  @Output() select = new EventEmitter<string>();
  @Input({ required: true }) selected!: boolean;
  // select = output<string>();
  get imagePath() {
    return 'assets/user/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
