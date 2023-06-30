import { useState, useMemo } from "react";

export const OptimisedUserList = ({
    userList,
    isNeedSort,
    currentWidth
}: any) => {
    const [count, setCount] = useState(0);
    // we re-render User component ONLY if userList is changing
    const preparedUserList = useMemo(() => isNeedSort ? userList.sort() : userList, [userList]);
    // we re-render Info component ONLY if currentWidth is changing
    const sizeObject = useMemo(() => ({width: currentWidth}), [currentWidth]);
    return (
        <>
            <Counter count={count} setCount={setCount} />
            {
                preparedUserList.map((p: any) => <User key={p.id} user={p} />)
            }
            <Info size={sizeObject} />
        </>
    );
};

const Counter = ({
    count,
    setCount
}: any) => {
    return (
        <div></div>
    );
};

const Info = ({
    size
}: any) => {
    return (
        <div></div>
    )
};

const User = ({
    user
}: any) => {
    return (
        <div></div>
    );
}