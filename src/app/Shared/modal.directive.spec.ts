import { ModalDirective } from './modal.directive';

describe('ModalDirective', () => {
  it('should create an instance', () => {
   const jquery = window['$'];
    const directive = new ModalDirective(jquery);
    expect(directive).toBeTruthy();
  });
});
