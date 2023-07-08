export interface task{
    Id: number;
    IDparent: number,
    Label: string,
    Type: TypeTaskEnum,
    Name: string,
    StartDate: Date,
    EndDate: Date,
    Duration: number,
    Progress: number,
    IsUnscheduled: boolean
}
enum TypeTaskEnum{
    Easy, Medium, Hard
}