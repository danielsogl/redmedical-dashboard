import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  createHttpFactory,
  HttpMethod,
  SpectatorHttp,
} from '@ngneat/spectator/jest';

import { StackOverflowService } from './stack-overflow.service';

describe('HttpClient testing', () => {
  let spectator: SpectatorHttp<StackOverflowService>;
  const createHttp = createHttpFactory({
    service: StackOverflowService,
    imports: [NoopAnimationsModule, MatSnackBarModule],
  });

  beforeEach(() => (spectator = createHttp()));

  it('should get results by keyword', (done) => {
    spectator.service.searchByKeyword('foo').subscribe((result) => {
      expect(result).toEqual([
        {
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
      ]);
      done();
    });
    const req = spectator.expectOne(
      'https://api.stackexchange.com/2.2/search?pagesize=20&order=desc&sort=activity&site=stackoverflow&intitle=foo',
      HttpMethod.GET
    );
    req.flush({
      items: [
        {
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
      ],
    });
  });

  it('should handle errors', (done) => {
    const status = 500;
    const statusText = 'Server error';
    const errorEvent = new ErrorEvent('API error');

    spectator.service.searchByKeyword('foo').subscribe(
      () => {},
      () => {},
      () => done()
    );

    const request = spectator.expectOne(
      'https://api.stackexchange.com/2.2/search?pagesize=20&order=desc&sort=activity&site=stackoverflow&intitle=foo',
      HttpMethod.GET
    );
    request.error(errorEvent, { status, statusText });
  });
});
