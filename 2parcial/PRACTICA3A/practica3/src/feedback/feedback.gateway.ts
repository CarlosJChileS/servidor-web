import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { FeedbackService } from './feedback.service';
import { Feedback } from './entities/feedback.entity';

@WebSocketGateway({ cors: true, namespace: 'feedback' })
export class FeedbackGateway {
  @WebSocketServer() wss: Server;

  constructor(private readonly svc: FeedbackService) {}

  @SubscribeMessage('createFeedback')
  async handleCreate(@MessageBody() dto: Partial<Feedback>) {
    await this.svc.create(dto);
    const all = await this.svc.findAll();
    this.wss.emit('feedbackCreated', all);
  }

  @SubscribeMessage('listFeedbacks')
  async handleList() {
    return this.svc.findAll();
  }

  @SubscribeMessage('updateFeedback')
  async handleUpdate(
    @MessageBody() payload: { id: string } & Partial<Feedback>,
  ) {
    const { id, ...dto } = payload;
    await this.svc.update(id, dto);
    this.wss.emit('feedbackUpdated', await this.svc.findAll());
  }

  @SubscribeMessage('deleteFeedback')
  async handleDelete(@MessageBody() id: string) {
    await this.svc.remove(id);
    this.wss.emit('feedbackDeleted', await this.svc.findAll());
  }
}
