import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'topics'
})
export class TopicsPipe implements PipeTransform {

  transform(value: string): string {
    return "Topic "+value;
  }

}

