import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { ResetToken } from '../../auth/entities/reset-token.entity';
import { UserRole } from '../enums/user-role.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column({ type: 'enum', enum: UserRole })
  role: UserRole;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => ResetToken, (token) => token.user)
  resetTokens: ResetToken[];

  // ✅ From Dispute-Resolution-System
  @Column({ type: 'float', default: 0 })
  reputationScore: number;

  // ✅ From main
  @Column({ nullable: true })
  bio: string;

  @Column('simple-array', { nullable: true })
  skills: string[];

  @Column({ nullable: true })
  availability: string;

  @Column({ nullable: true })
  credentialFile: string;
}
