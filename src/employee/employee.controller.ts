import { Controller, Get, Post, Delete, Param, Body, Put } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class employeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  findAll() {
    return this.employeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeService.findOne(Number(id));
  }

  @Post()
  create(@Body() body: any) {
    return this.employeeService.create(body);
  }
  

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeService.remove(Number(id));
  }


    @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.employeeService.update(Number(id), body);
  }


  
}