import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { Company } from './models/company.model';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post('create')
  async createCompany(@Body() createCompanyDto: CreateCompanyDto) {
    const company = await this.companyService.createCompany(createCompanyDto);
    return company;
  }

  @Get('all')
  async getAllCompany(): Promise<Company[]> {
    return this.companyService.getAllCompany();
  }

  @Get(':id')
  async getCompanyById(@Param('id') id: string): Promise<Company> {
    return this.companyService.getCompanyById(+id);
  }

  // @Get(':name')
  // async getCompanyByName(@Param('name') name: string): Promise<Company> {
  //   return this.companyService.getCompanyById(name);
  // }

  @Delete(':id')
  async deleteCompanyById(@Param('id') id: string): Promise<number> {
    return this.companyService.deleteCompanyById(+id);
  }

  @Put(':id')
  async updateCompany(
    @Param('id') id: string,
    @Body() updateCompanyDto: UpdateCompanyDto,
  ): Promise<Company> {
    return this.companyService.updateCompany(+id, updateCompanyDto);
  }
}
