import { Component, Input } from '@angular/core';
import { StackOverflowItem } from 'src/app/models/stack-overflow.model';
import { WidgetContent } from 'src/app/models/widget.model';

@Component({
  selector: 'app-stack-overflow-content',
  templateUrl: './stack-overflow-content.component.html',
  styleUrls: ['./stack-overflow-content.component.scss'],
})
export class StackOverflowContentComponent
  implements WidgetContent<StackOverflowItem>
{
  @Input() data!: StackOverflowItem;
}
