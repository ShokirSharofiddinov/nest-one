import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './models/post.model';
import { FilesService } from '../files/files.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post) private postRepository: typeof Post,
    private readonly fileService: FilesService,
  ) {}

  async create(CreatePostDto: CreatePostDto, image: any) {
    console.log(image);
    const fileName = await this.fileService.createFile(image);
    const post = await this.postRepository.create({
      ...CreatePostDto,
      image: fileName,
    });
    return post;
  }
}
