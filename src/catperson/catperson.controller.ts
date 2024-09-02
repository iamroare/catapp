import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { CatpersonService } from './catperson.service';
import { JwtAuthGuard } from 'src/auth/auth.guard';

@Controller('api/catperson')
export class CatpersonController {

    constructor(private readonly Catto:CatpersonService){}

    @UseGuards(JwtAuthGuard)
    @Get("/getAll")
    async getAllMeow(
        @Res() res,
        @Req() req
    ){
        try {
            const result= await this.Catto.findAllCats();
            return res.status(HttpStatus.OK).send(result)
        } catch (error) {
            throw new Error('Failed to fetch details');
        }
    }

    @UseGuards(JwtAuthGuard)
    @Post("/addCatData")
    async addCats(
        @Body() catData:{name: string,bread:string, details:string},
        @Req() req,
        @Res() res
    ){
        try {
            const result = await this.Catto.addCatData(catData);
            return res.status(HttpStatus.CREATED).json(result);
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: 'Failed to add cat data',
                error: error.message,
              });
            
        }
    }

    @UseGuards(JwtAuthGuard)
    @Delete("/deleteById/:cat_id")
    async deleteCatDataById(
      @Param() cat_id:string,
      @Res() res,
    ){
        try {
            const result= await this.Catto.deleteById(cat_id);
            if (result) {
                return res.status(HttpStatus.OK).json({
                  message: 'Cat data deleted successfully',
                });
              } else {
                // If no record was found to delete
                return res.status(HttpStatus.NOT_FOUND).json({
                  message: 'Cat data not found',
                });
              }
        } catch (error) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: 'Failed to delete cat data',
                error: error.message,
              });
        }
    }

    @UseGuards(JwtAuthGuard)
    @Put('/updateCat/:cat_id')
    async updateCatById(
        @Body() catData:{name:string, bread:string,details:string},
        @Param() cat_id:string,
        @Res() res,
    ){
        try {
            const updatedCat = await this.Catto.updateCatData(cat_id, catData);
      
            if (updatedCat) {
              return res.status(HttpStatus.OK).json({
                message: 'Cat data updated successfully',
                cat: updatedCat,
              });
            } else {
              return res.status(HttpStatus.NOT_FOUND).json({
                message: 'Cat data not found',
              });
            }
          } catch (error) {
            console.error('Error updating cat data:', error);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
              message: 'Failed to update cat data',
              error: error.message,
            });
          }
    }
}
