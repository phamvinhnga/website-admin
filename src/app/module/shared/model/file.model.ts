export class IFileDto {
    id?: string;
    name?: string;
    type?: string;
    url?: string;
    [key: string]: any;
}

export class FileDto implements IFileDto {
    id?: string;
    name?: string;
    type?: string;
    url?: string;
    [key: string]: any;

    constructor(data?: any) {
        this.init(data);
    }

    init(data?: any): void {
        if (data) {
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    this[key] = data[key];
                }
            }
        }
    }

    static fromJS(data: object): FileDto {
        data = typeof data === 'object' && data !== null ? data : {};
        const result = new FileDto();
        result.init(data);
        return result;
    }
}

export class FileImageDto extends FileDto {
}
