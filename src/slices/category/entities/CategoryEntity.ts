export type CategoryData = {
    _id?: string;
    createdById: string;
    name: string;
    active?: boolean;
    description?: string;
    image?: string;
    createdAt?: Date;
    updatedAt?: Date;
};


export type CategoryPaginated = {
    categorys: CategoryData[];
    total: number;
}

export class CategoryEntity {
    private createdById: string;
    private name: string;
    private active?: boolean;
    private description?: string;
    private image?: string;
    private createdAt?: Date;
    private updatedAt?: Date;

    constructor(data: CategoryData) {
        this.createdById = data.createdById;
        this.name = data.name;
        this.active = false;
        this.description = data.description;
        this.image = data.image;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}