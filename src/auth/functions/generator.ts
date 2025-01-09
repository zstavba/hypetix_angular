export class Generator {

    constructor(){}

    generateIdent = (): string => {
        const baseNumber = '99'; // Fixed base number
        const randomPart = Math.floor(Math.random() * 900000 + 100000).toString(); // Generates 6 random digits
        return `${baseNumber}${randomPart}`;
      }

}
