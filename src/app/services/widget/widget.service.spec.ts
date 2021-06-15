import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { WeatherContentComponent } from 'src/app/shared/components/weather-content/weather-content.component';

import { WidgetService } from './widget.service';

describe('WidgetService', () => {
  let service: WidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should map observable arrays to widget items', async () => {
    const data = of([{ value: 'foo' }, { value: 'bar' }, { value: 'baz' }]);
    const result = await service
      .mapDataToWidget(WeatherContentComponent, data)
      .toPromise();
    expect(result).toHaveLength(3);
    console.log(result[0].component.name);

    expect(result[0].component.name).toEqual('WeatherContentComponent');
    expect(result[0].data).toEqual({ value: 'foo' });

    expect(result[1].component.name).toEqual('WeatherContentComponent');
    expect(result[1].data).toEqual({ value: 'bar' });

    expect(result[2].component.name).toEqual('WeatherContentComponent');
    expect(result[2].data).toEqual({ value: 'baz' });
  });
});
