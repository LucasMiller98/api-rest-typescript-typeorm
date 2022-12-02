import { MigrationInterface, QueryRunner } from "typeorm";

export class default1669840189580 implements MigrationInterface {
    name = 'default1669840189580'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`vídeos\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` text NOT NULL, \`url\` text NOT NULL, 
        
        \`room_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        
        await queryRunner.query(`CREATE TABLE \`rooms\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        
        await queryRunner.query(`ALTER TABLE \`vídeos\` ADD CONSTRAINT \`FK_5e0a098e7d7640313723d66a02f\` FOREIGN KEY (\`room_id\`) REFERENCES \`rooms\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`vídeos\` DROP FOREIGN KEY \`FK_5e0a098e7d7640313723d66a02f\``);
        
        await queryRunner.query(`DROP TABLE \`rooms\``);
        
        await queryRunner.query(`DROP TABLE \`vídeos\``);
    }

}
