type Props = {
    type: string;
    value: string;
}

export const DataUsersItem = ({ type, value }: Props) => {
    return (
        <div className="w-[225px] h-[100px] bg-primary-foreground rounded-lg p-6 gap-2">
            <h2 className="font-sans text-[12px] text-muted-foreground">{type}</h2>
            <span className="font-serif text-3xl font-normal">{value}</span>
        </div>
    );
}