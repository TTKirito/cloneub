import { Resolver, Query } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurant.entities';

@Resolver()
export class RestaurantResolver {
  @Query((returns) => Restaurant)
  myRestaurant() {
    return true;
  }
}
