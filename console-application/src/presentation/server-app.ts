

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
}


export class ServerApp {


    static run( runOptions: RunOptions ) {
        console.log('ServerApp is running!');
    }
}