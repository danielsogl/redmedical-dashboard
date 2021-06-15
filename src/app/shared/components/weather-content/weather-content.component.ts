import { Component, Input } from '@angular/core';
import { Weather } from 'src/app/models/weather.model';
import { WidgetContent } from 'src/app/models/widget.model';

@Component({
  selector: 'app-weather-content',
  templateUrl: './weather-content.component.html',
  styleUrls: ['./weather-content.component.scss'],
})
export class WeatherContentComponent implements WidgetContent<Weather> {
  @Input() data!: Weather;
}
