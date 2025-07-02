import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { MetricaService } from './metrica.service';
import { Metrica } from './entities/metrica.entity';
import { CreateMetricaInput } from './dto/create-metrica.input';
import { UpdateMetricaInput } from './dto/update-metrica.input';

@Resolver(() => Metrica)
export class MetricaResolver {
  constructor(private readonly metricaService: MetricaService) {}

  @Mutation(() => Metrica)
  createMetrica(
    @Args('createMetricaInput') createMetricaInput: CreateMetricaInput,
  ) {
    return this.metricaService.create(createMetricaInput);
  }

  @Query(() => [Metrica], { name: 'metricas' })
  findAll() {
    return this.metricaService.findAll();
  }

  @Query(() => Metrica, { name: 'metrica' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.metricaService.findOne(id);
  }

  @Mutation(() => Metrica)
  updateMetrica(
    @Args('updateMetricaInput') updateMetricaInput: UpdateMetricaInput,
  ) {
    return this.metricaService.update(
      updateMetricaInput.id,
      updateMetricaInput,
    );
  }

  @Mutation(() => Metrica)
  removeMetrica(@Args('id', { type: () => ID }) id: string) {
    return this.metricaService.remove(id);
  }
}
