import { Component, computed, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  // without signal
   @Input({required: true}) avatar!: string;
   @Input({required: true}) name!: string;
   @Input({required: true}) id!: string;
   @Output() select = new EventEmitter();

  // with signal
  // avatar = input<string>();
  //OR
  // avatar = input.required<String>();
  // name = input.required<String>();

  //with signal
  // imagePath = computed(() => {
  //    return 'assets/users/' + this.avatar();
  // });

  // without signal
  get imagePath() {
    return 'assets/users/' + this.avatar;
  }


  onSelectUser() {
    this.select.emit(this.id);
  }
}
