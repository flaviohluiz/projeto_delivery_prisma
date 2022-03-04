import { prisma } from "../../../../database/prismaClient";

export class DeleteClientUseCase {
    async execute( id_client: string){
        const result = await prisma.clients.delete({
            where: {                
                id: id_client,
            },
        });
        
        return result;  
        
    };
};