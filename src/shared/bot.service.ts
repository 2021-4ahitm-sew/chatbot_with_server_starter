import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BotService {

  // TODO

}

export interface IMessage {
  readonly user: string;
  readonly message: string;
  readonly time: Date;
}
