import { MatListModule } from '@angular/material/list';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { StackOverflowContentComponent } from './stack-overflow-content.component';

describe('StackOverflowContentComponent', () => {
  let spectator: Spectator<StackOverflowContentComponent>;
  const createComponent = createComponentFactory({
    component: StackOverflowContentComponent,
    imports: [MatListModule],
  });

  beforeEach(
    () =>
      (spectator = createComponent({
        props: {
          data: {
            tags: ['javascript', 'typescript'],
            owner: {
              reputation: 18999,
              user_id: 599184,
              user_type: 'registered',
              accept_rate: 78,
              profile_image: 'https://i.stack.imgur.com/tjsXC.jpg?s=128&g=1',
              display_name: 'Leo Jiang',
              link: 'https://stackoverflow.com/users/599184/leo-jiang',
            },
            is_answered: false,
            view_count: 24,
            answer_count: 0,
            score: 0,
            last_activity_date: 1623721436,
            creation_date: 1623721436,
            question_id: 67978990,
            content_license: 'CC BY-SA 4.0',
            link: 'https://stackoverflow.com/questions/67978990/typescript-static-class-properties-that-reference-the-subclasss-properties',
            title:
              'Typescript: static class properties that reference the subclass&#39;s properties?',
          },
        },
      }))
  );

  it('should render', () => {
    expect(spectator.fixture).toBeDefined();
  });

  it('should render data', () => {
    expect(spectator.query('h3')?.textContent).toEqual(
      'Typescript: static class properties that reference the subclass&#39;s properties?'
    );
    const details = spectator.queryAll('p');

    expect(details[0].querySelector('span')?.textContent).toEqual(
      ' Answerers '
    );
    expect(details[0].querySelector('strong')?.textContent).toEqual(' 0 ');

    expect(details[1].querySelector('span')?.textContent).toEqual(
      ' Answered? '
    );
    expect(details[1].querySelector('strong')?.textContent).toEqual(' No ');
  });
});
