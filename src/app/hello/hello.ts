import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.scss',
})
export class Hello {
  protected title = 'Welcome to Modern Angular!';

  protected isDisabled = false;

  protected onClick() {
    console.log('Button clicked!');
    this.isDisabled = !this.isDisabled;
  }

  protected count = signal(0);

  // depends on count, when count changes, doubleCount will recalculate, so when we use computed signals we only run
  // when their dependencies change
  protected doubleCount = computed(() => {
    console.log('doubleCount computed signal called');
    return this.count() * 2;
  });

  // the problem with this approach is when we reference the method instead of computed signal, the template
  // is gonna run every time change detection runs and can become expensive logic as grows
  protected getDoubleCount() {
    console.log('getDoubleCount called');
    return this.count() * 2;
  }

  protected increaseCounter() {
    // count = count + 1
    this.count.update(value => value + 1);
  }

  protected decreaseCounter() {
    this.count.update(value => value - 1);
  }

  protected resetCounter() {
    this.count.set(0);
  }
}

