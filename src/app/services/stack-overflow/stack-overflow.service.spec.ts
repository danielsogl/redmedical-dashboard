import {
  createHttpFactory,
  HttpMethod,
  SpectatorHttp,
} from '@ngneat/spectator/jest';

import { StackOverflowService } from './stack-overflow.service';

describe('HttpClient testing', () => {
  let spectator: SpectatorHttp<StackOverflowService>;
  const createHttp = createHttpFactory(StackOverflowService);

  beforeEach(() => (spectator = createHttp()));

  it('should get results by keyword', () => {
    spectator.service.searchByKeyword('foo').subscribe();
    spectator.expectOne(
      'https://api.stackexchange.com/2.2/search?pagesize=20&order=desc&sort=activity&site=stackoverflow&intitle=foo',
      HttpMethod.GET
    );
  });
});
