import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { MetricaService } from './metrica.service';
import { Metrica } from './entities/metrica.entity';

@WebSocketGateway({ cors: true, namespace: 'metrica' })
export class MetricaGateway {
  @WebSocketServer() wss: Server;

  constructor(private readonly svc: MetricaService) {}

  @SubscribeMessage('createMetrica')
  async handleCreate(@MessageBody() dto: Partial<Metrica>) {
    await this.svc.create(dto);
    const all = await this.svc.findAll();
    this.wss.emit('metricaCreated', all);
  }

  @SubscribeMessage('listMetricas')
  async handleList() {
    return this.svc.findAll();
  }

  @SubscribeMessage('updateMetrica')
  async handleUpdate(
    @MessageBody() payload: { id: string } & Partial<Metrica>,
  ) {
    const { id, ...dto } = payload;
    await this.svc.update(id, dto);
    this.wss.emit('metricaUpdated', await this.svc.findAll());
  }

  @SubscribeMessage('deleteMetrica')
  async handleDelete(@MessageBody() id: string) {
    await this.svc.remove(id);
    this.wss.emit('metricaDeleted', await this.svc.findAll());
  }
}
