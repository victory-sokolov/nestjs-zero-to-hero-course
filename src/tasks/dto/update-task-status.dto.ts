import { IsEnum } from 'class-validator';
import { TaskStatus } from '../tasks.models';
export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
