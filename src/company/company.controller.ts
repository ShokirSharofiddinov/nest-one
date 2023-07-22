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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Machine')
@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @ApiOperation({ summary: 'company yearatish uchun' })
  @ApiResponse({ status: 200, description: 'New company' })
  @Post('create')
  async createCompany(@Body() createCompanyDto: CreateCompanyDto) {
    const company = await this.companyService.createCompany(createCompanyDto);
    return company;
  }

  @ApiOperation({ summary: 'companylarni olish uchun' })
  @ApiResponse({ status: 200, description: 'get all company' })
  @Get('all')
  async getAllCompany(): Promise<Company[]> {
    return this.companyService.getAllCompany();
  }

  @ApiOperation({ summary: 'company id bilan olish uchun' })
  @ApiResponse({ status: 200, description: 'get company by id' })
  @Get(':id')
  async getCompanyById(@Param('id') id: string): Promise<Company> {
    return this.companyService.getCompanyById(+id);
  }

  @ApiOperation({ summary: 'company delete uchun' })
  @ApiResponse({ status: 200, description: 'delete company' })
  @Delete(':id')
  async deleteCompanyById(@Param('id') id: string): Promise<number> {
    return this.companyService.deleteCompanyById(+id);
  }

  @ApiOperation({ summary: 'company update uchun' })
  @ApiResponse({ status: 200, description: 'update company' })
  @Put(':id')
  async updateCompany(
    @Param('id') id: string,
    @Body() updateCompanyDto: UpdateCompanyDto,
  ): Promise<Company> {
    return this.companyService.updateCompany(+id, updateCompanyDto);
  }
}
