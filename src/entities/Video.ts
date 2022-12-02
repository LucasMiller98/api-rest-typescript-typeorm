import { 
  Column, 
  Entity, 
  JoinColumn, 
  ManyToOne, 
  PrimaryGeneratedColumn 
} from 'typeorm'
import { Room } from './Room'

@Entity('vídeos')
export class Video {

  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'text' })
  title: string

  @Column({ type: 'text' })
  url: string

  // Muitos videos para uma sala.
  @ManyToOne(() => Room, room => room.videos)
  @JoinColumn({ name: 'room_id' }) // só onde tem a foreinkey
  room: Room
}