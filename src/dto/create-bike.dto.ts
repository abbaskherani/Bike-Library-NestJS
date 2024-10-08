import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
//validation rule check
import { ApiProperty } from '@nestjs/swagger';



// Defining a Data Transfer Object (DTO) for creating a bike
/** 
 * @ApiProperty -> Swagger property fot Api doc
 * 
*/
export class CreateBikeDto {
    @ApiProperty({
        example: 'Royal Enfield',
        description: 'The make of the bike',
      })
      @IsNotEmpty()
      @IsString()
      make: string;
    
      @ApiProperty({
        example: 'Classic 350',
        description: 'The model of the bike',
      })
      @IsNotEmpty()
      @IsString()
      model: string;
    
      @ApiProperty({
        example: 2021,
        description: 'The year the bike was manufactured',
      })
      @IsNotEmpty()
      @IsNumber()
      year: number;
    
      @ApiProperty({
        example: 'Cruiser',
        description: 'The type of the bike',
      })
      @IsNotEmpty()
      @IsString()
      type: string;
}