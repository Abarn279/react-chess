export class Utilities {
    private static incrementLetter(letter: string, direction: number) {
        return String.fromCharCode(letter.charCodeAt(0) + direction);
    }

    public static getSpace(currentSpace: string, direction: { x: number, y: number }): string {
        var file: string = currentSpace[0];
        var rank: string = currentSpace[1];

        return Utilities.incrementLetter(file, direction.x) + (parseInt(rank) + direction.y).toString();
    }
}