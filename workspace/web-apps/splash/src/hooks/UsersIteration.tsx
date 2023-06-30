import { useState, useEffect } from 'react';

const useUsersIteration = () => {
    const [usersList, setUsersList] = useState([]);
    const [current, setCurrent] = useState({});
    const [loading, setLoading] = useState(true);
    const findCurrentIndex = (currentParameter: any) => usersList.findIndex((c:any) => c.email === currentParameter.email); 
    const next = () => {
        const currentIndex = findCurrentIndex(current);
        let nextIndex = currentIndex + 1;
        if (!usersList[nextIndex]) {
            nextIndex = 0;
        }
        setCurrent(usersList[nextIndex]);
    };
    const previous = () => {
        const currentIndex = findCurrentIndex(current);
        let prevIndex = currentIndex - 1;
        if (prevIndex === -1) {
            prevIndex = usersList.length - 1;
        }
        setCurrent(usersList[prevIndex]);
    };
    const fetchUsers = async () => {
        const response = await fetch('https://randomuser.me/api/?page=1&results=10');
        const responseData = await response.json();
        setUsersList(responseData.results);
        setCurrent(responseData.results[0]);
        setLoading(false);
        return responseData;
    };
    useEffect(() => {
        fetchUsers();
    }, []);
    return [
        usersList,
        current,
        loading,
        next,
        previous
    ];
};

export default useUsersIteration;
